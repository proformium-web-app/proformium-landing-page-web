/**
 * Paketler ve fiyatlar — TEK KAYNAK.
 * - 15–16.09.2026: Free / Pro, KDV dahil, aylık sayım takvim ayına göre.
 * - 22.10.2026 (Adem, "Düzeltilmesi Gereken Şeyler"): "Yakında" kalktı; Pro yıllık 1.600 TL, "aylık sadece 133 TL".
 * - Free sınırları uygulamayla aynı (proformium-app/src/lib/plan.ts FREE_LIMITS, 0.13.0).
 *
 * DİKKAT: Uygulamadaki PRO_PRICE hâlâ aylık 100 / yıllık 1.000 TL (22.10.2026). Adem uygulama sohbetinde
 * güncelleyene kadar uygulama ekranı ile site farklı fiyat gösterir.
 */

export const FIYAT_GOSTER = true;

export const FIYAT = {
  paraBirimi: "TRY",
  kdvDahil: true,
  pro: {
    yillik: 1600,
  },
  denemeGun: 14,
} as const;

/** Yıllık fiyatın aya düşen karşılığı (1.600 / 12 = 133). */
export const PRO_AYLIK_KARSILIK = Math.floor(FIYAT.pro.yillik / 12);

export const FREE_SINIRLARI = {
  teklifAyda: 3,
  talepAyda: 3,
  musteri: 5,
  urun: 10,
  /** Talep başına en fazla tedarikçi (iki pakette de aynı) */
  talepBasinaTedarikci: 10,
} as const;

/** Deneme notu (Adem, 22.10.2026). Uygulamada Ayarlar → "Tüm verileri indir" (0.13.6), her pakette açık. */
export const VERI_INDIRME_NOTU =
  "Beğenmezseniz verileriniz sizde kalır: Ayarlar'dan tüm verilerinizi tek tıkla Excel olarak indirebilirsiniz.";

export type PaketOzellik = { metin: string; var: boolean };

export type Paket = {
  anahtar: "free" | "pro";
  ad: string;
  rozet?: string;
  aciklama: string;
  ozellikler: PaketOzellik[];
  butonMetni: string;
  oneCikan: boolean;
};

export const PAKETLER: Paket[] = [
  {
    anahtar: "free",
    ad: "Free",
    aciklama: "Ayda birkaç teklif gönderen işletmeler için. Süresiz ücretsiz.",
    ozellikler: [
      { metin: `Ayda ${FREE_SINIRLARI.teklifAyda} teklif`, var: true },
      { metin: `Ayda ${FREE_SINIRLARI.talepAyda} teklif talebi (tedarikçilerden fiyat toplama)`, var: true },
      { metin: `${FREE_SINIRLARI.musteri} müşteri, ${FREE_SINIRLARI.urun} ürün/hizmet kaydı`, var: true },
      { metin: "WhatsApp, e-posta ve PDF ile paylaşım", var: true },
      { metin: "Müşteri linki ve görüntülenme takibi", var: true },
      { metin: "Logo, kaşe ve imza", var: true },
      { metin: "Takip hatırlatması ve revizyon geçmişi", var: true },
      { metin: "PDF ve müşteri sayfasında \"Proformium ile hazırlandı\" ibaresi", var: true },
      { metin: "Raporlar", var: false },
    ],
    butonMetni: "Ücretsiz başla",
    oneCikan: false,
  },
  {
    anahtar: "pro",
    ad: "Pro",
    rozet: `${FIYAT.denemeGun} gün ücretsiz deneme`,
    aciklama: "Düzenli teklif veren ve satışı takip etmek isteyen işletmeler için.",
    ozellikler: [
      { metin: "Sınırsız teklif", var: true },
      { metin: "Sınırsız teklif talebi", var: true },
      { metin: "Sınırsız müşteri ve ürün/hizmet kaydı", var: true },
      { metin: "WhatsApp, e-posta (PDF ekli) ve PDF ile paylaşım", var: true },
      { metin: "Müşteri linki ve görüntülenme takibi", var: true },
      { metin: "Logo, kaşe ve imza", var: true },
      { metin: "Takip hatırlatması ve revizyon geçmişi", var: true },
      { metin: "İbaresiz PDF ve müşteri sayfası", var: true },
      { metin: "Raporlar: onay oranı, bekleyenler, en çok satış yapılan müşteriler", var: true },
    ],
    butonMetni: `${FIYAT.denemeGun} gün ücretsiz dene`,
    oneCikan: true,
  },
];

/** Türkçe para biçimi: 1.600 ₺ */
export function tlBicimle(tutar: number) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(tutar) + " ₺";
}
