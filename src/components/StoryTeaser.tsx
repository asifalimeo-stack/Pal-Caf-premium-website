import Image from "next/image";
import { Coffee, Leaf, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const pillars = [
  {
    icon: Coffee,
    title: "Specialty-grade beans",
    text: "Espresso and filter coffee brewed from carefully sourced, specialty-grade beans.",
  },
  {
    icon: Leaf,
    title: "Fresh, considered ingredients",
    text: "Breakfast, bowls, and desserts made from fresh ingredients, prepared daily.",
  },
  {
    icon: Sparkles,
    title: "A space to slow down",
    text: "A warm, elegant room in Khalifa City designed for coffee to be savored, not rushed.",
  },
];

export function StoryTeaser() {
  return (
    <section id="story" className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl lg:order-1">
          <Image
            src="/brand/barista-pourover.jpg"
            alt="Pal Café barista preparing a pour-over"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Philosophy"
            title="Coffee, made with intention."
            description="Pal Café was built around a simple idea: specialty coffee and honest desserts, served in a space that feels considered — not rushed. Every cup is brewed to order, every pastry case restocked fresh."
          />
          <div className="flex flex-col gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso/10 text-accent">
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-text-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Button href="/about" variant="ghost" className="!px-0">
              Read our full story →
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
