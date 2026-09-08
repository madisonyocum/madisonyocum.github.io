import Link from "next/link";

import { projects, type Project } from "@/content/projects";
import { ProjectMedia } from "./ProjectMedia";
import { Reveal } from "./Reveal";
import styles from "./ProjectGrid.module.css";

const SIZES = "(max-width: 44rem) 94vw, 47vw";

export function ProjectGrid() {
  return (
    <section className={`shell ${styles.section}`} id="work">
      <h2 className="srOnly">Selected work</h2>

      <ul className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={Math.min(index, 3) * 70}>
            <ProjectCard project={project} priority={index < 3} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  return (
    <article
      className={styles.card}
      data-sound-hover=""
      style={{ "--tint": project.tint } as React.CSSProperties}
    >
      <ProjectMedia
        image={project.image}
        ratio={16 / 10}
        sizes={SIZES}
        priority={priority}
        placeholder={`/public/images/${project.slug}-tile.png`}
      />

      <div className={styles.caption}>
        <h2 className={styles.title}>{project.title}</h2>

        <p className={styles.labels}>
          <span className={styles.tag}>{project.tag}</span>
          <span className={styles.context}>{project.context}</span>
          {project.metric ? (
            <span className={styles.metric}>{project.metric}</span>
          ) : null}
        </p>

        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.actions}>
          {project.liveUrl ? (
            <a
              className={styles.action}
              data-primary=""
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View project <span aria-hidden="true">↗</span>
              <span className="srOnly">
                - {project.title} (opens in a new tab)
              </span>
            </a>
          ) : null}

          <Link className={styles.action} href={`/work/${project.slug}`}>
            Learn more <span aria-hidden="true">→</span>
            <span className="srOnly">about {project.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
