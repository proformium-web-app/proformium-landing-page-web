import Link from "next/link";
import { LifeBuoy, Mail, MapPin } from "lucide-react";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
import { COZUMLER } from "@/content/cozumler";
import { MENU, SITE, UYGULAMA, YASAL_SAYFALAR } from "@/content/site";
import { LEGAL_COMPANY, LEGAL_PLACEHOLDER } from "@/lib/legal";

const baslik = "font-display text-lg font-bold text-slate-900";
const liste = "mt-5 space-y-3.5 text-[15px] text-slate-500";
const baglanti = "transition-colors hover:text-primary";

export function AltBilgi() {
  const unvan = LEGAL_COMPANY.title !== LEGAL_PLACEHOLDER ? LEGAL_COMPANY.title : null;

  return (
    <footer className="border-t border-slate-200 bg-white pb-12 pt-16 sm:pt-20">
      <Kapsayici>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label="Proformium ana sayfa" className="inline-block">
              <LogoYatay />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500">
              KOBİ&apos;ler için akıllı teklif ve proforma uygulaması. Teklifi hazırlayın, WhatsApp&apos;tan
              gönderin, müşteri açınca görün, takibi unutmayın.
            </p>

            {/* Destek e-postası: açık, tıklanabilir, her sayfada (Adem, 22.10.2026) */}
            <a
              href={`mailto:${SITE.destekEposta}`}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary-50 px-4 py-3 transition-colors hover:border-primary/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <Mail className="size-4" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-slate-500">Destek e-postası</span>
                <span className="block font-bold text-primary">{SITE.destekEposta}</span>
              </span>
            </a>
            <p className="mt-4 flex items-center gap-2.5 text-[15px] text-slate-500">
              <MapPin className="size-4 text-primary" />
              Veriler Avrupa Birliği&apos;nde (Frankfurt)
            </p>
          </div>

          <div>
            <h3 className={baslik}>Site</h3>
            <ul className={liste}>
              {MENU.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className={baglanti}>
                    {m.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={baslik}>Çözümler</h3>
            <ul className={liste}>
              {COZUMLER.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className={baglanti}>
                    {c.kisaAd}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={baslik}>Uygulama</h3>
            <ul className={liste}>
              <li>
                <a href={UYGULAMA.kayit} className={baglanti}>Ücretsiz başla</a>
              </li>
              <li>
                <a href={UYGULAMA.giris} className={baglanti}>Giriş yap</a>
              </li>
              <li>
                <Link href="/destek" className={`${baglanti} inline-flex items-center gap-1.5`}>
                  <LifeBuoy className="size-4" /> Destek
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={baslik}>Yasal</h3>
            <ul className={liste}>
              {YASAL_SAYFALAR.map((y) => (
                <li key={y.href}>
                  <Link href={y.href} className={baglanti}>
                    {y.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 text-[15px] text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {SITE.kurulusYili} {unvan ?? SITE.ad}. Tüm hakları saklıdır.</p>
          <nav aria-label="English legal pages" lang="en" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/terms" className={baglanti}>Terms of Service</Link>
            <Link href="/privacy" className={baglanti}>Privacy Policy</Link>
            <a href={`mailto:${SITE.destekEposta}`} className={baglanti}>Support: {SITE.destekEposta}</a>
          </nav>
        </div>
      </Kapsayici>
    </footer>
  );
}
