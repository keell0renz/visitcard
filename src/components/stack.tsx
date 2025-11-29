export function Stack() {
  const items = [
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Supabase',
    'Python',
    'FastAPI',
    'Machine Learning',
  ];

  return (
    <section className="mb-8">
      <h2 className="text-white font-medium tracking-tight text-lg mb-6">
        Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="px-3 py-1.5 rounded bg-neutral-900/50 border border-white/5 text-xs text-neutral-400 hover:text-white transition-colors cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
