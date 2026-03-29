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
  title: 'Biohazard Cleaning Mackay | Trauma & Property Recovery Specialists',
  description:
    'Mackay Biohazard Cleaning provides specialist biohazard, trauma, hoarding and complex property recovery services across Mackay and surrounding regions. Fully insured, discreet and responsive.',
  alternates: { canonical: '/' },
};

const serviceCards = [
  {
    title: 'Hoarding & Squalor Recovery',
    description: 'Structured cleanup and property recovery for severe clutter, squalor and difficult living environments.',
    href: '/services/hoarding-cleaning/',
    image: '/images/hoarding-cleanup-mackay-kitchen-before.jpg',
    alt: 'Severe hoarding kitchen before cleanup in Mackay home',
  },
  {
    title: 'Unattended Death & Biohazard Cleaning',
    description: 'Discreet response for contamination, odour concerns and sensitive environments requiring controlled remediation.',
    href: '/services/biohazard-cleaning/',
    image: '/images/biohazard-cleaning-mackay-onsite.jpg',
    alt: 'Professional biohazard cleaning response in Mackay home',
  },
  {
    title: 'Trauma & Crime Scene Cleaning',
    description: 'Calm, practical cleanup after traumatic events, with clear communication from first contact to handover.',
    href: '/services/trauma-crime-scene-cleaning/',
    image: '/images/trauma-cleaning-mackay-ppe-doorway.jpg',
    alt: 'Biohazard cleaning technician wearing PPE onsite in Mackay',
  },
  {
    title: 'Vacate & Property Recovery',
    description: 'Fast, practical reset support for families, landlords, real estate agents and time-sensitive property handovers.',
    href: '/contact/',
    image: '/images/cleaned-bedroom-mackay-after.jpg',
    alt: 'Cleaned and restored bedroom after hoarding cleanup in Mackay',
  },
];

const trustedBy = ['NDIS Providers', 'Housing Services', 'Real Estate', 'Government Agencies'];

const beforeAfter = [
  {
    title: 'Bedroom Recovery',
    before: '/images/severe-clutter-bedroom-mackay-before.jpg',
    beforeAlt: 'Cluttered bedroom with excessive items before cleaning in Mackay',
    after: '/images/cleaned-bedroom-mackay-after.jpg',
    afterAlt: 'Cleaned and restored bedroom after hoarding cleanup in Mackay',
  },
  {
    title: 'Storage Reset',
    before: '/images/decluttered-storage-mackay-after.jpg',
    beforeAlt: 'Disorganised storage area before property recovery in Mackay',
    after: '/images/organised-room-mackay-after.jpg',
    afterAlt: 'Organised and decluttered storage area in Mackay home',
  },
];

