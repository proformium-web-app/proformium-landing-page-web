/**
 * Yasal sayfalarda kullanılan firma bilgileri.
 * Uygulamadaki `src/lib/legal.ts` ile aynı düzen; Adem şirket bilgilerini verince iki taraf birlikte doldurulur.
 *
 * DİKKAT: Değerler taslaktır. Şirket bilgileri girilmeden ve mali müşavir / avukat kontrolünden
 * geçmeden yasal sayfalar yayına hazır sayılmaz.
 */

export const LEGAL_PLACEHOLDER = "[DOLDURULACAK]";

export type LegalCompany = {
  /** Ticaret unvanı (örnek: Proformium Yazılım Ltd. Şti.) */
  title: string;
  brand: string;
  address: string;
  taxOffice: string;
  taxNumber: string;
  mersis?: string;
  phone: string;
  email: string;
  website: string;
};

export const LEGAL_COMPANY: LegalCompany = {
  title: LEGAL_PLACEHOLDER,
  brand: "Proformium",
  address: LEGAL_PLACEHOLDER,
  taxOffice: LEGAL_PLACEHOLDER,
  taxNumber: LEGAL_PLACEHOLDER,
  mersis: LEGAL_PLACEHOLDER,
  phone: LEGAL_PLACEHOLDER,
  email: "info@proformium.com",
  website: "https://www.proformium.com",
};

/** Sayfalarda "son güncelleme" olarak gösterilir. */
export const LEGAL_UPDATED_AT = "16.09.2026";

/** Firma bilgileri tamamlandı mı? Tamamlanmadıysa sayfalarda uyarı gösterilir. */
export const legalCompanyReady = ![LEGAL_COMPANY.taxOffice, LEGAL_COMPANY.taxNumber, LEGAL_COMPANY.mersis, LEGAL_COMPANY.phone].some(
  (value) => value === LEGAL_PLACEHOLDER,
); // Unvan ve adres Türkçe sayfalarda gösterilmiyor (Adem, 23.10.2026)

/**
 * Hizmeti işleten kişi (Adem, 22.10.2026 — "Düzeltilmesi Gereken Şeyler"). İngilizce Terms of Service ve
 * Privacy Policy sayfalarının girişinde gösterilir. Adres 23.10.2026'da güncellendi (Adem).
 * Türkçe yasal sayfalarda ad-soyad ve adres GÖSTERİLMEZ (Adem, 23.10.2026).
 */
export const OPERATOR = {
  name: "Zeynep TAŞIN",
  role: "Individual Developer / Sole Proprietor",
  address: "Tahtakale Mahallesi, Çuha Çiçeği Sokak No:8, 34488 Avcılar/İstanbul, Türkiye",
  phone: "+90 537 550 11 88",
  phoneHref: "tel:+905375501188",
  email: "info@proformium.com",
} as const;

/** İngilizce yasal sayfaların son güncelleme tarihi. */
export const LEGAL_EN_UPDATED_AT = "October 22, 2026";

/**
 * İade politikası (Adem, 23.10.2026): ödemeyi Merchant of Record (MoR) alır.
 * Ana tercih Polar (polar.sh), yedek Dodo Payments. Hangisi canlıdaysa AKTIF_MOR onu gösterir.
 */
export const IADE = {
  /** İlk yıllık ödemeden sonra koşulsuz iade süresi (gün) */
  gun: 14,
  /** MoR iadeyi onayladıktan sonra bankaya yansıma süresi (iş günü, tahmini) */
  yansimaIsGunu: "5–10",
} as const;

export const MOR = {
  polar: { ad: "Polar", site: "https://polar.sh" },
  dodo: { ad: "Dodo Payments", site: "https://dodopayments.com" },
} as const;

/** Şu an ödemeyi alan MoR. Dodo'ya geçilirse "dodo" yapılır; sayfalar kendiliğinden güncellenir. */
export const AKTIF_MOR: keyof typeof MOR = "polar";
