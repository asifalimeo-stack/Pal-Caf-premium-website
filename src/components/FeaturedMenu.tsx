import { featuredSlugs, findItem } from "@/content/menu";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Container } from "./Container";

export function FeaturedMenu() {
  const items = featuredSlugs
    .map((slug) => findItem(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <section className="py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Fan Favorites"
          title="What guests keep coming back for"
          description="A few signatures from our specialty coffee bar and dessert case — the full menu has much more."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ item }, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <ProductCard item={item} variant={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center">
          <Button href="/menu" variant="outline">
            View Full Menu
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
