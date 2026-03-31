import Link from "next/link";

const services = [
  "biohazard-cleaning",
  "trauma-crime-scene-cleaning",
  "hoard-squalor-recovery",
  "decluttering",
  "crisis-navigation",
  "vacate-property-recovery"
];

export default function ServicesPage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Services</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
        Specialist service lines
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service}
            href={`/services/${service}`}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(23,49,88,0.08)]"
          >
            <h2 className="font-display text-[2.2rem] capitalize leading-none text-slate-900">
              {service.replace(/-/g, " ")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Find out more about this service line, where it fits, and when it may be the right next step.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
