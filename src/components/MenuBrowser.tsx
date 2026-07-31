"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { menu } from "@/content/menu";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function MenuBrowser() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const normalizedQuery = query.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return null;
    const scoped = activeCategory === "all" ? menu : menu.filter((c) => c.id === activeCategory);
    return scoped.flatMap((category) =>
      category.items
        .filter(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description?.toLowerCase().includes(normalizedQuery)
        )
        .map((item) => ({ item, category }))
    );
  }, [normalizedQuery, activeCategory]);

  const visibleCategories =
    activeCategory === "all" ? menu : menu.filter((c) => c.id === activeCategory);

  return (
    <div className="flex flex-col gap-10">
      <div className="sticky top-[64px] z-30 -mx-5 border-b border-border bg-bg/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-soft" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu — e.g. matcha, croissant, wagyu"
              aria-label="Search menu"
              className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-11 text-sm text-text placeholder:text-text-soft focus:border-accent focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-soft hover:text-accent"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === "all"
                  ? "border-accent bg-accent text-espresso-deep"
                  : "border-border text-text-soft hover:border-accent hover:text-accent"
              }`}
            >
              All
            </button>
            {menu.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === category.id
                    ? "border-accent bg-accent text-espresso-deep"
                    : "border-border text-text-soft hover:border-accent hover:text-accent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {searchResults ? (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-text-soft">
            {searchResults.length} result{searchResults.length === 1 ? "" : "s"} for &ldquo;
            {query}&rdquo;
          </p>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {searchResults.map(({ item }, i) => (
                <ProductCard key={item.slug} item={item} variant={i} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-text-soft">
              No items matched. Try a different search term.
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-16">
          {visibleCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-40">
              <Reveal className="mb-6 flex flex-col gap-1">
                <h2 className="font-display text-2xl sm:text-3xl">{category.name}</h2>
                {category.blurb ? (
                  <p className="text-sm text-text-soft">{category.blurb}</p>
                ) : null}
              </Reveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <Reveal key={item.slug} delay={(i % 6) * 60}>
                    <ProductCard item={item} variant={i} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
