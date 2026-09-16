import { FIYAT, FIYAT_GOSTER } from "@/content/fiyatlar";
import { SITE, UYGULAMA } from "@/content/site";
import { SSS } from "@/content/sss";

const ORG_ID = `${SITE.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.ad,
    url: SITE.url,
    logo: `${SITE.url}/logo-sembol.svg`,
    email: SITE.destekEposta,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.destekEposta,
      contactType: "customer support",
      availableLanguage: "tr",
    },
  };
}

function offers() {
  const free = {
    "@type": "Offer",
    name: "Free",
    price: 0,
    priceCurrency: FIYAT.paraBirimi,
    url: UYGULAMA.kayit,
  };
  if (!FIYAT_GOSTER) return [free];
  return [
    free,
    {
      "@type": "Offer",
      name: "Pro (aylık)",
      price: FIYAT.pro.aylik,
      priceCurrency: FIYAT.paraBirimi,
      url: UYGULAMA.kayit,
    },
    {
      "@type": "Offer",
      name: "Pro (yıllık)",
      price: FIYAT.pro.yillik,
      priceCurrency: FIYAT.paraBirimi,
      url: UYGULAMA.kayit,
    },
  ];
}

export function anaSayfaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.ad,
        inLanguage: "tr",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE.ad,
        description: SITE.tanim,
        url: UYGULAMA.url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: "tr",
        offers: offers(),
        featureList: [
          "Teklif hazırlama ve WhatsApp'tan gönderme",
          "Müşteri linki: üye olmadan açılır, görüntülenme takibi",
          "Takip hatırlatması",
          "Revizyon geçmişi",
          "Tedarikçilerden fiyat toplama ve karşılaştırma",
          "Logo, kaşe ve imza",
          "Excel'den toplu müşteri ve ürün yükleme",
          "Raporlar",
        ],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "FAQPage",
        mainEntity: SSS.map((s) => ({
          "@type": "Question",
          name: s.soru,
          acceptedAnswer: { "@type": "Answer", text: s.cevap },
        })),
      },
    ],
  };
}

export function breadcrumbJsonLd(parcalar: { ad: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parcalar.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.ad,
      item: p.url,
    })),
  };
}
