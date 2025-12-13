import PageIntro from "@/components/PageIntro";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/siteContent";

export const metadata = {
  title: "Projekti | Stanković Elektro",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="Projekti"
        title="Referentni sistemi i uredna dokumentacija"
        description="Industrijski i poslovni projekti sa jasnim šemama, etiketama i zapisnicima za održavanje bez zastoja."
      />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
