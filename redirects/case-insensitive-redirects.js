// Writes static redirect pages for paths that differ only by letter case.
// A path whose file already exists (the other casing, on a case-insensitive disk) is skipped.
const fs = require("fs/promises");
const path = require("path");

function redirectPage(to) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${to}">
    <link rel="canonical" href="${to}" />
  </head>
  <script>
    window.location.href = '${to}' + window.location.search + window.location.hash;
  </script>
</html>
`;
}

module.exports = (redirects) =>
  function caseInsensitiveRedirects() {
    return {
      name: "case-insensitive-redirects",
      async postBuild({ outDir }) {
        for (const [from, to] of Object.entries(redirects)) {
          const dir = path.join(outDir, from);
          await fs.mkdir(dir, { recursive: true });
          try {
            await fs.writeFile(path.join(dir, "index.html"), redirectPage(to), { flag: "wx" });
          } catch (err) {
            if (err.code !== "EEXIST") throw err;
          }
        }
      },
    };
  };
