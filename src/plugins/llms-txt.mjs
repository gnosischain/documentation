// Wraps @signalwire/docusaurus-plugin-llms-txt so the agent-facing output
// (llms.txt, llms-full.txt, one .md per page) reads cleanly:
// - before HTML -> Markdown: drop React comment markers and heading anchors,
//   keep tab labels next to their content, and keep code blocks intact.
// - after the build: undo the plugin's doubled baseUrl in page links (/docs/docs/),
//   encode spaces in link targets, and point every .md page at llms.txt.
import fs from "node:fs/promises";
import path from "node:path";
import llmsTxtPlugin from "@signalwire/docusaurus-plugin-llms-txt";

export { validateOptions } from "@signalwire/docusaurus-plugin-llms-txt";

const hasClass = (node, name) => (node.properties?.className || []).includes(name);

function textOf(node) {
  if (node.type === "text") return node.value;
  return (node.children || []).map(textOf).join("");
}

function walk(node, fn) {
  fn(node);
  (node.children || []).forEach((child) => walk(child, fn));
}

function rehypeCleanDocusaurus() {
  return (tree) => {
    walk(tree, (node) => {
      if (!node.children) return;

      // React SSR leaves <!-- --> between text nodes.
      node.children = node.children.filter((c) => c.type !== "comment");
      // "Direct link to heading" anchors.
      node.children = node.children.filter((c) => !(c.tagName === "a" && hasClass(c, "hash-link")));

      // Tabs: the labels live in a separate <ul role="tablist">. Put each label
      // on top of its own panel so an agent knows which block is Mainnet and which is Chiado.
      const tablist = node.children.find((c) => c.tagName === "ul" && c.properties?.role === "tablist");
      if (tablist) {
        const labels = tablist.children.filter((c) => c.tagName === "li").map(textOf);
        node.children = node.children.filter((c) => c !== tablist);
        const panels = [];
        walk(node, (n) => n.properties?.role === "tabpanel" && panels.push(n));
        panels.forEach((panel, i) => {
          delete panel.properties.hidden;
          panel.children.unshift({
            type: "element",
            tagName: "p",
            properties: {},
            children: [{ type: "element", tagName: "strong", properties: {}, children: [{ type: "text", value: labels[i] ?? "" }] }],
          });
        });
      }
    });

    walk(tree, (node) => {
      // Prism renders each code line as its own <div>. Collapse back to plain
      // text and carry the language over so the fence keeps it.
      if (node.tagName === "pre") {
        const lang = (node.properties?.className || []).find((c) => String(c).startsWith("language-"));
        const lines = [];
        walk(node, (n) => hasClass(n, "token-line") && lines.push(textOf(n)));
        const value = lines.length ? lines.join("\n") : textOf(node);
        node.children = [{ type: "element", tagName: "code", properties: lang ? { className: [lang] } : {}, children: [{ type: "text", value }] }];
      }
    });
  };
}

// Link targets come as ](url), ](<url>) or ](url "title"); the url itself may contain spaces.
// Links to a folder's index page (trailing slash) come out as .../folder/.md; the file is .../folder.md.
const fixLinks = (md, siteRoot) =>
  md.replace(/\]\((?:<([^>]+)>|([^)]+?))(?=\s+"[^"]*"\)|\))/g, (m, bracketed, plain) => {
    const url = bracketed ?? plain;
    const fixed = siteRoot && url.startsWith(siteRoot.doubled) ? siteRoot.single + url.slice(siteRoot.doubled.length) : url;
    return `](${fixed.replace(/ /g, "%20").replace(/\/\.md(?=#|$)/, ".md")}`;
  });

async function listMarkdown(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listMarkdown(p)));
    else if (entry.name.endsWith(".md")) out.push(p);
  }
  return out;
}

export default async function llmsTxt(context, options) {
  const { baseUrl, url } = context.siteConfig;
  const indexUrl = new URL(`${baseUrl}llms.txt`, url).href;
  const siteRoot = baseUrl === "/" ? null : { single: url + baseUrl, doubled: url + baseUrl + baseUrl.slice(1) };
  const inner = await llmsTxtPlugin(context, {
    ...options,
    content: {
      ...options.content,
      beforeDefaultRehypePlugins: [rehypeCleanDocusaurus],
    },
  });

  return {
    ...inner,
    async postBuild(props) {
      await inner.postBuild(props);
      const directive = `> For the complete documentation index, see [llms.txt](${indexUrl})\n\n`;
      // The Run a node pages show a transition notice from a DocItem wrapper, outside the
      // content the plugin converts; repeat it here so agents know the guides end at the fork.
      const page = (p) => new URL(`${baseUrl}${p}.md`, url).href;
      const nodeNotice =
        `> **Gnosis Chain is moving to Gnosis EEZ.** These guides cover running a node and a validator on Gnosis Chain as it runs today, and stay valid until the fork. ` +
        `At activation the validator set retires and nodes keep only an execution client. See [the move to Gnosis EEZ](${page("validators/eez-transition")}). ` +
        `Managing an existing validator? Go to [Validator withdrawals](${page("validators/withdrawals")}) or [Voluntary exit](${page("validators/voluntary-exit")}).\n\n`;
      for (const file of await listMarkdown(props.outDir)) {
        const md = fixLinks(await fs.readFile(file, "utf8"), siteRoot);
        const rel = path.relative(props.outDir, file);
        const isNodePage = rel === "node.md" || rel.startsWith(`node${path.sep}`);
        await fs.writeFile(file, directive + (isNodePage ? nodeNotice : "") + md);
      }
      for (const name of ["llms.txt", "llms-full.txt"]) {
        const file = path.join(props.outDir, name);
        await fs.writeFile(file, fixLinks(await fs.readFile(file, "utf8"), siteRoot));
      }
    },
  };
}
