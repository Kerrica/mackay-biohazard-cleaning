
import Image from 'next/image';
import type { Metadata } from 'next';
import { locations } from '@/lib/locations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LocationCard } from '@/components/ui/LocationCard';

export const metadata: Metadata = {
  title: 'Locations | Mackay Biohazard Cleaning',
  description: 'Regional service coverage across Mackay, the Whitsundays, Bowen Basin and surrounding centres.',
  alternates: { canonical: '/locations/' },
};

export default function LocationsPage() {
  return (
    <section className="container-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <SectionHeading
          eyebrow="Regional Coverage"
          title="Locations We Service"
          description="Mackay Biohazard Cleaning provides response coverage across major centres and surrounding communities throughout the wider region."
        />
        <div className="soft-panel overflow-hidden">
          <Image src="/images/biohazard-cleaning-mackay-on-site-team.jpg" alt="On-site biohazard cleaning team in Mackay" width={1200} height={900} className="h-full min-h-[300px] w-full object-cover" />
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {locations.map((location) => (
          <LocationCard
            key={location.slug}
            name={location.name}
            href={`/locations/${location.slug}/`}
            responseTime={location.responseTime}
            summary={location.summary}
          />
        ))}
      </div>
    </section>
  );
}
