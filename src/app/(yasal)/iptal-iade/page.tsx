import type { Metadata } from "next";
import { LEGAL_COMPANY, LEGAL_PLACEHOLDER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "İptal ve iade",
  description: "Proformium aboneliğini iptal etme ve iade koşulları.",
  alternates: { canonical: "/iptal-iade" },
};

/** TASLAK. İade süresi ve abonelik şartları netleşince doldurulmalı. */
export default function IptalIadePage() {
  const c = LEGAL_COMPANY;

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">İptal ve İade Politikası</h1>

      <h2>Önce ücretsiz deneyin</h2>
      <p>
        {c.brand} ücretsiz deneme süresiyle sunulur. Deneme süresi boyunca kart bilgisi istenmez ve otomatik
        ücretlendirme yapılmaz. Beğenmezseniz hiçbir şey ödemezsiniz.
      </p>

      <h2>Aboneliği iptal etme</h2>
      <p>
        Aboneliğinizi dilediğiniz zaman, hiçbir gerekçe göstermeden iptal edebilirsiniz. İptal talebinizi uygulama
        içinden ya da <strong>{c.email}</strong> adresine yazarak iletebilirsiniz.
      </p>
      <ul>
        <li>İptal, ödemesini yaptığınız dönemin sonunda geçerli olur.</li>
        <li>Dönem sonuna kadar hizmeti kullanmaya devam edersiniz.</li>
        <li>Sonraki dönem için ücret alınmaz.</li>
      </ul>

      <h2>İade</h2>
      <p>
        Dijital hizmetlerde yasal cayma hakkı bulunmamakla birlikte, ödeme yaptıktan sonraki{" "}
        <strong>{LEGAL_PLACEHOLDER} gün</strong> içinde memnun kalmazsanız ödediğiniz tutarı iade ediyoruz. Gerekçe
        belirtmeniz gerekmez.
      </p>
      <p>
        İade tutarı, ödemenin yapıldığı kart veya hesaba aktarılır. İşlem {LEGAL_PLACEHOLDER} iş günü içinde
        başlatılır; bankanızın hesabınıza yansıtma süresi ayrıca değişebilir.
      </p>

      <h2>Hizmet verilemezse</h2>
      <p>
        Bizden kaynaklanan ve makul sürede giderilemeyen bir kesinti olursa, kesinti süresine karşılık gelen tutar
        talebiniz üzerine iade edilir veya aboneliğinize eklenir.
      </p>

      <h2>Verileriniz</h2>
      <p>
        Abonelik sona erdiğinde verileriniz hemen silinmez; {LEGAL_PLACEHOLDER} süreyle saklanır ve bu süre içinde
        dışa aktarabilirsiniz. Hemen silinmesini isterseniz talebiniz üzerine silinir.
      </p>
      <p>
        Aboneliğiniz bitse bile <strong>müşterilerinize gönderdiğiniz teklif linkleri</strong> çalışmaya devam eder.
        Müşterinizin elindeki bağlantının bozulmaması bizim için önemlidir.
      </p>

      <h2>İletişim</h2>
      <table>
        <tbody>
          <tr>
            <th>Unvan</th>
            <td>{c.title}</td>
          </tr>
          <tr>
            <th>E-posta</th>
            <td>{c.email}</td>
          </tr>
          <tr>
            <th>Telefon</th>
            <td>{c.phone}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
