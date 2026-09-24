# GitHub README and Pages QA

Checked against the existing 32-page portfolio and its exports.

| Check | Result |
|---|---|
| Repository README | Pass. Nine requested sections; about 391 words; no photo catalog or badges. |
| README preview assets | Pass. Six independent JPEGs, each 1920px wide and under 230 KB. All paths resolve. |
| Preview provenance | Pass. P01, P03, and unaltered side-by-side page exports P10–P11, P16–P17, P24–P25, P30–P31. |
| Physical → Generative | Pass. P30/P31 spread generated and visually inspected. |
| PDF and portfolio links | Pass. PDF path and root `index.html` exist. Master Archive links to the portfolio because a reliable page deep link is not implemented. |
| Local paths or fake links in README | Pass. Links are real relative repository paths. The future Pages URL is only an HTML comment. |
| GitHub Light/Dark and narrow README | Source compatible: standard Markdown images with complete white page backgrounds, no fixed HTML widths. Live GitHub rendering awaits repository creation. |
| GitHub Pages static paths | Pass locally. Generated `docs/` contains relative HTML/CSS/JS/JSON/image paths and no localhost or absolute paths. |
| Mobile portfolio viewer | Pass locally at 390px, 768px, and 1920px: 32 pages load and document width equals viewport width. The generated Pages version scales pages without reflowing them. |
| Master source and photos | Pass. Root `index.html`, `css/`, `js/`, `data/`, all 149 supplied image files, and the original PDF/PNG exports remain in place. The original guide is retained as `PORTFOLIO_GUIDE.md`. |
| Portfolio editability | Pass. Root master still uses HTML text, separate `<img>` elements, and JSON image records. |
| Live GitHub Pages | Pending. No Git repository, username, or remote was present. The workflow and local build are prepared, but no site was published. |

## Publishing handoff

Create a GitHub repository from this folder on a `main` branch and set **Settings → Pages → Build and deployment → GitHub Actions**. Push the folder; `.github/workflows/pages.yml` builds and deploys from the single root portfolio source. After deployment, replace the relative interactive link in `README.md` with the actual Pages URL and verify README rendering in GitHub Light/Dark modes.
