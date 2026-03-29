
import Link from 'next/link';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-[#2d5c62] bg-[#123944] text-white">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-none text-white">Mackay <span className="text-[#78b8bf]">Biohazard</span> Cleaning</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
            Biohazard, trauma, hoarding, decluttering and complex property recovery services across Mackay and surrounding regions.
            Fully insured, discreet and available 24/7 for urgent response.
          </p>
          <p className="mt-4 text-sm text-white/65">A service by KC&apos;s Clutter Cure</p>
          <p className="mt-2 text-sm text-white/55">{siteConfig.abn}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#78b8bf]">Navigation</h3>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            <Link href="/services/" className="block hover:text-white">Services</Link>
            <Link href="/locations/" className="block hover:text-white">Locations</Link>
            <Link href="/about/" className="block hover:text-white">About</Link>
            <Link href="/contact/" className="block hover:text-white">Contact</Link>
            <Link href="/privacy-policy/" className="block hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#78b8bf]">Service Area</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/78">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}/`} className="hover:text-white">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#2d5c62] py-6 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Mackay Biohazard Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
