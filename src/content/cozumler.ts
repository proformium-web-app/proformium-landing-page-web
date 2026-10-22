/**
 * Anahtar kelime sayfaları (SEO/GEO, Adem 22.10.2026: "e-proforma, e-teklif vb. kelimelerde üst sıralarda olalım").
 * Her sayfa bir arama niyetine cevap verir; adres kök dizinde (ör. /e-proforma).
 *
 * KURAL: Yalnızca uygulamada bugün çalışan özellikler yazılır (SITE_BAGLAMI.md bölüm 4 + uygulama 0.13.x).
 * Proformium e-Fatura / e-Arşiv değildir; "e-proforma" ve "e-teklif" GİB e-belge türü değildir, bunu açıkça yazıyoruz.
 */

export type CozumBolumu = { baslik: string; paragraflar?: string[]; maddeler?: string[] };
export type CozumSorusu = { soru: string; cevap: string };

export type Cozum = {
  slug: string;
  /** <title> (marka şablonla eklenir) */
  metaBaslik: string;
  metaAciklama: string;
  etiket: string;
  h1: string;
  /** Sayfanın ilk paragrafı: terimi tek başına tanımlar (yapay zekâ asistanları bunu alıntılar). */
  giris: string;
  bolumler: CozumBolumu[];
  sss: CozumSorusu[];
  ilgili: string[];
  /** Alt bilgi ve listelerde görünen kısa ad */
  kisaAd: string;
};

