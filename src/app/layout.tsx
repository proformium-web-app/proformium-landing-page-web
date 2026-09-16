import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { UstMenu } from "@/components/layout/ust-menu";
import { AltBilgi } from "@/components/layout/alt-bilgi";
import { Belirici } from "@/components/ui/belirici";
import { SITE } from "@/content/site";
import "./globals.css";

// Stitch tasarımındaki yazı tipleri, yerelden sunulur (next/font): Google'a istek gitmez.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Proformium | KOBİ'ler için akıllı teklif ve takip uygulaması",
    template: "%s | Proformium",
  },
  description: SITE.aciklama,
  applicationName: SITE.ad,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE.ad,
    url: SITE.url,
    title: "Proformium | KOBİ'ler için akıllı teklif ve takip uygulaması",
    description: SITE.aciklama,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${grotesk.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-background-light text-slate-800 antialiased">
        <UstMenu />
        <main className="flex-1">{children}</main>
        <AltBilgi />
        <Belirici />
        <Analytics />
      </body>
    </html>
  );
}
