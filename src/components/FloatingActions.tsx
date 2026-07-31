import { MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/content/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={telHref}
        aria-label="Call Pal Café"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-cream shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 hover:scale-105"
      >
        <Phone className="h-5 w-5" strokeWidth={1.75} />
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pal Café on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
      </a>
    </div>
  );
}