export const COZUMLER: Cozum[] = [
  {
    slug: "e-proforma",
    kisaAd: "e-Proforma",
    metaBaslik: "e-Proforma hazırlama programı: online proforma oluşturun",
    metaAciklama:
      "e-Proforma, proformanın internette hazırlanıp WhatsApp, e-posta ya da link ile gönderilmesidir. Proformium ile dakikalar içinde hazırlayın, müşteri açınca görün.",
    etiket: "e-Proforma",
    h1: "e-Proforma: proformanızı online hazırlayın, WhatsApp'tan gönderin",
    giris:
      "e-Proforma, proforma faturanın kâğıt ya da Word/Excel yerine internet üzerinde hazırlanıp müşteriye e-posta, " +
      "WhatsApp veya link ile elektronik olarak gönderilmesidir. Proformium, küçük işletmeler için bu işi yapan web " +
      "tabanlı bir programdır: proformayı hazırlar, PDF ve müşteriye özel link olarak gönderir, müşteri açınca size gösterir.",
    bolumler: [
      {
        baslik: "e-Proforma resmi bir e-belge mi?",
        paragraflar: [
          "Hayır. e-Fatura, e-Arşiv fatura ve e-İrsaliye Gelir İdaresi Başkanlığı'nın (GİB) tanımladığı resmi e-belgelerdir; " +
            "e-proforma ise böyle bir belge türü değildir. Proforma, satış gerçekleşmeden önce alıcıya fiyatı ve koşulları " +
            "bildiren bir ön belgedir; vergi doğurmaz, muhasebe kaydına girmez.",
          "Bu yüzden e-proforma hazırlamak için GİB entegrasyonu ya da mali mühür gerekmez. Gereken şey, proformayı hızlı, " +
            "düzgün ve takip edilebilir şekilde hazırlayıp göndermektir. Satış kesinleşince faturanızı her zamanki e-Fatura " +
            "ya da e-Arşiv çözümünüzle kesersiniz.",
        ],
      },
      {
        baslik: "Proformium ile e-proforma nasıl hazırlanır?",
        maddeler: [
          "Müşteriyi kayıtlı listeden seçin ya da o an ekleyin.",
          "Ürün ya da hizmet adını yazmaya başlayın; fiyatı, birimi ve bu müşteriye en son verdiğiniz fiyat önerilir.",
          "Miktar, birim fiyat, KDV oranı ve iskontoyu girin; ara toplam, KDV dökümü ve genel toplam kendiliğinden hesaplanır.",
          "Notlar ve koşullar alanına ödeme, teslim ve geçerlilik koşullarınızı yazın.",
          "Logonuz, kaşeniz ve imzanız belgeye eklenir; imzayı telefondan parmağınızla atabilirsiniz.",
          "Tek tıkla WhatsApp'tan, PDF ekli e-postayla ya da PDF olarak gönderin.",
        ],
      },
      {
        baslik: "Gönderdikten sonra: müşteri baktı mı?",
        paragraflar: [
          "Kâğıt ya da PDF proformanın en büyük eksiği, müşterinin açıp açmadığını bilememenizdir. Proformium'da müşteriye özel " +
            "bir link gider; müşteri üye olmadan açar, PDF indirir, isterse revize ister. Link açıldığında teklif " +
            "\"Görüntülendi\" olur, kaç kez ve ne zaman açıldığını görürsünüz. Takip zamanı gelince uygulama hatırlatır.",
        ],
      },
    ],
    sss: [
      {
        soru: "e-Proforma ile e-Fatura arasındaki fark nedir?",
        cevap:
          "e-Fatura GİB'in tanımladığı resmi vergi belgesidir ve satış gerçekleşince kesilir. e-Proforma ise satıştan önce " +
          "fiyat ve koşulları bildiren, resmi değeri olmayan bir ön belgenin elektronik olarak gönderilmesidir.",
      },
      {
        soru: "e-Proforma hazırlamak ücretli mi?",
        cevap:
          "Proformium'un Free paketi süresiz ücretsizdir ve ayda 3 teklif/proforma gönderebilirsiniz. Sınırsız kullanım için Pro paket vardır; 14 gün ücretsiz denenir.",
      },
      {
        soru: "Proformium e-Fatura keser mi?",
        cevap: "Hayır. Proformium teklif ve proforma hazırlar ve takip eder; e-Fatura, e-Arşiv ve muhasebe kapsam dışındadır.",
      },
    ],
    ilgili: ["proforma-fatura", "e-teklif", "teklif-takip-programi"],
  },
  {
    slug: "e-teklif",
    kisaAd: "e-Teklif",
    metaBaslik: "e-Teklif: online fiyat teklifi hazırlayın, gönderin, takip edin",
    metaAciklama:
      "e-Teklif ile fiyat teklifinizi internette hazırlayın, WhatsApp ya da e-postayla gönderin, müşteri açınca görün. Küçük işletmeler için Proformium, ücretsiz başlayın.",
    etiket: "e-Teklif",
    h1: "e-Teklif: fiyat teklifinizi internette hazırlayın ve takip edin",
    giris:
      "e-Teklif, müşteriye verilen fiyat teklifinin kâğıt yerine internet üzerinde hazırlanıp e-posta, WhatsApp ya da link " +
      "ile gönderilmesidir. Proformium bir e-teklif programıdır: teklifi dakikalar içinde hazırlar, gönderir, müşteri " +
      "açınca haber verir ve takip zamanını hatırlatır.",
    bolumler: [
      {
        baslik: "Neden kâğıt ya da Excel yerine e-teklif?",
        maddeler: [
          "Hız: kayıtlı müşteri ve ürün bilgisi kendiliğinden gelir, hesaplar elle yapılmaz.",
          "Profesyonel görünüm: logo, kaşe ve imzalı, düzenli bir belge.",
          "Görünürlük: müşteri teklifi açtığında bilirsiniz; \"baktı mı?\" diye tahmin etmezsiniz.",
          "Takip: cevap gelmeyen teklifler unutulmaz, takip zamanı gelince hatırlatılır.",
          "Tek kayıt: revizyonlar Rev. 1, Rev. 2 olarak saklanır, müşterinin linki hep son hali gösterir.",
        ],
      },
      {
        baslik: "Proformium'da bir e-teklifin yolculuğu",
        maddeler: [
          "Teklifi hazırlayın: müşteri, kalemler, KDV, iskonto, notlar. Yarım kalırsa taslak olarak kaydedilir.",
          "Gönderin: WhatsApp'ınız hazır mesaj ve linkle açılır; isterseniz PDF ekli e-posta Proformium'dan gider.",
          "Görün: müşteri linki açınca teklif \"Görüntülendi\" olur.",
          "Takip edin: takip zamanı gelince \"takip ettim\", \"3 gün ertele\", \"kazanıldı\" ya da \"kaybedildi\" deyin.",
          "Ölçün: raporlarda kaç teklifin onaylandığını, dönüşüm oranınızı ve en çok satış yaptığınız müşterileri görün.",
        ],
      },
      {
        baslik: "Kimler kullanıyor?",
        paragraflar: [
          "Müşterilerine düzenli teklif veren her küçük işletme: oto servisler, klima ve kombi servisleri, mobilya ve mutfak " +
            "üreticileri, cam balkon ve PVC firmaları, reklam ve tabelacılar, inşaat, elektrik ve tesisat firmaları. " +
            "Otomotiv seçen işletmelerde teklifte araç plakası alanı açılır ve plakayla müşteri aranır.",
        ],
      },
    ],
    sss: [
      {
        soru: "e-Teklif göndermek için müşterimin bir uygulama yüklemesi gerekir mi?",
        cevap: "Hayır. Müşterinize giden link telefonda ya da bilgisayarda üye olmadan açılır; PDF indirip yazdırabilir.",
      },
      {
        soru: "e-Teklif yasal olarak geçerli mi?",
        cevap:
          "Teklif, tarafları bilgilendiren ticari bir belgedir; resmi vergi belgesi değildir. Kâğıt teklifle aynı işlevi görür, " +
          "satış kesinleşince fatura ayrıca kesilir.",
      },
      {
        soru: "Telefondan e-teklif hazırlanabilir mi?",
        cevap: "Evet. Proformium telefon tarayıcısında tam çalışır; teklif hazırlama, imza ve gönderme telefondan yapılır.",
      },
    ],
    ilgili: ["fiyat-teklifi-programi", "whatsapp-teklif-gonderme", "e-proforma"],
  },
  {
    slug: "proforma-fatura",
    kisaAd: "Proforma fatura",
    metaBaslik: "Proforma fatura nedir, nasıl hazırlanır? Örnek ve program",
    metaAciklama:
      "Proforma fatura nedir, faturadan farkı ne, içinde neler olmalı? Proforma faturayı Proformium ile ücretsiz hazırlayın, PDF ve link olarak gönderin.",
    etiket: "Proforma fatura",
    h1: "Proforma fatura nedir, nasıl hazırlanır?",
    giris:
      "Proforma fatura (ön fatura), satış gerçekleşmeden önce alıcıya ürün ya da hizmeti, miktarı, fiyatı, ödeme ve teslim " +
      "koşullarını bildiren belgedir. Resmi bir fatura değildir; vergi doğurmaz ve muhasebe kaydına girmez. Alıcının satın " +
      "alma kararı vermesi, bütçe onayı alması ya da ithalatta ön işlemleri başlatması için kullanılır.",
    bolumler: [
      {
        baslik: "Proforma fatura ile fatura arasındaki fark",
        maddeler: [
          "Fatura satış gerçekleşince kesilir; proforma satıştan önce, teklif aşamasında verilir.",
          "Fatura resmi vergi belgesidir; proformanın mali değeri yoktur.",
          "Faturada KDV beyan edilir; proformadaki KDV yalnızca bilgi amaçlıdır.",
          "Proformadaki fiyat ve koşullar değişebilir; bu yüzden revize edilebilir.",
        ],
      },
      {
        baslik: "Proforma faturada neler olmalı?",
        maddeler: [
          "Satıcının adı, adresi, iletişim ve vergi bilgileri; logo",
          "Alıcının adı ve iletişim bilgileri",
          "Belge numarası ve tarihi",
          "Ürün ya da hizmet kalemleri: ad, miktar, birim, birim fiyat",
          "İskonto, ara toplam, KDV oranı ve tutarı, genel toplam",
          "Ödeme şekli, teslim süresi ve teklifin geçerlilik süresi",
          "Kaşe ve imza",
        ],
      },
      {
        baslik: "Proformium ile proforma fatura hazırlamak",
        paragraflar: [
          "Proformium'da hazırladığınız teklif bu bilgilerin hepsini taşır: firma bilgileriniz ve logonuz, otomatik numara, " +
            "müşteri, kalemler, KDV ve iskonto hesabı, notlar ve koşullar alanı, kaşe ve imza. Belgeyi PDF indirebilir, " +
            "WhatsApp'tan ya da PDF ekli e-postayla gönderebilirsiniz.",
          "Fark şurada: Proformium müşteriye ayrıca tahmin edilemez bir link gönderir. Müşteri linki açınca görürsünüz, " +
            "fiyat değişirse revize edersiniz ve müşterideki link hep son hali gösterir.",
        ],
      },
    ],
    sss: [
      {
        soru: "Proforma fatura yasal bir belge mi?",
        cevap:
          "Proforma ticari bir ön belgedir; Vergi Usul Kanunu'nda tanımlı bir fatura türü değildir ve vergi doğurmaz. Satış kesinleşince normal fatura kesilir.",
      },
      {
        soru: "Proforma faturada KDV gösterilir mi?",
        cevap: "Gösterilebilir; alıcının toplam maliyeti görmesi için genelde gösterilir. Ancak bu KDV beyan edilmez, yalnızca bilgi amaçlıdır.",
      },
      {
        soru: "Boş proforma fatura örneği yerine ne kullanabilirim?",
        cevap:
          "Word ya da Excel şablonu doldurmak yerine Proformium'da müşteriyi ve kalemleri seçersiniz; hesaplar, numara, logo ve imza kendiliğinden gelir. Free paket ücretsizdir.",
      },
    ],
    ilgili: ["e-proforma", "teklif-formu", "fiyat-teklifi-programi"],
  },
  {
    slug: "fiyat-teklifi-programi",
    kisaAd: "Fiyat teklifi programı",
    metaBaslik: "Fiyat teklifi hazırlama programı: küçük işletmeler için",
    metaAciklama:
      "Fiyat teklifi programı arıyorsanız: Proformium ile teklifi dakikalar içinde hazırlayın, WhatsApp'tan gönderin, müşteri açınca görün, takibi unutmayın. Ücretsiz başlayın.",
    etiket: "Teklif programı",
    h1: "Fiyat teklifi hazırlama programı",
    giris:
      "Fiyat teklifi programı, işletmenin müşterilerine verdiği teklifleri hazırlamasını, göndermesini ve takip etmesini " +
      "sağlayan yazılımdır. Proformium küçük işletmeler için tasarlanmış, telefonda da çalışan sade bir teklif programıdır: " +
      "CRM ya da muhasebe programı değildir, sadece teklif işini iyi yapar.",
    bolumler: [
      {
        baslik: "Bir teklif programında neye bakmalı?",
        maddeler: [
          "Hız: müşteri ve ürün bilgisi tekrar tekrar yazılmamalı.",
          "Telefonda kullanım: sahada, keşifte teklif hazırlanabilmeli.",
          "Paylaşım: WhatsApp, e-posta ve PDF tek tıkla.",
          "Görüntülenme: müşterinin teklifi açtığını görebilmelisiniz.",
          "Takip: cevapsız teklifler için hatırlatma.",
          "Sadelik: kurulum, eğitim ve uzun menüler olmadan.",
        ],
      },
      {
        baslik: "Proformium'da neler var?",
        maddeler: [
          "Müşteri ve ürün hafızası; bu müşteriye en son verilen fiyatı hatırlama",
          "Excel şablonuyla müşteri ve ürün listesini toplu yükleme",
          "KDV, iskonto, ara toplam ve genel toplam otomatik; işletmeye özel otomatik teklif numarası",
          "Logo, kaşe ve parmakla imza",
          "WhatsApp, PDF ekli e-posta ve PDF ile paylaşım; üye olmadan açılan müşteri linki",
          "Görüntülenme takibi, revize isteme, Rev. 1 / Rev. 2 geçmişi",
          "Takip hatırlatması ve raporlar",
          "Tedarikçilerden fiyat toplama ve karşılaştırma (Teklif İste)",
        ],
      },
      {
        baslik: "Fiyat",
        paragraflar: [
          "Free paket süresiz ücretsizdir: ayda 3 teklif ve 3 teklif talebi. Pro paket sınırsızdır ve yıllık ödenir; " +
            "14 gün ücretsiz denenir, kredi kartı istenmez. Güncel fiyat ana sayfadaki Fiyatlandırma bölümündedir.",
        ],
      },
    ],
    sss: [
      {
        soru: "Ücretsiz fiyat teklifi programı var mı?",
        cevap: "Evet. Proformium'un Free paketi süresiz ücretsizdir; ayda 3 teklif gönderebilir, 5 müşteri ve 10 ürün kaydedebilirsiniz.",
      },
      {
        soru: "Teklif programı kurmak gerekir mi?",
        cevap: "Hayır. Proformium tarayıcıda çalışır; app.proformium.com adresine girip e-postanız ya da Google hesabınızla kayıt olursunuz.",
      },
      {
        soru: "Excel'deki müşteri listemi aktarabilir miyim?",
        cevap: "Evet. Müşteri ve ürün/hizmet listenizi hazır Excel şablonuyla bir kerede içeri alırsınız.",
      },
    ],
    ilgili: ["e-teklif", "teklif-takip-programi", "teklif-formu"],
  },
  {
    slug: "teklif-takip-programi",
    kisaAd: "Teklif takip programı",
    metaBaslik: "Teklif takip programı: müşteri teklifi açtı mı, ne zaman aramalı?",
    metaAciklama:
      "Gönderdiğiniz teklifleri takip edin: müşteri açınca görün, takip zamanı gelince hatırlatma alın, kazanılan ve kaybedilen teklifleri raporlayın. Proformium.",
    etiket: "Teklif takibi",
    h1: "Teklif takip programı: hiçbir teklif unutulmasın",
    giris:
      "Teklif takip programı, gönderilen tekliflerin durumunu izleyip doğru zamanda müşteriye dönmenizi sağlar. Satış çoğu " +
      "zaman ilk teklifte değil, takipte kapanır. Proformium müşterinin teklifi açtığını gösterir, takip zamanını hatırlatır " +
      "ve hangi tekliflerin kazanıldığını raporlar.",
    bolumler: [
      {
        baslik: "Teklif neden cevapsız kalır?",
        maddeler: [
          "Müşteri PDF'i açmadı ya da WhatsApp'ta gözden kaçtı.",
          "Müşteri baktı ama sorusu vardı, sormadı.",
          "İşletme yoğunluktan takip etmeyi unuttu; müşteri rakibe gitti.",
        ],
      },
      {
        baslik: "Proformium takibi nasıl kolaylaştırır?",
        maddeler: [
          "Görüntülenme: müşteri linki açınca teklif \"Görüntülendi\" olur; kaç kez ve ne zaman açtığı görünür.",
          "Takip hatırlatması: ayarladığınız gün sayısı dolunca teklif \"takip zamanı gelenler\" listesine düşer.",
          "Tek tık: \"takip ettim\", \"3 gün ertele\", \"kazanıldı\", \"kaybedildi\".",
          "Revize isteme: müşteri teklif sayfasından not bırakır, size bildirim düşer.",
          "Genel Bakış: taslaklar, gönderilenler, revize istenenler ve takip zamanı gelenler tek ekranda.",
          "Raporlar: onaylanan, reddedilen ve bekleyen teklifler, dönüşüm oranı.",
        ],
      },
      {
        baslik: "Doğru zamanda aramak",
        paragraflar: [
          "Müşterinin teklifi açtığını gördüğünüz an, satın almaya en yakın olduğu andır. \"Teklifimizi incelemişsiniz, " +
            "aklınıza takılan bir şey var mı?\" diye yazmak, haftalar sonra hatırlamaktan çok daha etkilidir.",
        ],
      },
    ],
    sss: [
      {
        soru: "Müşterinin teklifi açtığını nasıl anlarım?",
        cevap:
          "Proformium müşteriye özel bir link gönderir. Link açılınca teklif uygulamada \"Görüntülendi\" olur. WhatsApp önizlemesi ve sizin kendi açışınız sayılmaz.",
      },
      {
        soru: "Hatırlatma telefona bildirim olarak mı gelir?",
        cevap: "Hatırlatmalar ve bildirimler uygulamanın içinde görünür; uygulamaya girdiğinizde takip zamanı gelen teklifler listelenir.",
      },
      {
        soru: "Teklif takibi için CRM gerekir mi?",
        cevap: "Gerekmez. Proformium CRM değildir; sadece teklif hazırlama ve takibini sade şekilde yapar.",
      },
    ],
    ilgili: ["e-teklif", "whatsapp-teklif-gonderme", "fiyat-teklifi-programi"],
  },
  {
    slug: "teklif-formu",
    kisaAd: "Fiyat teklif formu",
    metaBaslik: "Fiyat teklif formu ve teklif şablonu: Word ve Excel yerine",
    metaAciklama:
      "Fiyat teklif formunda neler olmalı? Word ya da Excel teklif şablonu doldurmak yerine Proformium ile logolu, kaşeli teklif formunu dakikalar içinde hazırlayın.",
    etiket: "Teklif formu",
    h1: "Fiyat teklif formu: şablon doldurmadan, dakikalar içinde",
    giris:
      "Fiyat teklif formu, işletmenin müşterisine sunduğu ürün ya da hizmetleri, fiyatları ve koşulları gösteren belgedir. " +
      "Çoğu işletme bunu Word veya Excel teklif şablonuyla hazırlar. Proformium'da ise şablon doldurmazsınız: müşteriyi ve " +
      "kalemleri seçersiniz, form kendiliğinden oluşur.",
    bolumler: [
      {
        baslik: "Teklif formunda olması gerekenler",
        maddeler: [
          "Firma logosu, adı, adresi, telefon ve e-posta",
          "Müşterinin adı ve iletişim bilgileri",
          "Teklif numarası ve tarihi",
          "Kalemler: ürün/hizmet, miktar, birim, birim fiyat",
          "İskonto, ara toplam, KDV, genel toplam",
          "Ödeme ve teslim koşulları, geçerlilik süresi",
          "Kaşe ve imza",
        ],
      },
      {
        baslik: "Word ve Excel şablonunun sorunları",
        maddeler: [
          "Her teklifte müşteri ve ürün bilgisini yeniden yazarsınız.",
          "Formül bozulur, KDV ya da toplam yanlış çıkabilir.",
          "Dosya sürümleri karışır: \"teklif_son_son2.xlsx\".",
          "Müşterinin dosyayı açıp açmadığını bilemezsiniz.",
        ],
      },
      {
        baslik: "Proformium'da teklif formu",
        paragraflar: [
          "Kayıtlı müşteri ve ürünler kendiliğinden gelir, hesaplar otomatik yapılır, numara işletmenize özel önekle verilir. " +
            "Logo, kaşe ve imza her teklifte yerindedir. Hazır olan formu PDF olarak indirir ya da WhatsApp ve e-postayla " +
            "gönderirsiniz. Mevcut müşteri ve ürün listenizi Excel şablonuyla bir kerede içeri alabilirsiniz.",
        ],
      },
    ],
    sss: [
      {
        soru: "Ücretsiz teklif formu hazırlayabilir miyim?",
        cevap: "Evet. Proformium'un Free paketiyle ayda 3 teklif formunu ücretsiz hazırlayıp gönderebilirsiniz.",
      },
      {
        soru: "Teklif formunu PDF olarak alabilir miyim?",
        cevap: "Evet. Her teklifi PDF indirebilir, yazdırabilir ya da PDF ekli e-postayla gönderebilirsiniz.",
      },
      {
        soru: "Hizmet teklif formu da hazırlanır mı?",
        cevap: "Evet. Kalemler ürün olabileceği gibi işçilik, montaj, bakım gibi hizmetler de olabilir; birimi siz belirlersiniz.",
      },
    ],
    ilgili: ["proforma-fatura", "fiyat-teklifi-programi", "e-teklif"],
  },
  {
    slug: "whatsapp-teklif-gonderme",
    kisaAd: "WhatsApp'tan teklif",
    metaBaslik: "WhatsApp'tan teklif gönderme: link, PDF ve görüntülenme takibi",
    metaAciklama:
      "WhatsApp'tan fiyat teklifi gönderin ve müşteri açınca görün. Proformium teklifi hazırlar, tek tıkla WhatsApp'ınızı hazır mesaj ve linkle açar.",
    etiket: "WhatsApp'tan teklif",
    h1: "WhatsApp'tan teklif gönderme: müşteri açınca görün",
    giris:
      "Küçük işletmelerin çoğu teklifini WhatsApp'tan gönderir, ama gönderilen PDF'in açılıp açılmadığı bilinmez. " +
      "Proformium teklifi hazırlar ve tek tıkla WhatsApp'ınızı hazır mesaj ve müşteriye özel linkle açar; müşteri linki " +
      "açtığında teklif \"Görüntülendi\" olur.",
    bolumler: [
      {
        baslik: "Nasıl çalışır?",
        maddeler: [
          "Teklifi Proformium'da hazırlayın.",
          "WhatsApp düğmesine basın: kendi WhatsApp'ınız hazır mesaj ve linkle açılır, gönderirsiniz.",
          "Müşteri linki üye olmadan açar; teklifi telefonda görür, PDF indirir, size WhatsApp'tan ya da telefonla ulaşır.",
          "Siz uygulamada teklifin görüntülendiğini, kaç kez ve ne zaman açıldığını görürsünüz.",
        ],
      },
      {
        baslik: "PDF yerine link göndermenin faydası",
        maddeler: [
          "Müşteri dosya indirmeden teklifi telefonda rahat okur.",
          "Teklifi revize ederseniz link aynı kalır, hep son hali gösterir; eski PDF'ler karışmaz.",
          "Müşteri sayfadan revize isteyebilir; size bildirim düşer.",
          "Görüntülenme bilgisiyle doğru zamanda takip edersiniz.",
        ],
      },
      {
        baslik: "WhatsApp'tan teklif gönderirken dikkat edilecekler",
        maddeler: [
          "Mesajda müşterinin adını ve işi kısaca yazın.",
          "Teklifin geçerlilik süresini belirtin.",
          "Müşteri açtıktan sonra bir gün içinde nazikçe takip edin.",
          "Fiyat değişirse yeni dosya yerine teklifi revize edin.",
        ],
      },
    ],
    sss: [
      {
        soru: "Mesajı Proformium mu gönderiyor?",
        cevap: "Hayır. WhatsApp mesajı sizin telefonunuzdan, sizin WhatsApp'ınızdan gider; Proformium mesajı ve linki hazırlar.",
      },
      {
        soru: "Müşteri linki açınca anında haberim olur mu?",
        cevap: "Teklif uygulamada hemen \"Görüntülendi\" olur ve bildirim kutunuza düşer; uygulamaya girdiğinizde görürsünüz.",
      },
      {
        soru: "WhatsApp Business gerekir mi?",
        cevap: "Hayır. Normal WhatsApp ya da WhatsApp Business, hangisini kullanıyorsanız onunla gönderirsiniz.",
      },
    ],
    ilgili: ["teklif-takip-programi", "e-teklif", "e-proforma"],
  },
  {
    slug: "tedarikci-teklif-toplama",
    kisaAd: "Tedarikçiden teklif toplama",
    metaBaslik: "Tedarikçiden fiyat teklifi toplama ve karşılaştırma",
    metaAciklama:
      "Tedarikçilerden fiyat teklifi isteyin, gelen fiyatları yan yana karşılaştırın, kazananı seçin. Tedarikçi üye olmadan fiyat yazar. Proformium Teklif İste.",
    etiket: "Teklif İste",
    h1: "Tedarikçiden fiyat teklifi toplama ve karşılaştırma",
    giris:
      "Tedarikçiden teklif toplamak, aynı malzeme ya da hizmet için birkaç tedarikçiden fiyat isteyip en uygununu seçmektir. " +
      "Proformium'un Teklif İste bölümü bunu tek yerde yapar: kalemleri yazarsınız, her tedarikçiye kendi linki gider, " +
      "tedarikçiler üye olmadan fiyat yazar ve fiyatlar yan yana karşılaştırılır.",
    bolumler: [
      {
        baslik: "Nasıl çalışır?",
        maddeler: [
          "Kalemleri yazın: ad, miktar, birim, not. Son yanıt tarihini ve tedarikçilere notunuzu ekleyin.",
          "Tedarikçileri seçin: sektöre göre kayıtlı tedarikçileriniz listelenir; bir talepte en fazla 10 tedarikçi.",
          "Linkleri gönderin: her tedarikçiye kendi linki WhatsApp ya da e-postayla gider.",
          "Tedarikçi üye olmadan fiyatını yazar; isterse talebi yazdırır ya da PDF indirir.",
          "Fiyatları yan yana karşılaştırın ve tek kazananı seçin.",
          "Kazananı bilgilendirin, isterseniz diğerlerine teşekkür mesajı gönderin.",
        ],
      },
      {
        baslik: "Telefon ve Excel yerine",
        paragraflar: [
          "Beş tedarikçiyi tek tek arayıp fiyatları not almak, sonra Excel'de karşılaştırmak saatler alır ve hata yapmaya açıktır. " +
            "Teklif İste'de fiyatlar kendiliğinden tek tabloya gelir; kim yanıt verdi, kim vermedi görürsünüz.",
        ],
      },
      {
        baslik: "Kimler kullanır?",
        paragraflar: [
          "Malzeme satın alan her işletme: inşaat ve şantiyeler, elektrik ve tesisat firmaları, cam balkon ve PVC üreticileri, " +
            "mobilya atölyeleri, reklam ve tabelacılar. Tedarikçiden aldığınız fiyatla müşterinize kendi teklifinizi aynı " +
            "uygulamada hazırlarsınız.",
        ],
      },
    ],
    sss: [
      {
        soru: "Tedarikçinin Proformium'a üye olması gerekir mi?",
        cevap: "Hayır. Tedarikçi kendisine gelen linki açıp fiyatını yazar; üyelik ya da şifre gerekmez.",
      },
      {
        soru: "Bir talebe kaç tedarikçi eklenebilir?",
        cevap: "Bir teklif talebine en fazla 10 tedarikçi eklenebilir; bu kural Free ve Pro pakette aynıdır.",
      },
      {
        soru: "Teklif İste ücretli mi?",
        cevap: "Free pakette ayda 3 teklif talebi ücretsizdir; Pro pakette sınırsızdır.",
      },
    ],
    ilgili: ["fiyat-teklifi-programi", "e-teklif", "teklif-takip-programi"],
  },
];

export function cozumGetir(slug: string): Cozum | undefined {
  return COZUMLER.find((c) => c.slug === slug);
}
