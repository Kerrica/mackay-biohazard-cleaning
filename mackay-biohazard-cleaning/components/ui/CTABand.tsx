import { Button } from './Button';
import { siteConfig } from '@/lib/site';

export function CTABand() {
  return (
    <section className="rounded-[2rem] bg-accent px-6 py-10 text-bg sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-black/70">24/7 Emergency Response</p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Available 24 Hours. Call for an Immediate Response.</h2>
        </div>
        <Button href={`tel:${siteConfig.phone}`} className="bg-bg text-text hover:bg-surface">
          Call Now
        </Button>
      </div>
    </section>
  );
}
