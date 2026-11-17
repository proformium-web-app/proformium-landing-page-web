/**
 * Tanıtım videosu (Adem, 17.11.2026). Dosyalar public/video/ altında; video yeniden sıkıştırılmaz.
 * Videodaki işletme uydurma bir tanıtım hesabıdır ("Örnek Oto Servis"); gerçek müşteri verisi yok.
 */
export const TANITIM_VIDEO = {
  baslik: "Proformium'u 1 dakikada görün",
  ad: "Proformium tanıtım videosu",
  aciklama:
    "Proformium'da teklif hazırlama, WhatsApp'tan gönderme, müşterinin teklifi üye olmadan açması, bildirimler ve tedarikçi fiyat karşılaştırması: 53 saniyelik tanıtım videosu.",
  dosya: "/video/proformium-tanitim.mp4",
  kapak: "/video/tanitim-kapak.jpg",
  genislik: 1440,
  yukseklik: 810,
  /** ISO 8601 süre: 53 saniye */
  sure: "PT53S",
  yuklemeTarihi: "2026-11-17",
} as const;
