// Paylaşım görseli (Open Graph, 1200x630) üretir: WhatsApp'ta link paylaşılınca görünen kart.
// Çalıştırma: npm run og   → src/app/opengraph-image.png (Next.js otomatik tanır)
import sharp from "sharp";
import { readFileSync } from "node:fs";

const logo = readFileSync("marka/logo-sembol.svg", "utf8")
  .replace(/^<\?xml[^>]*>/, "")
  .replace(/width="300"|height="300"/g, "");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="15%" r="70%">
      <stop offset="0" stop-color="#fbeaef"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#8b1f3c"/>
  <g transform="translate(80,80) scale(0.32)">
    <svg viewBox="40 12 158 195" width="158" height="195">${logo}</svg>
  </g>
  <text x="150" y="128" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="5" fill="#1e2229">PROFORMIUM</text>
  <text x="80" y="300" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="66" font-weight="800" fill="#1e2229">Teklif oluştur. Gönder.</text>
  <text x="80" y="380" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="66" font-weight="800" fill="#1e2229">Takip et. <tspan fill="#8b1f3c">Satışı kapat.</tspan></text>
  <text x="80" y="450" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="28" fill="#4b5563">KOBİ'ler için teklif hazırlama ve takip uygulaması</text>
  <text x="80" y="560" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#8b1f3c">www.proformium.com</text>
  <text x="1120" y="560" text-anchor="end" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="22" fill="#64748b">14 gün ücretsiz · WhatsApp'tan gönder</text>
</svg>`;

const bilgi = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("src/app/opengraph-image.png");
console.log(`src/app/opengraph-image.png: ${bilgi.width}x${bilgi.height}, ${Math.round(bilgi.size / 1024)} KB`);
