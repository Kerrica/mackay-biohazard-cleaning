export default function LocationsPage() {
  const locations = ["Mackay", "Sarina", "Airlie Beach", "Proserpine", "Bowen", "Moranbah"];

  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Locations</p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] text-slate-900">
        Service areas
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
        Mackay Biohazard Cleaning is focused on Mackay and can discuss surrounding regions depending on urgency, travel and job scope.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <div key={location} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-2xl font-bold text-slate-900 shadow-[0_16px_40px_rgba(23,49,88,0.06)]">
            {location}
          </div>
        ))}
      </div>
    </section>
  );
}
