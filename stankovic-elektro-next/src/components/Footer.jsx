import Link from "next/link";
import { company, navLinks } from "@/data/siteContent";

export default function Footer() {
  const primaryLinks = navLinks.slice(0, 5);
  const secondaryLinks = navLinks.slice(5);

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 space-y-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300 border border-amber-200/40 font-semibold">
                SE
              </span>
              <div>
                <p className="text-lg font-semibold">{company.name}</p>
                <p className="text-xs text-slate-400">Semiranje i instalacije</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{company.tagline}</p>
            <p className="text-sm text-slate-400">{company.promise}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-200 mb-4">Navigacija</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-amber-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-200 mb-4">Resursi</h4>
            <div className="grid grid-cols-1 gap-2 text-sm text-slate-300">
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-amber-300">
                  {link.label}
                </Link>
              ))}
              <Link href="/services/semiranje-ormara" className="hover:text-amber-300">
                Semiranje ormara
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-amber-200">Kontakt</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <p>Telefon: {company.phone}</p>
              <p>Email: {company.email}</p>
              <p>Lokacija: {company.location}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
            >
              Zakazite servis
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-800/70 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} {company.name}. Sva prava zadrzana.</p>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-amber-300">FAQ</Link>
            <Link href="/contact" className="hover:text-amber-300">Kontakt</Link>
            <Link href="/pricing" className="hover:text-amber-300">Cene</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
