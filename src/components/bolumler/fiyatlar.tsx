"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { ButonLink } from "@/components/ui/buton";
import { Bolum, BolumBasligi, Kapsayici, Rozet } from "@/components/ui/parcalar";
import { FIYAT, FIYAT_GOSTER, PAKETLER, tlBicimle } from "@/content/fiyatlar";
import { UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

export function Fiyatlar() {
  const [yillik, setYillik] = useState(false);

  return (
    <Bolum id="fiyatlar">
      <Kapsayici>
        <BolumBasligi
          etiket="Fiyatlar"
          baslik="Ücretsiz başlayın, işiniz büyüyünce Pro'ya geçin"
          aciklama={
            FIYAT_GOSTER
              ? `Fiyatlar KDV dahildir. Pro'yu ${FIYAT.denemeGun} gün ücretsiz deneyin; kredi kartı gerekmez.`
              : `Pro paket ${FIYAT.denemeGun} gün ücretsiz denenir; kredi kartı gerekmez. Fiyatlar yakında açıklanacak.`
          }
        />

        {FIYAT_GOSTER && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn("text-sm font-medium", !yillik ? "text-ink" : "text-ink-muted")}>Aylık</span>
            <button
              type="button"
              role="switch"
              aria-checked={yillik}
              aria-label="Yıllık ödeme"
              onClick={() => setYillik((v) => !v)}
              className="relative h-7 w-12 rounded-full bg-brand p-1 transition-colors"
            >
              <span
                className={cn(
                  "block size-5 rounded-full bg-white shadow transition-transform",
                  yillik ? "translate-x-5" : "translate-x-0",
                )}
              />
            </button>
            <span className={cn("flex items-center gap-2 text-sm font-medium", yillik ? "text-ink" : "text-ink-muted")}>
              Yıllık <Rozet ton="ok">{FIYAT.pro.yillikAvantajAy} ay avantaj</Rozet>
            </span>
          </div>
        )}

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {PAKETLER.map((p) => (
            <div
              key={p.anahtar}
              className={cn(
                "relative flex flex-col rounded-panel border bg-surface p-7 sm:p-9",
                p.oneCikan ? "border-brand shadow-raised" : "border-line shadow-card",
              )}
            >
              {p.oneCikan && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Önerilen
                </span>
              )}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-ink">{p.ad}</h3>
                {p.rozet && <Rozet>{p.rozet}</Rozet>}
              </div>
              <p className="mt-2 text-sm text-ink-muted">{p.aciklama}</p>

              <div className="mt-6 min-h-16">
                {p.anahtar === "free" ? (
                  <>
                    <span className="font-heading text-4xl font-extrabold text-ink">0 ₺</span>
                    <span className="ml-1 text-sm text-ink-muted">/ süresiz</span>
                  </>
                ) : FIYAT_GOSTER ? (
                  <>
                    <span className="font-heading text-4xl font-extrabold text-ink">
                      {tlBicimle(yillik ? FIYAT.pro.yillik : FIYAT.pro.aylik)}
                    </span>
                    <span className="ml-1 text-sm text-ink-muted">{yillik ? "/ yıl" : "/ ay"}</span>
                    <p className="mt-1 text-xs text-ink-muted">
                      {yillik
                        ? `Yıllık peşin, KDV dahil (ayda ${tlBicimle(Math.round(FIYAT.pro.yillik / 12))} eder)`
                        : "Aylık, KDV dahil. İstediğiniz zaman iptal."}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="font-heading text-4xl font-extrabold text-ink">Yakında</span>
                    <p className="mt-1 text-xs text-ink-muted">
                      Aylık ve yıllık seçenek olacak; yıllıkta {FIYAT.pro.yillikAvantajAy} ay avantaj.
                    </p>
                  </>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.ozellikler.map((o) => (
                  <li
                    key={o.metin}
                    className={cn("flex items-start gap-2.5 text-sm", o.var ? "text-ink" : "text-ink-muted")}
                  >
                    {o.var ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                    ) : (
                      <Minus className="mt-0.5 size-4 shrink-0 text-line" />
                    )}
                    <span className={cn(!o.var && "line-through decoration-line")}>{o.metin}</span>
                  </li>
                ))}
              </ul>

              {p.anahtar === "free" || FIYAT_GOSTER ? (
                <ButonLink
                  href={UYGULAMA.kayit}
                  gorunum={p.oneCikan ? "birincil" : "ikincil"}
                  boyut="lg"
                  className="mt-8 w-full"
                >
                  {p.butonMetni}
                </ButonLink>
              ) : (
                <div className="mt-8 flex flex-col gap-2">
                  <ButonLink href={UYGULAMA.kayit} boyut="lg" className="w-full">
                    {p.butonMetni}
                  </ButonLink>
                  <ButonLink href="#iletisim" gorunum="ikincil" className="w-full">
                    Pro için bize yazın
                  </ButonLink>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">
          Aylık sayımlar takvim ayının başında yenilenir. Deneme bitince mevcut teklifleriniz ve müşterilerinize giden
          linkler çalışmaya devam eder.
        </p>
      </Kapsayici>
    </Bolum>
  );
}
