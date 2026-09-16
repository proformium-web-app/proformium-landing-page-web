# Proformium tanıtım sitesi — bağlam dosyası

Hazırlandı: 15.09.2026 · Hazırlayan: uygulamayı geliştiren Claude oturumu · Uygulama sürümü o gün: **0.11.15**

Bu klasör (`proformium-web`) **Proformium'un tanıtım sitesi** için açıldı. Uygulama bu klasörde değil,
yan klasörde (`../proformium-app`) duruyor ve ayrı bir sohbette geliştiriliyor.

Bu dosya, siteyi kuracak yeni sohbete ürünü baştan anlatmak için yazıldı: ürün ne yapıyor, kime
satılıyor, paketler, marka dosyaları, adresler, SEO/GEO ve altyapı. **Tasarım talimatı değildir.**
Yazı tipi, renk düzeni, sayfa görünümü gibi kararları **Adem verecek**. Aşağıda uygulamanın
kullandığı renk ve yazı tipi sadece bilgi olarak geçiyor.

> **Site yapıcıya ilk not:** Adem işe girişmeden önce soruların sorulmasını istedi. Kod yazmadan önce
> bu dosyanın sonundaki **"Başlamadan önce Adem'e sorulacaklar"** listesini onunla konuşun.

---

## 1. Çalışma kuralları

- **Konuşma dili Türkçe.** Adem kurucu; teknik terimleri sade anlatın, kararları ona bırakın.
- **Tasarımı Adem yapar.** Font, renk, düzen önermek serbest ama dayatmayın; onay almadan uygulamayın.
  Adem'in verdiği örnek görseller (başka sitelerden fiyat tablosu vb.) **sadece fikir içindir**, kopyalanmaz.
- **Logo ve marka rengi Adem'e sormadan değiştirilmez.** Logoyu yeniden çizmeyin, rengini değiştirmeyin.
- **`../proformium-app` klasörüne dokunmayın.** Uygulamada bir değişiklik gerekiyorsa (ör. Free paket
  sınırları) not alın, Adem uygulama sohbetinde yaptırır.
- Bu klasör dışındaki mevcut belgeler (kök klasördeki `.md`, `.docx`, görseller) silinmez, taşınmaz,
  üzerine yazılmaz.
- Gizli anahtar, şifre, token hiçbir dosyaya ve git'e girmez. Sitenin gizli bir anahtara ihtiyacı olmamalı.
- Yapılan her yayında ne değiştiğini kısa bir notla kaydedin (uygulamada `docs/SURUM_NOTLARI.md` düzeni var;
  sitede de benzeri tutulabilir).

---

## 2. Proformium nedir?

**Tek cümle:** Proformium, müşterilerine teklif veren ve tedarikçilerinden teklif alan küçük işletmeler
için web tabanlı, telefonda da çalışan, çok basit bir teklif uygulamasıdır. Teklifi hazırlar, WhatsApp'tan
gönderir, müşteri açınca haber verir, takip zamanını hatırlatır; tedarikçilerden fiyat toplayıp karşılaştırır.

**Asıl dert (ürünün var olma nedeni):** Sorun "PDF hazırlayamıyorum" değil. Sorun şu:
işletme teklifi gönderir, müşteri "düşüneyim" der, işletme meşgul olur, takip unutulur, müşteri başkasından
alır. Proformium bu kaybı azaltmak için var.

**Satılan şey yazılım değil, sonuç:** "Daha az unutulan takip, daha fazla kapanan satış."

**Konumlandırma:** WhatsApp ile CRM arasında; ama CRM, muhasebe, ERP, stok programı **değil**.
Rakiplerden "daha çok özellik" ile değil, **sadelik, WhatsApp dostu olma, telefonda kolay kullanım ve
müşterinin teklife baktığını göstermek** ile ayrışır.

**İki ana iş (uygulamanın menüsü de böyle):**

| Teklif Ver | Teklif İste |
| --- | --- |
| Müşteriye profesyonel teklif hazırla, gönder, takip et, satışı kapat | Tedarikçilerden fiyat iste, gelen fiyatları karşılaştır, kazananı seç |

### Slogan (karar bekliyor)

Kesin slogan henüz seçilmedi (uygulama bulgu listesinde "A11"). Bugüne kadar geçen adaylar:

- **"Teklif oluştur. Gönder. Takip et. Satışı kapat."** — ürün belgelerindeki ana vaat, uygulamanın açıklama metni
- **"Tekliften satışa uzanan akıllı yol arkadaşınız"** — konsept marka görsellerinde
- "Teklif verip müşteriyi beklemeyin." — ikincil mesaj adayı
- "Küçük işletmelerin büyük destekçisi" — konsept görselde
- ~~"Professional Proforma Documents"~~ — eski, uygulamadan kaldırıldı

