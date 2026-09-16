import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { UstMenu } from "@/components/layout/ust-menu";
import { AltBilgi } from "@/components/layout/alt-bilgi";
import { SITE } from "@/content/site";
import "./globals.css";

// Yazı tipleri yerelden sunulur (next/font): Google'a istek gitmez, düzen kayması olmaz.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Proformium | KOBİ'ler için teklif hazırlama ve takip uygulaması",
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
    title: "Proformium | KOBİ'ler için teklif hazırlama ve takip uygulaması",
    description: SITE.aciklama,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <UstMenu />
        <main className="flex-1">{children}</main>
        <AltBilgi />
        <Analytics />
      </body>
    </html>
  );
}
