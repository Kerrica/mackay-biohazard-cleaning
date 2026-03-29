import Image from 'next/image';
import type { Metadata } from 'next';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Mackay Biohazard Cleaning | Certified Local Specialists',
  description: 'Learn about Mackay Biohazard Cleaning, its safety-led approach, regional service model and commitment to discretion.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Mackay Biohazard Cleaning',
    url: `${siteConfig.url}/about/`,
    about: {
      '@type': 'Organization',
      name: siteConfig.name,
      description: siteConfig.description,
    },
  };

  return (
    <>
      <SchemaOrg id="about-schema" data={schema} />
      <section className="container-shell grid gap-10 py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">About</p>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">Certified Local Specialists</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Mackay Biohazard Cleaning is structured for high-sensitivity environments where trust, process control and discretion are non-negotiable. The business focuses on biohazard remediation, trauma and crime scene cleanup, and hoarding-related property restoration across Mackay and surrounding regions.
          </p>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
            <p>The operating standard is professional and compliance-led. Every site is approached through risk assessment, containment, PPE use, controlled cleaning methods and practical communication with stakeholders.</p>
            <p>The service model is built to support families, landlords, agencies, accommodation providers, employers and government-connected property environments without spectacle or unnecessary friction.</p>
            <p>Commitment to Work Health and Safety Queensland principles, discretion, insured operations and respectful handling sits at the core of the business.</p>
          </div>
        </div>
        <Image src="/images/about-team.svg" alt="Mackay Biohazard Cleaning team" width={1200} height={1000} className="rounded-[2rem] border border-white/10 object-cover shadow-panel" />
      </section>
    </>
  );
}
