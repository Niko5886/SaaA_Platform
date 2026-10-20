# Targo — Scaling Platform

A single-page landing site for **Targo** — a hero section and an about section,
built with plain HTML, CSS and JavaScript.

## Design tokens

| Token            | Value                               |
| ---------------- | ----------------------------------- |
| Accent           | `#15BCDF` (hover `#3fd0ef`)         |
| Accent border    | `#0fa3c2`                           |
| Page background  | `#F2F1F0`                           |
| Heading text     | `#2b3033`                           |
| Nav link text    | `#3a3a3a`                           |
| Body gray        | `#6b6f72`                           |
| Font             | Quantico (400 / 700), Arial Narrow  |

## Sections

1. **Hero** — full-viewport, background video, scrim overlay, navbar, staircase
   headline and a chamfered "Get started" CTA.
2. **About** — two-column layout with a cyan-tinted (`mix-blend-mode: hue`)
   video flush to the right edge.

## Run locally

It's a static site — just open `index.html` in a browser, or serve it:

```bash
# Python
python -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
.
├── index.html      # markup for both sections
├── css/styles.css  # global tokens, layout, responsive rules
└── js/main.js      # video autoplay retry + mobile menu
```
