type PageProps = {
  params: { slug: string };
};

export default function LocationDetailPage({ params }: PageProps) {
  const name = params.slug.replace(/-/g, " ");

  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Location</p>
      <h1 className="mt-3 font-display text-5xl capitalize leading-[0.95] text-slate-900">
        {name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
        Service availability for {name} can be discussed based on urgency, travel requirements and job scope.
      </p>
      <div className="mt-8">
        <a href="tel:0405450705" className="btn-primary">Call Now</a>
      </div>
    </section>
  );
}
