import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectMedia } from "@/components/ProjectMedia";
import { ProjectMeta } from "@/components/ProjectMeta";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return {
    title: `${project.title} - ${site.name}`,
    description: project.detail.premise,
  };
}

/**
 * A case study, kept deliberately short: premise, why, what, stack, and a
 * link to the thing itself. The emphasis is on the fact that it exists.
 */
export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const { detail } = project;

  return (
    <>
      <SiteHeader />
      <main className={`shell ${styles.page}`} id="main">
        <Reveal>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span> All work
          </Link>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.premise}>{detail.premise}</p>

          <div className={styles.actions}>
            {project.liveUrl ? (
              <a
                className={styles.action}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-primary=""
              >
                Visit live project <span aria-hidden="true">↗</span>
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            ) : null}
            {project.figmaUrl ? (
              <a
                className={styles.action}
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View design file <span aria-hidden="true">↗</span>
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            ) : null}
            {project.github ? (
              <a
                className={styles.action}
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                View source <span aria-hidden="true">↗</span>
                <span className="srOnly">(opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={80} className={styles.mediaWrap}>
          <ProjectMedia
            image={project.caseImage ?? project.image}
            ratio={project.ratio}
            sizes="(max-width: 60rem) 94vw, 1400px"
            priority
            placeholder={`/public/images/${project.slug}-casestudy.png`}
          />
        </Reveal>

        <Reveal delay={100} className={styles.body}>
          <div className={styles.prose}>
            <section>
              <h2 className="label">Why I built it</h2>
              <p>{detail.why}</p>
            </section>
            {detail.what ? (
              <section>
                <h2 className="label">What I built</h2>
                <p>{detail.what}</p>
              </section>
            ) : null}
            {detail.impact ? (
              <section>
                <h2 className="label">Impact</h2>
                <p>{detail.impact}</p>
              </section>
            ) : null}
          </div>

          <div className={styles.side}>
            <ProjectMeta project={project} columns={2} />
            {project.metric ? (
              <p className={styles.metric}>{project.metric}</p>
            ) : null}
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
