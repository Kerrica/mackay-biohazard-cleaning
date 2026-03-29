import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getService } from '@/lib/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CTABand } from '@/components/ui/CTABand';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      provider: { '@type': 'LocalBusiness', name: siteConfig.name, telephone: siteConfig.formattedPhone },
      areaServed: locations.map((location) => location.name),
      description: service.summary,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    },
  ];

  return (
    <>
      <SchemaOrg id={`${service.slug}-schema`} data={schema} />
      <section className="container-shell grid gap-10 py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Specialist Service</p>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.summary}</p>
        </div>
        <Image src={service.heroImage} alt={service.heroAlt} width={1200} height={900} priority className="rounded-[2rem] border border-white/10 object-cover shadow-panel" />
      </section>
      <section className="container-shell prose-copy py-8" id="what-is-biohazard-cleaning">
        <div className="max-w-4xl space-y-6">
          {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Scope" title="What’s Included" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.included.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-surface p-6 text-sm leading-7 text-slate-300">{item}</div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Process" title="How The Service Works" />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-surface p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Step {index + 1}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Who We Help" title="Supported Client Types" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.audience.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-surface p-6 text-sm leading-7 text-slate-300">{item}</div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Locations" title="Locations We Attend For This Service" />
        <div className="mt-8 flex flex-wrap gap-4">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}/`} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-accent hover:text-white">
              {location.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="FAQ" title="Service Questions" />
        <div className="mt-10 max-w-4xl">
          <FaqAccordion items={service.faqs} />
        </div>
      </section>
      <section className="container-shell pb-24">
        <CTABand />
      </section>
    </>
  );
}
