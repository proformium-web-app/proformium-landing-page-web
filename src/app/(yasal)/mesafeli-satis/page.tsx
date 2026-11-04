import type { Metadata } from "next";
import { FIYAT, tlBicimle } from "@/content/fiyatlar";
import { AKTIF_MOR, IADE, LEGAL_COMPANY, MOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mesafeli satış sözleşmesi",
  description: "Proformium aboneliği için mesafeli satış sözleşmesi.",
  alternates: { canonical: "/mesafeli-satis" },
};

/**
 * TASLAK. Ödeme alınmadan önce mali müşavir/avukat onayından geçmeli;
 * Ödemeyi Merchant of Record olarak Polar alır (yedek Dodo Payments; src/lib/legal.ts AKTIF_MOR).
 * İade kuralları uygulamadaki /iptal-iade ile aynı (uygulama 0.15.8, 04.11.2026).
 */
export default function MesafeliSatisPage() {
  const c = LEGAL_COMPANY;
  const mor = MOR[AKTIF_MOR];

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Mesafeli Satış Sözleşmesi</h1>

      <h2>1. Taraflar</h2>
      <h3>Satıcı</h3>
      <table>
        <tbody>
          <tr>
            <th>Vergi dairesi / no</th>
            <td>
              {c.taxOffice} / {c.taxNumber}
            </td>
          </tr>
          <tr>
            <th>MERSİS</th>
            <td>{c.mersis}</td>
          </tr>
          <tr>
            <th>Telefon / e-posta</th>
            <td>
              {c.phone} · {c.email}
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Alıcı</h3>
      <p>Uygulamaya kayıt olurken bildirdiği bilgilerle abonelik satın alan gerçek veya tüzel kişi.</p>

      <h2>2. Sözleşmenin konusu</h2>
      <p>
        İşbu sözleşme, alıcının {c.website} adresinde tanıtılan ve app.proformium.com adresinde sunulan {c.brand}{" "}
        yazılım hizmetine (fiyat teklifi hazırlama, gönderme, takip etme ve tedarikçilerden fiyat toplama) abonelik
        yoluyla erişimi hakkındadır. Hizmet dijital olarak, internet üzerinden sunulur; fiziksel bir ürün teslimi
        yoktur.
      </p>

      <h2>3. Hizmet ve bedel</h2>
      <table>
        <tbody>
          <tr>
            <th>Hizmet</th>
            <td>{c.brand} abonelik (Pro paketi)</td>
          </tr>
          <tr>
            <th>Abonelik süresi</th>
            <td>1 yıl (yıllık abonelik)</td>
          </tr>
          <tr>
            <th>Bedel (KDV dahil)</th>
            <td>{tlBicimle(FIYAT.pro.yillik)} (KDV dahil, yıllık peşin)</td>
          </tr>
          <tr>
            <th>Ödeme şekli</th>
            <td>
              Kredi kartı / banka kartı ile online ödeme. Ödeme, satıcı sıfatıyla ödeme hizmet sağlayıcısı {mor.ad}{" "}
              (Merchant of Record) üzerinden alınır; makbuz / fatura bu sağlayıcı tarafından düzenlenir ve banka
              ekstresinde sağlayıcının adı görünebilir.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Ücretsiz deneme süresi boyunca herhangi bir ödeme alınmaz. Deneme süresi sonunda otomatik ücretlendirme
        yapılmaz; abonelik ancak alıcının açık onayıyla başlar.
      </p>

      <h2>4. Hizmetin ifası</h2>
      <p>
        Ödeme onaylandığı anda hizmet erişime açılır. Dijital hizmet olduğundan teslimat anlıktır ve ayrıca
        kargo/teslimat bedeli yoktur.
      </p>

      <h2>5. Cayma hakkı</h2>
      <p>
        6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği&apos;nin 15/1-ğ maddesi
        uyarınca, elektronik ortamda anında ifa edilen hizmetlerde cayma hakkı bulunmamaktadır. Buna rağmen {c.brand},
        şu iade imkânını tanır: ilk yıllık ödemeden sonraki {IADE.gun} gün içinde gerekçe göstermeden tam iade; yenileme
        ödemesinde, yenilemeden sonraki {IADE.gun} gün içinde ve yenilemeden sonra Pro paketi kullanılmadıysa tam iade.
        Bu sürelerden sonra iade yapılmaz. Ayrıntılar iptal ve iade sayfasındadır.
      </p>
      <p>Ayrıca hizmet, ücretsiz deneme süresiyle sunulur; alıcı satın almadan önce hizmeti deneyebilir.</p>

      <h2>6. Aboneliğin sona ermesi</h2>
      <p>
        Abonelik, iptal edilmedikçe her yıl kendiliğinden yenilenir. Alıcı aboneliğini dilediği zaman uygulamada
        Ayarlar → Paket → &quot;Aboneliği yönet&quot; ekranından, {mor.ad} makbuzundaki bağlantıdan ya da {c.email}{" "}
        adresine yazarak iptal edebilir. İptal, ödenmiş dönemin sonunda geçerli olur; dönem sonuna kadar hizmet
        kullanılmaya devam edilir, ardından hesap Free pakete geçer. Abonelik sona erdiğinde alıcının verileri silinmez;
        Ayarlar → Tüm verileri indir ile her zaman Excel olarak dışa aktarılabilir.
      </p>

      <h2>7. Satıcının yükümlülükleri</h2>
      <ul>
        <li>Hizmeti sözleşmede belirtilen şekilde sunmak</li>
        <li>Alıcının verilerini korumak ve üçüncü kişilerle paylaşmamak</li>
        <li>Planlı bakım çalışmalarını önceden duyurmak</li>
      </ul>

      <h2>8. Alıcının yükümlülükleri</h2>
      <ul>
        <li>Doğru ve güncel bilgi vermek</li>
        <li>Hesap bilgilerini korumak, başkalarıyla paylaşmamak</li>
        <li>Hizmeti hukuka aykırı amaçlarla kullanmamak</li>
        <li>Uygulamaya girdiği müşteri ve tedarikçi verileri bakımından kendi veri sorumluluğunu yerine getirmek</li>
      </ul>

      <h2>9. Uyuşmazlıklar</h2>
      <p>
        Uyuşmazlıklarda Ticaret Bakanlığı&apos;nca ilan edilen parasal sınırlar dâhilinde alıcının yerleşim yerindeki
        Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
      </p>

      <h2>10. Yürürlük</h2>
      <p>Alıcı, ödeme işlemini tamamlamakla bu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
    </>
  );
}
