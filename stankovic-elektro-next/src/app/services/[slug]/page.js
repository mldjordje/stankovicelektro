import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";
import { services, company } from "@/data/siteContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetail({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-10">
      <PageIntro
        kicker="Usluga"
        title={service.title}
        description={service.description}
      />

      <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h3 className="text-lg font-semibold text-amber-200">Šta isporučujemo</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-300">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-sm text-slate-300">
            <p>✎ Dokumentacija: zapisnici, šeme i obeležavanje kablova.</p>
            <p>⏱️ Rokovi: usklađeni sa izvođenjem i bezbednosnim zahtevima.</p>
          </div>
        </div>
        <ContactPanel />
      </div>

      <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-2">
        <h4 className="text-lg font-semibold">Zašto Stanković Elektro</h4>
        <p className="text-slate-300 text-sm">
          {company.promise} Svaki posao završavamo uz jasne troškove, šeme i obeležavanje koje
          održavanje čini sigurnim i brzim.
        </p>
      </div>
    </div>
  );
}
