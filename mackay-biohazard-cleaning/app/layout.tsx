import type { Metadata } from 'next';
import { DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components/layout/Layout';
import { siteConfig } from '@/lib/site';
import { SchemaOrg } from '@/components/seo/SchemaOrg';

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const displayFont = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Mackay Biohazard Cleaning',
  description: siteConfig.description,
  openGraph: {
    title: 'Mackay Biohazard Cleaning',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/images/hero-biohazard-cleaning-mackay.svg', width: 1600, height: 900, alt: 'Biohazard cleaning professionals Mackay' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mackay Biohazard Cleaning',
    description: siteConfig.description,
    images: ['/images/hero-biohazard-cleaning-mackay.svg'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en-AU',
  };

  return (
    <html lang="en-AU">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <SchemaOrg id="website-schema" data={websiteSchema} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
