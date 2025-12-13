import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/ServiceCards";
import ProjectsGrid from "@/components/ProjectsGrid";
import PricingGrid from "@/components/PricingGrid";
import FAQAccordion from "@/components/FAQAccordion";
import BlogList from "@/components/BlogList";
import ContactPanel from "@/components/ContactPanel";
import { services, projects, pricing, faqs, blogPosts, company } from "@/data/siteContent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <SectionHeader
          eyebrow="Usluge"
          title="Sve elektro usluge na jednom mestu"
          description="Instalacije, šemiranje, servis i dokumentacija sa punom trasom odgovornosti. Fokus na sigurnost, urednost i brz odgovor."
        />
        <ServiceCards services={services.slice(0, 3)} />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="O nama"
              title="Precizan tim koji dokumentuje svaku vezu"
              description="Stanković Elektro je stručna elektro-instalaterska firma posvećena celom sistemu — od ugradnje do šemiranja i etiketiranja. Radimo stambene, poslovne i industrijske objekte uz jasne zapisnike i garanciju."
            />
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Projektovanje i izvođenje instalacija po standardu</li>
              <li>• Šemiranje i označavanje elektro ormara sa čitljivim dokumentima</li>
              <li>• Hitne intervencije 24/7 i transparentne cene</li>
            </ul>
            <div className="flex gap-3">
              <Link
                href="/about"
                className="rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-400/20"
              >
                O nama
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-200"
              >
                Sve usluge
              </Link>
            </div>
          </div>
          <ContactPanel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <SectionHeader
          eyebrow="Projekti"
          title="Izabrani projekti i referentni sistemi"
          description="Industrija, poslovni prostori i stambene instalacije sa urednom evidencijom za održavanje i reviziju."
        />
        <ProjectsGrid projects={projects} />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <SectionHeader
          eyebrow="Cene"
          title="Transparentne ponude bez skrivenih troškova"
          description="Planovi za stambene, poslovne i industrijske potrebe. Svaka ponuda sadrži razradu materijala, rada i garancije."
        />
        <PricingGrid plans={pricing} />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <SectionHeader eyebrow="Blog" title="Sveži saveti iz prakse" />
        <BlogList posts={blogPosts} />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8">
        <SectionHeader eyebrow="FAQ" title="Najčešća pitanja" />
        <FAQAccordion faqs={faqs} />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="panel rounded-2xl p-8 border border-slate-800/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">24/7</p>
            <h3 className="text-2xl font-semibold">Brza podrška i uredna dokumentacija</h3>
            <p className="text-slate-300">{company.promise}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20"
            >
              Naručite servis
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-200"
            >
              Pogledajte FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
