import { Hero } from "@/components/Hero";
import { StoryTeaser } from "@/components/StoryTeaser";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { Testimonials } from "@/components/Testimonials";
import { InstagramPreview } from "@/components/InstagramPreview";
import { FAQ } from "@/components/FAQ";
import { MapEmbed } from "@/components/MapEmbed";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryTeaser />
      <FeaturedMenu />
      <Testimonials />
      <InstagramPreview />

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visit Us"
              title="Etihad Plaza, Khalifa City"
              description={site.address.full}
            />
            <ul className="mt-6 space-y-1 text-sm text-text-soft">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-text">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
            <Reveal className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Get Directions
              </Button>
              <Button href={site.order.qlub} external variant="outline">
                Order Now
              </Button>
            </Reveal>
          </div>
          <Reveal>
            <MapEmbed className="aspect-[4/3]" />
          </Reveal>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
