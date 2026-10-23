# Sürüm notları — Proformium tanıtım sitesi

Her yayında ne değiştiği burada kısa notla tutulur (yeniden eskiye).

## 0.3.1 — 23.10.2026 · Yasal sayfalar, yeni blog yazısı

- Türkçe yasal sayfalarda (KVKK, mesafeli satış, iptal/iade) unvan/ad-soyad ve adres satırları kaldırıldı; veri
  sorumlusu olarak "Proformium" yazıyor (Adem). Taslak uyarısı artık sadece vergi, MERSİS ve telefon için.
- İngilizce Terms/Privacy işletmeci adresi: Tahtakale Mahallesi, Çuha Çiçeği Sokak No:8, 34488 Avcılar/İstanbul.
- Mesafeli satış: hizmet Pro paketi, süre 1 yıl, bedel 1.600 TL (KDV dahil, yıllık peşin). Paket yalnızca yıllık (Adem).
- Yeni blog yazısı: /blog/fiyat-teklifi-nasil-hazirlanir, görseli Adem'den (hesap makinesi ve not defteri, WebP 44 KB). llms.txt'e eklendi.
- scripts/gorsel-donustur.mjs: kaynağı silinmiş görselleri atlıyor (eskiden hata verip duruyordu).

## 0.3.0 — 22.10.2026 · Fiyatlar açıldı, İngilizce yasal sayfalar, destek, anahtar kelime sayfaları

