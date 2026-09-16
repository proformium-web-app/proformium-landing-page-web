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
  email: "destek@proformium.com",
  website: "https://www.proformium.com",
};

/** Sayfalarda "son güncelleme" olarak gösterilir. */
export const LEGAL_UPDATED_AT = "16.09.2026";

/** Firma bilgileri tamamlandı mı? Tamamlanmadıysa sayfalarda uyarı gösterilir. */
export const legalCompanyReady = !Object.values(LEGAL_COMPANY).some(
  (value) => value === LEGAL_PLACEHOLDER,
);
