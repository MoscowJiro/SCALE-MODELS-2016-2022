# SCALE MODELS 2016—2022

Editable 32 page visual portfolio. `index.html`, CSS, JavaScript, and `data/portfolio.json` are the master source. The PDF and PNG files are exports. The 148 supplied 2016–2022 photographs were copied from `D:\MX`; originals there were not changed. The 2026 film frame is stored separately in `assets/images/2026/`.

## Preview

From this folder run `node work/server.js`, then open `http://127.0.0.1:8765`. A local server is required because browsers usually block JSON loading from `file://` pages. Use a 1920×1080 display or zoom out to inspect complete pages.

## Edit images and text

- Each photo is an independent `<img>` with a relative `src`. Replace its file under `assets/images/YEAR/` or edit its `src` in `data/portfolio.json`.
- The JSON fields are `id`, `year`, `src`, `original_filename`, `title`, `caption`, `category`, `page`, and `role`. IDs must stay unique. Use `role: "detail"` only when cropping is intended. Other images use `object-fit: contain`.
- The `page_bindings` object at the end of JSON lists image IDs in display order for pages confirmed by the reference screenshots. Edit that page's ID array to change its selection or order. Other pages still use filename order as a provisional sequence. An individual image's `page` field can override its placement; `role: "detail"` enables cropping, so use it only when appropriate across all appearances. The master archive always shows all 148 records once, by year.
- To change general text, use Edit Mode for a temporary preview, then update the corresponding text in `js/portfolio.js`. Image `title` and `caption` values in JSON appear in image metadata and applicable captions; page headings and narrative copy are in JavaScript.
- Edit Mode lets you click an image, see its ID/source/year/role/page, and preview a replacement via the file chooser. Browser security means this replacement and contenteditable text are not saved. Copy the replacement into `assets/images/` and update JSON for persistence.
- To change image order on a bound page, reorder its IDs in `page_bindings`. For unbound pages, reorder the records in the `images` array or set `page`. Keep IDs unique. To add or delete pages, edit the `for(let n=1;n<=32;n++)` loop and the `switch(n)` in `js/portfolio.js`, then update the page selector and QA expectations.

## Grid and image preparation

Page: 1920×1080. Margins: 96px left/right and 72px top/bottom. 12 columns: 122px with 24px gutters. Variables are in `css/variables.css`; page/grid rules are in `css/grid.css` and `css/portfolio.css`. Keep all objects inside the page and use the provided column starts (96, 242, 388, 534, 680, 826, 972, 1118, 1264, 1410, 1556, 1702).

Keep original resolution if possible. For new hero images, 2400px or more along the long edge is recommended; selected images 1600px or more; archive thumbnails 500px or more. Landscape 3:2 or 16:9 sources work best for large slots. Detail images may be cropped with `object-fit: cover`. Ordinary model photographs remain fully visible with `contain`.

## Export

With the preview server running, install dependencies if needed (`npm install`), then run `npm run export` for PDF plus all 32 PNG pages. `npm run export:pdf` and `npm run export:png` run separately. On this Codex machine, `./export.ps1 -Mode all`, `./export.ps1 -Mode pdf`, or `./export.ps1 -Page 12` are also available. The exporter uses Microsoft Edge, Playwright, and Sharp; Sharp resizes photos in memory for smaller exports without changing any source file. Output goes to `exports/pdf/` and `exports/pages/`. Browser Print / Save as PDF is another option. PDF text remains selectable; PNGs are display copies.

Page 31 uses the supplied 2026 Spitfire frame through the `film_frame` record of `data/portfolio.json`.

