import Link from 'next/link';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-[#1f3d61] bg-[#102845] text-white">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-none text-white">Mackay <span className="text-[#d0a233]">Biohazard</span> Cleaning</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
            Biohazard, trauma, hoarding and complex property recovery services across Mackay and surrounding regions.
            Fully insured, discreet and available 24/7 for urgent response.
          </p>
          <p className="mt-4 text-sm text-white/60">A service by KC&apos;s Clutter Cure</p>
          <p className="mt-2 text-sm text-white/55">{siteConfig.abn}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d0a233]">Navigation</h3>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <Link href="/services/" className="block hover:text-white">Services</Link>
            <Link href="/locations/" className="block hover:text-white">Locations</Link>
            <Link href="/about/" className="block hover:text-white">About</Link>
            <Link href="/contact/" className="block hover:text-white">Contact</Link>
            <Link href="/privacy-policy/" className="block hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d0a233]">Service Area</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/75">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="hover:text-white">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#1f3d61] py-6 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Mackay Biohazard Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
