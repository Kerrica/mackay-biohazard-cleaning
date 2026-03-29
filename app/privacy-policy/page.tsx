import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mackay Biohazard Cleaning',
  description: 'Privacy policy for Mackay Biohazard Cleaning.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container-shell py-24">
      <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">Privacy Policy</h1>
      <div className="prose-copy mt-8 max-w-4xl space-y-6">
        <p>Mackay Biohazard Cleaning collects only the contact and job-related information reasonably required to respond to enquiries, assess service needs and communicate about a requested service.</p>
        <p>Information submitted through the website contact form is processed through the nominated form endpoint and used solely for service response and follow-up. No advertising cookies or tracking systems are required for this static site.</p>
        <p>Personal information is handled discreetly and is not sold. Where information must be shared for service delivery, it is limited to what is necessary for that purpose.</p>
        <p>For privacy-related questions, callers can use the main contact number listed on the website.</p>
      </div>
    </section>
  );
}
