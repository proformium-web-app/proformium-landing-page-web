/** Sıkça sorulan sorular. FAQPage JSON-LD de buradan üretilir. */

export type Soru = { soru: string; cevap: string };

export const SSS: Soru[] = [
  {
    soru: "Kurulum ya da uygulama indirmek gerekir mi?",
    cevap:
      "Hayır. Proformium tarayıcıda çalışan bir web uygulamasıdır. Bilgisayardan ya da telefonunuzun " +
      "tarayıcısından app.proformium.com adresine girip kullanmaya başlarsınız. App Store veya Google Play'den " +
      "indirilecek bir şey yoktur.",
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
    soru: "14 günlük deneme bitince tekliflerim silinir mi?",
    cevap:
      "Hayır. Deneme bitince yeni teklif ve talep oluşturma kapanır; mevcut teklifleriniz, müşteri kayıtlarınız ve " +
      "müşterilerinize giden linkler çalışmaya devam eder.",
  },
  {
    soru: "Proformium e-Fatura keser mi, muhasebe programı mı?",
    cevap:
      "Hayır. Proformium yalnızca teklif hazırlama, gönderme, takip etme ve tedarikçilerden fiyat toplama işini yapar. " +
      "e-Fatura, muhasebe, stok ve cari takibi kapsam dışındadır.",
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
      "Hesabınızı ve tüm verinizi de uygulamadan kendiniz silebilirsiniz.",
  },
];