Adem'in "Düzeltilmesi Gereken Şeyler" listesi (docs/Adem - Düzeltilmesi Gereken Şeyler.docx):
- Fiyatlandırma: "Yakında" kalktı. Pro **yıllık 1.600 TL** ("Avantajlı fiyat" rozeti, "aylık sadece 133 TL'ye denk
  gelir · KDV dahil"); aylık/yıllık anahtarı kaldırıldı. JSON-LD Offer'ları buna göre.
- İngilizce **/terms** (Terms of Service) ve **/privacy** (Privacy Policy); girişte işletmeci bilgisi (Zeynep TAŞIN,
  adres, telefon, destek e-postası). Alt bilgide her sayfada bağlantı.
- Deneme yazan yerlere not: "Beğenmezseniz tüm verilerinizi tek tıkla Excel olarak indirebilirsiniz" (uygulama 0.13.6).
- **/destek** sayfası; alt bilgide büyük, tıklanabilir destek e-postası kutusu; telefon menüsünde Destek.

Uygulamayla eşitleme (uygulama 0.13.x):
- Free sınırları 5 müşteri / 10 ürün (önceden sitede 20 / 40 yazıyordu).
- Deneme/Pro bitince hesap Free'ye geçer (SSS, fiyat notu). Google ile giriş, PDF ekli e-posta, müşteriye son verilen
  fiyat SSS / özellik / llms.txt metinlerine eklendi. KVKK sağlayıcı tablosu: tekrar eden Cloudflare satırı birleşti,
  Google ve Resend (teklif e-postaları) eklendi.

SEO / GEO:
- 8 anahtar kelime sayfası (`src/content/cozumler.ts`, `src/app/[cozum]/page.tsx`): /e-proforma, /e-teklif,
  /proforma-fatura, /fiyat-teklifi-programi, /teklif-takip-programi, /teklif-formu, /whatsapp-teklif-gonderme,
  /tedarikci-teklif-toplama. Her birinde tanım paragrafı, SSS (FAQPage), breadcrumb, ilgili sayfalar.
- Alt bilgide "Çözümler" sütunu (iç bağlantı). Ana sayfa başlığı ve açıklaması "teklif ve proforma hazırlama programı,
  e-teklif" kelimeleriyle. SSS'ye "Proformium nedir?" ve fiyat sorusu. Site haritası 18 adres. llms.txt yenilendi.
- Düzeltme: 1280–1440 px ekranlarda üst menü sığmıyor, "Ücretsiz dene" taşıyordu. Tam menü 1280 px'ten,
  menü ikonları 1440 px'ten itibaren; altında menü düğmesi.

Uygulama tarafında yapılacak (Adem, uygulama sohbeti): `PRO_PRICE` hâlâ aylık 100 / yıllık 1.000 TL; sitedeki
yıllık 1.600 TL ile eşitlenmeli.

## 03.10.2026 · Belgeler ve arama motoru kaydı (site kodu değişmedi)

- `SITE_BAGLAMI.md` ve `PLAN.md` Cloudflare Pages'e göre güncellendi (barındırma, ölçüm, yayın adımı, kaynak kod).
- Canlı kontrol: `www.proformium.com` 200; kök alan ve http 301 ile www/https'e gidiyor; robots.txt ve
  sitemap.xml (7 adres) doğru; canonical `https://www.proformium.com`; olmayan sayfa 404.
- Google Search Console (Domain mülkü, DNS TXT) ve Bing Webmaster Tools adımları Adem'e yazıldı;
  durum `PLAN.md` bölüm 6'daki listede. Search Console mülkü 03.10.2026'da doğrulandı (TXT kaydı DNS'te, SPF kaydı yerinde);
  site haritası gönderimi, dizin isteği ve Bing içe aktarma bekliyor.

## 0.2.2 — 02.10.2026 · Cloudflare Pages'e geçiş

- Barındırma Vercel'den **Cloudflare Pages**'e alındı (Vercel'in ücretsiz paketi ticari kullanıma izin vermiyor;
  Cloudflare Pages ücretsiz pakette izin veriyor, alan adı da zaten Cloudflare'de).
- `@vercel/analytics` kaldırıldı; ölçüm Cloudflare Web Analytics ile (çerezsiz, panelden açılır).
- KVKK metni: hizmet sağlayıcı tablosuna Cloudflare eklendi, çerez bölümünde ölçüm adı güncellendi.
- `public/_headers`: güvenlik başlıkları ve değişmeyen dosyalar için uzun önbellek.

## 0.2.1 — 16.09.2026 · Logo, görseller, yazı boyutu

- Yatay logo (marka/logo-yatay-proformium.svg) üst menü, alt bilgi ve paylaşım görselinde.
- Özellikler bölümünde teklif belgeleri görseli (Site İçin resimler telifsiz/screen.png → WebP).
- Adem'in Pexels fotoğrafları WebP'ye çevrilip public/gorseller/ altına kondu (henüz yerleştirilmedi).
- Küçük yazılar büyütüldü: karşılaştırma tablosu, adım açıklamaları, özellik/sektör/güven kartları, fiyat ve SSS metinleri.

## 0.2.0 — 16.09.2026 · Tasarım Stitch'e göre yeniden

- Adem geri bildirimi: sade sürüm beğenilmedi; görünüm, yazı tipleri (Plus Jakarta Sans + Space Grotesk), renk
  çeşitliliği ve animasyonlar Stitch çıktısındaki gibi yapıldı. Logo marka dosyasından; koyu tema yok.
- Hero: üst üste iki mockup kartı, yüzen rozetler, gradient başlık. Karşılaştırma tablosu gradient kutu içinde.
- Nasıl çalışır: 01-02 / ekran / 03-04 düzeni; Teklif İste için aynı düzende ikinci blok ve tedarikçi karşılaştırma kartı.
- Özellikler: sol büyük görsel + sağda renkli ikonlu 5 kart + 4 küçük kart. Sektörler: emoji sekmeler, renkli rozetler,
  etiketler, hızlı bakış kartları. Fiyat, SSS, son çağrı Stitch stiline geçti.
- Kaydırınca belirme animasyonu (IntersectionObserver, hareket azaltma tercihine saygılı).
- İçerik yine uygulamadaki gerçek özelliklerle sınırlı; rakamlar temsilî.

## 0.1.0 — 16.09.2026 · İlk kurulum

- Next.js 16 (App Router, TypeScript, Tailwind v4), tamamen statik çıktı (`output: "export"`).
- Tasarım: Stitch çıktısı (`code.html`, `DESIGN.md`) temel alındı; yazı tipi Plus Jakarta Sans + Inter, koyu tema yok.
- Ana sayfa bölümleri: hero, neden Proformium (karşılaştırma), nasıl çalışır (Teklif Ver + Teklif İste),
  özellikler, sektörler (5 sekme), güven, fiyatlar, SSS, iletişim, son çağrı.
- İçerik uygulamada bugün çalışan özelliklerle sınırlandı (SITE_BAGLAMI.md bölüm 4); müşteri onayı, push bildirimi,
  şablon gibi olmayan vaatler çıkarıldı.
- Fiyatlar tek dosyada (`src/content/fiyatlar.ts`); `FIYAT_GOSTER=false` ile "Yakında" gösteriliyor.
- Blog: `content/blog/*.md` → `/blog` ve `/blog/[slug]`; ilk yazı eklendi.
- Yasal sayfalar: KVKK, gizlilik, mesafeli satış, iptal/iade (şirket bilgileri `[DOLDURULACAK]`).
- SEO/GEO: metadata, canonical, Open Graph görseli, sitemap.xml, robots.txt (yapay zekâ tarayıcıları izinli),
  llms.txt, JSON-LD (Organization, WebSite, SoftwareApplication, FAQPage, BlogPosting, BreadcrumbList).
- Vercel Web Analytics (çerezsiz).
