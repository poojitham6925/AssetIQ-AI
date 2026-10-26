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
    <div className="mx-auto mb-12 max-w-3xl text-center">

      {badge && (
        <span className="inline-flex rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-copy sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>

    </div>
  );
}