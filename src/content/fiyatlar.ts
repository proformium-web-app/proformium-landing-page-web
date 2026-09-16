/**
 * Paketler ve fiyatlar — TEK KAYNAK. Adem kararı (15–16.09.2026).
 * Fiyatlar KDV dahildir. Aylık sayım takvim ayına göre yenilenir.
 *
 * FIYAT_GOSTER=false iken sitede rakam yerine "Yakında" gösterilir
 * (uygulamada Free/Pro paketleri hazır olana kadar). Hazır olunca true yapılır.
 */

export const FIYAT_GOSTER = false;

export const FIYAT = {
  paraBirimi: "TRY",
  kdvDahil: true,
  pro: {
    aylik: 100,
    yillik: 1000,
    /** Yıllık ödemede kaç aylık avantaj */
    yillikAvantajAy: 2,
  },
  denemeGun: 14,
} as const;

export const FREE_SINIRLARI = {
  teklifAyda: 3,
  talepAyda: 3,
  musteri: 20,
  urun: 40,
  /** Talep başına en fazla tedarikçi (iki pakette de aynı) */
  talepBasinaTedarikci: 10,
} as const;

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
      { metin: "WhatsApp, e-posta ve PDF ile paylaşım", var: true },
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

/** Türkçe para biçimi: 1.000 ₺ */
export function tlBicimle(tutar: number) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(tutar) + " ₺";
}
