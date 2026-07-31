import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Specialty Coffee & Dessert Café in Khalifa City, Abu Dhabi`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Specialty Coffee Abu Dhabi",
    "Best Coffee in Khalifa City",
    "Best Café Abu Dhabi",
    "Coffee Shop Abu Dhabi",
    "Specialty Coffee UAE",
    "Dessert Café Abu Dhabi",
    "Coffee Near Me",
    "Best Spanish Latte Abu Dhabi",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Specialty Coffee & Dessert Café in Khalifa City, Abu Dhabi`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Specialty Coffee & Dessert Café`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('pal-cafe-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: site.name,
            image: `${site.url}/opengraph-image`,
            "@id": site.url,
            url: site.url,
            telephone: site.phoneE164,
            priceRange: "AED 10 - AED 55",
            servesCuisine: ["Coffee", "Desserts", "Breakfast", "Cafe"],
            address: {
              "@type": "PostalAddress",
              streetAddress: `${site.address.line1}, ${site.address.line2}`,
              addressLocality: site.address.city,
              addressCountry: "AE",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "06:30",
                closes: "23:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Friday", "Saturday"],
                opens: "07:00",
                closes: "23:59",
              },
            ],
            sameAs: [site.social.instagram],
            menu: `${site.url}/menu`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <CookieConsent />
      </body>
    </html>
  );
}
