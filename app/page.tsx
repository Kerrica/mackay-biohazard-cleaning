import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="pb-14 pt-0">
        <div className="w-full">
          <div className="overflow-hidden bg-[#0f2230]">
            <div className="relative min-h-[720px] w-full">
              <Image
                src="/images/hoarded-room-mackay-before.jpg"
                alt="Severe clutter before cleanup in Mackay"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-[#0f2230]/72" />

              <div className="relative z-10 flex min-h-[720px] items-center">
                <div className="container-shell">
                  <div className="max-w-[640px]">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                      24/7 Urgent Response Line
                    </p>

                    <h1 className="font-display text-[3.5rem] leading-[0.95] text-white sm:text-[5rem]">
                      Biohazard &amp; Trauma Cleaning Mackay
                    </h1>

                    <p className="mt-6 max-w-[620px] text-lg leading-9 text-slate-200">
                      Discreet, controlled remediation for hoarding, squalor, trauma,
                      biohazard and complex property situations across Mackay and surrounding regions.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href="tel:0405450705" className="btn-primary">
                        Call the Response Line
                      </a>
                      <a href="/services" className="btn-secondary">
                        View Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Services</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
            Specialist remediation services
          </h2>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
            Structured service lines for contaminated, traumatic and high-sensitivity environments
            across Mackay and surrounding regions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Hoard & Squalor Recovery", "Structured cleanup, decluttering and property recovery for severe clutter, squalor and difficult living environments."],
            ["Unattended Death & Biohazard Cleaning", "Discrete response for contamination, odour concerns and high-sensitivity environments requiring controlled remediation."],
            ["Trauma & Crime Scene Cleaning", "Calm, practical cleanup after traumatic events, with clear communication from first contact to handover."],
            ["Vacate & Property Recovery", "Fast, practical reset support for families, landlords, agents and time-sensitive property handovers."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]">
              <h3 className="font-display text-[2rem] leading-none text-slate-900">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
              <div className="mt-8">
                <a href="/services" className="card-link">Find Out More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)] lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Additional Support</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
              Decluttering and crisis navigation are part of the service mix
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Not every enquiry is a full remediation job. Some situations need calm decluttering,
              some need practical coordination, and some need a clear starting point when people do not know who to call first.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:mt-0">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-display text-[2rem] leading-none text-slate-900">Decluttering</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Targeted reset work for rooms, storage areas and properties that need practical clearing and organisation.
              </p>
              <div className="mt-6">
                <a href="/services" className="card-link">Find Out More</a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-display text-[2rem] leading-none text-slate-900">Crisis Navigation</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Practical guidance when the next step is unclear, helping families and stakeholders move from overwhelm to action.
              </p>
              <div className="mt-6">
                <a href="/services" className="card-link">Find Out More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
