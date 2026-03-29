import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        accentLt: 'var(--color-accent-lt)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        cta: 'var(--color-cta)',
        ctaHover: 'var(--color-cta-hover)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
