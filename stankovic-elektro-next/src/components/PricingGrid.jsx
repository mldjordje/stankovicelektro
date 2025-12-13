export default function PricingGrid({ plans }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`panel rounded-2xl p-6 border border-slate-800/70 ${
            plan.highlighted ? "border-amber-300/60 shadow-lg shadow-amber-400/10" : ""
          }`}
        >
          <p className="text-sm uppercase tracking-[0.14em] text-amber-200">{plan.name}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <p className="text-3xl font-semibold text-amber-300">{plan.price}</p>
            <p className="text-slate-400">{plan.period}</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {plan.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-300">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
