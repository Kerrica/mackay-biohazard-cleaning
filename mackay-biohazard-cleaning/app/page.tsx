import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { TrustBar } from '@/components/ui/TrustBar';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CTABand } from '@/components/ui/CTABand';
import { homepageFaqs } from '@/lib/faq';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Biohazard Cleaning Mackay | Trauma & Crime Scene Specialists',
  description: "Mackay's trusted biohazard, trauma and crime scene cleaning specialists. Available 24/7 across the Mackay region. Discreet, certified, compassionate.",
  alternates: { canonical: '/' },
};
const services = [
  {
    title: 'Biohazard Cleaning',
    description: 'Controlled remediation for contaminated environments requiring trained handling and documented process.',
    href: '/services/biohazard-cleaning/',
    image: '/images/biohazard-service-card.svg',
    alt: 'Certified biohazard cleaning service Mackay',
  },
  {
    title: 'Trauma & Crime Scene',
    description: 'Professional clinical cleanup delivered with discretion, empathy and clear communication.',
    href: '/services/trauma-crime-scene-cleaning/',
    image: '/images/trauma-cleaning-service-card.svg',
    alt: 'Trauma and crime scene cleaning Mackay',
  },
  {
    title: 'Hoarding Cleaning',
    description: 'Non-judgmental cleanup and restoration for homes, tenancy matters and supported environments.',
    href: '/services/hoarding-cleaning/',
    image: '/images/hoarding-cleaning-service-card.svg',
    alt: 'Hoarding cleanup service Mackay region',
  },
];

export default function HomePage() {
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.formattedPhone,
      url: siteConfig.url,
      areaServed: locations.map((location) => location.name),
      description: siteConfig.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }],
    },
  ];

  return (
    <>
      <SchemaOrg id="home-schema" data={homeSchema} />
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/images/hero-biohazard-cleaning-mackay.svg"
          alt="Biohazard cleaning professionals Mackay"
          width={1600}
          height={900}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="container-shell relative flex min-h-[92vh] items-center py-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-accent">24/7 Emergency Response</p>
            <h1 className="font-display text-6xl uppercase leading-none text-white sm:text-7xl lg:text-8xl">
              When It Matters Most, We Handle It.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200" id="homepage-summary">
              Mackay Biohazard Cleaning provides certified biohazard, trauma and crime scene cleaning across Mackay and surrounding regions, with discreet response, compliant remediation and compassionate communication when specialist help is required.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`tel:${siteConfig.phone}`}>Call Now — 24/7</Button>
              <Button href="/services/" variant="ghost">View Services</Button>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
      <section className="container-shell py-24">
        <SectionHeading
          eyebrow="Core Services"
          title="Specialist Cleaning Services"
          description="Focused service lines built for high-sensitivity environments where trust, speed and method matter."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>
      <section className="container-shell grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Clinical Standards. Human Handling."
            description="The service is designed for events that require professionalism without spectacle."
          />
          <ul className="mt-10 space-y-5 text-base text-slate-200">
            {[
              'Certified handling of hazardous and sensitive environments',
              'Discreet attendance and confidential communication',
              'Clear process for families, landlords, agencies and workplaces',
              '24/7 regional response across the Mackay service area',
              'Documentation-ready approach for property and insurance stakeholders',
            ].map((item) => (
              <li key={item} className="flex gap-4"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />{item}</li>
            ))}
          </ul>
        </div>
        <Image src="/images/ppe-professional-hero.svg" alt="Professional hazmat technician Mackay" width={900} height={1100} className="rounded-[2rem] border border-white/10 object-cover shadow-panel" />
      </section>
      <section className="border-y border-white/10 bg-surface/60 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service Area"
            title="Regional Coverage"
            description="Serving Mackay and surrounding centres throughout the Whitsundays and Bowen Basin."
          />
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="rounded-full border border-white/10 px-4 py-2 hover:border-accent hover:text-white">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <SectionHeading eyebrow="Proof" title="Built For Trust" description="Placeholder testimonial blocks are ready to be replaced with live review content when approved." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['A.B.', 'Handled a highly sensitive property matter with discretion, clear communication and an immediately professional process.'],
            ['J.R.', 'The response felt controlled and respectful from the first call. No confusion, no unnecessary drama, just competent handling.'],
            ['L.M.', 'Useful for agency and tenancy matters where ordinary cleaners were not the right fit. Fast, direct and reliable.'],
          ].map(([initials, quote]) => (
            <article key={initials} className="rounded-3xl border border-white/10 bg-surface p-6">
              <p className="text-sm leading-7 text-slate-300">“{quote}”</p>
              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-accent">{initials}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-24">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" description="Clear answers for the most common concerns before first contact." />
        <div className="mt-12 max-w-4xl">
          <FaqAccordion items={homepageFaqs} />
        </div>
      </section>
      <section className="container-shell pb-24">
        <CTABand />
      </section>
    </>
  );
}
