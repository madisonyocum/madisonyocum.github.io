# Portfolio - coded work

A small index of things I've designed and built, plus a short case study for
each. Live at **https://madisonyocum.github.io**

## Stack

Next.js (App Router) + TypeScript, CSS Modules with design tokens. Four
runtime dependencies, no UI or animation libraries. The entrance reveal is
~20 lines of `IntersectionObserver`; the hover click is synthesised with the
Web Audio API rather than loaded as a file. Everything else is CSS.

```
content/projects.ts     all copy, links, imagery and statuses
components/             SiteHeader, ProjectGrid, ProjectMedia, ProjectMeta,
                        SiteFooter, Reveal, ClickSound
app/page.tsx            the index
app/work/[slug]/        case studies, generated from the same data
lib/asset.ts            prefixes /public paths with the basePath
public/images/          screenshots - see the README in there for sizes
assets/source/          original PNG case-study exports (not deployed)
```

Editing content never means touching a component.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
npm run typecheck
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds a static
export and publishes it to GitHub Pages.

This is a GitHub *user* site repo, so Pages serves it at the domain root and
`basePath` is empty. To mount it on a subpath instead - a project repo, say -
build with `BASE_PATH="/thing"`.
