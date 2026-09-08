import { site } from "@/content/site";
import { Monogram } from "./Monogram";
import styles from "./SiteHeader.module.css";

/** Name on the left, the full portfolio on the right. */
export function SiteHeader() {
  return (
    <header className={`shell ${styles.header}`}>
      <p className={styles.wordmark}>
        <Monogram className={styles.mark} />
        {site.wordmark}
        <span className={styles.suffix}>{site.wordmarkSuffix}</span>
      </p>

      <a
        className={styles.link}
        href={site.links.portfolio}
        target="_blank"
        rel="noreferrer noopener"
      >
        madisonyocum.com <span aria-hidden="true">↗</span>
        <span className="srOnly"> (opens in a new tab)</span>
      </a>
    </header>
  );
}
