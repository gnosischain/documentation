---
title: Updates (Archived)
description: The Gnosis Chain updates blog — announcements, changelogs, core devs call notes and weekly recaps. Archived, no longer published.
keywords: [updates, blog, announcements, core devs call, changelog, archived]
---

# Updates (Archived)

:::danger Archived
The updates blog is **no longer published**. `/updates` and every post URL under it now redirect,
and the Docusaurus blog plugin has been removed from `docusaurus.config.js`.

The posts in this folder are kept for historical reference only and are not published on
[docs.gnosischain.com](https://docs.gnosischain.com). Client versions, fork blocks, contract
addresses and bridge instructions in these posts were accurate at the time of writing and have not
been maintained since.
:::

For current announcements, follow [@gnosischain](https://twitter.com/gnosischain),
[Discord](https://discord.gg/gnosis) or the [Gnosis forum](https://forum.gnosis.io). Hard fork
history now lives in the docs at [Hard forks](../../docs/about/specs/hard-forks/).

## Archived posts

| Folder | Contents | Posts |
| --- | --- | --- |
| [2025](./2025/) | Core devs call notes, January – July 2025 | 27 |
| [2024](./2024/) | Core devs call notes, January – December 2024 | 33 |
| [2023](./2023/) | Core devs call notes, January – December 2023 | 44 |
| [2022](./2022/) | The Merge, temporary bootnodes, bridges pause | 3 |
| [archive/2021](./archive/2021/) | xDai weekly recaps and the xDai–Gnosis merger AMA | 44 |
| [archive/2020](./archive/2020/) | xDai weekly recaps and 2020 year in review | 33 |

## Supporting files

- `authors.yml` — author profiles referenced by the post frontmatter
- `post.template` — the template previously used for new posts

Posts under `archive/2020` and `archive/2021` import `ArchiveWarning` from
`src/components/ArchiveWarning.tsx`. That component is retained so these posts still resolve if the
blog is ever restored, but it is no longer rendered anywhere on the live site.
