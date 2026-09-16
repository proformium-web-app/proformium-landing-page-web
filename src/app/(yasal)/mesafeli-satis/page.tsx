import type { Metadata } from "next";
import { LEGAL_COMPANY, LEGAL_PLACEHOLDER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Mesafeli satış sözleşmesi",
  description: "Proformium aboneliği için mesafeli satış sözleşmesi.",
  alternates: { canonical: "/mesafeli-satis" },
};

/**
 * TASLAK. Ödeme alınmadan önce mali müşavir/avukat onayından geçmeli;
 * PayTR / iyzico başvurusunda bu sayfa kontrol ediliyor.
 * Fiyat ve abonelik şartları netleşince [DOLDURULACAK] yerleri doldurulmalı.
 */
export default function MesafeliSatisPage() {
  const c = LEGAL_COMPANY;

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">Mesafeli Satış Sözleşmesi</h1>

      <h2>1. Taraflar</h2>
      <h3>Satıcı</h3>
      <table>
        <tbody>
          <tr>
            <th>Unvan</th>
            <td>{c.title}</td>
          </tr>
          <tr>
            <th>Adres</th>
            <td>{c.address}</td>
          </tr>
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
            <td>{c.brand} abonelik ({LEGAL_PLACEHOLDER} paketi)</td>
          </tr>
          <tr>
            <th>Abonelik süresi</th>
            <td>{LEGAL_PLACEHOLDER} (aylık / yıllık)</td>
          </tr>
          <tr>
            <th>Bedel (KDV dahil)</th>
            <td>{LEGAL_PLACEHOLDER}</td>
          </tr>
          <tr>
            <th>Ödeme şekli</th>
            <td>{LEGAL_PLACEHOLDER}</td>
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
        alıcı memnun kalmazsa {LEGAL_PLACEHOLDER} gün içinde iade imkânı tanır; ayrıntılar iptal ve iade sayfasındadır.
      </p>
      <p>Ayrıca hizmet, ücretsiz deneme süresiyle sunulur; alıcı satın almadan önce hizmeti deneyebilir.</p>

      <h2>6. Aboneliğin sona ermesi</h2>
      <p>
        Alıcı aboneliğini dilediği zaman iptal edebilir. İptal, ödenmiş dönemin sonunda geçerli olur; dönem sonuna
        kadar hizmet kullanılmaya devam edilir. Abonelik sona erdiğinde alıcının verileri {LEGAL_PLACEHOLDER} süreyle
        saklanır, bu süre içinde dışa aktarılabilir.
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
