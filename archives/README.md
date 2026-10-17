# Archives

This folder holds documentation that is no longer published on
[docs.gnosischain.com](https://docs.gnosischain.com). Nothing under `archives/` is part of a
Docusaurus content path, so these pages do not build, do not appear in any sidebar, and are not
indexed by search. They are kept in the repository for historical reference only.

Treat every page in here as out of date. Contract addresses, client versions, RPC endpoints and
bridge instructions in archived pages have not been maintained and should not be acted on.

## What is archived

| Area | Why | Archived |
| --- | --- | --- |
| [Use Cases](./Use%20Cases/) | The use cases section, the developer overview (Building on Gnosis EEZ), the request for builders and the shared components table. The docs now cover Gnosis Chain plus a short Gnosis EEZ section | October 2026 |
| [Embed](./Embed/) | The Embed landing page and the three fintech component bundles. The 0-1 guides moved to Developer guides | October 2026 |
| [Updates](./Updates/) | The updates blog (announcements, core devs call notes, weekly recaps) is no longer published | September 2026 |
| [FAQ](./FAQ/) | Node FAQs and the Validators FAQ; the remaining FAQs live at `/faq` | September 2026 |
| [Node](./Node/) | The whole "Run a node" section — manual client setup, validator keys, deposits, withdrawals, monitoring, node tooling | September 2026 |
| [Optimism](./Optimism/) | Optimism on Gnosis (chain ID 300) was deprecated | March 2023 |
| [Truffle](./Truffle/) | Truffle was sunset by Consensys | 2023 |
| [Hashi](./Hashi/) | Hashi is no longer part of the Gnosis Chain stack | 2025 |
| [Shutter](./Shutter/) | Shutter is no longer part of the Gnosis Chain stack | 2025 |
| [Legacy Bridges UI](./Legacy%20Bridges%20UI/) | Superseded by the current bridge interface | — |

## Archiving a page

1. `git mv` the page (and any images it references) into a folder under `archives/`.
2. Add or update that folder's `README.md` so the page is listed with a one-line reason.
3. Add a redirect in `docusaurus.config.js` from the old route to the nearest live page, so
   inbound links do not 404.
4. Repoint any remaining internal links in `docs/` and `src/` at the live replacement.
