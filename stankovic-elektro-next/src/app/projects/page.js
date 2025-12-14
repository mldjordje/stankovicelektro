import PageIntro from "@/components/PageIntro";
import ProjectsGrid from "@/components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/siteContent";

export const metadata = {
  title: "Projekti | StankoviŽØ Elektro",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="Projekti"
        title="Referentni sistemi i uredna dokumentacija"
        description="Industrijski i poslovni projekti sa jasnim ­emama, etiketama i zapisnicima za odr_avanje bez zastoja."
      />
      <Reveal>
        <ProjectsGrid projects={projects} />
      </Reveal>
    </div>
  );
}
