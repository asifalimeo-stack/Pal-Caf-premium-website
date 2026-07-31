import Image from "next/image";
import type { MenuItem } from "@/content/menu";
import { PlaceholderImage } from "./PlaceholderImage";

export function ProductCard({ item, variant = 0 }: { item: MenuItem; variant?: number }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(59,42,33,0.35)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <PlaceholderImage label={item.name} variant={variant} />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug">{item.name}</h3>
          <span className="shrink-0 whitespace-nowrap font-display text-lg text-accent">
            {item.price === 0 ? "Free" : `AED ${item.price}`}
          </span>
        </div>
        {item.description ? (
          <p className="text-sm leading-relaxed text-text-soft">{item.description}</p>
        ) : null}
      </div>
    </article>
  );
}
