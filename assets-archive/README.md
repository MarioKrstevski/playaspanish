# Assets archive

These files used to sit in `public/` but nothing on the live site uses them:
old hero attempts, clipart, the Mexico elements pack (.zip, .eps, .ai), the
teacher photo candidates Angelica didn't pick, an unused food and culture set,
and the JPG versions of the two teacher photos (the site serves WebP now).

They are kept here, still in git, so nothing is lost. Only `out/` (the
built `public/` plus the pages) is deployed, so this folder never reaches
playaspanish.com. Moved on 2026-11-20 (PLA-29); before that every deploy
uploaded about 37 MB of files for a page that uses about 1.6 MB.

The folders mirror their old paths: `assets-archive/teachers/neptali/original.jpg`
was served as `/teachers/neptali/original.jpg`.

## Bringing a file back

Move it back to the same path under `public/`, for example:

```bash
git mv assets-archive/teachers/neptali/original.jpg public/teachers/neptali/original.jpg
```

Some code that isn't built into the site still points at these paths (for
example `components/food-culture/FoodCulture.tsx`). If such a component is
used again, move its images back with it.

## Checking what the site uses

After `next build`, every file in `public/` should be referenced somewhere in
`out/` (HTML, JS or CSS), and nothing referenced should be missing.