Not: "Teklif İste" özelliği sonradan eklendi; eski sloganlar sadece "Teklif Ver" tarafını anlatıyor.
Slogan seçilirken bu da düşünülmeli.

### Dil ve ton

Basit, profesyonel, doğrudan, samimi. Kurumsal jargon yok.

- Kullanılan kelimeler: **Teklif, Takip, Müşteri, Tedarikçi, Satış, Görüntülendi, Takip zamanı,
  WhatsApp'tan gönder, Taslak, Revize.**
- Kaçınılacaklar: "pipeline", "lead", "workflow", "CRM çözümü", "dijital dönüşüm" gibi ifadeler.
- Uygulama içinde "proforma" yerine **"teklif"** deniyor; proforma kelimesi SEO için sitede geçebilir.

---

## 3. Kime satılıyor?

**Müşterilerine düzenli teklif veren küçük işletmeler, esnaflar, patronun bizzat işlettiği firmalar.**
Tipik kullanıcı: işletme sahibi ya da ofis çalışanı, teknik bilgisi az, WhatsApp'ı çok kullanıyor, bugün
Word/Excel/kağıt/WhatsApp ile idare ediyor, karmaşık programdan kaçıyor, hemen fayda görmek istiyor.

**Adem'in kararı (15.09.2026):** Sitede **tüm KOBİ'lere** seslenilecek; örnekler sektör sektör verilecek.

Uygulamada kayıt olurken seçilen sektörler (`../proformium-app/src/lib/sectors.ts`):

| Sektör | Açıklama |
| --- | --- |
| Otomotiv / Oto servis | Tamir, bakım, yedek parça. **Teklifte araç plakası alanı açılıyor**, plakayla müşteri aranıyor |
| Klima / Kombi servisi | Montaj, bakım, arıza |
| Mobilya / Mutfak / Dekorasyon | Üretim, montaj, iç mimari |
| Cam balkon / PVC | Doğrama, pencere, cam |
| Reklam / Tabela | Tabela, baskı, giydirme |
| İnşaat / Yapı | Tadilat, taahhüt, malzeme |
| Elektrik / Tesisat | Elektrik, sıhhi tesisat |
| Makine | Satış, servis, bakım |
| Nakliye / Lojistik | Taşıma, depolama |
| Güzellik / Bakım | Salon, klinik, bakım |
| Diğer | Teklif veren diğer işletmeler |

Pilot (ilk kullanıcılar) henüz seçilmedi. Uygulamadaki test verileri oto servisi örneğiyle hazırlandı.

### Örnek senaryolar (sitede anlatım için)

- **Mobilyacı:** WhatsApp'tan "mutfak için fiyat alabilir miyim?" gelir. Teklif Proformium'da hazırlanır,
  link WhatsApp'tan gider. İki saat sonra "müşteri teklifi görüntüledi" görünür. İşletme yazar:
  "Teklifimizi incelemişsiniz, aklınıza takılan bir şey var mı?" Müşteri sorar, işletme yanıtlar, satış kapanır.
- **Oto servisi:** Ayda 30 teklif gönderiyor, 10'u cevapsız kalıyor. Proformium açılmayanları ve takip zamanı
  gelenleri gösteriyor; kurtarılan 1–2 iş bile aboneliği fazlasıyla karşılıyor.
- **İnşaat / elektrik malzemesi (Teklif İste):** Şantiye için kablo, sigorta listesi yazılır, 5 tedarikçiye
  link gider. Tedarikçiler üye olmadan fiyat yazar. Fiyatlar yan yana karşılaştırılır, en uygun seçilir,
  kazanan bilgilendirilir, diğerlerine teşekkür edilir.

---

## 4. Uygulamada bugün neler var? (sitede anlatılabilir)

Bu liste 15.09.2026 itibarıyla **canlıda çalışan** özelliklerdir. Sitede **sadece bunlar** vaat edilmeli.

### Teklif Ver

- **Teklif oluşturma:** müşteri seç, ürün/hizmet satırları, miktar, birim, birim fiyat, KDV oranı, iskonto,
  not ve koşullar. Ara toplam, KDV dökümü, genel toplam otomatik.
