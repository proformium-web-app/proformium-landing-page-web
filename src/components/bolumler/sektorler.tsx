"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRight, BadgeCheck, Car, Check, Fan, LayoutPanelTop, Megaphone, Send, Sofa } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Kapsayici, Rozet } from "@/components/ui/parcalar";
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

const IKON_ZEMIN: Record<Sektor["ton"], string> = {
  mavi: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  cyan: "bg-cyan-50 text-cyan-600",
  ok: "bg-emerald-50 text-emerald-600",
  mor: "bg-violet-50 text-violet-600",
};

const DIGER_SEKTORLER = ["İnşaat / Yapı", "Elektrik / Tesisat", "Makine", "Nakliye / Lojistik", "Güzellik / Bakım", "Diğer"];

export function Sektorler() {
  const [aktif, setAktif] = useState(SEKTORLER[0].anahtar);
  const kimlik = useId();
  const sektor = SEKTORLER.find((s) => s.anahtar === aktif) ?? SEKTORLER[0];
  const Ikon = IKONLAR[sektor.ikon];
  const durumIkonu = sektor.ornek.durum === "Gönderildi" ? Send : BadgeCheck;
  const DurumIkonu = durumIkonu;

  return (
    <section id="sektorler" className="py-24">
      <Kapsayici>
        <div data-belir className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <Rozet nokta className="font-mono uppercase tracking-widest">
            Sektörel dinamiklere uyumlu
          </Rozet>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hangi sektördesiniz? <span className="text-primary">Proformium size hazır.</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Kayıt olurken sektörünüzü seçersiniz; uygulama ona göre küçük ayrıntılar açar. Beş örnek:
          </p>
        </div>

        {/* Sekmeler */}
        <div className="mb-10 flex items-center justify-start overflow-x-auto pb-2 [scrollbar-width:none] sm:justify-center">
          <div role="tablist" aria-label="Sektör seçimi" className="inline-flex gap-2 rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-sm">
            {SEKTORLER.map((s) => {
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
                    "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs transition-all sm:text-sm",
                    secili
                      ? "bg-primary font-bold text-white shadow-md shadow-primary/25"
                      : "font-semibold text-slate-600 hover:bg-slate-50 hover:text-primary",
                  )}
                >
                  <span>{s.emoji}</span>
                  <span>{s.kisaAd}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div
          key={sektor.anahtar}
          role="tabpanel"
          id={`${kimlik}-panel`}
          aria-labelledby={`${kimlik}-sekme-${sektor.anahtar}`}
          className="animate-belir rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 text-left lg:col-span-6">
              <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold", IKON_ZEMIN[sektor.ton])}>
                <Ikon className="size-4" />
                {sektor.ad} için
              </span>
              <h3 className="font-display text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                {sektor.baslik}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{sektor.aciklama}</p>
              <ul className="space-y-3 text-xs text-slate-700 sm:text-sm">
                {sektor.maddeler.map((m) => (
                  <li key={m} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {sektor.etiketler.map((e) => (
                  <span key={e} className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600">
                    {e}
                  </span>
                ))}
              </div>
              <div>
                <Link
                  href={UYGULAMA.kayit}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                >
                  Ücretsiz deneyin
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Temsili teklif kartı */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-inner sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{sektor.ornek.etiket}</span>
                    <h4 className="font-mono text-sm font-bold text-slate-900 sm:text-base">{sektor.ornek.baslik}</h4>
                  </div>
                  <span className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    <DurumIkonu className="size-3" />
                    {sektor.ornek.durum}
                  </span>
                </div>
                <div className="mb-5 space-y-2.5 text-xs">
                  {sektor.ornek.kalemler.map((k) => (
                    <div key={k.ad} className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white p-2.5">
                      <div>
                        <p className="font-bold text-slate-800">{k.ad}</p>
                        {k.not && <p className="text-[10px] text-slate-400">{k.not}</p>}
                      </div>
                      <span className="font-bold tabular-nums text-slate-900">{k.tutar}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-3 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/10 p-3">
                  <span className="text-xs font-bold text-primary">{sektor.ornek.toplamEtiket}:</span>
                  <span className="font-display text-lg font-black tabular-nums text-primary">{sektor.ornek.toplam}</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-emerald-600">
                    <BadgeCheck className="size-3.5" /> {sektor.ornek.altNot}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hızlı bakış kartları */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SEKTORLER.map((s, i) => {
            const I = IKONLAR[s.ikon];
            return (
              <button
                key={s.anahtar}
                type="button"
                data-belir
                data-gecikme={String(Math.min(i, 4))}
                onClick={() => setAktif(s.anahtar)}
                className={cn(
                  "flex items-center gap-3.5 rounded-2xl border bg-white p-4 text-left shadow-sm transition-all hover:border-primary/40",
                  s.anahtar === aktif ? "border-primary/40" : "border-slate-200/80",
                )}
              >
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", IKON_ZEMIN[s.ton])}>
                  <I className="size-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-xs font-bold text-slate-900">{s.kisaAd}</h4>
                  <p className="truncate text-[11px] text-slate-500">{s.kisaNot}</p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">Ayrıca: {DIGER_SEKTORLER.join(" · ")}</p>
      </Kapsayici>
    </section>
  );
}
