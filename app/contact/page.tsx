export default function ContactPage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Contact</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
        Immediate response starts with a call
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <a href="tel:0405450705" className="text-5xl font-black text-[#ef4f45]">
            0405 450 705
          </a>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            For urgent situations, calling is the fastest option. For non-urgent or scheduled requests,
            use the short form below and you will be contacted as soon as possible.
          </p>

          <div className="mt-8 space-y-3 text-lg text-slate-600">
            <p>Business support: Monday to Friday, standard hours</p>
            <p>Urgent response line: Available 24/7</p>
            <p>Service region: Mackay and surrounding areas</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
          <form className="grid gap-4 md:grid-cols-2">
            <input placeholder="Name" className="rounded-2xl border border-slate-300 px-4 py-3 md:col-span-1" />
            <input placeholder="Phone" className="rounded-2xl border border-slate-300 px-4 py-3 md:col-span-1" />
            <input placeholder="Email" className="rounded-2xl border border-slate-300 px-4 py-3 md:col-span-2" />
            <select className="rounded-2xl border border-slate-300 px-4 py-3 md:col-span-2">
              <option>Service type</option>
              <option>Biohazard Cleaning</option>
              <option>Trauma & Crime Scene</option>
              <option>Hoard & Squalor Recovery</option>
              <option>Decluttering</option>
              <option>Crisis Navigation</option>
            </select>
            <textarea placeholder="Message" rows={5} className="rounded-2xl border border-slate-300 px-4 py-3 md:col-span-2" />
            <button type="button" className="btn-primary md:col-span-2 w-fit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