- **Otomatik teklif numarası** (işletmeye özel önek, ör. `ATS-017`).
- **Müşteri hafızası:** kayıtlı müşteriden seç, yenisini ekranda ekle; listeden arayarak seçim.
- **Ürün/hizmet hafızası:** adını yazmaya başlayınca fiyatı ve birimiyle önerilir.
- **Toplu yükleme:** müşteri ve ürün/hizmet listesini Excel şablonuyla içeri aktarma.
- **Logo, kaşe ve imza** teklif belgesinde. İmza telefondan parmakla atılabiliyor.
- **Otomatik taslak:** yarım kalan teklif kendiliğinden taslağa kaydedilir, sonra devam edilir.
- **Paylaşım:** tek tıkla **WhatsApp**, **e-posta** (kullanıcının kendi mail programı açılır) ya da **PDF indir**.
- **Müşteriye özel teklif linki:** müşteri üye olmadan telefonda açar, PDF indirir, yazdırır,
  WhatsApp/telefon/e-posta ile işletmeye ulaşır. Link tahmin edilemez, arama motorlarına kapalıdır.
- **Görüntülenme takibi:** müşteri linki açınca teklif "Görüntülendi" olur, kaç kez ve ne zaman açıldığı görünür.
  WhatsApp önizleme botları ve işletmenin kendi açışı sayılmaz.
- **Revize iste:** müşteri teklif sayfasından "revize iste" diyerek not bırakabilir; işletmeye bildirim düşer.
- **Revizyon ve geçmiş:** gönderilen teklif revize edilince Rev. 1, Rev. 2 olur; eski halleri ve olaylar saklanır,
  müşteri linki aynı kalır ve hep son hali gösterir.
- **Teklif durumları:** Taslak, Gönderildi, Görüntülendi, Onaylandı, Reddedildi.
- **Takip hatırlatması:** gönderilen teklif için takip zamanı (gün sayısı ayarlardan) gelince hatırlatılır;
  "takip ettim", "3 gün ertele", "kazanıldı", "kaybedildi" tek tıkla.
- **Bildirim kutusu:** müşteri teklifi açtı, revize istedi, tedarikçi fiyat verdi.
- **Genel Bakış (ana ekran):** taslaklar, revize istenenler, gönderilenler, takip zamanı gelenler, son hareketler.
- **Raporlar:** kaç teklif onaylandı/reddedildi/bekliyor, dönüşüm oranı, en çok satış yapılan müşteriler.

### Teklif İste

- **Tedarikçi kaydı:** firma, yetkili, telefon, e-posta, şehir ve **birden fazla sektör**.
- **Teklif talebi:** kalemler (fiyatsız: ad, miktar, birim, not), son yanıt tarihi, tedarikçilere not.
  Sektör seçince o sektörün tedarikçileri listelenir; **bir talepte en fazla 10 tedarikçi**.
- Her tedarikçiye **kendi linki** WhatsApp veya e-postayla gider; tedarikçi **üye olmadan** fiyatını yazar,
  talebi **yazdırabilir / PDF indirebilir**.
- **Karşılaştırma:** gelen fiyatlar yan yana; **tek kazanan** seçilir.
- **Kazananı bilgilendir** (WhatsApp/e-posta, onaylı) ve isteğe bağlı **diğerlerine teşekkür et**.
- Talep taslakları, talebi düzenleme, teklif toplamayı sonlandırma.

### Genel

- **Telefonda tam çalışır** (web uygulaması, ayrı mobil uygulama yok; indirilecek bir şey yok).
- Kayıt e-posta ve şifreyle, **e-posta doğrulamalı**. Kurulumda işletme bilgileri ve sektör seçilir.
- **14 gün deneme** (bugün kayıt olan herkese). Süre dolunca yeni teklif/talep kapanır;
  **mevcut teklifler ve müşteriye giden linkler çalışmaya devam eder**.
- Her işletmenin verisi ayrı ve korumalı (veritabanı düzeyinde yetki kuralları).
  Sunucu ve veritabanı **Frankfurt (AB)**.
- Hesap silme: kullanıcı hesabını ve tüm verisini kendisi silebilir.
- Yasal sayfalar: KVKK aydınlatma, gizlilik, mesafeli satış sözleşmesi, iptal/iade (taslak, bkz. bölüm 7).
- Uygulama içinde "Hata bildir / öneri ver" ve destek e-postası.

### Henüz OLMAYANLAR — sitede vaat edilmemeli

| Yok | Durum |
| --- | --- |
| Anlık bildirim (telefona push, SMS, otomatik e-posta/WhatsApp mesajı) | Pilotta n8n ile kurulacak; bugün bildirim uygulamaya girince görünüyor |
| Otomatik WhatsApp mesajı gönderme | Yok; WhatsApp işletmenin kendi telefonundan açılıyor |
| Müşterinin sayfadan "Onaylıyorum" demesi | Yok (pilot sonrası); onayı işletme işaretliyor |
| Online ödeme / kartla abonelik | Yok; pilotta ödeme elle alınacak, PayTR/iyzico başvurusu yapılacak |
| Free paket ve paket sınırları | **Uygulamada henüz yok** (bkz. bölüm 5) |
| Ekip daveti / birden fazla çalışan | Yok (pilot sonrası) |
| Google ile giriş | Yok |
| e-Fatura, muhasebe, stok, cari | Yok ve planlanmıyor (bilinçli olarak kapsam dışı) |
| Yapay zekâ ile fotoğraftan/belgeden ürün çıkarma | Yok (ileride) |
| Mobil uygulama (App Store / Google Play) | Yok ve planlanmıyor |
| İngilizce | Yok; site ve uygulama Türkçe |

