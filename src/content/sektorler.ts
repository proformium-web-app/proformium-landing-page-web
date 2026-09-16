/**
 * Sektör panelleri. Her panelde SADECE uygulamada bugün çalışan özellikler anlatılır
 * (SITE_BAGLAMI.md bölüm 4). Örnek teklif kalemleri temsilidir.
 */

export type SektorKalem = { ad: string; not?: string; tutar: string };

export type Sektor = {
  anahtar: string;
  ad: string;
  kisaAd: string;
  emoji: string;
  /** lucide ikon adı (bileşende eşleştirilir) */
  ikon: "car" | "sofa" | "fan" | "layout-panel-top" | "megaphone";
  /** Stitch'teki renkli rozet tonu */
  ton: "mavi" | "amber" | "cyan" | "ok" | "mor";
  baslik: string;
  aciklama: string;
  maddeler: string[];
  etiketler: string[];
  kisaNot: string;
  ornek: {
    etiket: string;
    baslik: string;
    durum: string;
    kalemler: SektorKalem[];
    toplamEtiket: string;
    toplam: string;
    altNot: string;
  };
};

export const SEKTORLER: Sektor[] = [
  {
    anahtar: "oto-servis",
    ad: "Oto servis & otomotiv",
    kisaAd: "Oto Servis",
    emoji: "🚗",
    ikon: "car",
    ton: "mavi",
    baslik: "Plakayı yazın, müşteri ve geçmiş teklifler önünüze gelsin.",
    aciklama:
      "Otomotiv sektörünü seçen işletmelerde teklifte araç plakası alanı açılır. Aynı araç tekrar geldiğinde " +
      "plakayla müşteriyi bulur, parça ve işçiliği ayrı satırlarda yazar, teklifi WhatsApp'tan gönderirsiniz.",
    maddeler: [
      "Teklifte araç plakası alanı; plakayla müşteri arama",
      "Parça ve işçilik ayrı satırlar, KDV ve iskonto otomatik",
      "Müşteri linki açınca \"Görüntülendi\", takip zamanı gelince hatırlatma",
    ],
    etiketler: ["#OtoServis", "#YedekParça", "#Plaka"],
    kisaNot: "Plaka & parça takibi",
    ornek: {
      etiket: "Teklif detayı",
      baslik: "34 ABC 123 · Periyodik bakım",
      durum: "Görüntülendi",
      kalemler: [
        { ad: "Motor yağı 5W-30 (5 L)", not: "Parça", tutar: "₺2.450" },
        { ad: "Yağ, hava ve polen filtresi", not: "Parça", tutar: "₺1.800" },
        { ad: "Periyodik bakım işçiliği", not: "İşçilik", tutar: "₺1.200" },
      ],
      toplamEtiket: "Genel toplam (KDV dahil)",
      toplam: "₺6.540",
      altNot: "Müşteri teklifi 14:20'de açtı · 2. açılış",
    },
  },
  {
    anahtar: "mobilya",
    ad: "Mobilya & iç mimari",
    kisaAd: "Mobilya & İç Mimari",
    emoji: "🛋️",
    ikon: "sofa",
    ton: "amber",
    baslik: "Ölçü değişti, fiyat değişti: revize edin, link aynı kalsın.",
    aciklama:
      "Mutfak ve mobilya işlerinde teklif birkaç kez değişir. Gönderilmiş teklifi revize edersiniz; Rev. 1, Rev. 2 " +
      "geçmişi saklanır, müşterinin elindeki link hep son hali gösterir. Müşteri de sayfadan revize isteyebilir.",
    maddeler: [
      "Revizyon geçmişi: eski haller ve olaylar saklanır, link değişmez",
      "Müşteri sayfadan \"revize iste\" der, size bildirim düşer",
      "Logo, kaşe ve imzalı profesyonel belge; PDF ya da link",
    ],
    etiketler: ["#İçMimarlık", "#Özelİmalat", "#MutfakTasarım"],
    kisaNot: "Özel ölçü & revizyonlar",
    ornek: {
      etiket: "Proje · Rev. 2",
      baslik: "Villa mutfak · Ada tezgâh",
      durum: "Onaylandı",
      kalemler: [
        { ad: "Ada mutfak gövde ve kapaklar", not: "Lake kapak, soft-close menteşe", tutar: "₺82.000" },
        { ad: "Kuvars tezgâh", not: "Belenco 2 cm", tutar: "₺34.500" },
        { ad: "Montaj ve nakliye", not: "2 gün", tutar: "₺8.500" },
      ],
      toplamEtiket: "Proje toplamı (KDV dahil)",
      toplam: "₺125.000",
      altNot: "Rev. 1 → Rev. 2: tezgâh ölçüsü güncellendi",
    },
  },
  {
    anahtar: "klima-tesisat",
    ad: "Klima, kombi & tesisat",
    kisaAd: "Klima & Tesisat",
    emoji: "❄️",
    ikon: "fan",
    ton: "cyan",
    baslik: "Keşifteyken telefondan teklifi yazın, çıkmadan gönderin.",
    aciklama:
      "Ürün ve hizmetleriniz kayıtlıdır: adını yazmaya başlayınca fiyatı ve birimiyle gelir. Metrajı girersiniz, " +
      "toplam otomatik hesaplanır, teklif müşterinin WhatsApp'ına gider. Müşteri açınca uygulamada görürsünüz.",
    maddeler: [
      "Telefonda tam çalışır; keşifte teklif hazırlanır",
      "Ürün/hizmet hafızası: fiyat ve birim otomatik gelir (metre, adet, takım)",
      "Notlar ve koşullar alanı: garanti, ödeme şartı, teslim süresi",
    ],
    etiketler: ["#İklimlendirme", "#Tesisat", "#HızlıKeşif"],
    kisaNot: "Hızlı keşif & metraj",
    ornek: {
      etiket: "Keşif & montaj",
      baslik: "Daire 14 · Multi split kurulum",
      durum: "Gönderildi",
      kalemler: [
        { ad: "18.000 BTU inverter dış ünite", not: "1 adet", tutar: "₺31.200" },
        { ad: "9.000 BTU iç ünite", not: "2 adet", tutar: "₺22.800" },
        { ad: "Bakır boru ve montaj", not: "14 metre", tutar: "₺4.900" },
      ],
      toplamEtiket: "Anahtar teslim tutar",
      toplam: "₺58.900",
      altNot: "Takip zamanı: 3 gün sonra hatırlatılacak",
    },
  },
  {
    anahtar: "cam-balkon",
    ad: "Cam balkon & PVC",
    kisaAd: "Cam Balkon & PVC",
    emoji: "🪟",
    ikon: "layout-panel-top",
    ton: "ok",
    baslik: "Cam ve profil fiyatlarını tedarikçilerden toplayın, yan yana görün.",
    aciklama:
      "Teklif İste ile kalemleri yazar, tedarikçileri seçersiniz; her birine kendi linki gider. Tedarikçiler üye " +
      "olmadan fiyat yazar, siz fiyatları karşılaştırıp kazananı seçersiniz. Sonra müşteriye kendi teklifinizi hazırlarsınız.",
    maddeler: [
      "Bir talepte 10 tedarikçiye kadar; tedarikçi üye olmadan fiyat yazar",
      "Gelen fiyatlar yan yana; kazananı bilgilendir, diğerlerine teşekkür et",
      "Müşteriye teklif: ürün hafızasından cam ve profil kalemleri",
    ],
    etiketler: ["#CamBalkon", "#PVC", "#TedarikçiToplama"],
    kisaNot: "m² & tedarikçi toplama",
    ornek: {
      etiket: "Teklif talebi · 3 tedarikçi",
      baslik: "Balkon kapatma · 18,5 m² ısıcam",
      durum: "Fiyatlar geldi",
      kalemler: [
        { ad: "Cam Sanayi A.Ş.", not: "Yanıt: bugün", tutar: "₺16.650" },
        { ad: "Profil Toptan", not: "Yanıt: dün", tutar: "₺17.200" },
        { ad: "Doğrama Market", not: "Yanıt: dün", tutar: "₺18.900" },
      ],
      toplamEtiket: "En uygun teklif",
      toplam: "₺16.650",
      altNot: "Kazanan seçildi · diğer tedarikçilere teşekkür gönderildi",
    },
  },
  {
    anahtar: "reklam-tabela",
    ad: "Reklam & tabela",
    kisaAd: "Reklam & Tabela",
    emoji: "🪧",
    ikon: "megaphone",
    ton: "mor",
    baslik: "Yüzlerce ürününüzü Excel'den yükleyin, teklifi dakikada hazırlayın.",
    aciklama:
      "Tabela, baskı ve giydirme kalemlerini ürün listesine Excel şablonuyla bir kerede aktarırsınız. Teklifte m² ve " +
      "adet bazlı satırlar, iskonto ve KDV otomatik hesaplanır; logo, kaşe ve imzayla müşteriye gider.",
    maddeler: [
      "Müşteri ve ürün listesini Excel şablonuyla toplu yükleme",
      "m², adet, takım gibi birimler; iskonto ve KDV dökümü otomatik",
      "Raporlar: kaç teklif onaylandı, bekleyen tutar, en çok satış yapılan müşteriler",
    ],
    etiketler: ["#Tabela", "#DijitalBaskı", "#Giydirme"],
    kisaNot: "Toplu ürün & raporlar",
    ornek: {
      etiket: "Teklif",
      baslik: "Mağaza cephe tabelası",
      durum: "Görüntülendi",
      kalemler: [
        { ad: "Işıklı kutu harf", not: "12 adet", tutar: "₺28.800" },
        { ad: "Kompozit cephe kaplama", not: "14 m²", tutar: "₺19.600" },
        { ad: "Montaj", not: "1 gün", tutar: "₺4.500" },
      ],
      toplamEtiket: "Genel toplam (KDV dahil)",
      toplam: "₺52.900",
      altNot: "Müşteri bugün açtı · takip için hatırlatma kuruldu",
    },
  },
];
