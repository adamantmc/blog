# adamantmc blog

![Astro](https://img.shields.io/badge/astro-%23BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Source code for my blog, built with [Astro](https://astro.build) and compiled to a fully static site.

## Setting up

1. Install [`nvm`](https://github.com/nvm-sh/nvm)
2. Clone the repo and `cd` into it
3. Run `nvm install && nvm use` (Node 22, see `.nvmrc`)
4. Run `npm install`

## Developing

Run `npm run dev` for a live-reloading dev server at http://localhost:4321/blog/.

## Writing a post

Add a Markdown or MDX file to `src/content/posts/`. The file name becomes the URL slug.

```md
---
title: "My new post"
description: "One-line summary, used for meta tags and RSS."
date: "2026-09-19"
draft: false # drafts only show up in `npm run dev`
---
```

Code blocks are highlighted at build time with Shiki (light and dark themes), and
` ```mermaid ` blocks are rendered as diagrams in the browser.

## Building

Run `npm run build`. The static site is written to `dist/`; preview it with `npm run preview`.

Pushing to `master` builds the site and deploys it to GitHub Pages (see `.github/workflows/publish.yml`).
