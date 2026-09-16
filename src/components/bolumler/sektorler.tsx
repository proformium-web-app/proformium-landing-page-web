"use client";

import { useId, useState } from "react";
import { Car, Check, Fan, LayoutPanelTop, Megaphone, Sofa } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButonLink } from "@/components/ui/buton";
import { Bolum, BolumBasligi, Kapsayici, Rozet } from "@/components/ui/parcalar";
import { SEKTORLER, type Sektor } from "@/content/sektorler";
import { UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

const IKONLAR: Record<Sektor["ikon"], LucideIcon> = {
  car: Car,
  sofa: Sofa,
  fan: Fan,
  "layout-panel-top": LayoutPanelTop,
  megaphone: Megaphone,
};

const DIGER_SEKTORLER = [
  "İnşaat / Yapı",
  "Elektrik / Tesisat",
  "Makine",
  "Nakliye / Lojistik",
  "Güzellik / Bakım",
  "Diğer",
];

export function Sektorler() {
  const [aktif, setAktif] = useState(SEKTORLER[0].anahtar);
  const kimlik = useId();
  const sektor = SEKTORLER.find((s) => s.anahtar === aktif) ?? SEKTORLER[0];
  const Ikon = IKONLAR[sektor.ikon];

  return (
    <Bolum id="sektorler">
      <Kapsayici>
        <BolumBasligi
          etiket="Sektörler"
          baslik="Teklif veren her işletme için"
          aciklama="Kayıt olurken sektörünüzü seçersiniz; uygulama ona göre küçük ayrıntılar açar. Beş örnek:"
        />

        <div
          role="tablist"
          aria-label="Sektör seçimi"
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:justify-center"
        >
          {SEKTORLER.map((s) => {
            const I = IKONLAR[s.ikon];
            const secili = s.anahtar === aktif;
            return (
              <button
                key={s.anahtar}
                type="button"
                role="tab"
                id={`${kimlik}-sekme-${s.anahtar}`}
                aria-selected={secili}
                aria-controls={`${kimlik}-panel`}
                onClick={() => setAktif(s.anahtar)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                  secili
                    ? "border-brand bg-brand text-white shadow-brand"
                    : "border-line bg-surface text-ink-soft hover:border-brand/40 hover:text-brand",
                )}
              >
                <I className="size-4" />
                {s.kisaAd}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${kimlik}-panel`}
          aria-labelledby={`${kimlik}-sekme-${sektor.anahtar}`}
          className="mt-6 grid gap-8 rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12"
        >
          <div>
            <Rozet>
              <Ikon className="size-3.5" />
              {sektor.ad}
            </Rozet>
            <h3 className="mt-4 text-2xl font-bold leading-snug text-ink sm:text-3xl">{sektor.baslik}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{sektor.aciklama}</p>
            <ul className="mt-6 space-y-3">
              {sektor.maddeler.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-ok-soft text-emerald-600">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <ButonLink href={UYGULAMA.kayit} gorunum="ikincil" className="mt-8">
              Ücretsiz deneyin
            </ButonLink>
          </div>

          {/* Temsili teklif kartı: uygulamadaki teklif görünümüne benzer, sade */}
          <div className="rounded-card border border-line bg-canvas p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {sektor.ornek.etiket}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink sm:text-base">{sektor.ornek.baslik}</p>
              </div>
              <Rozet ton="ok">{sektor.ornek.durum}</Rozet>
            </div>
            <ul className="divide-y divide-line">
              {sektor.ornek.kalemler.map((k) => (
                <li key={k.ad} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink">{k.ad}</p>
                    {k.not && <p className="text-xs text-ink-muted">{k.not}</p>}
                  </div>
                  <span className="shrink-0 font-semibold tabular-nums text-ink">{k.tutar}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-brand-soft px-4 py-3">
              <span className="text-xs font-semibold text-brand">{sektor.ornek.toplamEtiket}</span>
              <span className="font-heading text-lg font-bold tabular-nums text-brand">{sektor.ornek.toplam}</span>
            </div>
            <p className="mt-3 text-xs text-ink-muted">{sektor.ornek.altNot}</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          Ayrıca: {DIGER_SEKTORLER.join(" · ")}
        </p>
      </Kapsayici>
    </Bolum>
  );
}
