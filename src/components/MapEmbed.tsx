import { site } from "@/content/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery
  )}&ll=${site.address.lat},${site.address.lng}&z=17&output=embed`;

  return (
    <div className={`overflow-hidden rounded-3xl border border-border ${className}`}>
      <iframe
        title={`Map to ${site.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full grayscale-[15%]"
      />
    </div>
  );
}
