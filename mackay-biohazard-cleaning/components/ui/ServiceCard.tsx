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
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_52px_rgba(31,41,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,41,51,0.12)]">
      <div className="relative">
        <Image src={image} alt={alt} width={800} height={520} className="h-56 w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/18 to-transparent" />
      </div>
      <div className="p-7">
        <div className="mb-4 h-11 w-11 rounded-full bg-amber-50 ring-1 ring-accent/30" />
        <h3 className="font-display text-[2rem] leading-none text-text">{title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-7 text-slate-600">{description}</p>
        <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-slate-900 underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
          Learn More
        </Link>
      </div>
    </article>
  );
}
