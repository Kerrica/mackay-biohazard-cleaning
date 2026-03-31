export default function FaqPage() {
  const faqs = [
    ["Do you only handle biohazard work?", "No. Services also include hoard and squalor recovery, decluttering, vacate support and crisis navigation."],
    ["Do you service outside Mackay?", "Yes. Surrounding regions can be discussed depending on the job type and urgency."],
    ["Is the service confidential?", "Yes. Discretion, respectful communication and privacy are built into the service approach."],
  ];

  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">FAQ</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
        Common questions
      </h1>

      <div className="mt-10 space-y-5">
        {faqs.map(([q, a]) => (
          <div key={q} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(23,49,88,0.06)]">
            <h2 className="text-2xl font-bold text-slate-900">{q}</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
