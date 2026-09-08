# Project imagery

Two files per project, wired up in `content/projects.ts`:

| Field       | File                    | Size        | Where it shows |
| ----------- | ----------------------- | ----------- | -------------- |
| `image`     | `<name>-tile.png`       | 1632 × 1024 | Card on /work  |
| `caseImage` | `<name>-casestudy.png`  | 2592 × 1634 | /work/<slug>   |

Those are 2× the measured display sizes at a 1440px viewport (816 × 512 and
1296 × 817 CSS px). The work index is two cards across, so a card image is
650 CSS px wide there - tiles exported at the old 816 × 512 upscale visibly on
a retina screen. The frames are 16:10 and crop with `object-fit: cover`, so a
tile a few pixels off that ratio is fine.

```ts
image: {
  src: "/images/vinyl-tile.png",
  width: 1632,
  height: 1024,
  alt: "Virtual Vinyl: a record on a turntable beside a now-playing panel",
}
```

Notes

- Paths are relative to `public/`, so `public/images/x.png` is `/images/x.png`.
- `width` / `height` must match the file's real pixels. They reserve the space
  before the image loads, so nothing on the page jumps.
- Images are cropped from the top (`object-position: top center`) and the
  bottom bleeds off the panel edge on cards, so keep the important part high.
- `caseImage` is optional; without it the case study falls back to `image`.
