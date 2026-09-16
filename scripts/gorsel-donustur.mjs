// Kaynak görselleri (PNG/JPG) WebP'ye çevirir ve boyutlarını küçültür.
// Çalıştırma: npm run gorseller
// Kaynaklar proje kökündeki dosyalar; çıktı public/ altına yazılır.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const isler = [
  {
    kaynak: "Uygulama ekran dashboard görüntüsü.png",
    hedef: "public/gorseller/uygulama-genel-bakis.webp",
    genislik: 1600,
  },
  {
    kaynak: "Blog/Blog 001.jpg",
    hedef: "public/blog/fiyatiniza-bakip-donecegim-diyen-musteri-neden-donmez.webp",
    genislik: 1400,
  },
];

await mkdir("public/gorseller", { recursive: true });
await mkdir("public/blog", { recursive: true });

for (const is of isler) {
  const bilgi = await sharp(is.kaynak)
    .resize({ width: is.genislik, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(is.hedef);
  console.log(`${is.hedef}: ${bilgi.width}x${bilgi.height}, ${Math.round(bilgi.size / 1024)} KB`);
}
