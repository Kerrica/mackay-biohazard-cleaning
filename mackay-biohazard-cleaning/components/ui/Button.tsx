import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '' }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition';
  const styles = {
    primary: 'bg-cta text-bg hover:bg-ctaHover',
    ghost: 'border border-white/20 bg-white/5 text-text hover:bg-white/10',
    outline: 'border border-accent/60 text-text hover:border-accent hover:bg-accent/10',
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
