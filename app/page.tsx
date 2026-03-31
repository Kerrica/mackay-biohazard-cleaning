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
    'Mackay Biohazard Cleaning provides specialist biohazard, trauma, hoarding, decluttering and crisis navigation services across Mackay and surrounding regions. Fully insured, discreet and responsive.',
  alternates: { canonical: '/' },
};

const serviceCards = [
  {
    title: 'Hoard & Squalor Recovery',
    description: 'Structured cleanup, decluttering and property recovery for severe clutter, squalor and difficult living environments.',
    href: '/services/hoarding-cleaning/',
    image: '/images/hoarding-kitchen-mackay-before.jpg',
    alt: 'Severe hoarding kitchen before cleanup in Mackay home',
  },
  {
    title: 'Unattended Death & Biohazard Cleaning',
    description: 'Discreet response for contamination, odour concerns and high-sensitivity environments requiring controlled remediation.',
    href: '/services/biohazard-cleaning/',
    image: '/images/biohazard-cleaning-mackay-on-site-team.jpg',
    alt: 'Biohazard cleaning technician on site in Mackay property',
  },
  {
    title: 'Trauma & Crime Scene Cleaning',
    description: 'Calm, practical cleanup after traumatic events, with clear communication from first contact to handover.',
    href: '/services/trauma-crime-scene-cleaning/',
    image: '/images/trauma-cleaning-mackay-ppe-doorway.jpg',
    alt: 'Trauma cleaning specialist in PPE arriving at Mackay property',
  },
  {
    title: 'Vacate & Property Recovery',
    description: 'Fast, practical reset support for families, landlords, agents and time-sensitive property handovers.',
    href: '/contact/',
    image: '/images/bedroom-cleaning-mackay-after.jpg',
    alt: 'Recovered bedroom after professional property reset in Mackay',
  },
];

const supportCards = [
  {
    title: 'Decluttering',
    description: 'Targeted reset work for rooms, storage areas and properties that need practical clearing and organisation.',
    href: '/contact/',
    image: '/images/storage-declutter-mackay-before.jpg',
    alt: 'Storage area before decluttering in Mackay',
  },
  {
    title: 'Crisis Navigation',
    description: 'Supportive guidance when the next step is unclear, helping families and stakeholders move from overwhelm to action.',
    href: '/contact/',
    image: '/images/biohazard-cleaning-technician-mackay-ppe-suit.png',
    alt: 'Biohazard cleaning specialist available for crisis coordination in Mackay',
  },
];

const trustedBy = ['NDIS Providers', 'Housing Services', 'Real Estate', 'Government Agencies'];

