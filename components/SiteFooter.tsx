import { site } from "@/content/site";
import styles from "./SiteFooter.module.css";

const contact = [
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "GitHub", href: site.links.github, external: true },
  { label: "Email", href: site.links.email, external: false },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`shell ${styles.inner}`}>
        <div className={styles.identity}>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.role}>{site.role}</p>
        </div>

        <ul className={styles.contact}>
          {contact.map((item) => (
            <li key={item.label}>
              <a
                className={styles.link}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                {item.label} <span aria-hidden="true">↗</span>
                {item.external ? (
                  <span className="srOnly">(opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.colophon}>
          <p>Designed and built by Madison.</p>
          <p className={styles.aside}>
            No portfolio template was harmed in the making of this website.
          </p>
        </div>
      </div>
    </footer>
  );
}
