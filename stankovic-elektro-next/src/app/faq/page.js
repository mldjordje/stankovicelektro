import PageIntro from "@/components/PageIntro";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/siteContent";

export const metadata = {
  title: "FAQ | Stanković Elektro",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="FAQ"
        title="Najčešća pitanja o instalacijama i šemiranju"
        description="Ako ne pronalazite odgovor, pišite nam ili nas pozovite — tu smo 24/7 za hitne intervencije i konsultacije."
      />
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
