import { Coffee, ImageIcon } from "lucide-react";

const PALETTES = [
  "from-[#3b2a21] via-[#5a4130] to-[#b6893f]",
  "from-[#e4d5b7] via-[#d9b877] to-[#b6893f]",
  "from-[#2a1d16] via-[#3b2a21] to-[#6b5c4f]",
];

/**
 * Elegant, clearly-labeled stand-in for real photography.
 * Swap for a real <Image> once photos are supplied — every placeholder is
 * intentionally styled so it never reads as an actual product/site photo.
 */
export function PlaceholderImage({
  label,
  variant = 0,
  className = "",
  icon = true,
}: {
  label: string;
  variant?: number;
  className?: string;
  icon?: boolean;
}) {
  const palette = PALETTES[variant % PALETTES.length];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${palette} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-cream/90">
        {icon ? <Coffee className="h-6 w-6 opacity-70" strokeWidth={1.5} /> : <ImageIcon className="h-6 w-6 opacity-70" strokeWidth={1.5} />}
        <span className="font-display text-xs tracking-[0.18em] uppercase opacity-80">
          {label}
        </span>
        <span className="text-[10px] tracking-wide opacity-60">Photo coming soon</span>
      </div>
    </div>
  );
}