const beforeAfter = [
  {
    title: 'Bedroom Recovery',
    before: '/images/hoarded-room-mackay-before.jpg',
    beforeAlt: 'Bedroom before hoarding cleanup in Mackay',
    after: '/images/bedroom-cleaning-mackay-after.jpg',
    afterAlt: 'Bedroom after hoarding cleanup in Mackay',
  },
  {
    title: 'Storage Reset',
    before: '/images/storage-declutter-mackay-before.jpg',
    beforeAlt: 'Storage area before decluttering in Mackay',
    after: '/images/storage-declutter-mackay-after.jpg',
    afterAlt: 'Storage area after decluttering in Mackay',
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

      <section className="pb-14 pt-0">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0f2230] shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
            <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative flex items-center">
                <div className="absolute inset-0">
                  <Image
                    src="/images/hoarded-room-mackay-before.jpg"
                    alt="Severe cluttered room before cleanup in Mackay"
                    fill
                    className="object-cover object-center opacity-35"
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                </div>

                <div className="relative z-10 max-w-[640px] px-8 py-14 sm:px-12 lg:px-14 lg:py-16">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    24/7 Urgent Response Line
                  </p>

                  <h1 className="max-w-[520px] font-display text-[3.9rem] leading-[0.94] tracking-tight text-white sm:text-[5rem]">
                    Biohazard &amp; Trauma Cleaning Mackay
                  </h1>

                  <p className="mt-7 max-w-[520px] text-lg leading-9 text-slate-200">
                    Discreet, controlled remediation for hoarding, squalor, trauma,
                    biohazard and complex property situations across Mackay and
                    surrounding regions.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button href={`tel:${siteConfig.phone}`} variant="primary">
                      Call the Response Line
                    </Button>
                    <Button href="/services/" variant="outline">
                      View Services
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[620px] bg-[#173042]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/biohazard-cleaning-technician-mackay-ppe-suit.png"
                    alt="Biohazard cleaning technician in PPE in Mackay"
                    fill
                    priority
                    className="object-cover object-[58%_30%]"
                  />
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f2230] via-[#0f2230]/55 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-14 lg:pb-18">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(23,49,58,0.08)]"
            >
              <div className="relative h-56 w-full">
                <Image src={service.image} alt={service.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-[2rem] leading-none text-text">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <Link href={service.href} className="mt-5 inline-flex rounded-full border border-[#c9d8db] px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent">
                  Find Out More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>

      <section className="container-shell pb-14">
        <div className="rounded-[2rem] border border-[#cfe0e2] bg-white p-8 shadow-[0_14px_34px_rgba(23,49,58,0.06)] lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Additional support</p>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] text-text sm:text-5xl">Decluttering and crisis navigation can be booked directly</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Not every enquiry is a full remediation job. Some situations need calm decluttering, some need practical coordination, and some need a clear starting point when people do not know who to call first.
              </p>
            </div>
            <div className="grid gap-5">
              {supportCards.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(135deg,#f9fcfc_0%,#eef5f5_100%)] shadow-[0_10px_24px_rgba(23,49,58,0.04)]">
                  <div className="grid gap-0 sm:grid-cols-[0.42fr_0.58fr]">
                    <div className="relative min-h-[220px]">
                      <Image src={card.image} alt={card.alt} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <p className="font-display text-[1.9rem] leading-none text-text">{card.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                      <Link href={card.href} className="mt-5 inline-flex rounded-full border border-[#c9d8db] px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent">Find Out More</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-300" />
          <h2 className="font-display text-[2.3rem] leading-none text-text">Trusted By</h2>
          <div className="h-px flex-1 bg-slate-300" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustedBy.map((item) => (
            <div key={item} className="rounded-[1rem] border border-slate-200 bg-[#f7fbfb] px-6 py-5 text-center text-lg font-medium text-slate-600 shadow-[0_8px_18px_rgba(23,49,58,0.03)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-14">
        <div className="overflow-hidden rounded-[2rem] bg-[#123944] px-8 py-12 text-center text-white shadow-[0_20px_48px_rgba(18,57,68,0.18)] lg:px-12">
          <p className="font-display text-[2.7rem] leading-none">What clients say</p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/86">“More than a cleaning service. The process was calm, respectful and life-changing.”</p>
        </div>
      </section>

      <section className="container-shell pb-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {beforeAfter.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(23,49,58,0.07)]">
              <div className="px-7 pt-7">
                <h2 className="font-display text-[2rem] leading-none text-text">{item.title}</h2>
              </div>
              <div className="grid gap-px bg-slate-200 p-px md:grid-cols-2 md:bg-slate-200">
                <div className="bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Before</p>
                  <div className="relative h-72 overflow-hidden rounded-[1rem]">
                    <Image src={item.before} alt={item.beforeAlt} fill className="object-cover" />
                  </div>
                </div>
                <div className="bg-white p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5443d]">After</p>
                  <div className="relative h-72 overflow-hidden rounded-[1rem]">
                    <Image src={item.after} alt={item.afterAlt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(23,49,58,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Request a fast quote</p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-text sm:text-5xl">Tell us what you&apos;re dealing with</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Every enquiry is treated confidentially. Share the location, urgency and what the property needs right now.</p>
            <form action={siteConfig.formEndpoint} method="POST" className="mt-8 grid gap-4 sm:grid-cols-2">
              <input name="name" placeholder="Name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" />
              <input name="email" type="email" placeholder="Email" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" />
              <input name="phone" placeholder="Phone" required className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 sm:col-span-2" />
              <textarea name="message" rows={5} placeholder="Brief description of the situation" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 sm:col-span-2" />
              <button type="submit" className="inline-flex w-fit rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:bg-ctaHover">
                Send Enquiry
              </button>
            </form>
          </div>
          <div className="relative min-h-[420px] bg-[#123944]">
            <Image src="/images/biohazard-cleaning-technician-mackay-ppe-suit.png" alt="Biohazard cleaning technician wearing PPE in Mackay" fill className="object-cover object-[65%_18%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,57,68,0.22)] to-transparent" />
          </div>
        </div>
      </section>

      <section className="container-shell pb-24" id="faq">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">FAQ</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] text-text sm:text-5xl">Common questions</h2>
          <div className="mt-8">
            <FaqAccordion items={homepageFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