---

## 5. Paketler ve fiyatlar (Adem kararı, 15.09.2026)

Sitede **iki paket**: **Free** ve **Pro**. Fiyatlar ilk etap içindir, **değişebilir**. Fiyatları sitenin
tek bir yerinde (tek dosyada) tutun ki değişince her yerde birlikte güncellensin.

| | **Free** | **Pro** |
| --- | --- | --- |
| Fiyat | Ücretsiz | **Aylık 100 TL** · **Yıllık 1.000 TL** (yıllıkta 2 ay avantaj) |
| Deneme | — | **14 gün ücretsiz deneme** |
| Teklif verme | **Ayda 3 teklif** | Sınırsız |
| Teklif isteme | **Ayda 3 teklif talebi** | Sınırsız |
| Müşteri / ürün kaydı | Sınırlı — **rakam netleşmedi** `[DOLDURULACAK]` (örnek konuşulan: 20 müşteri, 50 ürün) | Sınırsız |
| PDF ve müşteri sayfası | Altında **"Proformium ile hazırlandı"** ibaresi | İbaresiz |
| Raporlar | **Yok** | Var |
| Diğer tüm özellikler (bölüm 4) | Var | Var |

Netleşmemiş, Adem'e sorulacak:

- Fiyatlar **KDV dahil mi hariç mi?** `[DOLDURULACAK]`
- Free'deki müşteri/ürün sınırının rakamı. `[DOLDURULACAK]`
- Tedarikçi sayısı Free'de sınırlı mı? (Talep başına 10 tedarikçi kuralı iki pakette de var.)
- "Aylık 3" sayımı takvim ayına mı, kayıt gününe göre mi yenilenir?

> **Önemli uyumsuzluk:** Uygulamada bugün paket yok. Kayıt olan herkes 14 gün deneme alıyor, süre bitince
> yeni teklif kapanıyor. Free paket (ayda 3+3, ibare, rapor yok, kayıt sınırı) ve Pro'ya geçiş
> **uygulamada sonra yapılacak** (Adem: "bunu uygulamada daha sonra ayarlarız"). Site yayına alınmadan önce
> uygulamanın bu kurallara getirilmesi gerekiyor; aksi halde sitede yazan ile uygulamada olan tutmaz.
> Site hazır ama uygulama hazır değilse Adem'le nasıl yayınlanacağını konuşun (ör. fiyat bölümü "yakında").

**Ödeme akışı bugün:** Online ödeme yok. Pilotta ödeme elle alınıyor (havale/EFT, kullanıcının süresi
elle uzatılıyor). Sitedeki "Pro'ya geç" butonunun nereye gideceği (kayıt → deneme, iletişim, WhatsApp)
Adem'e sorulmalı.

---

## 6. Adresler ve bağlantılar

| Ne | Adres |
| --- | --- |
| **Tanıtım sitesi (bu klasör)** | `https://www.proformium.com` ve `https://proformium.com` |
| Uygulama | `https://app.proformium.com` |
| Giriş yap butonu | `https://app.proformium.com/giris` |
| Kayıt ol / Ücretsiz başla / 14 gün dene | `https://app.proformium.com/kayit` |
| Destek e-postası | `destek@proformium.com` |
| Uygulamadaki yasal sayfalar | `app.proformium.com/kvkk`, `/gizlilik`, `/mesafeli-satis`, `/iptal-iade` |
| Müşteri teklif linkleri (sitede kullanılmaz) | `app.proformium.com/t/<kod>` — arama motorlarına kapalı |

- Alan adı **Cloudflare**'de; DNS kayıtları Vercel'e yönleniyor. Bugün `app.` alt alanı uygulamaya bakıyor,
  kök alan (`proformium.com` / `www`) boş ve **bu site için ayrıldı**. Site Vercel'e bağlanırken
  `app.` kaydına dokunulmamalı.
- Uygulama tarafında robots dosyası sadece giriş/kayıt ve yasal sayfalara izin veriyor; site ile
  aynı alan adında olmadığı için çakışma yok.
- Uygulamada 3 adımlı kayıt var: kayıt → e-posta doğrulama → kurulum (işletme bilgisi, sektör).

---

## 7. Şirket ve yasal bilgiler

Uygulamada yasal metinlerin taslakları hazır (`../proformium-app/src/lib/legal.ts` ve
`../proformium-app/src/app/(legal)/`). **Şirket bilgileri eksik**, Adem dolduracak:

