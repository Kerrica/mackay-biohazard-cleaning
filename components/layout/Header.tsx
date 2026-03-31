import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site';

const navItems = [
  { href: '/services/', label: 'Services' },
  { href: '/locations/', label: 'Locations' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="font-display text-[1.8rem] leading-none text-slate-900 sm:text-[2rem]">
          Mackay <span className="text-cyan-700">Biohazard</span> Cleaning
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.98rem] font-semibold text-slate-700 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={`tel:${siteConfig.phone}`} className="text-[1.02rem] font-semibold text-slate-900">
            {siteConfig.formattedPhone}
          </a>
          <Button href={`tel:${siteConfig.phone}`} className="bg-red-500 text-white shadow-none hover:bg-red-600">
            Call Now
          </Button>
        </div>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.12)]">
            <div className="mb-4 text-sm font-semibold text-slate-900">{siteConfig.formattedPhone}</div>
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <Button href={`tel:${siteConfig.phone}`} className="mt-4 w-full bg-cta text-white shadow-none hover:bg-ctaHover">Call Now</Button>
          </div>
        </details>
      </div>
    </header>
  );
}
