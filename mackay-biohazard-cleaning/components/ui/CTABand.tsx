import { Button } from './Button';
import { siteConfig } from '@/lib/site';

export function CTABand() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#fffdf7_0%,#f7f3e6_100%)] px-6 py-10 shadow-[0_18px_48px_rgba(31,41,51,0.08)] sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">24/7 Emergency Response</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] text-text sm:text-5xl">Need an immediate, discreet response?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Call now to discuss the situation, access requirements and next steps. Clear, practical advice from the first conversation.</p>
        </div>
        <Button href={`tel:${siteConfig.phone}`}>Call Now</Button>
      </div>
    </section>
  );
}
