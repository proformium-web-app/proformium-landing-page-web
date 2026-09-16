import { ArrowRight, Mail } from "lucide-react";
import { ButonLink } from "@/components/ui/buton";
import { Bolum, Kapsayici } from "@/components/ui/parcalar";
import { FIYAT } from "@/content/fiyatlar";
import { SITE, UYGULAMA } from "@/content/site";

/** İletişim: şimdilik yalnızca e-posta (Adem, 16.09.2026). Form ve WhatsApp ileride. */
export function Iletisim() {
  return (
    <Bolum id="iletisim" className="py-12 sm:py-16 lg:py-16">
      <Kapsayici>
        <div className="flex flex-col items-start gap-6 rounded-panel border border-line bg-surface p-7 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h2 className="text-2xl font-bold text-ink">Sorunuz mu var, Pro&apos;ya mı geçmek istiyorsunuz?</h2>
            <p className="mt-2 text-base text-ink-soft">
              Bize yazın, aynı gün dönelim. Kurulum, paket ve fatura sorularınız için:
            </p>
          </div>
          <a
            href={`mailto:${SITE.destekEposta}`}
            className="inline-flex items-center gap-2.5 rounded-xl bg-brand-soft px-5 py-3.5 font-heading text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <Mail className="size-5" />
            {SITE.destekEposta}
          </a>
        </div>
      </Kapsayici>
    </Bolum>
  );
}

export function SonCagri() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <Kapsayici>
        <div className="relative overflow-hidden rounded-panel bg-brand px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_80%_10%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
              Teklifi gönderip beklemeyin.
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">
              {FIYAT.denemeGun} gün ücretsiz deneyin. Kredi kartı yok, kurulum yok. İlk teklifinizi bugün gönderin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButonLink href={UYGULAMA.kayit} gorunum="beyaz" boyut="lg">
                Ücretsiz başla
                <ArrowRight className="size-4" />
              </ButonLink>
              <ButonLink
                href={UYGULAMA.giris}
                gorunum="sade"
                boyut="lg"
                className="text-white hover:text-white/80"
              >
                Hesabım var, giriş yap
              </ButonLink>
            </div>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
