import Reveal from "./Reveal";

export default function PageIntro({ title, description, kicker }) {
  return (
    <Reveal className="space-y-3">
      {kicker && (
        <p className="text-sm font-semibold text-amber-200 uppercase tracking-[0.12em]">
          {kicker}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h1>
      {description && <p className="text-slate-300 max-w-3xl">{description}</p>}
    </Reveal>
  );
}