| Bilgi | Durum |
| --- | --- |
| Marka | Proformium |
| Ticari unvan | `[DOLDURULACAK]` |
| Adres | `[DOLDURULACAK]` |
| Vergi dairesi / no | `[DOLDURULACAK]` |
| MERSİS | `[DOLDURULACAK]` |
| Telefon | `[DOLDURULACAK]` |
| E-posta | destek@proformium.com |
| Web | https://proformium.com |

- Metinler **mali müşavir / avukat** kontrolünden geçmeli (henüz geçmedi).
- Adem'in kararı: yasal sayfalar **sitede de** olacak. Aynı metnin iki yerde farklılaşmaması için
  hangi tarafın asıl kaynak olacağı konuşulmalı (öneri: tek metin, diğer taraf ona bağlantı verir ya da
  metin iki projede aynı kaynaktan üretilir).
- Sitede ölçüm/analitik ya da çerez kullanılırsa **KVKK çerez aydınlatması ve onay** gerekir.
  Çerezsiz ölçüm (ör. Vercel Web Analytics) bu yükü azaltır.
- Kurucular: Adem (ürün/teknoloji) ve Rahmi (müşteri keşfi/satış). Sitede kurucu isimleri kullanılacak mı
  Adem'e sorulmalı.

---

## 8. Marka dosyaları (bu klasörde `marka/`)

| Dosya | Ne | Not |
| --- | --- | --- |
| `marka/logo-sembol.svg` | **Asıl logo sembolü** ("P" harfi, içinde belge çizgileri), şeffaf zemin, renk `#8b1f3c` | Uygulamada kullanılan dosyanın aynısı. Vektör, kalite kaybı olmaz |
| `marka/uygulama-ikonu-favicon.svg` | Bordo yuvarlak köşeli kare içinde beyaz "P" | Uygulamanın tarayıcı sekmesi ikonu; site favicon'u için de uygun |
| `marka/monogram-96.png` | 96×96 küçük ikon | E-postalarda kullanılıyor |
| `marka/eposta-baslik.png` | 1200×160, sembol + PROFORMIUM yazısı yan yana | E-posta başlığı; yatay logonun nasıl göründüğüne örnek |
| `marka/marka-rehberi-konsept.jpeg` | İlk marka konsepti: sembol, favicon, renk `#B03A5B`, Poppins SemiBold, panel örneği | **Yapay zekâ ile üretilmiş konsept**, bire bir uygulanmaz |
| `marka/konsept-marka-kiti.png` | Logo varyasyonları (renkli, siyah/beyaz, yatay), app ikonları, palet `#8B0A2B` / `#1A1A1A` / `#F8F9FA` | **Konsept görsel**; paletteki bordo tonu uygulamadakinden farklı |
| `marka/konsept-urun-akisi.png` | Ürün akışı infografiği: 8 adımlı kullanıcı akışı, özellikler, hedef sektörler | **Konsept görsel**; içerik fikri için faydalı. İçindeki "Dış klinikleri" gibi bazı sektörler uygulamada yok |

- **"PROFORMIUM" yazısı (wordmark) ayrı bir dosya değil.** Uygulamada yazı tipiyle yazılıyor:
  Poppins, kalın (600–700), büyük harf, geniş harf aralığı (~0.14–0.18em), koyu renk. Sembolün sağında
  (yatay) ya da altında (ortalı) duruyor.
- Asıl kaynak dosyalar kök klasörde duruyor (`../ORJİNAL LOGO.svg`, `../favicon.svg`); buradakiler kopyadır.

### Uygulamanın kullandığı renk ve yazı tipleri (bilgi — tasarım talimatı değil)

| | Uygulamada |
| --- | --- |
| Logo sembol rengi | `#8b1f3c` (koyu bordo) |
| Uygulama ana rengi (butonlar, vurgular) | `#B03A5B` bordo · CSS'te `oklch(0.5216 0.1503 5.62)` |
| Koyu ton (hover, başlık vurgusu) | `oklch(0.4471 0.1345 5.62)` |
| Açık ton (seçili menü zemini) | `oklch(0.9612 0.0193 5.62)` |
| Zemin | Beyaz / çok açık gri |
| Başlık yazı tipi | **Poppins** (500, 600, 700) |
| Metin yazı tipi | **Inter** |
| İkonlar | lucide ikon seti |
| Genel his | Temiz beyaz arayüz, bordo vurgu, profesyonel ama cana yakın |

Site ile uygulama arasında geçişte kullanıcı "başka bir yere geldim" hissetmesin diye marka tutarlılığı
önemli; ama sitenin nasıl görüneceğine **Adem karar verecek**.

---

