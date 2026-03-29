const items = [
  'Licensed & Insured',
  '24/7 Emergency Response',
  'Discreet & Confidential',
  'Mackay Region Specialists',
];

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-surface/80">
      <div className="container-shell grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
