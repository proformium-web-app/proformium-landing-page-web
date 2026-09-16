/**
 * Sitenin tek yerden yönetilen sabit bilgileri: adresler, bağlantılar, marka metni.
 * Değişince her yerde birlikte güncellenir.
 */

export const SITE = {
  ad: "Proformium",
  /** Asıl adres (Adem kararı, 16.09.2026). proformium.com buraya yönlenir. */
  url: "https://www.proformium.com",
  slogan: "Teklif Oluştur. Gönder. Takip Et. Satışı Kapat.",
  /** Yapay zekâ asistanlarının alıntılayabileceği tek paragraf tanım (GEO). */
  tanim:
    "Proformium, müşterilerine teklif veren ve tedarikçilerinden teklif alan küçük işletmeler için " +
    "web tabanlı, telefonda da çalışan, çok basit bir teklif uygulamasıdır. Teklifi hazırlar, " +
    "WhatsApp'tan gönderir, müşteri açınca haber verir, takip zamanını hatırlatır; tedarikçilerden " +
    "fiyat toplayıp karşılaştırır.",
  aciklama:
    "KOBİ'ler için teklif hazırlama ve takip uygulaması. Teklifi hazırlayın, WhatsApp'tan gönderin, " +
    "müşteri açınca görün, takibi unutmayın. Tedarikçilerden fiyat toplayıp karşılaştırın. 14 gün ücretsiz.",
  destekEposta: "destek@proformium.com",
  kurulusYili: 2026,
} as const;

export const UYGULAMA = {
  url: "https://app.proformium.com",
  giris: "https://app.proformium.com/giris",
  kayit: "https://app.proformium.com/kayit",
} as const;

/** Üst menü bağlantıları (ana sayfa bölümleri). */
export const MENU = [
  { href: "/#neden", etiket: "Neden Proformium?" },
  { href: "/#nasil-calisir", etiket: "Nasıl çalışır" },
  { href: "/#ozellikler", etiket: "Özellikler" },
  { href: "/#sektorler", etiket: "Sektörler" },
  { href: "/#fiyatlar", etiket: "Fiyatlar" },
  { href: "/blog", etiket: "Blog" },
  { href: "/#sss", etiket: "SSS" },
] as const;

export const YASAL_SAYFALAR = [
  { href: "/kvkk", etiket: "KVKK aydınlatma metni" },
  { href: "/gizlilik", etiket: "Gizlilik politikası" },
  { href: "/mesafeli-satis", etiket: "Mesafeli satış sözleşmesi" },
  { href: "/iptal-iade", etiket: "İptal ve iade" },
] as const;
