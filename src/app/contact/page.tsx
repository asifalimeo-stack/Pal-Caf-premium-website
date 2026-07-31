import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site, telHref, whatsappHref } from "@/content/site";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pal Café in Etihad Plaza, Khalifa City, Abu Dhabi — phone, WhatsApp, Instagram, and directions.",
  alternates: { canonical: "/contact" },
};

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    value: site.address.full,
    href: site.address.googleMapsUrl,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: telHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-bg-soft py-16 text-center sm:py-20">
        <Container className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Contact
          </span>
          <h1 className="max-w-2xl text-balance font-display text-4xl sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <SectionHeading align="left" eyebrow="Get In Touch" title="Send us a message" />
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6">
              {infoItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 text-sm"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-text-soft">
                      {item.label}
                    </span>
                    <span className="text-text">{item.value}</span>
                  </span>
                </a>
              ))}

              <div className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-text-soft">
                    Hours
                  </span>
                  <ul className="mt-1 space-y-0.5 text-text">
                    {site.hours.map((h) => (
                      <li key={h.days}>
                        {h.days}: {h.time}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-text hover:border-accent hover:text-accent"
                >
                  <InstagramIcon className="h-4 w-4" /> Instagram
                </a>
              </div>
            </Reveal>

            <Reveal>
              <MapEmbed className="aspect-[4/3]" />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
