import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locations, getLocation } from '@/lib/locations';
import { services } from '@/lib/services';
import { CTABand } from '@/components/ui/CTABand';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { siteConfig } from '@/lib/site';

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: location.seoTitle,
    description: location.summary,
    alternates: { canonical: `/locations/${location.slug}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.formattedPhone,
    url: `${siteConfig.url}/locations/${location.slug}/`,
    areaServed: location.areaServed,
    description: location.summary,
  };

  return (
    <>
      <SchemaOrg id={`${location.slug}-schema`} data={schema} />
      <section className="container-shell py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Location Page</p>
        <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">Biohazard Cleaning Services — {location.name}</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{location.summary}</p>
        <div className="mt-10 max-w-4xl rounded-[2rem] border border-white/10 bg-surface p-8 text-base leading-8 text-slate-300">
          <p>{location.intro}</p>
          <p className="mt-6 text-accent">{location.responseTime}</p>
        </div>
      </section>
      <section className="container-shell py-12">
        <h2 className="font-display text-4xl uppercase">Services Available In {location.name}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}/`} className="rounded-3xl border border-white/10 bg-surface p-6 text-sm leading-7 text-slate-300 hover:border-accent">
              <span className="block font-medium text-white">{service.shortName}</span>
              <span className="mt-3 block">{service.description}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-shell py-12">
        <h2 className="font-display text-4xl uppercase">Surrounding Areas Served</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {location.nearby.map((area) => (
            <span key={area} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{area}</span>
          ))}
        </div>
      </section>
      <section className="container-shell py-12">
        <div className="rounded-[2rem] border border-white/10 bg-surface p-8">
          <h2 className="font-display text-4xl uppercase">Request A Response In {location.name}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            For urgent matters in {location.name}, call directly for immediate triage. For planned or non-urgent work,
            the contact form can be used to outline the site, timing and service required.
          </p>
        </div>
      </section>
      <section className="container-shell pb-24 pt-12">
        <CTABand />
      </section>
    </>
  );
}
