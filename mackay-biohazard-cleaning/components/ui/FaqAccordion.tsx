type Item = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-white/10 bg-surface p-5">
          <summary className="cursor-pointer list-none text-base font-medium text-text marker:content-none">
            <div className="flex items-center justify-between gap-4">
              <span>{item.question}</span>
              <span className="text-accent transition group-open:rotate-45">+</span>
            </div>
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
