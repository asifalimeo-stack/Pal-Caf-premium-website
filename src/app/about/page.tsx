import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Heart, Leaf, Sparkles, Users, Wheat } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission, and coffee philosophy behind Pal Café — a specialty coffee and dessert house in Khalifa City, Abu Dhabi.",
  alternates: { canonical: "/about" },
};

const commitments = [
  {
    icon: Coffee,
    title: "Specialty Coffee Commitment",
    text: "We treat coffee as a craft — specialty-grade beans, dialled-in espresso, and a full hand-brew bar (V60, Chemex, Kalita, Aeropress) for guests who want to taste a bean's full character.",
  },
  {
    icon: Wheat,
    title: "Fresh Ingredients",
    text: "We source ingredients locally wherever possible and support sustainable practices — our breakfast, bowls, and sandwiches are built from produce prepared daily.",
  },
  {
    icon: Sparkles,
    title: "Premium Desserts",
    text: "From classic tiramisu to Umm Ali and pecan cheesecake, our dessert case pairs global favorites with a few Pal Café originals.",
  },
  {
    icon: Users,
    title: "Customer Experience",
    text: "A comfortable, inviting space to relax, work, or socialize — everyone is welcome, whether it's a quick espresso or a long afternoon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/pal-sign-station.jpg"
            alt="The PAL sign above the coffee station"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/55 to-espresso-deep/15" />
        </div>
        <Container className="relative z-10 pb-16 pt-32">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-cream/80">
            About Pal Café
          </span>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl text-cream sm:text-5xl md:text-6xl">
            Brewed with passion. Served with soul.
          </h1>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl lg:order-1">
            <Image
              src="/brand/pal-sign-cups.jpg"
              alt="The PAL sign above stacked branded cups"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <SectionHeading align="left" eyebrow="About PAL" title="Why Pal Café exists" />
            <p className="text-base leading-relaxed text-text-soft">
              At PAL Café, we believe that the best stories are shared over coffee. More than
              just a café, PAL is a space dedicated to authentic connection, meaningful
              conversations, and celebrating the beauty of diversity.
            </p>
            <p className="text-base leading-relaxed text-text-soft">
              Rooted in comfort and casual vibes, PAL is a home for creativity and community — a
              place where friendships are formed, stories are told, and everyone feels welcome.
            </p>
            <p className="text-base leading-relaxed text-text-soft">
              Established in Khalifa City, one of Abu Dhabi&apos;s most vibrant and diverse
              areas, our location reflects our core values of inclusivity and togetherness. With
              easy access for local residents and proximity to major offices like Etihad, Madar,
              Nawah, ENEC, and Yas, PAL serves a thriving community of over 5,000 professionals
              and families.
            </p>
            <p className="text-base leading-relaxed text-text-soft">
              PAL is not just a name — it&apos;s a way of being. A way to connect, communicate,
              and celebrate life&apos;s moments together.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24">
        <Container className="grid gap-10 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8">
            <Heart className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-display text-2xl">Our Mission</h2>
            <p className="text-sm leading-relaxed text-text-soft">
              Our mission is to provide customers with a comfortable and inviting environment
              where they can enjoy high-quality coffee, tea, and food. We are dedicated to
              sourcing our ingredients locally and supporting sustainable practices whenever
              possible. Pal Café is committed to creating a space where everyone feels welcome —
              a place to relax, work, or socialize. As we continue to grow, we aim to expand our
              presence across the GCC, bringing our unique café experience to new communities and
              customers.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8">
            <Sparkles className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-display text-2xl">Our Vision</h2>
            <p className="text-sm leading-relaxed text-text-soft">
              To create a warm and welcoming space where people can connect over exceptional
              coffee, delicious food, and a relaxed atmosphere — and to expand this experience to
              customers across the GCC.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Coffee Philosophy"
            title="Brewed with intention, not rushed"
            description="We believe great coffee is a process, not a shortcut — from sourcing to the final pour."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex flex-col gap-3 rounded-2xl border border-border p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso/10 text-accent">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="text-sm leading-relaxed text-text-soft">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/brand/barista-pourover.jpg"
              alt="A Pal Café barista preparing filter coffee"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="flex flex-col gap-4">
            <SectionHeading align="left" eyebrow="Leadership" title="Mohammed Alqahtani" />
            <p className="text-base leading-relaxed text-text-soft">
              A passionate Emirati leader dedicated to directing the company toward its core
              goals. As an executive team member and one of the key figures in establishing the
              organization, he plays a vital role in shaping its strategic direction — overseeing
              managerial-level employment decisions and leading a team of executives in
              evaluating major corporate initiatives, including acquisitions, mergers, joint
              ventures, and large-scale expansions.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-espresso px-8 py-16 text-center text-cream">
            <Leaf className="h-8 w-8 text-accent" strokeWidth={1.5} />
            <h2 className="max-w-xl text-balance font-display text-3xl sm:text-4xl">
              Come taste the difference specialty coffee makes.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={site.order.qlub} external variant="gold">
                Order Now
              </Button>
              <Button href="/menu" variant="outline" className="!border-cream/30 !text-cream hover:!border-cream">
                View Menu
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
