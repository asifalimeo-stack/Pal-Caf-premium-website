import { Quote } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { site } from "@/content/site";

export function Testimonials() {
  const slots: (Testimonial | undefined)[] =
    testimonials.length > 0 ? testimonials : Array.from({ length: 3 }, () => undefined);

  return (
    <section className="bg-bg-soft py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Loved by Khalifa City"
          description={
            testimonials.length > 0
              ? undefined
              : `Reviews are on their way — follow ${site.social.instagramHandle} or check our Google listing in the meantime.`
          }
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {slots.map((t, i) =>
            t ? (
              <Reveal
                key={t.author}
                delay={i * 100}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</p>
                <span className="mt-auto text-sm font-medium text-text-soft">
                  {t.author}
                  {t.source ? <span className="text-text-soft/70"> · {t.source}</span> : null}
                </span>
              </Reveal>
            ) : (
              <Reveal
                key={i}
                delay={i * 100}
                className="flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-6 text-center"
              >
                <Quote className="h-6 w-6 text-text-soft/50" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.2em] text-text-soft/70">
                  Review coming soon
                </span>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
