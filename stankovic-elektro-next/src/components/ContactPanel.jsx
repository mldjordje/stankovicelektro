import Link from "next/link";
import { company } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ContactPanel() {
  return (
    <Reveal className="panel rounded-2xl p-6 border border-slate-800/70 space-y-3">
      <h3 className="text-xl font-semibold">Kontaktirajte nas</h3>
      <p className="text-slate-300">
        Precizan odgovor u roku od 1 radnog dana, hitne intervencije odmah.
      </p>
      <div className="text-sm text-slate-300 space-y-2">
        <p>dY\"z {company.phone}</p>
        <p>ƒo%‹,? {company.email}</p>
        <p>dY\"? {company.location}</p>
      </div>
      <Link
        href={`tel:${company.phone.replace(/\s+/g, "")}`}
        className="inline-flex items-center justify-center rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
      >
        Pozovite sada
      </Link>
    </Reveal>
  );
}
