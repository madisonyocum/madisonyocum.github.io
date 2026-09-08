import { Intro } from "@/components/Intro";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** The work index is the site. */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Intro />
        <ProjectGrid />
      </main>
      <SiteFooter />
    </>
  );
}
