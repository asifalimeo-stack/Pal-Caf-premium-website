import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { nav, site, telHref } from "@/content/site";
import { Container } from "./Container";
import { Newsletter } from "./Newsletter";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-bg-soft">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-display text-2xl">{site.name}</span>
          <p className="max-w-xs text-sm leading-relaxed text-text-soft">{site.description}</p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-text-soft transition-colors hover:text-accent"
          >
            <InstagramIcon className="h-4 w-4" /> {site.social.instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
            Explore
          </h3>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-text-soft hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
            Visit
          </h3>
          <a
            href={site.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-text-soft hover:text-accent"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{site.address.full}</span>
          </a>
          <a href={telHref} className="flex items-center gap-2 text-sm text-text-soft hover:text-accent">
            <Phone className="h-4 w-4 shrink-0" />
            {site.phoneDisplay}
          </a>
          <ul className="mt-1 space-y-1 text-sm text-text-soft">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="text-text">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
            Stay in the loop
          </h3>
          <p className="text-sm text-text-soft">
            New menu drops and promotions, straight to your inbox.
          </p>
          <Newsletter />
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-text-soft sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span>Etihad Plaza, Khalifa City, Abu Dhabi, UAE</span>
        </Container>
      </div>
    </footer>
  );
}