## 9. Sitede neler olacak (kapsam — içerik, tasarım değil)

Adem'in kararı (15.09.2026): **Tek sayfa landing + fiyatlar**, **blog (SEO için)**, **yasal sayfalar**.
Dil: **sadece Türkçe**.

### 9.1 Ana sayfa (landing) — içerik olarak neler anlatılmalı

Sıra ve görünüm Adem'in tasarımına göre değişir; bu sadece içerik listesidir:

1. **Üst menü:** logo, bölüm bağlantıları (Özellikler, Nasıl çalışır, Fiyatlar, Blog, SSS), **Giriş yap**,
   **Ücretsiz başla**.
2. **Açılış (hero):** slogan (karar bekliyor), bir cümle açıklama, ana buton (Ücretsiz başla / 14 gün dene),
   uygulamadan bir görsel (teklif ekranı veya telefonda müşteri linki).
3. **Sorun:** "Teklif gönderdiniz, müşteri 'düşüneyim' dedi, sonra?" — unutulan takip, kaçan satış.
4. **Nasıl çalışır — Teklif Ver:** Müşteriyi seç → Teklifi hazırla → WhatsApp'tan gönder →
   Müşteri açınca gör → Takip et, satışı kapat.
5. **Nasıl çalışır — Teklif İste:** Kalemleri yaz → Tedarikçileri seç → Linkleri gönder →
   Fiyatları karşılaştır → Kazananı seç.
6. **Özellikler:** bölüm 4'teki listeden öne çıkanlar (görüntülenme bildirimi, WhatsApp, müşteri/ürün hafızası,
   logo-kaşe-imza, PDF, revize, takip hatırlatması, raporlar, telefonda kullanım).
7. **Sektörler:** bölüm 3'teki liste, sektöre özel kısa örnekler (otomotivde plaka alanı gibi).
8. **Güven:** veriler AB'de (Frankfurt), her işletmenin verisi ayrı, KVKK, müşteriye giden link tahmin edilemez,
   istediğinizde hesabınızı ve verinizi silebilirsiniz. (Pilot sonrası: kullanıcı yorumları.)
9. **Fiyatlar:** Free ve Pro, aylık/yıllık seçimi, 14 gün deneme vurgusu (bölüm 5).
10. **SSS:** ör. "Kurulum gerekir mi?", "Telefonda çalışır mı?", "Müşterim üye olmak zorunda mı?",
    "Tedarikçim üye olmak zorunda mı?", "Deneme bitince tekliflerim silinir mi?", "e-Fatura keser mi?" (hayır),
    "Verilerim nerede?", "İptal edebilir miyim?".
11. **Son çağrı:** Ücretsiz başla.
12. **Alt bilgi:** logo, kısa açıklama, destek e-postası, yasal sayfa bağlantıları, şirket unvanı (dolunca),
    Giriş yap / Kayıt ol.

### 9.2 Blog

- Amaç: Google'da ve yapay zekâ aramalarında (ChatGPT, Gemini, Perplexity) görünmek.
- Kurucuların eski notlarında geçen arama fikirleri: "boş proforma fatura örneği", "excel teklif şablonu".
- Yazı konusu örnekleri: fiyat teklifi nasıl hazırlanır, teklif formunda neler olmalı, proforma fatura
  ile teklif farkı, WhatsApp'tan teklif gönderirken dikkat edilecekler, teklif sonrası müşteri takibi,
  tedarikçiden fiyat toplama, sektörel teklif örnekleri (oto servis, klima montaj, cam balkon…).
- İlk etapta yazılar sitenin içinde dosya olarak (Markdown/MDX) tutulabilir; ayrı bir içerik yönetim sistemi
  gerekmez. Adem yazıları kendisi mi yazacak, nasıl ekleyecek — sorulmalı.
- Uygulamada Excel şablonları var (`../proformium-app/public/sablonlar/`): müşteri ve ürün/hizmet yükleme
  şablonu. İleride blogda "ücretsiz teklif şablonu indir" gibi içeriklere dönüştürülebilir.

### 9.3 Yasal sayfalar

KVKK aydınlatma metni, gizlilik politikası, mesafeli satış sözleşmesi, iptal ve iade koşulları.
Kaynak ve eksikler bölüm 7'de. Çerez kullanılırsa çerez politikası da eklenir.

### 9.4 Görseller

- Sitede uygulama ekran görüntüleri gerekecek. **Gerçek müşteri bilgisi görünmemeli**; ekran görüntüleri
  örnek verili bir demo hesaptan alınmalı (uygulamadaki test hesaplarında gerçek kişiye benzeyen isim/telefon
  var, dikkat).
- Görseller boyut olarak küçültülmeli (WebP/AVIF), sayfa hızı SEO'yu doğrudan etkiler.

