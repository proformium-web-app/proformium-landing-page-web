import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_COMPANY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Gizlilik politikası",
  description: "Proformium verilerinizi nasıl saklar ve korur? Sade dille gizlilik politikası.",
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  const c = LEGAL_COMPANY;

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Gizlilik Politikası</h1>
      <p>
        {c.brand}, küçük işletmelerin fiyat teklifi hazırlayıp müşterilerine göndermesini ve tedarikçilerinden fiyat
        toplamasını sağlayan bir uygulamadır. Bu metin, verilerinizi nasıl sakladığımızı ve koruduğumuzu sade bir
        dille anlatır. Yasal ayrıntılar için <Link href="/kvkk">KVKK aydınlatma metnine</Link> bakabilirsiniz.
      </p>

      <h2>Verileriniz size aittir</h2>
      <p>
        Uygulamaya girdiğiniz müşteri listesi, tedarikçi listesi, ürün/hizmet kayıtları ve teklifler sizindir. Bunları
        okumaz, başka işletmelerle paylaşmaz, satmayız. Yalnızca hizmeti sunmak ve sizden gelen bir destek talebini
        çözmek için erişiriz.
      </p>

      <h2>İşletmeler birbirinin verisini göremez</h2>
      <p>
        Her işletmenin verisi veritabanı düzeyinde ayrılmıştır. Bir işletmenin kullanıcısı, kendi işletmesi dışındaki
        hiçbir kaydı listeleyemez veya okuyamaz; bu kural uygulamada değil, veritabanının kendisinde tanımlıdır.
      </p>

      <h2>Müşterinize gönderdiğiniz teklif linki</h2>
      <ul>
        <li>Link, tahmin edilemeyecek rastgele bir anahtar içerir; sıralı numara kullanılmaz.</li>
        <li>Linki açan kişi yalnızca o teklifi görür: kalemler, tutarlar ve firma bilgileriniz.</li>
        <li>
          Müşterinizin telefonu, e-postası, notlarınız, takip bilgileri ve diğer teklifleriniz bu sayfada{" "}
          <strong>yer almaz</strong>.
        </li>
        <li>Teklif sayfaları arama motorlarına kapalıdır.</li>
        <li>Taslak haldeki teklifler linkle açılmaz.</li>
      </ul>
      <p>Tedarikçilerinize gönderdiğiniz teklif talebi linkleri için de aynı kurallar geçerlidir.</p>

      <h2>Görüntülenme takibi</h2>
      <p>
        Müşteriniz teklif linkini açtığında size &quot;açıldı&quot; bilgisi gösterilir. Bu bilgi yalnızca açılma
        zamanı ve sayısıdır; müşterinizin konumu, cihazı veya kimliği kaydedilmez, çerez yerleştirilmez. Kısa süre
        içindeki tekrar açılışlar tek sayılır ve işletmenin kendi önizlemesi sayıma girmez.
      </p>

      <h2>Şifreniz</h2>
      <p>
        Şifreniz şifrelenmiş biçimde saklanır; biz de dahil kimse okuyamaz. Şifrenizi yenilediğinizde açık olan tüm
        oturumlar kapatılır.
      </p>

      <h2>Yüklediğiniz görseller</h2>
      <p>
        Logo, kaşe ve imza görselleri herkese açık bir adreste durmaz. Yalnızca yayındaki bir teklifin sayfasında, o
        teklife özel adresten gösterilir.
      </p>

      <h2>Nerede saklanıyor?</h2>
      <p>
        Veriler Almanya (Frankfurt) ve İrlanda&apos;daki sunucularda, Avrupa Birliği sınırları içinde tutulur.
        Kullanılan tedarikçiler KVKK metninde listelenmiştir.
      </p>

      <h2>Bu site</h2>
      <p>
        www.proformium.com tanıtım sitesi çerez kullanmaz. Ziyaret sayıları, kimlik bilgisi toplamayan çerezsiz bir
        ölçümle alınır. Siteden uygulamaya geçtiğinizde uygulamanın kuralları geçerli olur.
      </p>

      <h2>Silme</h2>
      <p>
        Hesabınızı ve tüm verilerinizi silmek isterseniz uygulamadaki ayarlar bölümünden ya da{" "}
        <strong>{c.email}</strong> adresine yazarak talep edebilirsiniz.
      </p>

      <h2>Sorularınız</h2>
      <p>
        Aklınıza takılan her şey için <strong>{c.email}</strong> adresine yazabilirsiniz.
      </p>
    </>
  );
}
