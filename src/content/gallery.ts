// Gallery image manifest. Real photos live in /public/brand, sourced from
// Pal Cafe's own PAL Brand Profile PDF and its Google Business listing.
// Entries without `src` fall back to a labeled placeholder tile.
// `tall` controls the masonry span.

export type GalleryTag =
  | "coffee"
  | "desserts"
  | "drinks"
  | "interior"
  | "exterior"
  | "customers"
  | "baristas";

export interface GalleryImage {
  id: string;
  tag: GalleryTag;
  label: string;
  tall?: boolean;
  /** Real photo path in /public — omit to fall back to the placeholder tile. */
  src?: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", tag: "coffee", label: "Espresso pull", tall: true },
  { id: "g2", tag: "interior", label: "Coffee bar & seating" },
  { id: "g3", tag: "desserts", label: "Cheesecake slice" },
  { id: "g4", tag: "drinks", label: "Signature iced drink", tall: true },
  { id: "g5", tag: "baristas", label: "Pouring filter coffee", src: "/brand/barista-pourover.jpg", tall: true },
  { id: "g6", tag: "exterior", label: "Etihad Plaza storefront", src: "/brand/storefront-night.jpg", tall: true },
  { id: "g7", tag: "coffee", label: "Pour-over filter coffee" },
  { id: "g8", tag: "interior", label: "Window seating nook", src: "/brand/window-seating-nook.jpg", tall: true },
  { id: "g9", tag: "customers", label: "Guests enjoying the space" },
  { id: "g10", tag: "desserts", label: "Acai bowl", tall: true },
  { id: "g11", tag: "interior", label: "The PAL sign" },
  { id: "g12", tag: "coffee", label: "Latte art" },
  { id: "g13", tag: "interior", label: "Retail shelf & seating", src: "/brand/retail-shelf-seating.jpg" },
  { id: "g14", tag: "interior", label: "PAL branded cups" },
  { id: "g15", tag: "drinks", label: "Cold brew" },
  { id: "g16", tag: "interior", label: "Counter styling", tall: true },
];

export const galleryFilters: { id: "all" | GalleryTag; label: string }[] = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "customers", label: "Customers" },
  { id: "baristas", label: "Baristas" },
];
