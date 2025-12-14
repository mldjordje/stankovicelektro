import PageIntro from "@/components/PageIntro";
import ServiceCards from "@/components/ServiceCards";
import Reveal from "@/components/Reveal";
import { services } from "@/data/siteContent";

export const metadata = {
  title: "Usluge | StankoviŽØ Elektro",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-10">
      <PageIntro
        kicker="Usluge"
        title="Kompletne elektro usluge i dokumentacija"
        description="Projektovanje, izvoŽ`enje, ­emiranje, servis i hitne intervencije. Transparentni tro­kovi i uredni zapisnici prate svaki rad."
      />
      <Reveal>
        <ServiceCards services={services} variant="list" />
      </Reveal>
    </div>
  );
}
