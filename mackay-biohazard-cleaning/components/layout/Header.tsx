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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="font-display text-xl leading-none text-text sm:text-2xl">
          Mackay <span className="text-accent">Biohazard</span> Cleaning
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.phone}`} className="text-sm font-semibold text-slate-700">
            {siteConfig.formattedPhone}
          </a>
          <Button href={`tel:${siteConfig.phone}`}>Call Now</Button>
        </div>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_48px_rgba(31,41,51,0.12)]">
            <div className="mb-4 text-sm font-semibold text-slate-700">{siteConfig.formattedPhone}</div>
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  {item.label}
                </Link>
              ))}
            </div>
            <Button href={`tel:${siteConfig.phone}`} className="mt-4 w-full">Call Now</Button>
          </div>
        </details>
      </div>
    </header>
  );
}
