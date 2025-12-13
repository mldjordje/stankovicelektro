export default function FAQAccordion({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="panel rounded-xl border border-slate-800/70 px-4 py-3"
        >
          <summary className="cursor-pointer text-lg font-semibold text-amber-200">
            {faq.question}
          </summary>
          <p className="mt-2 text-slate-300">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
