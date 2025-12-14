import PageIntro from "@/components/PageIntro";
import PricingGrid from "@/components/PricingGrid";
import Reveal from "@/components/Reveal";
import { pricing } from "@/data/siteContent";

export const metadata = {
  title: "Cene | StankoviŽØ Elektro",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="Cene"
        title="Transparentni paketi za sve tipove objekata"
        description="Jasno definisani tro­kovi materijala i rada, bez skrivenih stavki. Svaki rad prate zapisnici i garancija."
      />
      <Reveal>
        <PricingGrid plans={pricing} />
      </Reveal>
    </div>
  );
}
