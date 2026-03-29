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
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">24/7 Contact</p>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">Immediate Response Starts With A Call</h1>
          <a href={`tel:${siteConfig.phone}`} className="mt-8 block font-display text-4xl uppercase text-accent sm:text-5xl">
            {siteConfig.formattedPhone}
          </a>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            For urgent situations, calling is the fastest option. For non-urgent or scheduled requests, use the short form below and the team will respond as soon as possible.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>Business support: Monday to Friday, standard hours</p>
            <p>Emergency response: Available 24/7</p>
            <p>Service region: Mackay, Sarina, Proserpine, Airlie Beach, Bowen, Moranbah, Clermont and Collinsville</p>
          </div>
        </div>
        <div className="space-y-8">
          <Image src="/images/contact-hero.svg" alt="24/7 emergency biohazard cleaning Mackay" width={1200} height={900} className="rounded-[2rem] border border-white/10 object-cover shadow-panel" />
          <form action={siteConfig.formEndpoint} method="POST" className="rounded-[2rem] border border-white/10 bg-surface p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <input name="name" placeholder="Name" required className="rounded-2xl border border-white/10 bg-bg px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input name="phone" placeholder="Phone" required className="rounded-2xl border border-white/10 bg-bg px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input name="email" type="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-bg px-4 py-3 text-white outline-none placeholder:text-slate-500 sm:col-span-2" />
              <select name="service" className="rounded-2xl border border-white/10 bg-bg px-4 py-3 text-white outline-none sm:col-span-2">
                <option>Service type</option>
                <option>Biohazard Cleaning</option>
                <option>Trauma & Crime Scene Cleaning</option>
                <option>Hoarding Cleaning</option>
              </select>
              <textarea name="message" placeholder="Message" rows={5} className="rounded-2xl border border-white/10 bg-bg px-4 py-3 text-white outline-none placeholder:text-slate-500 sm:col-span-2" />
            </div>
            <button type="submit" className="mt-6 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-bg transition hover:bg-ctaHover">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
