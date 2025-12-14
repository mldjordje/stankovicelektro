import Reveal from "./Reveal";

export default function FAQAccordion({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <Reveal
          key={faq.question}
          delay={70 * index}
          className="panel rounded-xl border border-slate-800/70 px-4 py-3"
        >
          <details className="group">
            <summary className="cursor-pointer text-lg font-semibold text-amber-200">
              {faq.question}
            </summary>
            <p className="mt-2 text-slate-300">{faq.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
