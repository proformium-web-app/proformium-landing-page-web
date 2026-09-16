# Proformium tanıtım sitesi

Bu klasörde Proformium'un tanıtım sitesi (www.proformium.com) kurulacak. Uygulama bu klasörde değil,
`../proformium-app` klasöründe; oraya dokunulmaz.

Başlamadan önce ürün, paketler, marka dosyaları, altyapı ve SEO/GEO bilgileri için bu dosyayı okuyun:

@SITE_BAGLAMI.md

Kısa kurallar:
- Konuşma Türkçe. Kararları Adem verir; tasarımı (font, renk, düzen) Adem yapar.
- Kod yazmadan önce `SITE_BAGLAMI.md` bölüm 13'teki açık soruları Adem'le konuşun.
- Logo ve marka rengi sormadan değiştirilmez. Marka dosyaları `marka/` klasöründe.

## Site kuruldu (16.09.2026)

- Next.js 16 + TypeScript + Tailwind v4, **tamamen statik** (`output: "export"`). Sunucu gerektiren özellik eklenmez.
- Kararlar `PLAN.md` ve `Soru Cevapları*.md` dosyalarında; dosya haritası ve komutlar `README.md`'de.
- İçerik kuralı: sitede **yalnızca uygulamada bugün çalışan özellikler** anlatılır (`SITE_BAGLAMI.md` bölüm 4).
  Push bildirimi, müşteri onayı, şablon, ekip gibi olmayan şeyler vaat edilmez; "yakında" bile Adem'in onayıyla.
- Fiyat ve paket bilgileri **sadece** `src/content/fiyatlar.ts`'te; `FIYAT_GOSTER` false iken "Yakında" görünür.
- Blog: Adem yazıyı `Blog/` klasörüne koyar, siteye `content/blog/` altına bilgi bloğuyla taşınır (README'de adımlar).
- Her yayında `docs/SURUM_NOTLARI.md`'ye not düşülür.
- Git: `main` dalı → GitHub `proformium-web-app/proformium-landing-page-web` → Vercel `proformium/proformium-landing-page-web`.

## Kurulu araçlar (Adem, 15.09.2026)

- **Animate UI** (https://animate-ui.com, https://github.com/imskyleen/animate-ui): React + TypeScript +
  Tailwind CSS + Motion ile hazırlanmış animasyonlu bileşenler. npm paketi değil; shadcn komutuyla
  bileşen kodu projeye kopyalanır. Site projesi kurulunca:
  1. `npx shadcn@latest init` (Next.js projesi oluşturulduktan sonra)
  2. Bileşen ekleme: `npx shadcn@latest add @animate-ui/<tür>-<kategori>-<ad>`
     ör. `@animate-ui/primitives-texts-sliding-number`, ikonlar `@animate-ui/icons-<lucide-ikon-adı>`
  3. Kullanım: `import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number'`
  Hangi bileşenin kullanılacağı tasarımla birlikte Adem'le seçilir.
- **Skill'ler** (`.claude/skills/`, 36 adet; uygulama klasöründekilerin kopyası, 16.09.2026):
  - Tasarımda önce `ui-ux-pro-max` ve `frontend-design`; ayrıca `ui-styling`, `design-system`, `design-dna`,
    `design`, `banner-design`. Site tarayıcıda test edilirken `webapp-testing`.
  - Çalışma düzeni: `brainstorming`, `writing-plans`, `systematic-debugging`, `verification-before-completion`,
    `karpathy-guidelines`.
  - **Kullanılmaz:** `brand-guidelines` (Anthropic'in marka renklerini uygular), `brand` ile Proformium markasını
    değiştirmek, `internal-comms` ve `academy-guide` (Anthropic'e özel).
  - superpowers skill'lerindeki "her işte worktree / TDD" dayatması birebir uygulanmaz; Adem'in kuralları önce gelir
    (önce plan ve onay, Türkçe iletişim).
- **MCP sunucuları** (`.mcp.json`):
  - `shadcn` — shadcn ve Animate UI bileşenlerini arama, inceleme, ekleme komutu üretme.
  - `dashboard-icons` — servis/uygulama logoları ve ikonları (dashboardicons.com).
