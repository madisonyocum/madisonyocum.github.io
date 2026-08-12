/**
 * Prefixes a path in /public with the site's basePath.
 *
 * Next applies basePath to routes and to its own optimiser URLs, but an
 * unoptimised <Image> (which is what a static export produces) emits `src`
 * exactly as given. Without this, /images/x.png would resolve against the
 * domain root instead of /code.
 */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
