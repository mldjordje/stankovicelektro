"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks } from "@/data/siteContent";

const linkBase =
  "text-sm md:text-base font-medium transition-colors hover:text-amber-300";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800/70 bg-slate-950/80">
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-slate-200 bg-slate-900 border-b border-slate-800/70">
        <span className="flex items-center gap-2 text-amber-200">
          📞 {company.phone}
        </span>
        <span className="text-slate-300">{company.promise}</span>
        <span className="flex items-center gap-2">📍 Servis širom Srbije</span>
      </div>
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300 border border-amber-200/40 font-semibold">
            SE
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight">
              {company.name}
            </span>
            <span className="text-xs text-slate-400">
              Instalacije • Šemiranje ormara
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${active ? "text-amber-300" : "text-slate-200"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:+381640136237"
            className="text-sm font-semibold text-amber-300"
          >
            {company.phone}
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition-colors"
          >
            Zakažite servis
          </Link>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 text-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 px-4 pb-4">
          <nav className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkBase} ${active ? "text-amber-300" : "text-slate-200"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-2">
            <Link
              href="tel:+381640136237"
              className="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-200"
            >
              Pozovite: {company.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold text-center shadow-lg shadow-amber-400/20"
              onClick={() => setOpen(false)}
            >
              Zakažite servis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
