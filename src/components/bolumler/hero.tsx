import Link from "next/link";
import { ArrowRight, Check, CheckCheck, PenLine, PlayCircle } from "lucide-react";
import { AltiCizgili } from "@/components/ui/alti-cizgili";
import { Daktilo } from "@/components/ui/daktilo";
import { Kapsayici } from "@/components/ui/parcalar";
import { SITE, UYGULAMA } from "@/content/site";
import { FIYAT } from "@/content/fiyatlar";

/**
 * Stitch hero: solda slogan + butonlar, sağda üst üste iki mockup kartı (genel bakış + teklif belgesi),
 * yüzen "Müşteri teklifi açtı" ve "WhatsApp ile iletildi" rozetleri. Rakamlar temsilidir; özellikler gerçek.
 */
/**
 * Hero üst satırı: kod yazı tipinde, büyük harf, daktilo gibi sürekli yazılıp silinen tek cümle (Adem, 16.09.2026).
 */
const ROZET_METNI = "KOBİ'ler için akıllı teklif ve takip uygulaması";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-12 lg:pb-32 lg:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      </div>

      <Kapsayici className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-8 text-left lg:col-span-6" data-belir>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary sm:text-base">
              <Daktilo
                metin={ROZET_METNI}
                hiz={70}
                silmeHizi={40}
                bekleme={2600}
                baslangicGecikmesi={400}
                dongu
                imlec="_"
                imlecClassName="ml-0.5"
              />
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Teklif Oluştur. <br />
              Gönder. Takip Et. <br />
              <AltiCizgili>
                <span className="text-gradient">Satışı Kapat.</span>
              </AltiCizgili>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Müşterilerinize WhatsApp&apos;tan profesyonel teklifler gönderin, açtıklarında uygulamada anında
              görün. Tedarikçilerden zahmetsizce fiyat toplayın. Takipsizlikten kaçan satışlara son verin.
            </p>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link
                href={UYGULAMA.kayit}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-primary-dark active:scale-[0.98]"
              >
                {FIYAT.denemeGun} Gün Ücretsiz Dene
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                <PlayCircle className="size-6 text-primary" />
                Nasıl Çalıştığını Gör
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm font-medium text-slate-500 sm:text-[15px]">
              {["Kredi kartı gerekmez", "Kurulum yok, tarayıcıda çalışır", "AB Frankfurt sunucularında güvenli"].map((m) => (
                <span key={m} className="flex items-center gap-1.5">
                  <Check className="size-4 text-primary" strokeWidth={3} />
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6" data-belir data-gecikme="2">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Genel bakış kartı */}
              <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:rotate-0 sm:p-5 lg:-rotate-2">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-xs text-slate-400">app.proformium.com</span>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
                    Genel Bakış
                  </span>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-[11px] text-slate-500">Bekleyen teklif</p>
                    <p className="text-lg font-bold text-slate-900">6</p>
                    <span className="text-[10px] font-semibold text-slate-500">₺142.000 potansiyel</span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-[11px] text-slate-500">Görüntülendi</p>
                    <p className="text-lg font-bold text-primary">4</p>
                    <span className="text-[10px] text-slate-500">müşteri linki açtı</span>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-[11px] text-slate-500">Kazanılan</p>
                    <p className="text-lg font-bold text-emerald-600">₺54.234</p>
                    <span className="text-[10px] font-semibold text-emerald-600">bu ay</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="font-medium text-slate-700">Arslan Mimarlık · Villa mutfak</span>
                    </div>
                    <span className="font-semibold text-slate-900">₺125.000</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span className="font-medium text-slate-700">Periyodik bakım (34 ABC 123)</span>
                    </div>
                    <span className="font-semibold text-slate-900">₺6.540</span>
                  </div>
                </div>
              </div>

              {/* Teklif belgesi kartı */}
              <div className="relative z-20 -mt-16 ml-auto w-[90%] rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:-mt-24 sm:w-[85%] sm:p-6">
                <div className="mb-4 flex items-start justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="inline-block rounded bg-primary/10 px-2.5 py-1 text-xs font-bold tracking-wider text-primary">
                      TEKLİF
                    </span>
                    <p className="mt-1 font-mono text-xs font-semibold text-slate-700">ATS-017 · Rev. 1</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/70 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Görüntülendi
                    </span>
                    <p className="mt-0.5 text-[10px] text-slate-400">Geçerlilik: 7 gün</p>
                  </div>
                </div>
                <div className="mb-4 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-100 py-1 font-medium text-slate-600">
                    <span>Açıklama</span>
                    <span>Tutar</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-800">
                    <span>Isı yalıtımlı alüminyum doğrama &amp; montaj</span>
                    <span className="font-semibold">₺48.000</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-800">
                    <span>Temperli konfor cam paketi (12 takım)</span>
                    <span className="font-semibold">₺20.450</span>
                  </div>
                </div>
                <div className="flex items-end justify-between border-t border-dashed border-slate-200 pt-3">
                  <div className="inline-flex items-center gap-1.5 rounded border border-primary/30 bg-primary-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    <PenLine className="size-3" /> Kaşe &amp; imzalı
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-medium text-slate-400">Genel toplam (KDV dahil)</p>
                    <p className="font-display text-xl font-black text-primary sm:text-2xl">₺68.450</p>
                  </div>
                </div>
              </div>

              {/* Yüzen rozetler */}
              <div className="absolute -left-4 -top-4 z-30 flex animate-bounce items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl [animation-duration:2s] sm:-left-8">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Müşteri teklifi açtı</p>
                  <p className="text-[10px] text-slate-400">2 dakika önce · 2. açılış</p>
                </div>
              </div>
              <div className="absolute -bottom-5 left-6 z-30 flex items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-white shadow-lg sm:left-12">
                <CheckCheck className="size-4" strokeWidth={2.5} />
                <span className="text-xs font-bold">WhatsApp ile iletildi</span>
              </div>
            </div>
          </div>
        </div>
      </Kapsayici>

      {/* GEO: yapay zekâ asistanlarının alıntılayacağı net tanım */}
      <Kapsayici className="relative pt-16">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-500">{SITE.tanim}</p>
      </Kapsayici>
    </section>
  );
}
