import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 md:px-6 py-16 text-center space-y-4">
      <h1 className="text-4xl font-semibold">Stranica nije pronadjena</h1>
      <p className="text-slate-300">
        Link je mozda promenjen ili vise ne postoji. Vratite se na pocetnu ili kontaktirajte nas tim.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-amber-400 text-slate-950 px-5 py-3 text-sm font-semibold shadow-lg shadow-amber-400/20"
        >
          Pocetna
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-amber-300 hover:text-amber-200"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
