import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mackay Biohazard Cleaning",
  description: "Biohazard, trauma, hoarding and property recovery services across Mackay and surrounding regions."
};

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="text-[20px] font-black uppercase tracking-tight text-slate-900">
          MACKAY <span className="text-brand-teal">BIOHAZARD</span> CLEANING
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link href="/services" className="site-nav-link">Services</Link>
          <Link href="/locations" className="site-nav-link">Locations</Link>
          <Link href="/about" className="site-nav-link">About</Link>
          <Link href="/faq" className="site-nav-link">FAQ</Link>
          <Link href="/contact" className="site-nav-link">Contact</Link>
        </nav>

        <div className="flex items-center gap-5">
          <a href="tel:0405450705" className="hidden text-[18px] font-bold text-slate-700 md:block">
            0405 450 705
          </a>
          <a href="tel:0405450705" className="btn-primary">Call Now</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-[#0f2230] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-2xl font-bold">Mackay Biohazard Cleaning</h3>
          <p className="max-w-xs text-slate-300">
            Discreet, practical and structured property recovery support across Mackay and surrounding regions.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold">Services</h4>
          <ul className="space-y-3 text-slate-300">
            <li><Link href="/services">Biohazard Cleaning</Link></li>
            <li><Link href="/services">Trauma & Crime Scene</Link></li>
            <li><Link href="/services">Hoard & Squalor Recovery</Link></li>
            <li><Link href="/services">Decluttering</Link></li>
            <li><Link href="/services">Crisis Navigation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold">Company</h4>
          <ul className="space-y-3 text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold">24/7 Urgent Response Line</h4>
          <a href="tel:0405450705" className="text-4xl font-black text-[#ef4f45]">
            0405 450 705
          </a>
          <p className="mt-4 max-w-xs text-slate-300">
            Call for urgent situations, odour concerns, welfare-related property recovery and time-sensitive support.
          </p>
        </div>
      </div>

      <div className="container-shell border-t border-white/10 py-6 text-sm text-slate-400">
        © 2026 Mackay Biohazard Cleaning. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
