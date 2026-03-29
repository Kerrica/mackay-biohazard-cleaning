import Link from 'next/link';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-none text-text">Mackay <span className="text-accent">Biohazard</span> Cleaning</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Practical, discreet biohazard, trauma and hoarding cleanup services across Mackay and surrounding regions.
            Available 24/7 for urgent response.
          </p>
          <p className="mt-4 text-sm text-slate-500">{siteConfig.abn}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Navigation</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/services/" className="block hover:text-slate-900">Services</Link>
            <Link href="/locations/" className="block hover:text-slate-900">Locations</Link>
            <Link href="/about/" className="block hover:text-slate-900">About</Link>
            <Link href="/contact/" className="block hover:text-slate-900">Contact</Link>
            <Link href="/privacy-policy/" className="block hover:text-slate-900">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Service Area</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="hover:text-slate-900">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mackay Biohazard Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
