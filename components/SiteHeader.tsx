import { site } from "@/content/site";
import styles from "./SiteHeader.module.css";

/** Just the wordmark, centred. Nothing else competes with the work. */
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.wordmark}>
        {site.wordmark}
        <span className={styles.suffix}>{site.wordmarkSuffix}</span>
      </p>
    </header>
  );
}
