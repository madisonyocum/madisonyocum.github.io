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
      <MediaLink project={project}>
        <ProjectMedia
          image={project.image}
          ratio={16 / 10}
          sizes={SIZES}
          priority={priority}
          placeholder={`/public/images/${project.slug}-tile.png`}
        />
      </MediaLink>

      <div className={styles.caption}>
        <div className={styles.head}>
          <h2 className={styles.title}>{project.title}</h2>

          <p className={styles.labels}>
            <span className={styles.tag}>{project.tag}</span>
            <span className={styles.context}>{project.context}</span>
            {project.metric ? (
              <span className={styles.metric}>{project.metric}</span>
            ) : null}
          </p>
        </div>

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

/**
 * The screenshot itself is the primary way into a project. It opens the live
 * site where there is one, and the case study otherwise, revealing a label on
 * hover so the target is never a guess.
 */
function MediaLink({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  const label = project.liveUrl ? "View live project" : "View case study";

  const overlay = (
    <>
      {children}
      <span className={styles.overlay} aria-hidden="true">
        <span className={styles.pill}>
          <EyeIcon />
          {label}
        </span>
      </span>
    </>
  );

  if (project.liveUrl) {
    return (
      <a
        className={styles.mediaLink}
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        {overlay}
        <span className="srOnly">
          {label}: {project.title} (opens in a new tab)
        </span>
      </a>
    );
  }

  return (
    <Link className={styles.mediaLink} href={`/work/${project.slug}`}>
      {overlay}
      <span className="srOnly">
        {label}: {project.title}
      </span>
    </Link>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
