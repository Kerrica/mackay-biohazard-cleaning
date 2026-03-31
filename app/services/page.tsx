export default function ServicesPage() {
  const services = [
    {
      title: "Biohazard Cleaning",
      text: "Controlled remediation for contaminated environments requiring structured handling and discreet attendance.",
    },
    {
      title: "Trauma & Crime Scene Cleaning",
      text: "Calm, practical cleanup after traumatic events, with clear communication from first contact to handover.",
    },
    {
      title: "Hoard & Squalor Recovery",
      text: "Structured cleanup, decluttering and property reset for severe clutter, squalor and difficult living environments.",
    },
    {
      title: "Decluttering",
      text: "Targeted practical clearing and reset work for rooms, storage areas and properties that need structure restored.",
    },
    {
      title: "Crisis Navigation",
      text: "Practical guidance when the next step is unclear, helping families and stakeholders move from overwhelm to action.",
    },
  ];

  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Services</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
        Specialist service lines
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
            <h2 className="font-display text-[2.2rem] leading-none text-slate-900">{service.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
