import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

export function ServiceCard({ title, description, href, image, alt }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-panel">
      <Image src={image} alt={alt} width={800} height={520} className="h-56 w-full object-cover" />
      <div className="p-6">
        <div className="mb-4 h-10 w-10 rounded-full bg-accent/15 ring-1 ring-accent/30" />
        <h3 className="font-display text-2xl uppercase text-text">{title}</h3>
        <p className="mt-3 min-h-14 text-sm leading-7 text-slate-300">{description}</p>
        <Link href={href} className="mt-5 inline-flex text-sm font-medium text-accent hover:text-accentLt">
          Learn More
        </Link>
      </div>
    </article>
  );
}
