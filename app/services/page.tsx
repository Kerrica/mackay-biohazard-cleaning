import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services | Mackay Biohazard Cleaning',
  description: 'Explore specialist biohazard, trauma, hoarding, decluttering and crisis navigation services across Mackay and surrounding regions.',
  alternates: { canonical: '/services/' },
};

const imageMap: Record<string, string> = {
  'biohazard-cleaning': '/images/biohazard-cleaning-mackay-on-site-team.jpg',
  'trauma-crime-scene-cleaning': '/images/trauma-cleaning-mackay-ppe-doorway.jpg',
  'hoarding-cleaning': '/images/hoarding-kitchen-mackay-before.jpg',
};

const supportServices = [
  {
    title: 'Decluttering & Property Reset',
    description: 'Practical clearing, sorting and reset work for homes, rooms and storage zones that need structure restored.',
    href: '/contact/',
    image: '/images/storage-declutter-mackay-before.jpg',
    alt: 'Storage area before decluttering in Mackay',
  },
  {
    title: 'Crisis Navigation',
    description: 'Supportive, practical guidance when the situation is complex and the next step is not obvious.',
    href: '/contact/',
    image: '/images/biohazard-cleaning-technician-mackay-ppe-suit.png',
    alt: 'Biohazard cleaning technician in PPE in Mackay',
  },
];

export default function ServicesPage() {
  return (
    <section className="container-shell py-24">
      <SectionHeading
        eyebrow="Services"
        title="Specialist remediation services"
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

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f9fcfc_0%,#edf4f4_100%)] p-8 shadow-[0_14px_34px_rgba(23,49,58,0.06)] lg:p-10">
        <SectionHeading
          eyebrow="Additional support"
          title="Decluttering and crisis navigation are also available"
          description="Some enquiries do not need a full remediation response. They need a clear starting point, practical organisation or a calm plan that moves the situation forward."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {supportServices.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(23,49,58,0.08)]">
              <div className="grid gap-0 md:grid-cols-[0.45fr_0.55fr]">
                <div className="relative min-h-[250px]">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[2rem] leading-none text-text">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  <Link href={service.href} className="mt-5 inline-flex rounded-full border border-[#c9d8db] px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent">Find Out More</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
