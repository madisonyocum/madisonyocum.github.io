import Image from "next/image";

import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import styles from "./SiteHeader.module.css";

/** Name on the left, the full portfolio on the right. */
export function SiteHeader() {
  return (
    <header className={`shell ${styles.header}`}>
      <p className={styles.wordmark}>
        <Image
          className={styles.mark}
          src={asset("/images/my-logo.png")}
          alt=""
          width={256}
          height={256}
          priority
        />
        {site.wordmark}
        <span className={styles.suffix}>{site.wordmarkSuffix}</span>
      </p>

      <nav className={styles.nav} aria-label="Elsewhere">
        <a
          className={styles.link}
          href={site.links.about}
          target="_blank"
          rel="noreferrer noopener"
        >
          About <span aria-hidden="true">↗</span>
          <span className="srOnly"> (opens in a new tab)</span>
        </a>

        <a
          className={styles.link}
          href={site.links.portfolio}
          target="_blank"
          rel="noreferrer noopener"
        >
          madisonyocum.com <span aria-hidden="true">↗</span>
          <span className="srOnly"> (opens in a new tab)</span>
        </a>
      </nav>
    </header>
  );
}