const testimonials = [
  'More than a cleaning service. The process was calm, respectful and life-changing.',
  'Clear communication, discreet attendance and a practical plan from the first call.',
  'Professional, compassionate and very easy to work with during a difficult situation.',
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

      <section className="container-shell pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-300 bg-[#102845] shadow-[0_24px_70px_rgba(16,40,69,0.18)]">
          <div className="relative min-h-[620px] lg:min-h-[700px]">
            <Image
              src="/images/hero-kerri-ppe-mackay.png"
              alt="Biohazard cleaning specialist in PPE in Mackay"
              fill
              priority
              className="object-cover object-[72%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,22,40,0.84)] via-[rgba(8,22,40,0.68)] to-[rgba(8,22,40,0.1)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,22,40,0.38)] to-transparent" />

            <div className="relative z-10 flex min-h-[620px] max-w-[760px] flex-col justify-center px-8 py-12 sm:px-12 lg:min-h-[700px] lg:px-16">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8ab39]">24/7 emergency response</p>
              <h1 className="mt-5 max-w-[12ch] font-display text-[2.8rem] leading-[0.94] text-white sm:text-[3.6rem] lg:text-[4.5rem]">
                Specialist Biohazard &amp; Trauma Cleaning Mackay
              </h1>
              <p id="homepage-summary" className="mt-6 max-w-[34rem] text-lg leading-8 text-white/90 sm:text-[1.14rem]">
                Discreet, controlled remediation for hoarding, squalor, trauma, biohazard and complex property situations across Mackay and surrounding regions. Every situation is handled with the right level of care, structure and practical direction from first contact to handover.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`tel:${siteConfig.phone}`} className="bg-[#d0a233] text-[#102845] shadow-none hover:bg-[#e0b34a]">
                  Call Now
                </Button>
                <Button href="/services/" variant="ghost" className="border-white/35 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white/18 hover:text-white">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(31,41,51,0.08)]"
            >
              <div className="relative h-52">
                <Image src={service.image} alt={service.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-[1.65rem] font-semibold leading-[1.05] text-[#203550]">{service.title}</h2>
                <p className="mt-3 min-h-[96px] text-sm leading-7 text-slate-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#203550] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#102845]"
                >
                  Find Out More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="rounded-[1.6rem] border border-slate-200 bg-stone-50 px-6 py-7 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d0a233]">Crisis Navigation</p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-[#203550]">When the next step is not obvious, we help bring structure to the situation.</h2>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 lg:mt-0">
            Crisis Navigation is designed for situations that feel overwhelming, urgent or unclear. We help families, property stakeholders and support networks understand the practical next steps, coordinate a response and move forward with more certainty.
          </p>
        </div>
      </section>

      <section className="container-shell pb-14">
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-center font-display text-[2.2rem] leading-none text-[#203550]">Trusted By</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {trustedBy.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-5 text-center text-lg font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173556] py-12 text-white">
        <div className="container-shell text-center">
          <h2 className="font-display text-[2.3rem] leading-none text-white">What Clients Say</h2>
          <p className="mx-auto mt-5 max-w-4xl text-xl leading-8 text-white/88">“{testimonials[0]}”</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-[#d8ab39]">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-2xl">★</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {beforeAfter.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(31,41,51,0.06)]">
              <div className="grid grid-cols-2">
                <div className="relative h-72">
                  <Image src={item.before} alt={item.beforeAlt} fill className="object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-[#102845] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">Before</div>
                </div>
                <div className="relative h-72">
                  <Image src={item.after} alt={item.afterAlt} fill className="object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-[#d0a233] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#102845]">After</div>
                </div>
              </div>
              <div className="px-5 py-4 text-center text-lg font-semibold text-[#203550]">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(31,41,51,0.08)] lg:grid lg:grid-cols-[0.6fr_0.4fr]">
          <div className="px-7 py-8 sm:px-10 lg:px-12 lg:py-12">
            <h2 className="font-display text-[2.5rem] leading-none text-[#203550]">Request a Fast Quote</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              All enquiries are handled discreetly. If the situation is urgent, call now. If you prefer to write first, use the form below.
            </p>
            <form action={siteConfig.formEndpoint} method="POST" className="mt-8 grid gap-4 md:grid-cols-2">
              <input name="name" placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent" />
              <input name="email" type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent" />
              <input name="phone" placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent md:col-span-2" />
              <textarea name="message" placeholder="Brief description of the situation" rows={4} className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-accent md:col-span-2" />
              <div className="md:col-span-2">
                <p className="mb-4 text-sm text-slate-500">All enquiries are treated confidentially.</p>
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#d0a233] px-6 py-3 text-sm font-semibold text-[#102845] transition hover:brightness-110">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>

          <div className="relative min-h-[360px] border-t border-slate-200 bg-[#203550] lg:border-l lg:border-t-0">
            <Image src="/images/hero-kerri-ppe-mackay.png" alt="Biohazard cleaning specialist in protective gear in Mackay" fill className="object-cover object-[68%_center] opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(16,40,69,0.08)]" />
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-stone-50 p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d0a233]">Coverage</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-none text-[#203550]">Serving Mackay and surrounding regions</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Regional coverage across Mackay, Sarina, Proserpine, Airlie Beach, Bowen, Moranbah, Clermont and Collinsville.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="rounded-full border border-slate-300 bg-white px-4 py-2 hover:border-[#d0a233] hover:text-slate-900">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d0a233]">Common questions</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-none text-[#203550]">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={homepageFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