---

## 10. Altyapı (Adem kararı: Next.js)

- **Next.js (App Router) + TypeScript.** Uygulamayla aynı teknoloji; bileşen ve bilgi paylaşımı kolay.
- Uygulama **Next.js 16**, React 19, Tailwind CSS v4 kullanıyor. Next.js 16'da eski sürümlere göre
  değişiklikler var (ör. `middleware` yerine `proxy`, `PageProps` tipleri); kurulumda
  `node_modules/next/dist/docs/` içindeki güncel belgeye bakın, eski alışkanlıkla yazmayın.
  Tailwind kullanılıp kullanılmayacağı tasarımla birlikte Adem'le netleşir.
- **Sayfalar statik üretilmeli** (derleme anında HTML). Tanıtım sitesi ve blog için sunucuda çalışan koda
  gerek yok; hem hızlı hem ucuz hem SEO dostu.
- **Barındırma, ilk etap ücretsiz: Vercel.** Uygulama da Vercel'de (ekip/proje adı "proformium",
  bölge Frankfurt). Site **ayrı bir Vercel projesi** olmalı.
  - Dikkat: Vercel'in ücretsiz (Hobby) planı kurallarında ticari kullanım kısıtı var. Para alınmaya başlayınca
    uygulama için Pro'ya (20 $/ay) geçilecek; site aynı ekipteyse o plan kapsar. Adem'e hatırlatın.
- **İleride Hostinger'a taşınabilirlik:** Next.js `output: "export"` ile tamamen statik dosya çıkarır;
  bu dosyalar Hostinger gibi sıradan bir sunucuya yüklenebilir. Bunun için baştan:
  - sunucu gerektiren özellikler (API route, sunucu eylemi, ISR/yeniden doğrulama, çerezle çalışan sayfa,
    `next/image` otomatik optimizasyonu) **kullanılmamalı** ya da statik karşılığı seçilmeli,
  - form (iletişim/bülten) gerekiyorsa üçüncü taraf bir form servisi ya da uygulamanın API'si düşünülmeli.
