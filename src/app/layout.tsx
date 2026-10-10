import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ProgressBarClient from "./progress-client";
import { site } from "@/data/site";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.role} (${site.focus})`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.shortName} — ${site.role}`,
    description: site.description,
    siteName: `${site.shortName} Portfolio`,
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.role}`,
    description: site.description,
    images: ["/profile.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#050812",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  url: site.url,
  sameAs: [
    "https://github.com/yuzzaf",
    "https://linkedin.com/in/muhammadyuzzaf",
  ],
};

// Dark mode by default; ThemeToggle syncs with localStorage.
const themeInit = `(function(){try{var s=localStorage.getItem("theme");var dark=s?s==="dark":true;if(dark){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){document.documentElement.classList.add("dark")} })();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ProgressBarClient />
        {children}
      </body>
    </html>
  );
}
