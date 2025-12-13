import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";
import { company } from "@/data/siteContent";

export const metadata = {
  title: "Kontakt | Stanković Elektro",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-10">
      <PageIntro
        kicker="Kontakt"
        title="Pozovite nas ili pošaljite upit"
        description={company.promise}
      />
      <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <form className="panel rounded-2xl p-6 border border-slate-800/70 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-slate-200">Ime i prezime</span>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100"
                placeholder="Vaše ime"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-slate-200">Email</span>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100"
                placeholder="email@primer.rs"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-slate-200">Telefon</span>
              <input
                type="tel"
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100"
                placeholder="+381..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-slate-200">Tip objekta</span>
              <select className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100">
                <option>Stambeni</option>
                <option>Poslovni</option>
                <option>Industrijski</option>
                <option>Drugo</option>
              </select>
            </label>
          </div>
          <label className="space-y-2 text-sm">
            <span className="text-slate-200">Opis zahteva</span>
            <textarea
              rows="4"
              className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-100"
              placeholder="Kratko opišite šta vam je potrebno..."
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
          >
            Pošaljite upit
          </button>
          <p className="text-xs text-slate-400">
            Slanjem forme potvrđujete da su podaci tačni. Odgovaramo u roku od jednog radnog dana.
          </p>
        </form>
        <ContactPanel />
      </div>
    </div>
  );
}
