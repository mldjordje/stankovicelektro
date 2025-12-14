import PageIntro from "@/components/PageIntro";
import BlogList from "@/components/BlogList";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/siteContent";

export const metadata = {
  title: "Blog | StankoviŽØ Elektro",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 space-y-8">
      <PageIntro
        kicker="Blog"
        title="Saveti iz elektro prakse"
        description="Brze napomene iz terena: kako pripremamo ormare, ­ta raditi u hitnim situacijama i kako planirati modernizaciju."
      />
      <Reveal>
        <BlogList posts={blogPosts} />
      </Reveal>
    </div>
  );
}
