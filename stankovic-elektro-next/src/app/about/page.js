import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { services, company } from "@/data/siteContent";

export const metadata = {
  title: "O nama | Stankovic Elektro",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-12">
      <PageIntro
        kicker="O nama"
        title="Strucan tim za instalacije, semiranje i dokumentaciju"
        description="Stankovic Elektro je precizna i strucna elektro-instalaterska firma, posvecena celokupnom sistemu od instalacije do semiranja elektro ormara. Nas tim pruza kompletna resenja za stambene, poslovne i industrijske objekte."
      />

      <Reveal className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
        <div className="aspect-video overflow-hidden rounded-xl border border-slate-800/70">
          <Image
            src="/assets/images/3.jpeg"
            alt="Tim na terenu tokom pripreme razvodne table"
            width={960}
            height={540}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-slate-300 text-sm">
            Realan prikaz naseg procesa: oznacavanje, semiranje i provera pre pustanja u rad.
          </p>
          <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200 border border-amber-200/30">
            Dokumentovana isporuka
          </span>
        </div>
      </Reveal>

      <Reveal className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h3 className="text-xl font-semibold">Kako radimo</h3>
          <p className="text-slate-300">
            Svaki projekat vodimo po standardima, sa jasnim zapisnicima i semama. Tezimo maksimalnoj
            bezbednosti, efikasnosti i dugovekovnosti sistema - na tome gradimo poverenje klijenata.
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>- Projektovanje i izvodjenje instalacija sa ispitivanjem</li>
            <li>- Semiranje i etiketiranje za brzu dijagnostiku</li>
            <li>- Redovne i vanredne intervencije 24/7</li>
          </ul>
        </div>
        <div className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
          <h3 className="text-xl font-semibold">Zasto Stankovic Elektro</h3>
          <p className="text-slate-300">
            Brze reakcije, jasni troskovi i uredna dokumentacija. Transparentne cene, bez skrivenih
            stavki, uz garanciju na izvedene radove.
          </p>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>- Jasne ponude i zapisnici o svakoj intervenciji</li>
            <li>- Industrija, poslovni objekti i stambeni sistemi</li>
            <li>- Tim koji ostaje na vezi i posle implementacije</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="space-y-4">
        <SectionHeader
          eyebrow="Usluge"
          title="Fokus na urednim i bezbednim instalacijama"
          description="Od glavnog dovoda do poslednje uticnice - svi radovi imaju pratecu dokumentaciju i seme."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {services.slice(0, 4).map((service, index) => (
            <Reveal
              key={service.slug}
              delay={60 * index}
              className="panel rounded-xl p-4 border border-slate-800/70 hover:border-amber-300/70 transition-colors"
            >
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-sm text-slate-300 mt-1">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel rounded-2xl p-6 border border-slate-800/70 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
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
      </Reveal>
    </div>
  );
}
