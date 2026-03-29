import Image from 'next/image';
import type { Metadata } from 'next';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Mackay Biohazard Cleaning | 24/7 Emergency Response',
  description: 'Contact Mackay Biohazard Cleaning for immediate response or to request a confidential service assessment.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Mackay Biohazard Cleaning',
    url: `${siteConfig.url}/contact/`,
  };

  return (
    <>
      <SchemaOrg id="contact-schema" data={schema} />
      <section className="container-shell grid gap-10 py-24 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">24/7 Contact</p>
          <h1 className="font-display text-5xl leading-[0.95] text-text sm:text-6xl">Immediate response starts with a call</h1>
          <a href={`tel:${siteConfig.phone}`} className="mt-8 block font-display text-4xl text-accent sm:text-5xl">
            {siteConfig.formattedPhone}
          </a>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            For urgent situations, calling is the fastest option. For non-urgent or scheduled requests, use the short form below and the team will respond as soon as possible.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p>Business support: Monday to Friday, standard hours</p>
            <p>Emergency response: Available 24/7</p>
            <p>Service region: Mackay, Sarina, Proserpine, Airlie Beach, Bowen, Moranbah, Clermont and Collinsville</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="soft-panel overflow-hidden">
            <Image src="/images/contact-hero.svg" alt="24/7 emergency biohazard cleaning Mackay" width={1200} height={900} className="h-full min-h-[320px] w-full object-cover" />
          </div>
          <form action={siteConfig.formEndpoint} method="POST" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(31,41,51,0.08)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <input name="name" placeholder="Name" required className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" />
              <input name="phone" placeholder="Phone" required className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" />
              <input name="email" type="email" placeholder="Email" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 sm:col-span-2" />
              <select name="service" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none sm:col-span-2">
                <option>Service type</option>
                <option>Biohazard Cleaning</option>
                <option>Trauma & Crime Scene Cleaning</option>
                <option>Hoarding Cleaning</option>
              </select>
              <textarea name="message" placeholder="Message" rows={5} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 sm:col-span-2" />
            </div>
            <button type="submit" className="mt-6 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:bg-ctaHover">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
