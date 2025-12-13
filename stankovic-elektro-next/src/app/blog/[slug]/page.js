import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";
import { blogPosts } from "@/data/siteContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetail({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16 space-y-10">
        <PageIntro kicker={post.category} title={post.title} description={post.excerpt} />
      <article className="panel rounded-2xl p-6 border border-slate-800/70 space-y-4 text-slate-200 leading-relaxed">
        <p>
          U Stanković Elektro svaki posao počinje dijagnostikom i planom. Beležimo stanje, dogovaramo
          rokove i zatim radimo po standardu. Nakon toga sledi šemiranje i obeležavanje, kako bi
          održavanje bilo jasno i bezbedno.
        </p>
        <p>
          Najviše pazimo na: urednost kablova, jasne etikete i kvalitetne komponente. Svaka intervencija
          završava se zapisnikom, fotografijama i preporukama za dalji rad.
        </p>
        <p>
          Za hitne situacije reagujemo odmah, a za veće projekte planiramo u fazama da bismo izbegli
          zastoje. Cilj nam je da instalacija bude dugovečna i laka za servis.
        </p>
      </article>
      <ContactPanel />
    </div>
  );
}
