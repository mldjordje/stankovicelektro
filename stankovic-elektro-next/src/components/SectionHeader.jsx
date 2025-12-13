export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-sm font-semibold text-amber-200 uppercase tracking-[0.12em]">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>}
      {description && <p className="text-slate-300 max-w-3xl">{description}</p>}
    </div>
  );
}
