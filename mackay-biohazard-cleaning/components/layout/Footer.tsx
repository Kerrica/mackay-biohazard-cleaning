import Link from 'next/link';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/80">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl uppercase">Mackay <span className="text-accent">Biohazard</span> Cleaning</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Specialist biohazard, trauma and hoarding cleanup services across the Mackay region.
            Discreet, compliant and available 24/7 for urgent response.
          </p>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.abn}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.25em] text-accent">Navigation</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/services/" className="block hover:text-white">Services</Link>
            <Link href="/locations/" className="block hover:text-white">Locations</Link>
            <Link href="/about/" className="block hover:text-white">About</Link>
            <Link href="/contact/" className="block hover:text-white">Contact</Link>
            <Link href="/privacy-policy/" className="block hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.25em] text-accent">Service Area</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="hover:text-white">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mackay Biohazard Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
