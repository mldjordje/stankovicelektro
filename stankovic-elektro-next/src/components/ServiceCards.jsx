import Link from "next/link";
import Reveal from "./Reveal";

export default function ServiceCards({ services, variant = "grid" }) {
  const baseCard =
    "panel rounded-2xl p-5 flex flex-col gap-3 border border-slate-800/70 hover:border-amber-300/70 transition-colors";

  const bullet = <span className="text-amber-300">-&gt;</span>;

  if (variant === "list") {
    return (
      <div className="space-y-4">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={70 * index}>
            <Link href={`/services/${service.slug}`} className={`${baseCard} block`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>
                <span className="text-amber-300">-&gt;</span>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    {bullet}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={70 * index}>
          <Link href={`/services/${service.slug}`} className={`${baseCard} block h-full`}>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-slate-300 text-sm flex-1">{service.description}</p>
            <div className="text-amber-300 text-sm font-semibold">Detalji usluge -&gt;</div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
