import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '' }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition';
  const styles = {
    primary: 'bg-cta text-white hover:bg-ctaHover shadow-[0_12px_28px_rgba(196,154,44,0.25)]',
    ghost: 'border border-slate-300 bg-white text-text hover:border-slate-400 hover:bg-slate-50',
    outline: 'border border-accent/60 bg-transparent text-text hover:border-accent hover:bg-amber-50',
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
