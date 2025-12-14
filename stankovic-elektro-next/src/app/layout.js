import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Stankovic Elektro | Kompletna elektro-instalacija i semiranje elektro ormara",
  description:
    "Stankovic Elektro nudi brze, profesionalne i pouzdane elektro usluge: instalacije, semiranje ormara i 24/7 intervencije za stambene, poslovne i industrijske objekte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} antialiased bg-slate-950 text-slate-100`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
