# QA report

Checked 2026-09-24 against the supplied `D:\MX` files and browser output.

| Check | Result |
|---|---|
| Pages and canvas | 32 pages; each DOM page measures 1920×1080. |
| Photos and IDs | 148 files copied; 148 unique IDs. Year totals: 2 / 23 / 2 / 13 / 31 / 60 / 17. |
| Master archive P28–P29 | 148 slots, 148 unique IDs, every JSON ID represented once. |
| Page backgrounds | All computed as pure white (`rgb(255,255,255)`). |
| Image and text bounds | Automated DOM bounds check found no page overflow. |
| Independent editability | Text remains HTML; images remain individual `<img>` elements. Edit UI is hidden in print CSS. |
| Cropping | Ordinary slots use `contain`; material/detail slots use `cover`. Reference pages were visually compared with the supplied screenshots. |
| PDF and PNG | 32 page PDF generated with selectable text; 32 page PNG exports generated at 1920×1080. PDF is about 37 MB after in-memory photo optimization. |
| P30/P31 | P30 uses photo `2020-019`; P31 retains the Spitfire frame. OBSERVE and RESEARCH align at the same vertical positions on the full pages. |
| 2026 frame | Newly supplied Spitfire frame copied and bound to P31; visual export checked. |

## Editorial items still open

The 148 images were sorted by original filename to establish stable IDs. The user screenshots now define 21 editorial page bindings (P8–P27 and P30); other editorial pages remain provisional. `page_bindings` can reuse an ID on several pages while the master archive still counts it once. P24 uses `2022-009`, and P31 uses the supplied Spitfire film frame. Inter is requested in CSS with Arial fallback because an Inter font file was not available locally; bundle the licensed Inter font before final publication if exact typography is required.

The exporter optimizes images in memory, leaving the HTML/CSS/JSON and 148 supplied image files untouched.

