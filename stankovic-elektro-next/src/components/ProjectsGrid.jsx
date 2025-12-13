import Link from "next/link";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="panel rounded-2xl p-5 border border-slate-800/70 hover:border-amber-300/70 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <span className="text-amber-300">→</span>
          </div>
          <p className="text-slate-300 text-sm mt-2">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-amber-300 mt-3"
          >
            Detalji projekta →
          </Link>
        </div>
      ))}
    </div>
  );
}
