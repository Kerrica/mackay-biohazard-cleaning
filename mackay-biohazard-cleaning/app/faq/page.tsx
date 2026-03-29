import type { Metadata } from 'next';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { masterFaqs } from '@/lib/faq';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQs | Mackay Biohazard Cleaning',
  description: 'Frequently asked questions covering biohazard cleaning, trauma cleanup, hoarding services, service areas and emergency response.',
  alternates: { canonical: '/faq/' },
};

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: masterFaqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    url: `${siteConfig.url}/faq/`,
  };

  return (
    <>
      <SchemaOrg id="faq-schema" data={schema} />
      <section className="container-shell py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">FAQ</p>
        <h1 className="font-display text-5xl leading-[0.95] text-text sm:text-6xl">Common questions</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Mackay Biohazard Cleaning answers common questions about specialist remediation, urgent response, service areas and how the process works.
        </p>
        <div className="mt-12 max-w-5xl">
          <FaqAccordion items={masterFaqs} />
        </div>
      </section>
    </>
  );
}
