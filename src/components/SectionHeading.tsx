import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance text-base leading-relaxed text-text-soft sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
