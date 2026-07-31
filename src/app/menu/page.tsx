import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MenuBrowser } from "@/components/MenuBrowser";
import { JsonLd } from "@/components/JsonLd";
import { menu } from "@/content/menu";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Pal Café's full specialty coffee, dessert, and all-day dining menu in Khalifa City, Abu Dhabi — with real prices in AED.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-border bg-bg-soft py-16 sm:py-20">
        <Container className="flex flex-col gap-3 text-center items-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Our Menu
          </span>
          <h1 className="max-w-2xl text-balance font-display text-4xl sm:text-5xl">
            Coffee, breakfast &amp; desserts
          </h1>
          <p className="max-w-xl text-balance text-text-soft">
            All prices in AED. Search or filter by category to find your next order — then tap
            Order Now to check out on our digital menu.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <MenuBrowser />
        </Container>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Menu",
          name: `${site.name} Menu`,
          hasMenuSection: menu.map((category) => ({
            "@type": "MenuSection",
            name: category.name,
            hasMenuItem: category.items.map((item) => ({
              "@type": "MenuItem",
              name: item.name,
              description: item.description,
              offers: {
                "@type": "Offer",
                price: item.price,
                priceCurrency: "AED",
              },
            })),
          })),
        }}
      />
    </>
  );
}
