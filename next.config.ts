import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Proje kökünü sabitle: üst klasörlerdeki lock dosyaları yanlışlıkla seçilmesin.
  turbopack: { root: path.resolve(process.cwd()) },
  // Tamamen statik çıktı: sunucu gerektirmez, Vercel'de ve ileride Hostinger gibi
  // sıradan bir sunucuda çalışır (SITE_BAGLAMI.md bölüm 10).
  output: "export",
  images: {
    // Statik çıktıda next/image sunucu optimizasyonu yok; görseller derlemeden önce
    // scripts/gorsel-donustur.mjs ile WebP'ye çevrilip public/ altına konuyor.
    unoptimized: true,
  },
  // Adres sonunda eğik çizgi yok: /blog, /kvkk gibi temiz adresler.
  trailingSlash: false,
};

export default nextConfig;
