import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label="Proformium ana sayfa" className="inline-block">
              <LogoYatay />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500">
              KOBİ&apos;ler için akıllı teklif ve takip uygulaması. Teklifi hazırlayın, WhatsApp&apos;tan
              gönderin, müşteri açınca görün, takibi unutmayın.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-slate-500">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${SITE.destekEposta}`} className="font-semibold text-primary hover:underline">
                  {SITE.destekEposta}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" />
                Veriler Avrupa Birliği&apos;nde (Frankfurt)
              </li>
            </ul>
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
            <h3 className={baslik}>Uygulama</h3>
            <ul className={liste}>
              <li>
                <a href={UYGULAMA.kayit} className={baglanti}>Ücretsiz başla</a>
              </li>
              <li>
                <a href={UYGULAMA.giris} className={baglanti}>Giriş yap</a>
              </li>
              <li>
                <a href={`mailto:${SITE.destekEposta}`} className={baglanti}>Destek</a>
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

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-8 text-[15px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.kurulusYili} {unvan ?? SITE.ad}. Tüm hakları saklıdır.</p>
          <p>Frankfurt (AB) sunucuları · KVKK uyumlu</p>
        </div>
      </Kapsayici>
    </footer>
  );
}
