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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Specialist Service</p>
          <h1 className="font-display text-5xl leading-[0.95] text-text sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.summary}</p>
        </div>
        <div className="soft-panel overflow-hidden">
          <Image src={service.heroImage} alt={service.heroAlt} width={1200} height={900} priority className="h-full min-h-[340px] w-full object-cover" />
        </div>
      </section>
      <section className="container-shell prose-copy py-8" id="what-is-biohazard-cleaning">
        <div className="max-w-4xl space-y-6">
          {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Scope" title="What’s included" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.included.map((item) => (
            <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_12px_36px_rgba(31,41,51,0.05)]">{item}</div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Process" title="How the service works" />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <div key={step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(31,41,51,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Step {index + 1}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Who we help" title="Supported client types" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.audience.map((item) => (
            <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_12px_36px_rgba(31,41,51,0.05)]">{item}</div>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Locations" title="Locations we attend for this service" />
        <div className="mt-8 flex flex-wrap gap-4">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}/`} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:border-accent hover:text-slate-900">
              {location.name}
            </Link>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="FAQ" title="Service questions" />
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
