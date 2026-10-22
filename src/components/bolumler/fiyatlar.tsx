import Link from "next/link";
import { Check, CheckCircle2, Download, Sparkles } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { FIYAT, PAKETLER, PRO_AYLIK_KARSILIK, VERI_INDIRME_NOTU, tlBicimle } from "@/content/fiyatlar";
import { UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

/** Fiyatlandırma: Free ve Pro (yıllık). Fiyatlar src/content/fiyatlar.ts'te. */
export function Fiyatlar() {
  return (
    <section id="fiyatlar" className="border-y border-slate-200/80 bg-slate-50 py-24">
      <Kapsayici>
        <div data-belir className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <BolumEtiketi isaret>Fiyatlandırma</BolumEtiketi>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            KOBİ bütçesine uygun fiyatlandırma
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Sürpriz ek ücret yok, fiyatlar KDV dahil. Ücretsiz başlayın; Pro&apos;yu {FIYAT.denemeGun} gün ücretsiz
            deneyin, kredi kartı gerekmez.
          </p>
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
                <p className="mb-6 text-base text-slate-500">{p.aciklama}</p>

                <div className="mb-8 min-h-20">
                  {p.anahtar === "free" ? (
                    <>
                      <span className="text-4xl font-extrabold text-slate-900">₺0</span>
                      <span className="text-sm font-medium text-slate-500"> / süresiz ücretsiz</span>
                    </>
                  ) : (
                    <>
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                        <Sparkles className="size-3.5" />
                        Avantajlı fiyat
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
                          {tlBicimle(FIYAT.pro.yillik)}
                        </span>
                        <span className="text-sm font-medium text-slate-500">/ yıl</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        Aylık sadece <span className="font-semibold text-slate-700">{tlBicimle(PRO_AYLIK_KARSILIK)}</span>
                        &apos;ye denk gelir · KDV dahil
                      </p>
                    </>
                  )}
                </div>

                <ul className="mb-8 space-y-3.5 text-[15px] text-slate-700">
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
                <div className="flex flex-col gap-3">
                  <Link
                    href={UYGULAMA.kayit}
                    className="w-full rounded-xl bg-primary px-6 py-4 text-center font-bold text-white shadow-glow transition-all hover:scale-[1.01] hover:bg-primary-dark active:scale-[0.98]"
                  >
                    {p.butonMetni}
                  </Link>
                  <p className="flex items-start gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs leading-relaxed text-slate-500">
                    <Download className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {VERI_INDIRME_NOTU}
                  </p>
                  <Link
                    href="/destek"
                    className="text-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Pro&apos;ya geçmek için bize yazın
                  </Link>
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Aylık sayımlar takvim ayının başında yenilenir. Deneme ya da Pro süresi bitince hesabınız kapanmaz, Free&apos;ye
          geçer; teklifleriniz ve müşterilerinize giden linkler çalışmaya devam eder.
        </p>
      </Kapsayici>
    </section>
  );
}
