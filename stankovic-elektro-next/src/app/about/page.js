import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { services, company } from "@/data/siteContent";
import Link from "next/link";

export const metadata = {
  title: "O nama | Stanković Elektro",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-12">
      <PageIntro
        kicker="O nama"
        title="Stručan tim za instalacije, šemiranje i dokumentaciju"
        description="Stanković Elektro je precizna i stručna elektro-instalaterska firma, posvećena celokupnom sistemu od instalacije do šemiranja elektro ormara. Naš tim pruža kompletna rešenja za stambene, poslovne i industrijske objekte."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h3 className="text-xl font-semibold">Kako radimo</h3>
          <p className="text-slate-300">
            Svaki projekat vodimo po standardima, sa jasnim zapisnicima i šemama. Težimo maksimalnoj
            bezbednosti, efikasnosti i dugovekovnosti sistema — na tome gradimo poverenje klijenata.
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Projektovanje i izvođenje instalacija sa ispitivanjem</li>
            <li>• Šemiranje i etiketiranje za brzu dijagnostiku</li>
            <li>• Redovne i vanredne intervencije 24/7</li>
          </ul>
        </div>
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h3 className="text-xl font-semibold">Zašto Stanković Elektro</h3>
          <p className="text-slate-300">
            Brze reakcije, jasni troškovi i uredna dokumentacija. Transparentne cene, bez skrivenih
            stavki, uz garanciju na izvedene radove.
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Jasne ponude i zapisnici o svakoj intervenciji</li>
            <li>• Industrija, poslovni objekti i stambeni sistemi</li>
            <li>• Tim koji ostaje na vezi i posle implementacije</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeader
          eyebrow="Usluge"
          title="Fokus na urednim i bezbednim instalacijama"
          description="Od glavnog dovoda do poslednje utičnice — svi radovi imaju prateću dokumentaciju i šeme."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="panel rounded-xl p-4 border border-slate-800/70 hover:border-amber-300/70 transition-colors"
            >
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-sm text-slate-300 mt-1">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="panel rounded-2xl p-6 border border-slate-800/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">24/7</p>
          <h3 className="text-2xl font-semibold">Uvek spremni za intervenciju</h3>
          <p className="text-slate-300">{company.promise}</p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20"
        >
          Kontaktirajte nas
        </Link>
      </div>
    </div>
  );
}
