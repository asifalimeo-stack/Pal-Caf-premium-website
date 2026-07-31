"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryFilters, galleryImages, type GalleryTag } from "@/content/gallery";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";

function GalleryTile({
  src,
  label,
  variant,
}: {
  src?: string;
  label: string;
  variant: number;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover"
      />
    );
  }
  return <PlaceholderImage label={label} variant={variant} />;
}

export function GalleryGrid() {
  const [filter, setFilter] = useState<"all" | GalleryTag>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryImages : galleryImages.filter((g) => g.tag === filter)),
    [filter]
  );

  const activeImage = activeIndex !== null ? filtered[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, filtered.length]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-center gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              filter === f.id
                ? "border-accent bg-accent text-espresso-deep"
                : "border-border text-text-soft hover:border-accent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {filtered.map((image, i) => (
          <Reveal key={image.id} delay={(i % 8) * 50} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative block w-full overflow-hidden rounded-xl ${
                image.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <GalleryTile src={image.src} label={image.label} variant={i} />
            </button>
          </Reveal>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso-deep/95 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 text-cream/80 hover:text-cream"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream sm:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryTile src={activeImage.src} label={activeImage.label} variant={activeIndex ?? 0} />
          </div>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream sm:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
