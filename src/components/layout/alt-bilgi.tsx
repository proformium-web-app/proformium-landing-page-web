import Link from "next/link";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
import { MENU, SITE, UYGULAMA, YASAL_SAYFALAR } from "@/content/site";
import { LEGAL_COMPANY, LEGAL_PLACEHOLDER } from "@/lib/legal";

export function AltBilgi() {
  const unvan = LEGAL_COMPANY.title !== LEGAL_PLACEHOLDER ? LEGAL_COMPANY.title : null;

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Kapsayici>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Proformium ana sayfa" className="inline-block">
              <LogoYatay />
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              KOBİ&apos;ler için akıllı teklif ve takip uygulaması. Teklifi hazırlayın, WhatsApp&apos;tan
              gönderin, müşteri açınca görün, takibi unutmayın.
            </p>
            <a href={`mailto:${SITE.destekEposta}`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              {SITE.destekEposta}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-slate-900">Site</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {MENU.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="transition-colors hover:text-primary">
                    {m.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-slate-900">Uygulama</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <a href={UYGULAMA.kayit} className="transition-colors hover:text-primary">Kayıt ol</a>
              </li>
              <li>
                <a href={UYGULAMA.giris} className="transition-colors hover:text-primary">Giriş yap</a>
              </li>
              <li>
                <a href={`mailto:${SITE.destekEposta}`} className="transition-colors hover:text-primary">Destek</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-slate-900">Yasal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {YASAL_SAYFALAR.map((y) => (
                <li key={y.href}>
                  <Link href={y.href} className="transition-colors hover:text-primary">
                    {y.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.kurulusYili} {unvan ?? SITE.ad}. Tüm hakları saklıdır.</p>
          <p>Veriler Avrupa Birliği&apos;nde (Frankfurt) saklanır.</p>
        </div>
      </Kapsayici>
    </footer>
  );
}
