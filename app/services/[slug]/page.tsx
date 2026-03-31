type PageProps = {
  params: { slug: string };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const name = params.slug.replace(/-/g, " ");

  return (
    <section className="container-shell py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Service</p>
      <h1 className="mt-3 font-display text-5xl capitalize leading-[0.95] text-slate-900">
        {name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
        This service page is part of the reset build and can be expanded later with detailed copy, images and FAQs.
      </p>
      <div className="mt-8">
        <a href="/contact" className="btn-primary">Make an Enquiry</a>
      </div>
    </section>
  );
}
