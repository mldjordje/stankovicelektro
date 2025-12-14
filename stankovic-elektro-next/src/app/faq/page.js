import PageIntro from "@/components/PageIntro";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/siteContent";

export const metadata = {
  title: "FAQ | Stankovic Elektro",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="FAQ"
        title="Najcesca pitanja o instalacijama i semiranju"
        description="Ako ne pronalazite odgovor, pisite nam ili nas pozovite - tu smo 24/7 za hitne intervencije i konsultacije."
      />
      <Reveal>
        <FAQAccordion faqs={faqs} />
      </Reveal>
    </div>
  );
}
