/** Sıkça sorulan sorular. FAQPage JSON-LD de buradan üretilir. */

import { FIYAT, FREE_SINIRLARI, PRO_AYLIK_KARSILIK, tlBicimle } from "@/content/fiyatlar";

export type Soru = { soru: string; cevap: string };

export const SSS: Soru[] = [
  {
    soru: "Proformium nedir?",
    cevap:
      "Proformium, küçük işletmeler için web tabanlı bir teklif ve proforma hazırlama programıdır. Fiyat teklifini " +
      "dakikalar içinde hazırlar, WhatsApp'tan ya da e-postayla gönderir, müşteri açınca size gösterir ve takip " +
      "zamanını hatırlatır. Tedarikçilerinizden de fiyat toplayıp yan yana karşılaştırabilirsiniz.",
  },
  {
    soru: "Kurulum ya da uygulama indirmek gerekir mi?",
    cevap:
      "Hayır. Proformium tarayıcıda çalışan bir web uygulamasıdır. Bilgisayardan ya da telefonunuzun " +
      "tarayıcısından app.proformium.com adresine girip kullanmaya başlarsınız. E-postanızla ya da Google " +
      "hesabınızla kayıt olabilirsiniz; App Store veya Google Play'den indirilecek bir şey yoktur.",
  },
  {
    soru: "Telefonda çalışır mı?",
    cevap:
      "Evet, tamamen. Teklif hazırlama, WhatsApp'tan gönderme, imza atma ve takip telefonda da çalışır. " +
      "İmzayı telefon ekranına parmağınızla atabilirsiniz.",
  },
  {
    soru: "Müşterim teklifi görmek için üye olmak zorunda mı?",
    cevap:
      "Hayır. Müşterinize giden link üye olmadan, şifresiz açılır. Müşteriniz teklifi telefonda görür, PDF " +
      "indirir, yazdırır ve isterse revize isteyebilir. Link tahmin edilemez ve arama motorlarına kapalıdır.",
  },
  {
    soru: "Tedarikçim fiyat vermek için üye olmak zorunda mı?",
    cevap:
      "Hayır. Her tedarikçiye kendi linki gider; tedarikçi üye olmadan fiyatını yazar, talebi yazdırabilir ya da " +
      "PDF indirebilir. Gelen fiyatlar sizin ekranınızda yan yana görünür. Bir talebe en fazla 10 tedarikçi eklenebilir.",
  },
  {
    soru: "Ücretsiz paket ne kadar, Pro ne kadar?",
    cevap:
      `Free paket süresiz ücretsizdir: ayda ${FREE_SINIRLARI.teklifAyda} teklif, ${FREE_SINIRLARI.talepAyda} teklif talebi, ` +
      `${FREE_SINIRLARI.musteri} müşteri ve ${FREE_SINIRLARI.urun} ürün/hizmet kaydı. Pro sınırsızdır ve yıllık ` +
      `${tlBicimle(FIYAT.pro.yillik)}'dir (KDV dahil); aylık ${tlBicimle(PRO_AYLIK_KARSILIK)}'ye denk gelir. ` +
      `Pro'yu ${FIYAT.denemeGun} gün ücretsiz deneyebilirsiniz, kredi kartı gerekmez.`,
  },
  {
    soru: "14 günlük deneme bitince ne olur, tekliflerim silinir mi?",
    cevap:
      "Hayır, hiçbir şey silinmez. Deneme bitince hesabınız Free pakete geçer; mevcut teklifleriniz, müşteri " +
      "kayıtlarınız ve müşterilerinize giden linkler çalışmaya devam eder. Beğenmezseniz Ayarlar'dan tüm " +
      "verilerinizi tek tıkla Excel olarak indirebilirsiniz.",
  },
  {
    soru: "Proformium e-Fatura keser mi, muhasebe programı mı?",
    cevap:
      "Hayır. Proformium yalnızca teklif ve proforma hazırlama, gönderme, takip etme ve tedarikçilerden fiyat " +
      "toplama işini yapar. Proforma ve teklif resmi fatura değildir; e-Fatura, e-Arşiv, muhasebe, stok ve cari " +
      "takibi kapsam dışındadır.",
  },
  {
    soru: "Verilerim nerede saklanıyor?",
    cevap:
      "Sunucular ve veritabanı Frankfurt'ta (Almanya), Avrupa Birliği sınırları içindedir. Her işletmenin verisi " +
      "veritabanı düzeyinde ayrılır; bir işletme diğerinin kaydını göremez. Ayrıntılar KVKK aydınlatma metninde.",
  },
  {
    soru: "İstediğim zaman iptal edebilir miyim?",
    cevap:
      "Evet. Aboneliği dilediğiniz zaman iptal edebilirsiniz; ödenmiş dönemin sonuna kadar kullanmaya devam edersiniz. " +
      "Verilerinizi Excel olarak indirebilir, hesabınızı ve tüm verinizi uygulamadan kendiniz silebilirsiniz.",
  },
  {
    soru: "Bir sorun yaşarsam kime ulaşırım?",
    cevap:
      "info@proformium.com adresine yazabilir ya da uygulamada sol menüdeki Destek'ten talep açabilirsiniz. " +
      "Talebinizin durumunu Destek → Taleplerim'den takip edersiniz.",
  },
];
