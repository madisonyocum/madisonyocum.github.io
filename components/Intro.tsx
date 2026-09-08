import { site } from "@/content/site";
import styles from "./Intro.module.css";

/** The page opens on a statement; the work follows underneath. */
export function Intro() {
  return (
    <section className={`shell ${styles.intro}`}>
      <h1 className={styles.headline}>
        I&rsquo;m Madison, a product designer who{" "}
        <span className={styles.accent}>engineers</span>.
      </h1>

      <p className={styles.sub}>
        Below is a few samples of coded projects, full design portfolio can be
        found at{" "}
        <a
          className={styles.link}
          href={site.links.portfolio}
          target="_blank"
          rel="noreferrer noopener"
        >
          madisonyocum.com
          <span className="srOnly"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </section>
  );
}
