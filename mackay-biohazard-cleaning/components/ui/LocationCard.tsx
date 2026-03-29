import Link from 'next/link';

type Props = {
  name: string;
  href: string;
  responseTime: string;
  summary: string;
};

export function LocationCard({ name, href, responseTime, summary }: Props) {
  return (
    <article className="rounded-3xl border border-white/10 bg-surface p-6">
      <h3 className="font-display text-2xl uppercase">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
      <p className="mt-4 text-sm text-accent">{responseTime}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-medium text-slate-100 hover:text-accent">
        View local page
      </Link>
    </article>
  );
}
