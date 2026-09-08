import { site } from "@/content/site";
import styles from "./Intro.module.css";

/** A short line of orientation above the work. */
export function Intro() {
  return (
    <section className={`shell ${styles.intro}`}>
      <h1 className={styles.text}>
        I&rsquo;m Madison, a product designer who engineers.{" "}
        <span className={styles.aside}>
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
        </span>
      </h1>
    </section>
  );
}
