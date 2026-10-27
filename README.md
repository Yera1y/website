# website

Personal engineering portfolio, styled like a *contraption diagram* from Create Aeronautics: a paper menu and a big blueprint sheet lying on a table.

> *[just-create.tech](https://just-create.tech)*

## Screenshots and references

### Homepage

![Homepage preview](docs/preview.png)

### Visual references

| Contraption diagram | Contraption diagram: weight |
|---|---|
| ![Contraption diagram](assets/reference/contraption%20diagram.png) | ![Empty Contraption diagram](assets/reference/2026-10-27_10.43.30.png) |

| Contraption diagram 2 | Airship and balloon schematics |
|---|---|
| ![Note toggled Contraption diagram](assets/reference/2026-10-27_10.43.39.png) | ![Airship and balloon schematics](assets/reference/airship-and-balloon-schematics-v0-47vjwku15vwg1.webp) |

The reference images document the visual direction for the paper menu, colored tabs,
blueprint layout, force diagrams, and handwritten technical annotations. They are
kept separate from the site's own preview image.

## Info

| | |
|---|---|
| Domain | [just-create.tech](https://just-create.tech) |
| Nickname | JustCreate |
| Full name | Yeraly |
| Email | Yeraly.Salybayev@gmail.com |
| GitHub | [github.com/Yera1y](https://github.com/Yera1y) |

## Concept

- The page is a **table** (deep blue background) with two sheets on it.
- **Left:** a stack of paper sheets with straight, pixel-stepped edges. The top sheet is the menu. The sheets under it change count and tint on every page, and the top sheet is dealt in with a short animation when you change page.
- **Right:** a big blueprint sheet with a grid, tick marks, rolled edges and small margin formulas.
- Force arrows and hover tooltips (like "Gravity force of 5.50 N") connect the diagram idea to the content. The three project blocks hang on one green arrow, like parts of a contraption.

### Navigation (two layers)

| Element | What it does |
|---|---|
| Colored bookmarks (behind the paper) | Go to another **page**. The bookmark of the current page is tucked inward and made shorter. |
| Text lines on the paper | Jump to a **section of the current page**. The line for the section in view is highlighted. |
| First tool button (top-left of the blueprint sheet) | **Shows or hides the whole menu**, for a full-width page. The choice is remembered between pages. |

Bookmarks: Home (green), Project 01 (brown), Project 02 (purple), Project 03 (orange), Contact (blue).

The other three tool buttons (arrows, shaded circle, bone) are pixel-art placeholders with no function yet.
Page changes use a smooth paper transition, and the menu toggle smoothly slides the
navigation away while the blueprint expands into the released space.

## Page layout

**Left side:** persistent paper-list menu, on every page.

**Homepage** (`index.html`)
1. Name, the line "Above and beyond." and a short introduction, next to a blueprint of an aircraft
2. Three project blocks, stacked vertically
3. Contact

Paper lines: Intro, Projects, Contact.

**Project pages** (`project-01.html`, `project-02.html`, `project-03.html`)
1. Technical project heading
2. Information
3. Photos
4. Research
5. Results

Paper lines: Heading, Information, Photos, Research, Results. Same paper menu and bookmarks as the homepage.

## Structure

```
website/
├── content/            the text of every page, one JSON file per page
│   ├── home.json
│   └── project-01.json (02, 03, ...)
├── templates/          the markup: base.html (shared shell), home.html, project.html
├── build.py            generates the .html files below (Python 3, no installs)
├── index.html          GENERATED homepage
├── project-01.html     GENERATED project pages (02, 03, ... same way)
├── style.css           all styling
├── site.js             tooltips, current-section highlight, menu toggle, page-change animation
├── fonts/              self-hosted fonts (no Google Fonts, works in China)
├── assets/project-01/  photos for each project (02, 03, ...)
├── assets/reference/   visual reference images
└── docs/preview.png   homepage screenshot for this README
```

## Adding and editing content

The `.html` files in the root are generated. Edit `content/*.json` and `templates/*.html`, then run `build.py`. Do not edit the generated files by hand, because the next build overwrites them.

**Add a project**

```
python build.py new "My new project"   # creates content/project-04.json and assets/project-04/
```

1. Fill in `content/project-04.json` and put photos in `assets/project-04/`.
2. Optional: `python build.py images` converts photos to WebP at most 1600 px wide (needs `pip install pillow`).
3. Set `"draft": false`, run `python build.py`, then `git add . && git commit && git push`. Cloudflare redeploys by itself.

If anything is wrong (missing field, missing image, bad JSON) the build stops with the file and field name and writes nothing.

**Project JSON fields**

| Field | Notes |
|-------|-------|
| `title`, `summary` | required. `summary` is the text on the home-page card |
| `cardTitle` | optional name for the home-page card (defaults to `title`) |
| `tagline`, `kind`, `tags`, `color` | optional. `color` is green, brown, purple, orange, blue or red |
| `cover` | optional image for the home-page card, e.g. `assets/project-04/cover.webp` |
| `info` | list of `{label, value}` rows |
| `photos` | list of `{src, alt}`; optional `handle` adds a hover tooltip arrow (`name, text, value, color, x, y`) |
| `research` | list of blocks: `{type: "text"}`, `{type: "formula"}`, `{type: "image", src, alt}` |
| `results` | `{stats: [{value, label}], text}` |
| `equations` | optional: change or hide (`""`) the small margin formulas |
| `draft` | `true` keeps the project off the site |

Empty sections (no `info`, no `photos`, ...) are skipped, and their line disappears from the paper menu.

**Change the layout of every page:** edit `templates/base.html` (menu, bookmarks, tool buttons, shell). Edit `templates/project.html` or `templates/home.html` for the content area of those pages. Colors and spacing stay in `style.css`.

`python build.py --check` tells you whether the generated files are out of date.

## Credits

- Visual style inspired by the contraption diagram of the Create Aeronautics mod for Minecraft. This is a fan-style homage. No game assets are used, and the project is not affiliated with the mod or its authors.
- Fonts: [Jersey 10](https://fonts.google.com/specimen/Jersey+10) and [IBM Plex Mono](https://github.com/IBM/plex), both under the SIL Open Font License.
