import type { Metadata } from "next";
import { LEGAL_COMPANY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "KVKK aydınlatma metni",
  description: "Proformium'un hangi kişisel verileri hangi amaçla işlediğini anlatan KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

/**
 * Aydınlatma metni. Uygulamadaki taslakla aynı içerik (../proformium-app/src/app/(legal)/kvkk).
 * Tanıtım sitesine özgü ek: bölüm 8 (site çerezsiz ölçüm kullanır).
 */
export default function KvkkPage() {
  const c = LEGAL_COMPANY;

  return (
    <>
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">KVKK Aydınlatma Metni</h1>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla {c.title}{" "}
        tarafından hangi kişisel verilerin, hangi amaçla işlendiğini aşağıda bulabilirsiniz.
      </p>

      <h2>1. Veri sorumlusu</h2>
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
            <th>E-posta</th>
            <td>{c.email}</td>
          </tr>
        </tbody>
      </table>

      <h2>2. İşlenen kişisel veriler</h2>
      <h3>a) Uygulamayı kullanan işletme yetkilisi</h3>
      <ul>
        <li>Ad soyad, e-posta adresi, telefon</li>
        <li>İşletme bilgileri: firma adı, adres, vergi dairesi ve numarası, sektör</li>
        <li>Yüklenen görseller: logo, kaşe, imza</li>
        <li>Hesap güvenliği için giriş kayıtları ve oturum bilgileri</li>
        <li>Uygulama içinden gönderilen hata bildirimi ve öneriler</li>
      </ul>
      <h3>b) İşletmenin kendi müşterilerine ve tedarikçilerine ait veriler</h3>
      <p>
        Kullanıcı, teklif hazırlamak ve fiyat istemek için kendi müşterilerinin ve tedarikçilerinin ad soyad, firma
        adı, telefon, e-posta, adres, vergi bilgileri ve (otomotiv sektöründe) araç plakası bilgilerini uygulamaya
        girebilir. Bu verilerin veri sorumlusu ilgili işletmedir; {c.brand} bu verileri yalnızca hizmeti sunmak
        amacıyla, işletme adına saklar (veri işleyen sıfatıyla).
      </p>

      <h2>3. İşleme amaçları</h2>
      <ul>
        <li>Hizmetin sunulması: teklif oluşturma, PDF üretme, müşteriyle paylaşma, tedarikçiden fiyat toplama</li>
        <li>Teklifin müşteri tarafından görüntülendiğinin takibi ve hatırlatmalar</li>
        <li>Hesap güvenliği, kötüye kullanımın önlenmesi</li>
        <li>Destek taleplerinin karşılanması ve hataların giderilmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2>4. Hukuki sebep</h2>
      <p>
        Veriler, KVKK m.5/2-c uyarınca sözleşmenin kurulması ve ifası, m.5/2-ç uyarınca hukuki yükümlülüklerin yerine
        getirilmesi ve m.5/2-f uyarınca meşru menfaat kapsamında işlenir.
      </p>

      <h2>5. Verilerin aktarıldığı taraflar</h2>
      <p>
        Hizmetin sunulabilmesi için aşağıdaki tedarikçilerin altyapısı kullanılır. Veriler Avrupa Birliği sınırları
        içinde tutulur.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Supabase</th>
            <td>Veritabanı, kullanıcı hesapları ve dosya saklama (Frankfurt, Almanya)</td>
          </tr>
          <tr>
            <th>Vercel</th>
            <td>Uygulamanın ve bu sitenin çalıştığı sunucu (Frankfurt, Almanya)</td>
          </tr>
          <tr>
            <th>Resend</th>
            <td>E-posta gönderimi: doğrulama ve şifre yenileme (İrlanda)</td>
          </tr>
          <tr>
            <th>Cloudflare</th>
            <td>Alan adı yönetimi ve gelen e-posta yönlendirmesi</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bunların dışında kişisel veriler üçüncü kişilere satılmaz, pazarlama amacıyla paylaşılmaz. Yetkili kamu
        kurumlarının hukuka uygun talepleri saklıdır.
      </p>

      <h2>6. Saklama süresi</h2>
      <p>
        Veriler, hesap açık olduğu sürece ve hesabın kapatılmasından sonra yasal saklama süreleri boyunca tutulur.
        Kullanıcı hesabını sildiğinde işletmeye ait teklifler, müşteri kayıtları ve yüklenen görseller silinir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>
        KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya
        silinmesini isteme, işlemenin sınırlandırılmasını talep etme ve zararın giderilmesini isteme haklarına
        sahipsiniz.
      </p>
      <p>
        Taleplerinizi <strong>{c.email}</strong> adresine iletebilirsiniz. Başvurular en geç 30 gün içinde
        sonuçlandırılır.
      </p>

      <h2>8. Çerezler</h2>
      <p>
        Uygulamada yalnızca oturumun açık kalması için gerekli çerezler kullanılır. Bu tanıtım sitesinde çerez
        kullanılmaz; ziyaret sayıları çerezsiz ve kimlik bilgisi toplamayan bir ölçümle (Vercel Web Analytics) alınır.
        Reklam, izleme veya profilleme amaçlı çerez kullanılmaz.
      </p>
    </>
  );
}
