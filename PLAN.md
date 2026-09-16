# Proformium tanıtım sitesi — uygulama planı

Hazırlandı: 16.09.2026 · Kararlar: `Soru Cevapları.md` ve `Soru Cevapları- 2.md` (Adem)

## 1. Kararlar (özet)

| Konu | Karar |
| --- | --- |
| Tasarım | Stitch çıktısı (`code.html`) temel; skill'ler (ui-ux-pro-max, frontend-design) ile Next.js'e taşınır |
| Slogan | "Teklif Oluştur. Gönder. Takip Et. Satışı Kapat." |
| Yazı tipi | Başlık **Plus Jakarta Sans**, metin **Inter** (next/font ile yerel) |
| Koyu tema | Yok |
| İçerik | Sadece uygulamada olan özellikler; sektör panelleri yeniden yazılır |
| Sektörler | Oto servis, Mobilya/Mutfak, Klima/Tesisat, Cam balkon/PVC, Reklam/Tabela (5) |
| Fiyat | Free 0 TL (ayda 3 teklif + 3 talep, 20 müşteri, 40 ürün, ibare, rapor yok) · Pro 100 TL/ay, 1.000 TL/yıl, KDV dahil, takvim ayı. **Yayında fiyat yerine "Yakında"** gösterilir; rakamlar tek dosyada hazır durur |
| Pro butonu | `#iletisim` bölümüne (destek@proformium.com); form yok, ileride n8n |
| İletişim | Sadece e-posta. WhatsApp ve canlı destek/chatbot ileride |
| Bildirim ifadesi | "Müşteri açınca uygulamada anında görürsünüz; WhatsApp bildirimleri yakında" (push yok, vaat edilmez) |
| Analitik | Vercel Web Analytics (çerezsiz, çerez banner'ı gerekmez) |
| GEO | robots.txt'te yapay zekâ tarayıcılarına izin, `llms.txt` |
| Blog | `Blog/` klasöründeki `.md` + görsel → `content/blog/` altında MDX'e dönüştürülür; ilk yazı hazır |
| Görseller | Hero ve nasıl çalışır bölümünde `Uygulama ekran dashboard görüntüsü.png` (WebP'ye çevrilir); Stitch'teki geçici Google görselleri kaldırılır |
| Logo | `marka/logo-sembol.svg` + Plus Jakarta Sans "PROFORMIUM" yazısı; favicon `marka/uygulama-ikonu-favicon.svg` |
| Kurucular | Sitede yok |
| Yasal | KVKK, gizlilik, mesafeli satış, iptal/iade sayfaları sitede; şirket bilgileri `[DOLDURULACAK]` olarak kalır |
| Kod | GitHub `proformium-web-app/proformium-landing-page-web` (boş), Vercel `proformium/proformium-landing-page-web` |
| Adres | Asıl `https://www.proformium.com`; `proformium.com` ona yönlenir |

## 2. Teknik yapı

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn (Animate UI gerekirse).
- `output: "export"` uyumlu: API route, sunucu eylemi, ISR yok; `next/image` optimizasyonu kapalı (`images.unoptimized`), görseller derlemede WebP'ye çevrilip `public/` altında tutulur.
- Fiyat ve paket bilgileri tek dosyada: `src/content/fiyatlar.ts` (+ `fiyatGoster: false` anahtarı "Yakında" için).
- Dış bağlantılar tek dosyada: `src/content/baglantilar.ts` (kayıt, giriş, destek e-postası).
- Sayfa ağacı:
  - `/` landing (üst menü, hero, sorun, nasıl çalışır Teklif Ver, nasıl çalışır Teklif İste, özellikler, sektörler, güven, fiyatlar, SSS, iletişim, son çağrı, alt bilgi)
  - `/blog`, `/blog/[slug]`
  - `/kvkk`, `/gizlilik`, `/mesafeli-satis`, `/iptal-iade`
  - `sitemap.xml`, `robots.txt`, `llms.txt`, `opengraph-image`
- JSON-LD: Organization, SoftwareApplication (Offer'lar fiyat gizliyken de eklenir mi → hayır, "Yakında" döneminde Offer yazılmaz), FAQPage, BlogPosting, BreadcrumbList.
- İkonlar: lucide-react; WhatsApp için lucide `MessageCircle` ya da dashboard-icons'tan marka ikonu (kullanım kurallarına uygun); PDF için `FileText`.
- Vercel Web Analytics paketi (`@vercel/analytics`), statik export ile uyumlu.

## 3. Adımlar

1. **Kurulum** — `create-next-app`, Tailwind v4, shadcn init, next/font, git init ve GitHub'a bağlama, `docs/SURUM_NOTLARI.md`.
2. **Tasarım sistemi** — renkler (`#8B1F3C` ana, `#B03A5B` vurgu, DESIGN.md tonları), yazı tipleri, container/boşluk ölçüleri, buton/kart bileşenleri. Yapay zekâ kalıplarından kaçınma: gradient yazı, animate-ping noktalar, emoji ikon, "✨" rozet, bounce animasyonu kaldırılır; sade ve gerçek ekran görüntüsü öne çıkar.
3. **Landing bölümleri** — Stitch'teki sıra korunur, içerik `SITE_BAGLAMI.md` bölüm 4 ile sınırlanır. Teklif İste için ayrı "nasıl çalışır" bölümü eklenir. Güven bölümü eklenir (Frankfurt, verisi ayrı işletme, KVKK, tahmin edilemez link, hesap silme).
4. **Sektör panelleri (5)** — her biri gerçek özelliklerle: oto serviste plaka alanı ve plakayla arama; mobilyada revizyon geçmişi ve müşteri linki; klima/tesisatta telefondan teklif ve ürün hafızası; cam balkonda Teklif İste ile tedarikçi karşılaştırma; reklam/tabelada toplu ürün yükleme ve logo-kaşe-imza. Sahte "şablon" bağlantıları kaldırılır.
5. **Fiyatlar** — iki kart, aylık/yıllık anahtar; `fiyatGoster=false` iken rakam yerine "Yakında" ve "Bize yazın" butonu. Paket farkları bağlam dosyasına göre düzeltilir (görüntülenme ve kaşe/imza iki pakette de var).
6. **SSS** — 8 soru (kurulum, telefon, müşteri üyeliği, tedarikçi üyeliği, deneme bitince, e-Fatura, veriler nerede, iptal). Doğrulanmamış "256-bit SSL, günlük yedek" ifadeleri çıkarılır.
7. **Blog** — MDX altyapısı, ilk yazı ("Fiyatınıza bakıp döneceğim…") başlık/tarih/açıklama bloğuyla, görseli WebP, BlogPosting JSON-LD. Bildirim cümlesi karara göre düzeltilir.
8. **Yasal sayfalar** — uygulamadaki taslak metinler (`../proformium-app/src/lib/legal.ts`, sadece okunur) siteye kopyalanır, şirket alanları `[DOLDURULACAK]`.
9. **SEO/GEO** — metadata, canonical, OG görseli, sitemap, robots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended izinli), llms.txt, JSON-LD.
10. **Doğrulama** — `next build` (statik export), tarayıcıda masaüstü ve telefon görünümü (webapp-testing), Lighthouse hız/erişilebilirlik kontrolü, tüm bağlantılar.
11. **Yayın** — GitHub'a push, Vercel derlemesi, Cloudflare'de `www` ve kök kaydın Vercel'e yönlendirilmesi (Adem yapar, adımlar yazılır; `app` kaydına dokunulmaz), Search Console ve Bing kaydı.

## 4. Kapsam dışı (şimdilik)

Koyu tema, iletişim formu, WhatsApp butonu, canlı destek/chatbot, online ödeme, kurucu bölümü, İngilizce.

**İleride eklenecek (Adem, 16.09.2026):** uygulamanın nasıl çalıştığını gösteren **YouTube videosu**, sitede
önizleme görseliyle (tıklayınca oynayan, sayfa hızını bozmayan "lite embed" yaklaşımı). Hero ya da
"Nasıl çalışır" bölümüne yerleşir; tasarımda yer ayrılır.

## 5. Uygulama tarafına notlar (Adem uygulama sohbetine taşır)

- Free/Pro paketleri ve sınırlar (3+3, 20 müşteri, 40 ürün, ibare, rapor kapalı, takvim ayı).
- Push/WhatsApp bildirimi (n8n).
- `app.proformium.com/kayit?paket=pro` gibi paket parametresi.
- Yasal metinlerin tek kaynaktan yönetimi.
