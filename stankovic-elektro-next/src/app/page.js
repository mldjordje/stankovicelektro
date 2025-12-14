import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/ServiceCards";
import ProjectsGrid from "@/components/ProjectsGrid";
import PricingGrid from "@/components/PricingGrid";
import FAQAccordion from "@/components/FAQAccordion";
import BlogList from "@/components/BlogList";
import ContactPanel from "@/components/ContactPanel";
import Reveal from "@/components/Reveal";
import { services, projects, pricing, faqs, blogPosts, company } from "@/data/siteContent";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader
          eyebrow="Usluge"
          title="Sve elektro usluge na jednom mestu"
          description="Instalacije, semiranje, servis i dokumentacija sa punom trasom odgovornosti. Fokus na sigurnost, urednost i brz odgovor."
        />
        <ServiceCards services={services.slice(0, 3)} />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="O nama"
              title="Precizan tim koji dokumentuje svaku vezu"
              description="Stankovic Elektro je strucna elektro-instalaterska firma posvecena celom sistemu - od ugradnje do semiranja i etiketiranja. Radimo stambene, poslovne i industrijske objekte uz jasne zapisnike i garanciju."
            />
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>- Projektovanje i izvodjenje instalacija po standardu</li>
              <li>- Semiranje i oznacavanje elektro ormara sa citljivim dokumentima</li>
              <li>- Hitne intervencije 24/7 i transparentne cene</li>
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
          <div className="space-y-4">
            <ContactPanel />
            <Reveal delay={120} className="panel rounded-2xl p-4 border border-slate-800/70">
              <div className="aspect-video overflow-hidden rounded-xl border border-slate-800">
                <Image
                  src="/assets/images/2.jpeg"
                  alt="Montaza i kabliranje ormara"
                  width={640}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Snimak terenskog semiranja sa urednim obelezavanjima i zapisnikom.
              </p>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader
          eyebrow="Projekti"
          title="Izabrani projekti i referentni sistemi"
          description="Industrija, poslovni prostori i stambene instalacije sa urednom evidencijom za odrzavanje i reviziju."
        />
        <ProjectsGrid projects={projects} />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader
          eyebrow="Sa terena"
          title="Vizuelni pregled radova"
          description="Nase montaze, semiranje i kontrola kvaliteta - realne scene pre i posle intervencije."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="panel rounded-2xl p-4 border border-slate-800/70 space-y-3 h-full">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-800/80">
              <Image
                src="/assets/images/3.jpeg"
                alt="Industrijska tabla u pripremi"
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">Industrija</p>
              <p className="text-slate-300 text-sm">Razvodne table spremne za pustanje u pogon.</p>
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="panel rounded-2xl p-4 border border-slate-800/70 space-y-3 h-full"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800/80">
              <Image
                src="/assets/images/preiposle.jpeg"
                alt="Pre i posle sredjivanja elektro ormara"
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-amber-400 text-slate-950 px-3 py-1 text-xs font-semibold shadow-md shadow-amber-500/20">
                Pre i posle
              </div>
            </div>
            <div>
              <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">Revitalizacija</p>
              <p className="text-slate-300 text-sm">
                Uredno semiranje, etiketiranje i testiranje svih vodova.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={180}
            className="panel rounded-2xl p-4 border border-slate-800/70 space-y-3 h-full"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-800/80">
              <Image
                src="/assets/images/4.jpeg"
                alt="Kontrola polja i seme"
                width={520}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">Provera</p>
              <p className="text-slate-300 text-sm">
                Pregled sema i numeracija vodova pre finalnog zatvaranja.
              </p>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader
          eyebrow="Cene"
          title="Transparentne ponude bez skrivenih troskova"
          description="Planovi za stambene, poslovne i industrijske potrebe. Svaka ponuda sadrzi razradu materijala, rada i garancije."
        />
        <PricingGrid plans={pricing} />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader eyebrow="Blog" title="Svezi saveti iz prakse" />
        <BlogList posts={blogPosts} />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 space-y-8"
      >
        <SectionHeader eyebrow="FAQ" title="Najcesca pitanja" />
        <FAQAccordion faqs={faqs} />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="panel rounded-2xl p-8 border border-slate-800/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">24/7</p>
            <h3 className="text-2xl font-semibold">Brza podrska i uredna dokumentacija</h3>
            <p className="text-slate-300">{company.promise}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20"
            >
              Narucite servis
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-200"
            >
              Pogledajte FAQ
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
