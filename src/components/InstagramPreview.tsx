import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { site } from "@/content/site";
import { InstagramIcon } from "./icons/InstagramIcon";

export function InstagramPreview() {
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Follow Along"
          title={`Find us ${site.social.instagramHandle}`}
          description="New drinks, seasonal menus, and behind-the-counter moments — posted first on Instagram."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 60} className="aspect-square overflow-hidden rounded-xl">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <PlaceholderImage label="@palcafe.ae" variant={i} icon={i % 2 === 0} />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center">
          <Button href={site.social.instagram} external variant="outline">
            <InstagramIcon className="h-4 w-4" /> Follow on Instagram
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
