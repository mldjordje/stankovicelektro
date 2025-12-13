import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="panel rounded-2xl p-5 border border-slate-800/70 hover:border-amber-300/70 transition-colors"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-amber-200">{post.category}</p>
          <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
          <p className="text-slate-300 text-sm mt-2">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm text-amber-300 mt-3"
          >
            Pročitajte više →
          </Link>
        </div>
      ))}
    </div>
  );
}
