import Link from 'next/link';

type Props = {
  name: string;
  href: string;
  responseTime: string;
  summary: string;
};

export function LocationCard({ name, href, responseTime, summary }: Props) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(31,41,51,0.05)]">
      <h3 className="font-display text-[2rem] leading-none text-text">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
      <p className="mt-4 text-sm font-semibold text-accent">{responseTime}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-slate-900 underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
        View local page
      </Link>
    </article>
  );
}
