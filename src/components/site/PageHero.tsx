export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="surface-deep">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function Section({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-muted" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">{children}</div>
    </section>
  );
}
