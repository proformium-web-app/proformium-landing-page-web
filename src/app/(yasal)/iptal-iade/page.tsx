import type { Metadata } from "next";
import { FIYAT, tlBicimle } from "@/content/fiyatlar";
import { AKTIF_MOR, IADE, LEGAL_COMPANY, MOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "İptal ve iade",
  description:
    "Proformium Pro aboneliğini iptal etme ve iade koşulları: ilk yıllık ödemeden sonraki 14 gün içinde gerekçesiz tam iade.",
  alternates: { canonical: "/iptal-iade" },
};

/** Uygulamadaki /iptal-iade metniyle aynı tutulur (uygulama 0.15.8, 04.11.2026). */
export default function IptalIadePage() {
  const c = LEGAL_COMPANY;
  const mor = MOR[AKTIF_MOR];

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">İptal ve İade Politikası</h1>

      <h2>Önce ücretsiz deneyin</h2>
      <ul>
        <li>Free paket süresiz ücretsizdir.</li>
        <li>
          Pro paketi {FIYAT.denemeGun} gün ücretsiz denenebilir; deneme <strong>işletme başına bir kez</strong> verilir.
          Deneme için kart bilgisi istenmez, deneme bitince otomatik ücret alınmaz.
        </li>
        <li>Ödeme yapmazsanız hesabınız Free pakete geçer; hiçbir veriniz silinmez.</li>
      </ul>

      <h2>Fiyat ve ödeme</h2>
      <ul>
        <li>
          Pro paketi <strong>yıllık {tlBicimle(FIYAT.pro.yillik)}</strong> (KDV dahil), yıllık peşin ödenir. Aylık paket
          yoktur.
        </li>
        <li>Abonelik, iptal edilmedikçe her yıl kendiliğinden yenilenir.</li>
        <li>
          Ödemeler kredi kartı / banka kartıyla, satıcı sıfatıyla ödeme hizmet sağlayıcımız{" "}
          <a href={mor.site} target="_blank" rel="noopener noreferrer">
            {mor.ad}
          </a>{" "}
          (Merchant of Record) üzerinden alınır. Makbuz / fatura ve iade bu sağlayıcı tarafından düzenlenir; banka
          ekstrenizde sağlayıcının adı görünebilir.
        </li>
      </ul>

      <h2>İade</h2>
      <ul>
        <li>
          <strong>İlk yıllık ödeme:</strong> ödemeden sonraki <strong>{IADE.gun} gün</strong> içinde, gerekçe göstermeden
          tam iade alırsınız.
        </li>
        <li>
          <strong>Yenileme ödemesi:</strong> yenilemeden sonraki {IADE.gun} gün içinde, yenilemeden sonra Pro&apos;yu
          kullanmadıysanız tam iade alırsınız (ör. iptal etmeyi unuttuysanız).
        </li>
        <li>
          Bu sürelerden sonra iade yapılmaz; aboneliğiniz ödediğiniz dönemin sonuna kadar açık kalır.
        </li>
        <li>
          Bizden kaynaklanan ve makul sürede giderilemeyen bir kesinti olursa, kullanılmayan süreye karşılık gelen tutar
          iade edilir ya da aboneliğinize eklenir.
        </li>
      </ul>

      <h2>İade nasıl istenir?</h2>
      <ul>
        <li>
          Uygulamada <strong>Ayarlar → Paket → &quot;Aboneliği yönet&quot;</strong> ekranında ödemenin yanındaki{" "}
          <strong>&quot;İade talep et&quot;</strong> düğmesine basın.
        </li>
        <li>
          Ya da <strong>{c.email}</strong> adresine e-posta gönderin veya {mor.ad} makbuzuna yanıt verin.
        </li>
      </ul>
      <p>İade talep ettiğinizde aboneliğinizin yenilenmesi durdurulur.</p>
      <p>
        Talep en geç 2 iş günü içinde incelenir ve ödemenin yapıldığı karta iade başlatılır; bankanızın hesabınıza
        yansıtma süresi genellikle {IADE.yansimaIsGunu} iş günüdür. İade yapılınca hesabınız Free pakete geçer,
        verileriniz silinmez.
      </p>

      <h2>Aboneliği iptal etme</h2>
      <p>Aboneliğinizi dilediğiniz zaman, gerekçe göstermeden iptal edebilirsiniz:</p>
      <ul>
        <li>
          Uygulamada <strong>Ayarlar → Paket → &quot;Aboneliği yönet&quot;</strong>,
        </li>
        <li>{mor.ad} makbuzundaki bağlantı,</li>
        <li>
          ya da <strong>{c.email}</strong> adresine e-posta.
        </li>
      </ul>
      <p>
        İptal, sonraki yenilemeyi durdurur. Ödediğiniz dönemin sonuna kadar Pro&apos;yu kullanırsınız, tekrar ücret
        alınmaz; dönem bitince hesabınız Free pakete geçer.
      </p>

      <h2>Verileriniz</h2>
      <p>
        Abonelik sona erdiğinde verileriniz silinmez; Free pakette kalır. <strong>Ayarlar → Tüm verileri indir</strong>{" "}
        ile her zaman Excel olarak dışa aktarabilirsiniz.
      </p>
      <p>
        Aboneliğiniz bitse bile <strong>müşterilerinize gönderdiğiniz teklif linkleri</strong> çalışmaya devam eder.
      </p>

      <h2>Ters ibraz (chargeback)</h2>
      <p>
        Bir ödemede sorun görürseniz lütfen önce bize yazın; hızlıca çözelim. Bize ulaşmadan bankanız üzerinden ters
        ibraz (chargeback) başlatmak iadenin gecikmesine yol açabilir.
      </p>

      <h2>İletişim</h2>
      <table>
        <tbody>
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
