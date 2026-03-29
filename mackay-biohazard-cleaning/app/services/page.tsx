import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';

export const metadata: Metadata = {
  title: 'Services | Mackay Biohazard Cleaning',
  description: 'Explore specialist biohazard, trauma and hoarding cleanup services across Mackay and surrounding regions.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  const imageMap: Record<string, string> = {
    'biohazard-cleaning': '/images/biohazard-service-card.svg',
    'trauma-crime-scene-cleaning': '/images/trauma-cleaning-service-card.svg',
    'hoarding-cleaning': '/images/hoarding-cleaning-service-card.svg',
  };

  return (
    <section className="container-shell py-24">
      <SectionHeading
        eyebrow="Services"
        title="Specialist Remediation Services"
        description="Mackay Biohazard Cleaning provides targeted service lines for contaminated, traumatic and high-sensitivity environments across the wider region."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.shortName}
            description={service.description}
            href={`/services/${service.slug}/`}
            image={imageMap[service.slug]}
            alt={service.heroAlt}
          />
        ))}
      </div>
    </section>
  );
}
