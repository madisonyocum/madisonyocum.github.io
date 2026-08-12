import type { Project } from "@/content/projects";
import styles from "./ProjectMeta.module.css";

/**
 * Role / Status / Year / Built with, as a definition list - it is
 * structured data, so it gets structured markup.
 */
export function ProjectMeta({
  project,
  columns = 2,
}: {
  project: Project;
  columns?: 2 | 4;
}) {
  return (
    <dl className={styles.meta} data-columns={columns}>
      <div className={styles.row}>
        <dt className="label">Role</dt>
        <dd>{project.role}</dd>
      </div>

      <div className={styles.row}>
        <dt className="label">Status</dt>
        <dd className={styles.status}>
          <span
            className={styles.dot}
            data-live={project.status === "Shipped" || undefined}
            aria-hidden="true"
          />
          {project.status}
        </dd>
      </div>

      <div className={styles.row}>
        <dt className="label">Year</dt>
        <dd>{project.year}</dd>
      </div>

      <div className={styles.row}>
        <dt className="label">Built with</dt>
        <dd>{project.technologies.join(", ")}</dd>
      </div>
    </dl>
  );
}
