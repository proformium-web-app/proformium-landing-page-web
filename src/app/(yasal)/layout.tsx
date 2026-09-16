import Link from "next/link";
import { Kapsayici } from "@/components/ui/parcalar";
import { YASAL_SAYFALAR } from "@/content/site";
import { LEGAL_UPDATED_AT, legalCompanyReady } from "@/lib/legal";

/** Yasal sayfalar: sade, okunaklı, tek sütun. Metinler uygulamadaki taslaklarla aynı kaynaktan. */
export default function YasalLayout({ children }: LayoutProps<"/">) {
  return (
    <Kapsayici className="max-w-3xl py-12 sm:py-16">
      {!legalCompanyReady && (
        <p className="mb-6 rounded-xl border border-amber-200 bg-warn-soft px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">Taslak.</strong> Şirket bilgileri henüz girilmedi; bu metinler yayına
          hazır değildir.
        </p>
      )}
      <article className="yasal-govde rounded-panel border border-line bg-surface p-6 shadow-card sm:p-10">
        {children}
        <p className="mt-10 text-xs text-ink-muted">Son güncelleme: {LEGAL_UPDATED_AT}</p>
      </article>
      <nav aria-label="Yasal sayfalar" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
        {YASAL_SAYFALAR.map((y) => (
          <Link key={y.href} href={y.href} className="hover:text-brand">
            {y.etiket}
          </Link>
        ))}
      </nav>
    </Kapsayici>
  );
}
