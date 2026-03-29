type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl leading-[0.95] text-text sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
