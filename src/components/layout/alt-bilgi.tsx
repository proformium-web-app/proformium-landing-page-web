import Link from "next/link";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
import { MENU, SITE, UYGULAMA, YASAL_SAYFALAR } from "@/content/site";
import { LEGAL_COMPANY, LEGAL_PLACEHOLDER } from "@/lib/legal";

export function AltBilgi() {
  const unvan = LEGAL_COMPANY.title !== LEGAL_PLACEHOLDER ? LEGAL_COMPANY.title : null;

  return (
    <footer className="border-t border-line bg-surface">
      <Kapsayici className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Proformium ana sayfa" className="inline-block">
              <LogoYatay />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Küçük işletmeler için teklif hazırlama ve takip uygulaması. Teklifi hazırlayın,
              WhatsApp&apos;tan gönderin, müşteri açınca görün, takibi unutmayın.
            </p>
            <a
              href={`mailto:${SITE.destekEposta}`}
              className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
            >
              {SITE.destekEposta}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Site</h3>
            <ul className="mt-3 space-y-2">
              {MENU.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-sm text-ink-soft hover:text-brand">
                    {m.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Uygulama</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={UYGULAMA.kayit} className="text-sm text-ink-soft hover:text-brand">
                  Kayıt ol
                </a>
              </li>
              <li>
                <a href={UYGULAMA.giris} className="text-sm text-ink-soft hover:text-brand">
                  Giriş yap
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.destekEposta}`} className="text-sm text-ink-soft hover:text-brand">
                  Destek
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Yasal</h3>
            <ul className="mt-3 space-y-2">
              {YASAL_SAYFALAR.map((y) => (
                <li key={y.href}>
                  <Link href={y.href} className="text-sm text-ink-soft hover:text-brand">
                    {y.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.kurulusYili} {unvan ?? SITE.ad}. Tüm hakları saklıdır.
          </p>
          <p>Veriler Avrupa Birliği&apos;nde (Frankfurt) saklanır.</p>
        </div>
      </Kapsayici>
    </footer>
  );
}
