import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";
import { projects, services } from "@/data/siteContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-10">
      <PageIntro kicker="Projekat" title={project.title} description={project.summary} />

      <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
        <h3 className="text-lg font-semibold text-amber-200">Kljucne aktivnosti</h3>
        <ul className="text-sm text-slate-300 space-y-2">
          <li>- Dimenzionisanje napajanja i zastite</li>
          <li>- Semiranje i obelezavanje razvodnih tabli i ormara</li>
          <li>- Testiranje, zapisnici i predaja dokumentacije</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h4 className="text-lg font-semibold">Usluge koriscene na projektu</h4>
          <ul className="text-sm text-slate-300 space-y-2">
            {services.slice(0, 3).map((service) => (
              <li key={service.slug} className="flex items-start gap-2">
                <span className="text-amber-300">-&gt;</span>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <ContactPanel />
      </div>
    </div>
  );
}