- **Kaynak kod:** uygulama kendi git reposunda (GitHub, Vercel'e bağlı; her push canlıya gidiyor).
  Site için ayrı repo mu açılacak, GitHub hesabı/organizasyonu hangisi — Adem'e sorulmalı.
- Gizli anahtar gerekmemeli. Uygulamanın Supabase veritabanına **siteden bağlanılmaz**.

---

## 11. SEO ve GEO

**SEO** = Google/Bing'de bulunmak. **GEO** (generative engine optimization) = ChatGPT, Gemini, Perplexity,
Claude gibi yapay zekâ asistanlarının Proformium'u doğru tanıyıp önermesi. İkisi için yapılacaklar çoğunlukla
aynı: hızlı, anlaşılır, yapılandırılmış, gerçek bilgi içeren sayfalar.

### Teknik temel

- `<html lang="tr">`, her sayfada benzersiz `title` ve `description`, `canonical` adres
  (tercih: `https://www.proformium.com` ya da `https://proformium.com` — biri seçilip diğeri ona yönlenir).
- `sitemap.xml` ve `robots.txt` (Next.js `app/sitemap.ts`, `app/robots.ts`).
- Her sayfa ve blog yazısı için Open Graph / paylaşım görseli (WhatsApp'ta paylaşılınca düzgün önizleme —
  bu kitle linki WhatsApp'ta paylaşır).
- Anlamlı başlık sırası (tek H1), görsellerde `alt` metni, Türkçe ve okunur adresler
  (ör. `/blog/fiyat-teklifi-nasil-hazirlanir`).
- **Core Web Vitals:** statik sayfa, küçük görseller, gereksiz JavaScript yok, yazı tipleri yerelden
  (`next/font`), düzen kayması yok. Telefonda hız öncelikli.
- **Yapılandırılmış veri (JSON-LD):**
  - `Organization` (ad, logo, e-posta, web)
  - `SoftwareApplication` (kategori: BusinessApplication, işletim: Web; fiyatlar `Offer` olarak:
    0 TL Free, 100 TL/ay, 1.000 TL/yıl)
  - `FAQPage` (SSS bölümü)
  - `BlogPosting` ve `BreadcrumbList` (blog)
- Google Search Console ve Bing Webmaster Tools'a site kaydı ve sitemap gönderimi (Adem'in hesabıyla).

### İçerik ve anahtar kelimeler (öneri, Adem'le netleşir)

teklif hazırlama programı · fiyat teklifi programı · teklif formu · fiyat teklifi şablonu · proforma fatura
örneği / programı · online teklif oluşturma · WhatsApp'tan teklif gönderme · teklif takip programı ·
tedarikçiden fiyat alma · sektörel: oto servis teklif formu, klima montaj teklifi, cam balkon fiyat teklifi,
tabela teklif formu, elektrik tesisat teklifi.

### GEO için ek

- Sayfa başında **Proformium'un ne olduğunu tek paragrafta net anlatan** metin (yapay zekâlar bu tanımı alıntılar).
  Bölüm 2'deki tek cümle temel alınabilir.
- Somut ve doğrulanabilir bilgiler açıkça yazılmalı: fiyat, 14 gün deneme, telefonda çalışma, üyelik gerektirmeyen
  müşteri linki, talep başına 10 tedarikçi, verilerin AB'de olması.
- Soru-cevap biçiminde SSS ve blog yazıları.
- Kök dizinde `llms.txt` (yapay zekâ araçları için sitenin kısa özeti ve önemli sayfa bağlantıları).
- `robots.txt`'te yapay zekâ tarayıcılarına (GPTBot, ClaudeBot, PerplexityBot, Google-Extended vb.)
  izin verilip verilmeyeceği **Adem'in kararı**; GEO hedefleniyorsa izin verilmesi gerekir.
- Vaat edilmeyen özelliği yazmamak GEO için de önemli: yapay zekâ yanlış bilgiyi kullanıcıya aktarır
  (bölüm 4'teki "olmayanlar" tablosu).

---

## 12. Uygulama tarafında ileride sitenin ihtiyacı olacaklar (not)

Bunlar **site sohbetinde yapılmaz**; Adem uygulama sohbetine taşır:

- Free / Pro paketleri: ayda 3 teklif + 3 talep sınırı, müşteri/ürün sınırı, Free'de "Proformium ile hazırlandı"
  ibaresi, Free'de raporların kapalı olması, Pro'ya geçiş ve deneme süresinin paketle ilişkisi.
- Online ödeme (PayTR / iyzico) — başvuru onaylanınca.
- Sitede "Ücretsiz başla" ile gelen kullanıcının hangi paketle açılacağı (ör. `app.proformium.com/kayit?paket=pro`).
- Yasal metinlerin tek kaynaktan yönetilmesi.

---

## 13. Başlamadan önce Adem'e sorulacaklar

Adem kod yazılmadan önce soruların sorulmasını istedi. Bu dosya hazırlanırken şunlar zaten cevaplandı:

- ✅ Klasör: `proformium-web` · ✅ Adresler: site `www.proformium.com`, uygulama `app.proformium.com`
- ✅ Altyapı: Next.js · ✅ Barındırma: ilk etap ücretsiz Vercel, ileride Hostinger olabilir
- ✅ Kapsam: tek sayfa landing + fiyatlar, blog, yasal sayfalar · ✅ Dil: sadece Türkçe
- ✅ Paketler: Free (ayda 3 teklif + 3 talep, PDF'te ibare, rapor yok, müşteri/ürün sınırı) ve
  Pro (100 TL/ay, 1.000 TL/yıl, 14 gün deneme) · ✅ Hedef: tüm KOBİ'ler, örnekler sektörlü
- ✅ Tasarım (font, renk, düzen): Adem yapacak

Hâlâ açık olanlar:

1. **Tasarım nasıl gelecek?** Figma, görsel/ekran görüntüsü, örnek site, yoksa birlikte adım adım mı?
2. **Slogan** hangisi? (bölüm 2)
3. Fiyatlar **KDV dahil mi**? Free'deki **müşteri/ürün sınırı** kaç? Aylık sayım nasıl yenilenir?
4. "Pro'ya geç" / "Satın al" butonu **nereye** gidecek (bugün online ödeme yok)?
5. Site **yayına ne zaman** alınacak: uygulamada Free/Pro hazır olmadan fiyat bölümü nasıl gösterilecek?
6. **Şirket bilgileri** (unvan, adres, vergi, MERSİS, telefon) hazır mı? Yasal metnin asıl kaynağı site mi uygulama mı?
7. **İletişim:** WhatsApp numarası, telefon, iletişim formu olacak mı?
8. **Ölçüm/analitik** kullanılacak mı (Vercel Analytics çerezsiz, Google Analytics çerez onayı ister)?
9. Yapay zekâ tarayıcılarına izin verilsin mi (GEO)?
10. **Blog:** ilk yazılar kimden, kaç tane, nasıl eklenecek?
11. **Ekran görüntüleri / demo video:** var mı, demo hesap açılsın mı?
12. Sitede **kurucu isimleri**, "hakkımızda" bölümü olacak mı?
13. **Kaynak kod:** ayrı GitHub reposu mu, hangi hesap? Vercel'de aynı ekip ("proformium") mi?
14. Kök alan adı tercihi: `www.proformium.com` mu `proformium.com` mu asıl adres olacak?
