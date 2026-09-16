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
  // Adem'in eklediği görseller (Site İçin resimler telifsiz/, 16.09.2026)
  {
    kaynak: "Site İçin resimler telifsiz/screen.png",
    hedef: "public/gorseller/teklif-belgeleri.webp",
    genislik: 1200,
  },
  {
    kaynak: "Site İçin resimler telifsiz/waiting for message smartphone business man.jpg",
    hedef: "public/gorseller/foto-telefon-bekleyen.webp",
    genislik: 1200,
  },
  {
    kaynak: "Site İçin resimler telifsiz/pexels-vladislavsmigelski-12355752.jpg",
    hedef: "public/gorseller/foto-telefonda-mesaj.webp",
    genislik: 1600,
  },
  {
    kaynak: "Site İçin resimler telifsiz/pexels-mikhail-nilov-7582898.jpg",
    hedef: "public/gorseller/foto-isletme-sahibi.webp",
    genislik: 1600,
  },
  {
    kaynak: "Site İçin resimler telifsiz/pexels-gabby-k-5849583.jpg",
    hedef: "public/gorseller/foto-grafik-el.webp",
    genislik: 1600,
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
