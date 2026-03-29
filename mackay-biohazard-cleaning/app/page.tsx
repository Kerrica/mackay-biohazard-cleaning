import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { homepageFaqs } from '@/lib/faq';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Biohazard Cleaning Mackay | Trauma & Crime Scene Specialists',
  description:
    "Mackay Biohazard Cleaning provides practical, discreet support for hoarding, trauma, biohazard and complex property situations across Mackay and surrounding regions.",
  alternates: { canonical: '/' },
};

const homepageServices = [
  {
    title: 'Hoarding & Squalor Recovery',
    description: 'Structured cleanup and property recovery for complex living environments, tenancy matters and supported situations.',
    href: '/services/hoarding-cleaning/',
    image: '/images/home-card-hoarding.svg',
    alt: 'Hoarding and squalor recovery service',
  },
  {
    title: 'Unattended Death & Biohazard Cleaning',
    description: 'Controlled remediation for sensitive sites involving contamination, odour concerns and difficult property conditions.',
    href: '/services/biohazard-cleaning/',
    image: '/images/home-card-biohazard.svg',
    alt: 'Unattended death and biohazard cleaning service',
  },
  {
    title: 'Trauma & Crime Scene Cleaning',
    description: 'Discreet, practical cleanup for traumatic incidents after scene release, with calm communication throughout.',
    href: '/services/trauma-crime-scene-cleaning/',
    image: '/images/home-card-trauma.svg',
    alt: 'Trauma and crime scene cleaning service',
  },
  {
    title: 'Vacate & Property Recovery',
    description: 'Property reset support for landlords, families, housing stakeholders and time-sensitive handovers.',
    href: '/contact/',
    image: '/images/home-card-vacate.svg',
    alt: 'Vacate and property recovery service',
  },
  {
    title: 'Crisis Navigation',
    description: 'Supportive guidance through distressing or overwhelming situations, helping clients make sense of options and next steps.',
    href: '/contact/',
    image: '/images/home-card-crisis.svg',
    alt: 'Crisis navigation support service',
  },
];

const trustedBy = ['Families', 'Property Managers', 'Housing Services', 'Government & Support Agencies'];

const testimonials = [
  {
    initials: 'A.B.',
    quote:
      'More than a cleaning service. The process was calm, respectful and far easier to deal with than we expected.',
  },
  {
    initials: 'J.R.',
    quote: 'Clear communication, discreet attendance and a practical plan from the first call.',
  },
  {
    initials: 'M.T.',
    quote: 'Professional, compassionate and very easy to work with during a difficult situation.',
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

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8f7f3_0%,#f2f0ea_100%)]">
        <div className="container-shell py-8 lg:py-12">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(31,41,51,0.08)] lg:grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">24/7 emergency response</p>
              <h1 className="mt-5 max-w-xl font-display text-[2.8rem] leading-[0.95] text-text sm:text-[3.4rem] lg:text-[4.1rem]">
                Practical support for biohazard, trauma and complex property situations in Mackay
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600" id="homepage-summary">
                Mackay Biohazard Cleaning helps families, landlords, agencies and property stakeholders respond to difficult situations with discreet attendance, clear communication and a practical plan. Services include hoarding and squalor recovery, trauma cleanup, biohazard cleaning, vacate support and crisis navigation when the next step is not obvious.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`tel:${siteConfig.phone}`}>Call Now</Button>
                <Button href="/services/" variant="ghost">View Services</Button>
              </div>
              <div className="mt-8 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 px-4 py-3">Fully insured</div>
                <div className="rounded-2xl bg-stone-50 px-4 py-3">Discreet, respectful approach</div>
                <div className="rounded-2xl bg-stone-50 px-4 py-3">Homes, agencies and property stakeholders</div>
                <div className="rounded-2xl bg-stone-50 px-4 py-3">Regional Mackay coverage</div>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <Image
                src="/images/home-hero-support.svg"
                alt="Professional property recovery specialist in a complex home environment"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-shell py-5">
          <div className="grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
            {['Fully insured', '24/7 emergency response', 'Discreet & confidential', 'Practical next-step guidance'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2.3rem] leading-none text-text sm:text-[2.8rem]">Specialist Property Recovery Services</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Service lines built around the situations people are actually facing, not just technical cleaning labels.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {homepageServices.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_48px_rgba(31,41,51,0.08)]"
            >
              <Image src={service.image} alt={service.alt} width={800} height={520} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-[1.6rem] font-semibold leading-[1.05] text-text">{service.title}</h3>
                <p className="mt-3 min-h-[108px] text-sm leading-7 text-slate-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#203550] px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Find Out More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-4">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-center font-display text-[2rem] leading-none text-text">Trusted By</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {trustedBy.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-5 text-center text-lg font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 bg-[#203550] py-14 text-white">
        <div className="container-shell text-center">
          <h2 className="font-display text-[2.2rem] leading-none text-white">What Clients Say</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/85">
            “More than a cleaning service. The process was calm, respectful and life-changing.”
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.initials} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-6 text-left backdrop-blur-sm">
                <p className="text-sm leading-7 text-white/85">{item.quote}</p>
                <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-[#d6b15f]">{item.initials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(31,41,51,0.08)] lg:grid lg:grid-cols-[0.62fr_0.38fr]">
          <div className="px-7 py-8 sm:px-10 lg:px-12 lg:py-12">
            <h2 className="font-display text-[2.3rem] leading-none text-text">Request a Fast Quote</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              All enquiries are handled discreetly. If the situation is urgent, call now. If you prefer to write first, use the form below.
            </p>
            <form action={siteConfig.formEndpoint} method="POST" className="mt-8 grid gap-4 md:grid-cols-2">
              <input name="name" placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent" />
              <input name="email" type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent" />
              <input name="phone" placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent md:col-span-2" />
              <textarea name="message" placeholder="Brief description of the situation" rows={4} className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent md:col-span-2" />
              <div className="md:col-span-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>

          <div className="relative min-h-[340px] border-t border-slate-200 lg:border-l lg:border-t-0">
            <Image src="/images/home-quote-panel.svg" alt="Professional support during a complex property situation" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-stone-50 p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Coverage</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-none text-text">Serving Mackay and surrounding regions</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Regional coverage across Mackay, Sarina, Proserpine, Airlie Beach, Bowen, Moranbah, Clermont and Collinsville.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="rounded-full border border-slate-300 bg-white px-4 py-2 hover:border-accent hover:text-slate-900">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Common questions</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-none text-text">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={homepageFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
