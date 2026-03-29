const items = [
  'Fully Insured',
  '24/7 Emergency Response',
  'Discreet & Confidential',
  'Mackay Region Service',
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white/90">
      <div className="container-shell grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
