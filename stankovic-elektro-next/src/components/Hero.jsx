import Image from "next/image";
import Link from "next/link";
import { company, highlights } from "@/data/siteContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/0 to-amber-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-20 relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-sm text-amber-200">
              Precizno šemiranje • 24/7 intervencije
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {company.name}{" "}
              <span className="text-amber-300">/ sigurnost kroz urednu instalaciju</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {company.tagline} {company.promise}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3 text-sm"
                >
                  <p className="text-amber-200 font-semibold">{item.label}</p>
                  <p className="text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
              >
                Zakažite servis
              </Link>
              <Link
                href="/services/semiranje-ormara"
                className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-200 transition-colors"
              >
                Pogledajte usluge
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                ✅ Dokumentacija i etikete za svaki ormar
              </span>
              <span className="flex items-center gap-2">
                🔌 Servis za stambene, poslovne i industrijske objekte
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="panel rounded-2xl p-3">
              <Image
                src="/assets/images/5.jpeg"
                alt="Instalacija Stanković Elektro"
                width={720}
                height={520}
                className="rounded-xl border border-slate-800 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
