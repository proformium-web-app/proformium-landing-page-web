# Proformium tanıtım sitesi

www.proformium.com — Next.js 16, tamamen statik. Ürün bağlamı için `SITE_BAGLAMI.md`, plan için `PLAN.md`,
çalışma kuralları için `CLAUDE.md`.

## Komutlar

```bash
npm run dev        # geliştirme sunucusu (http://localhost:3000)
npm run build      # statik çıktı → out/
npm run lint
npm run gorseller  # kök klasördeki kaynak görselleri WebP'ye çevirir (public/)
npm run og         # paylaşım görselini üretir (src/app/opengraph-image.png)
```

## Nerede ne var

| Yol | Ne |
| --- | --- |
| `src/content/site.ts` | Adresler, menü, destek e-postası, slogan, tanım |
| `src/content/fiyatlar.ts` | Paketler ve fiyatlar (tek kaynak); `FIYAT_GOSTER` anahtarı |
| `src/content/sss.ts` | SSS (FAQPage JSON-LD de buradan) |
| `src/content/sektorler.ts` | Sektör panelleri |
| `src/components/bolumler/` | Ana sayfa bölümleri |
| `src/lib/legal.ts` | Şirket bilgileri (yasal sayfalar) |
| `content/blog/*.md` | Blog yazıları |
| `public/llms.txt` | Yapay zekâ araçları için site özeti |
| `docs/SURUM_NOTLARI.md` | Yayın notları |

## Blog yazısı eklemek

1. `Blog/` klasörüne yazıyı (`.md`) ve görselini koy (Adem).
2. Görseli `scripts/gorsel-donustur.mjs` listesine ekleyip `npm run gorseller` çalıştır (WebP, `public/blog/`).
3. Yazıyı `content/blog/<adres>.md` olarak kaydet; dosya başına bilgi bloğu ekle
   (örnek: `content/blog/fiyatiniza-bakip-donecegim-diyen-musteri-neden-donmez.md`).
4. `npm run build` ile kontrol et, push'la.
