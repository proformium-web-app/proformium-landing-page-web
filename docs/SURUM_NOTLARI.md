# Sürüm notları — Proformium tanıtım sitesi

Her yayında ne değiştiği burada kısa notla tutulur (yeniden eskiye).

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
