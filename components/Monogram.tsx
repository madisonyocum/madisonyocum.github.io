/**
 * The MY monogram. Drawn rather than shipped as an image so it stays crisp at
 * any size and picks up the page's own ink and paper.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Madison Yocum"
      focusable="false"
    >
      <circle cx="16" cy="16" r="16" fill="var(--ink)" />
      <text
        x="16"
        y="16"
        fill="var(--paper)"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.02em"
        textAnchor="middle"
        dominantBaseline="central"
      >
        MY
      </text>
    </svg>
  );
}
