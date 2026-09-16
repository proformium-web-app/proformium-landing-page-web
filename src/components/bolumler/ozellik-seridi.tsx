"use client";

import { useState } from "react";
import { BarChart3, BellRing, Smartphone, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type SeritOzellik = {
  ikon: LucideIcon;
  ton: "marka" | "ok" | "amber" | "rose" | "mavi" | "cyan" | "mor";
  baslik: string;
  aciklama: string;
};

const TONLAR: Record<SeritOzellik["ton"], string> = {
  marka: "bg-primary-50 text-primary",
  ok: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-primary",
  mavi: "bg-blue-50 text-blue-600",
  cyan: "bg-cyan-50 text-cyan-600",
  mor: "bg-violet-50 text-violet-600",
};

/**
 * "Ayrıca" şeridi (Adem, 16.09.2026): solda beyaz ayrıntı paneli, sağda çipler.
 * Çipin üzerine gelince ya da tıklayınca panel o özelliği büyük ikon ve açıklamayla gösterir.
 */
/** SITE_BAGLAMI.md bölüm 4'te canlıda çalışan özellikler; başkası yazılmaz. */
const OZELLIKLER: SeritOzellik[] = [
  { ikon: BellRing, ton: "marka", baslik: "Takip hatırlatması", aciklama: "Takip zamanı gelince hatırlatılır; \"takip ettim\", \"3 gün ertele\", \"kazanıldı\" tek tıkla." },
  { ikon: Upload, ton: "cyan", baslik: "Excel'den toplu yükleme", aciklama: "Müşteri ve ürün/hizmet listenizi hazır şablonla bir kerede içeri alın." },
  { ikon: BarChart3, ton: "mor", baslik: "Raporlar", aciklama: "Onaylanan, reddedilen, bekleyen teklifler; dönüşüm oranı; en çok satış yapılan müşteriler." },
  { ikon: Smartphone, ton: "ok", baslik: "Telefonda tam çalışır", aciklama: "İndirilecek uygulama yok. Tarayıcıdan girin; hazırlama, gönderme, imza ve takip telefonda aynı." },
];

export function OzellikSeridi({ ozellikler = OZELLIKLER }: { ozellikler?: SeritOzellik[] }) {
  const [aktif, setAktif] = useState(0);
  const o = ozellikler[aktif];

  return (
    <div
      data-belir
      className="mt-10 grid gap-6 rounded-3xl border border-slate-200/80 bg-background-light p-5 sm:p-6 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-8"
    >
      {/* Ayrıntı paneli */}
      <div
        key={o.baslik}
        className="animate-belir flex min-h-[168px] items-center gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card-soft sm:p-7"
      >
        <span className={cn("flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm", TONLAR[o.ton])}>
          <o.ikon className="size-8" />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Ayrıca</p>
          <h3 className="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl">{o.baslik}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{o.aciklama}</p>
        </div>
      </div>

      {/* Çipler */}
      <div className="flex flex-wrap gap-2.5 lg:justify-end" role="tablist" aria-label="Diğer özellikler">
        {ozellikler.map((oz, i) => {
          const secili = i === aktif;
          return (
            <button
              key={oz.baslik}
              type="button"
              role="tab"
              aria-selected={secili}
              onMouseEnter={() => setAktif(i)}
              onFocus={() => setAktif(i)}
              onClick={() => setAktif(i)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold shadow-sm transition-all",
                secili
                  ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
                  : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg",
                  secili ? "bg-white/20 text-white" : TONLAR[oz.ton],
                )}
              >
                <oz.ikon className="size-4" />
              </span>
              {oz.baslik}
            </button>
          );
        })}
      </div>
    </div>
  );
}
