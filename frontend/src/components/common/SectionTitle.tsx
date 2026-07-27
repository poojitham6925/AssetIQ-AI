interface Props {
  badge?: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-7 text-zinc-400">
        {description}
      </p>

    </div>
  );
}