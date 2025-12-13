import PageIntro from "@/components/PageIntro";
import ServiceCards from "@/components/ServiceCards";
import { services } from "@/data/siteContent";

export const metadata = {
  title: "Usluge | Stanković Elektro",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-10">
      <PageIntro
        kicker="Usluge"
        title="Kompletne elektro usluge i dokumentacija"
        description="Projektovanje, izvođenje, šemiranje, servis i hitne intervencije. Transparentni troškovi i uredni zapisnici prate svaki rad."
      />
      <ServiceCards services={services} variant="list" />
    </div>
  );
}
