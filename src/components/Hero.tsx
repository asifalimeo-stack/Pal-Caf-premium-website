import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "./Button";
import { site } from "@/content/site";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/brand/interior-bar.jpg"
          alt="Pal Café interior — coffee bar and seating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/60 to-espresso-deep/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8">
        <span className="reveal is-visible inline-block rounded-full border border-cream/25 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cream/80">
          Etihad Plaza · Khalifa City · Abu Dhabi
        </span>
        <h1 className="reveal is-visible mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Specialty coffee, crafted with intention.
        </h1>
        <p className="reveal is-visible mt-6 max-w-xl text-balance text-base leading-relaxed text-cream/80 sm:text-lg">
          Pal Café is a specialty coffee and dessert house — hand-brewed single origins,
          signature drinks, and premium pastries in the heart of Khalifa City.
        </p>
        <div className="reveal is-visible mt-8 flex flex-wrap gap-4">
          <Button href={site.order.qlub} external variant="gold">
            Order Now
          </Button>
          <Button href="/menu" variant="outline" className="!border-cream/30 !text-cream hover:!border-cream">
            View Menu
          </Button>
        </div>

        <div className="reveal is-visible mt-6 flex flex-wrap gap-3">
          <a
            href={site.order.qlub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            Digital Menu (Qlub)
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            <InstagramIcon className="h-3.5 w-3.5" /> Instagram
          </a>
          <a
            href={site.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            <MapPin className="h-3.5 w-3.5" /> Google Maps
          </a>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/70"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
