import Link from 'next/link';
import { locations } from '@/lib/locations';
import { siteConfig } from '@/lib/site';

const coreServices = [
  { href: '/services/biohazard-cleaning/', label: 'Biohazard Cleaning' },
  { href: '/services/trauma-crime-scene-cleaning/', label: 'Trauma & Crime Scene Cleaning' },
  { href: '/services/hoarding-cleaning/', label: 'Hoarding & Squalor Recovery' },
  { href: '/contact/', label: 'Decluttering & Property Reset' },
  { href: '/contact/', label: 'Crisis Navigation' },
];

export function Footer() {
  return (
    <footer className="bg-[#112b4b] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.95fr_0.75fr_1fr_1fr]">
          <div>
            <p className="font-display text-[2.2rem] leading-none text-white">Mackay <span className="text-[#78c1cb]">Biohazard</span> Cleaning</p>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-8 text-white/82">
              Professional, discreet and practical remediation support for biohazard, trauma, hoarding and complex property recovery situations.
            </p>
            <p className="mt-5 text-sm text-white/60">A service by KC&apos;s Clutter Cure</p>
          </div>

          <div>
            <h3 className="text-[1.45rem] font-semibold text-white">Services</h3>
            <div className="mt-4 space-y-3 text-[1.02rem] text-white/80">
              {coreServices.map((item) => (
                <Link key={item.label} href={item.href} className="block hover:text-white">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.45rem] font-semibold text-white">Company</h3>
            <div className="mt-4 space-y-3 text-[1.02rem] text-white/80">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/about/" className="block hover:text-white">About</Link>
              <Link href="/contact/" className="block hover:text-white">Contact</Link>
              <Link href="/faq/" className="block hover:text-white">FAQ</Link>
              <Link href="/privacy-policy/" className="block hover:text-white">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[1.45rem] font-semibold text-white">Service Areas</h3>
            <div className="mt-4 space-y-3 text-[1.02rem] text-white/80">
              {locations.slice(0, 6).map((location) => (
                <Link key={location.slug} href={`/locations/${location.slug}/`} className="block hover:text-white">{location.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.45rem] font-semibold text-white">24/7 Urgent Response Line</h3>
            <a href={`tel:${siteConfig.phone}`} className="mt-4 block font-display text-[2.4rem] leading-none text-[#ef5a4f]">{siteConfig.formattedPhone}</a>
            <p className="mt-5 text-[1.02rem] leading-8 text-white/82">
              Phone lines are open 24/7 for urgent assistance, emergency coordination and immediate next-step advice.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/14 pt-8 text-sm text-white/60 lg:flex lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Mackay Biohazard Cleaning. All rights reserved.</p>
          <p className="mt-3 lg:mt-0">Discreetly providing specialist remediation and recovery services.</p>
        </div>
      </div>
    </footer>
  );
}
