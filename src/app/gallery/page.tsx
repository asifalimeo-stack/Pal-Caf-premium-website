import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Pal Café — coffee, desserts, drinks, and the space itself in Khalifa City, Abu Dhabi.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-bg-soft py-16 text-center sm:py-20">
        <Container className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Gallery
          </span>
          <h1 className="max-w-2xl text-balance font-display text-4xl sm:text-5xl">
            A look inside Pal Café
          </h1>
          <p className="max-w-xl text-balance text-text-soft">
            Real photography is on its way — this gallery will be updated with images from our
            space, our coffee, and our guests.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
