import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";
import { FIYAT } from "@/content/fiyatlar";
import { SITE, UYGULAMA } from "@/content/site";

/** İletişim: şimdilik yalnızca e-posta (Adem, 16.09.2026). Form ve WhatsApp ileride. */
export function Iletisim() {
  return (
    <section id="iletisim" className="pb-8 pt-4">
      <Kapsayici>
        <div
          data-belir
          className="flex flex-col items-start gap-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card-soft sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900">
              Sorunuz mu var, Pro&apos;ya mı geçmek istiyorsunuz?
            </h2>
            <p className="mt-2 text-base text-slate-600">Bize yazın, aynı gün dönelim. Kurulum, paket ve fatura soruları için:</p>
          </div>
          <a
            href={`mailto:${SITE.destekEposta}`}
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary-50 px-5 py-3.5 text-base font-bold text-primary transition-all hover:scale-[1.02] hover:bg-primary hover:text-white"
          >
            <Mail className="size-5" />
            {SITE.destekEposta}
          </a>
        </div>
      </Kapsayici>
    </section>
  );
}

export function SonCagri() {
  return (
    <section className="py-16 sm:py-24">
      <Kapsayici>
        <div
          data-belir
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-[#4a0d1e] p-8 text-white shadow-glow sm:p-16"
        >
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-80 w-80 rounded-full bg-rose-400/20 blur-2xl" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
            <span className="inline-block rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Hemen bugün başlayın
            </span>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Satışlarınızı takipsizlikten kaybetmeyin.
            </h2>
            <p className="text-base text-rose-100 sm:text-lg">
              Bugün {FIYAT.denemeGun} gün ücretsiz deneyin. Kredi kartı gerekmez, kurulum yok. İlk profesyonel teklifinizi
              bugün gönderin.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href={UYGULAMA.kayit}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-xl transition-all hover:scale-[1.02] hover:bg-slate-100 active:scale-[0.98] sm:w-auto"
              >
                Hemen başla
                <ArrowRight className="size-5" />
              </Link>
              <span className="text-sm text-rose-200">Deneme bitince tekliflerinizin linki çalışmaya devam eder</span>
            </div>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
