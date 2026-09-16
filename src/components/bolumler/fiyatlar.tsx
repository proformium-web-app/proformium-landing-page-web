"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";
import { FIYAT, FIYAT_GOSTER, PAKETLER, tlBicimle } from "@/content/fiyatlar";
import { UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

export function Fiyatlar() {
  const [yillik, setYillik] = useState(false);

  return (
    <section id="fiyatlar" className="border-y border-slate-200/80 bg-slate-50 py-24">
      <Kapsayici>
        <div data-belir className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Şeffaf ve esnek planlar</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            KOBİ bütçesine uygun fiyatlandırma
          </h2>
          <p className="text-slate-600">
            {FIYAT_GOSTER
              ? `Sürpriz ek ücret yok. Fiyatlar KDV dahil. Pro'yu ${FIYAT.denemeGun} gün ücretsiz deneyin; kredi kartı gerekmez.`
              : `Sürpriz ek ücret yok. Pro paketi ${FIYAT.denemeGun} gün ücretsiz deneyin; kredi kartı gerekmez. Fiyatlar yakında açıklanacak.`}
          </p>

          {FIYAT_GOSTER && (
            <div className="flex items-center justify-center gap-3 pt-6">
              <span className={cn("text-sm", !yillik ? "font-bold text-slate-900" : "font-medium text-slate-500")}>Aylık</span>
              <button
                type="button"
                role="switch"
                aria-checked={yillik}
                aria-label="Aylık ve yıllık geçişi"
                onClick={() => setYillik((v) => !v)}
                className="relative flex h-8 w-14 items-center rounded-full bg-primary p-1 transition-colors"
              >
                <span className={cn("h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300", yillik ? "translate-x-6" : "translate-x-0")} />
              </button>
              <span className={cn("flex items-center gap-1.5 text-sm", yillik ? "font-bold text-slate-900" : "font-medium text-slate-500")}>
                Yıllık
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                  {FIYAT.pro.yillikAvantajAy} ay avantaj
                </span>
              </span>
            </div>
          )}
        </div>

        <div className="mx-auto grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
          {PAKETLER.map((p, i) => (
            <div
              key={p.anahtar}
              data-belir
              data-gecikme={String(i + 1)}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10",
                p.oneCikan ? "border-2 border-primary shadow-2xl" : "border border-slate-200 shadow-sm",
              )}
            >
              {p.oneCikan && (
                <div className="absolute -top-4 right-8 rounded-full bg-primary px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
                  En çok tercih edilen
                </div>
              )}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{p.ad}</h3>
                  {p.rozet ? (
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary">{p.rozet}</span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Temel ihtiyaç</span>
                  )}
                </div>
                <p className="mb-6 text-sm text-slate-500">{p.aciklama}</p>

                <div className="mb-8 min-h-16">
                  {p.anahtar === "free" ? (
                    <>
                      <span className="text-4xl font-extrabold text-slate-900">₺0</span>
                      <span className="text-sm font-medium text-slate-500"> / süresiz ücretsiz</span>
                    </>
                  ) : FIYAT_GOSTER ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
                          {tlBicimle(yillik ? FIYAT.pro.yillik : FIYAT.pro.aylik)}
                        </span>
                        <span className="text-sm font-medium text-slate-500">{yillik ? "/ yıl" : "/ ay"}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        {yillik
                          ? `Yıllık peşin, KDV dahil (ayda ${tlBicimle(Math.round(FIYAT.pro.yillik / 12))} eder)`
                          : "Aylık, KDV dahil. Dilediğinizde iptal edebilirsiniz."}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">Yakında</span>
                      <p className="mt-1 text-xs text-slate-400">
                        Aylık ve yıllık seçenek olacak; yıllıkta {FIYAT.pro.yillikAvantajAy} ay avantaj. KDV dahil.
                      </p>
                    </>
                  )}
                </div>

                <ul className="mb-8 space-y-3.5 text-sm text-slate-700">
                  {p.ozellikler.map((o) => (
                    <li key={o.metin} className={cn("flex items-start gap-3", !o.var && "text-slate-400 line-through")}>
                      {o.var ? (
                        p.oneCikan ? (
                          <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-primary" />
                        ) : (
                          <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
                        )
                      ) : (
                        <span className="mt-0.5 size-[18px] shrink-0" />
                      )}
                      <span className={cn(o.var && p.oneCikan && "font-semibold")}>{o.metin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {p.oneCikan ? (
                <div className="flex flex-col gap-2">
                  <Link
                    href={UYGULAMA.kayit}
                    className="w-full rounded-xl bg-primary px-6 py-4 text-center font-bold text-white shadow-glow transition-all hover:scale-[1.01] hover:bg-primary-dark active:scale-[0.98]"
                  >
                    {p.butonMetni}
                  </Link>
                  {!FIYAT_GOSTER && (
                    <Link
                      href="#iletisim"
                      className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Pro için bize yazın
                    </Link>
                  )}
                </div>
              ) : (
                <Link
                  href={UYGULAMA.kayit}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-6 py-3.5 text-center font-bold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  {p.butonMetni}
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Aylık sayımlar takvim ayının başında yenilenir. Deneme bitince mevcut teklifleriniz ve müşterilerinize giden
          linkler çalışmaya devam eder.
        </p>
      </Kapsayici>
    </section>
  );
}
