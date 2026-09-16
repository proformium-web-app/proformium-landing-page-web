import Image from "next/image";
import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import { ButonLink } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/parcalar";
import { SITE, UYGULAMA } from "@/content/site";
import { FIYAT } from "@/content/fiyatlar";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Yumuşak gül ışık: DESIGN.md "ambient gradient", abartısız */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_20%,#fbeaef_0%,rgba(251,234,239,0)_70%)]"
      />
      <Kapsayici className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">
            KOBİ&apos;ler için teklif ve takip uygulaması
          </p>
          <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[56px]">
            Teklif oluştur.
            <br />
            Gönder. Takip et.
            <br />
            <span className="text-brand">Satışı kapat.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Teklifi dakikada hazırlayın, WhatsApp&apos;tan gönderin, müşteri açınca görün, takip
            zamanı gelince hatırlatılsın. Tedarikçilerinizden de fiyat toplayıp yan yana
            karşılaştırın.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButonLink href={UYGULAMA.kayit} boyut="lg">
              {FIYAT.denemeGun} gün ücretsiz dene
              <ArrowRight className="size-4" />
            </ButonLink>
            <ButonLink href="#nasil-calisir" gorunum="ikincil" boyut="lg">
              Nasıl çalışır?
            </ButonLink>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            <li>Kredi kartı gerekmez</li>
            <li>İndirme yok, tarayıcıda çalışır</li>
            <li>Veriler AB&apos;de (Frankfurt)</li>
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <figure className="relative">
            <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-raised">
              <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="ml-2 text-xs text-ink-muted">app.proformium.com</span>
              </div>
              <Image
                src="/gorseller/uygulama-genel-bakis.webp"
                alt="Proformium genel bakış ekranı: taslaklar, revize talep edilenler, gönderilen teklifler ve kazanılan tutar"
                width={1600}
                height={756}
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="block h-auto w-full"
              />
            </div>

            {/* Gerçek özellik: müşteri linki açınca "Görüntülendi" */}
            <figcaption className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-raised sm:left-8">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-ok-soft text-emerald-600">
                <Eye className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">Müşteri teklifi açtı</span>
                <span className="block text-xs text-ink-muted">ATS-005 · 2 kez · son açılış bugün</span>
              </span>
            </figcaption>
            <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-white shadow-brand sm:flex">
              <MessageCircle className="size-4" />
              WhatsApp&apos;tan gönderildi
            </div>
          </figure>
        </div>
      </Kapsayici>

      {/* GEO: yapay zekâ asistanlarının alıntılayacağı net tanım */}
      <Kapsayici className="pb-4">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-muted">{SITE.tanim}</p>
      </Kapsayici>
    </section>
  );
}
