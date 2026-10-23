import type { MetadataRoute } from "next";
import { COZUMLER } from "@/content/cozumler";
import { SITE } from "@/content/site";
import { tumYazilar } from "@/lib/blog";

// Statik çıktıda sitemap derleme anında üretilir.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const simdi = new Date();
  const sabit: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: simdi, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: simdi, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/destek`, lastModified: simdi, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/kvkk`, lastModified: simdi, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/gizlilik`, lastModified: simdi, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/mesafeli-satis`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/iptal-iade`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/terms`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/privacy`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/refund`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
  ];
  // Anahtar kelime sayfaları (e-proforma, e-teklif, …): ana sayfadan sonra en önemlileri.
  const cozumler: MetadataRoute.Sitemap = COZUMLER.map((c) => ({
    url: `${SITE.url}/${c.slug}`,
    lastModified: simdi,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const yazilar: MetadataRoute.Sitemap = tumYazilar().map((y) => ({
    url: `${SITE.url}/blog/${y.slug}`,
    lastModified: new Date(y.tarih),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...sabit, ...cozumler, ...yazilar];
}
