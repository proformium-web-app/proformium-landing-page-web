import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Blog yazıları `content/blog/*.md` dosyalarından okunur (derleme anında, statik).
 * Dosya adı = adres (slug). Örnek: content/blog/fiyat-teklifi-nasil-hazirlanir.md → /blog/fiyat-teklifi-nasil-hazirlanir
 *
 * Dosya başındaki bilgi bloğu:
 * ---
 * baslik: "Yazı başlığı"
 * aciklama: "Arama sonuçlarında ve listede görünen 1–2 cümle."
 * tarih: 2026-09-16
 * gorsel: /blog/dosya-adi.webp       (isteğe bağlı; public/blog altına konur)
 * gorselAlt: "Görselin açıklaması"   (isteğe bağlı)
 * yazar: Proformium                   (isteğe bağlı)
 * ---
 */

const KLASOR = path.join(process.cwd(), "content", "blog");

export type YaziOzeti = {
  slug: string;
  baslik: string;
  aciklama: string;
  tarih: string; // YYYY-AA-GG
  gorsel?: string;
  gorselAlt?: string;
  yazar: string;
  okumaDakika: number;
};

export type Yazi = YaziOzeti & { icerik: string };

function dosyadanYazi(dosyaAdi: string): Yazi {
  const ham = readFileSync(path.join(KLASOR, dosyaAdi), "utf8");
  const { data, content } = matter(ham);
  const slug = dosyaAdi.replace(/\.md$/, "");

  for (const alan of ["baslik", "aciklama", "tarih"]) {
    if (!data[alan]) throw new Error(`content/blog/${dosyaAdi}: "${alan}" alanı eksik`);
  }

  const tarih =
    data.tarih instanceof Date ? data.tarih.toISOString().slice(0, 10) : String(data.tarih);
  const kelime = content.trim().split(/\s+/).length;

  return {
    slug,
    baslik: String(data.baslik),
    aciklama: String(data.aciklama),
    tarih,
    gorsel: data.gorsel ? String(data.gorsel) : undefined,
    gorselAlt: data.gorselAlt ? String(data.gorselAlt) : undefined,
    yazar: data.yazar ? String(data.yazar) : "Proformium",
    okumaDakika: Math.max(1, Math.round(kelime / 200)),
    icerik: content,
  };
}

/** Tüm yazılar, yeniden eskiye. */
export function tumYazilar(): Yazi[] {
  let dosyalar: string[] = [];
  try {
    dosyalar = readdirSync(KLASOR).filter((d) => d.endsWith(".md"));
  } catch {
    return [];
  }
  return dosyalar.map(dosyadanYazi).sort((a, b) => (a.tarih < b.tarih ? 1 : -1));
}

export function yaziGetir(slug: string): Yazi | undefined {
  return tumYazilar().find((y) => y.slug === slug);
}

/** 16 Eylül 2026 biçiminde tarih. */
export function tarihBicimle(iso: string) {
  const [y, a, g] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(Date.UTC(y, a - 1, g)),
  );
}
