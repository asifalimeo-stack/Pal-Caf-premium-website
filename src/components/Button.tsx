import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50";

const variants = {
  primary: "bg-espresso text-cream hover:bg-espresso-deep shadow-[0_8px_24px_-8px_rgba(59,42,33,0.5)] hover:-translate-y-0.5",
  gold: "bg-gold text-espresso-deep hover:brightness-105 shadow-[0_8px_24px_-8px_rgba(182,137,63,0.55)] hover:-translate-y-0.5",
  outline: "border border-current/25 text-text hover:border-accent hover:text-accent",
  ghost: "text-text hover:text-accent",
};

type Variant = keyof typeof variants;

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  external,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
