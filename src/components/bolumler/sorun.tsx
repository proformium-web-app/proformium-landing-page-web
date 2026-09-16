import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";

const SATIRLAR = [
  {
    baslik: "Unutulan takipler",
    aciklama: "Teklifi gönderdikten sonra araya günlük işler girer, müşteri rakibe gider.",
    eski: "Unutulur, satış kaçar",
    yeni: "Takip zamanı hatırlatması",
  },
  {
    baslik: "\"Baktı mı, bakmadı mı?\" belirsizliği",
    aciklama: "WhatsApp'a atılan PDF sessizdir. Müşteri açtı mı, ne zaman açtı, bilemezsiniz.",
    eski: "Karanlıkta tahmin",
    yeni: "Görüntülendi bilgisi",
  },
  {
    baslik: "WhatsApp'ta kaybolan dosyalar",
    aciklama: "Revize istendiğinde eski ve yeni PDF'ler birbirine karışır, hangisi son hali belli olmaz.",
    eski: "Karışıklık, açılmayan PDF",
    yeni: "Tek link, hep son revizyon",
  },
  {
    baslik: "Saatler süren fiyat toplama",
    aciklama: "Tedarikçileri tek tek arayıp WhatsApp'tan sormak, Excel'de karşılaştırmak saatlerinizi çalar.",
    eski: "Telefon, not, tablo",
    yeni: "Yan yana teklif toplama",
  },
];

export function Sorun() {
  return (
    <section id="neden" className="border-y border-slate-200/80 bg-white py-20">
      <Kapsayici>
        <div
          data-belir
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-tr from-primary-50/70 via-white to-rose-50/50 p-8 shadow-sm sm:p-12 lg:p-16"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-6 md:flex-row md:items-end">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Karşılaştırma
                </div>
                <h2 className="font-display text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Sorun PDF hazırlayamamak değil;{" "}
                  <span className="text-primary">&quot;Düşüneyim&quot; diyen müşteriyi unutmak</span> ve satışı
                  başkasına kaptırmak.
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Teklif gönderen her işletme aynı yerde satış kaybeder: gönderdikten sonra. Proformium bu dört
                  sızıntıyı kapatır.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="#ozellikler"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-sm transition-all hover:text-primary-dark"
                >
                  Tüm özellikleri inceleyin
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead className="border-b border-slate-200">
                  <tr className="text-xs font-bold text-slate-900 sm:text-sm">
                    <th className="pb-4 font-semibold text-slate-500">Özellik / Senaryo</th>
                    <th className="whitespace-nowrap px-3 pb-4 text-center sm:px-4">Klasik yöntem</th>
                    <th className="whitespace-nowrap px-3 pb-4 text-center text-primary sm:px-4">Proformium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm">
                  {SATIRLAR.map((s) => (
                    <tr key={s.baslik} className="group">
                      <td className="py-5 pr-4">
                        <div className="mb-1 text-sm font-bold text-slate-900 sm:text-base">{s.baslik}</div>
                        <p className="text-xs leading-relaxed text-slate-500">{s.aciklama}</p>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-center align-middle sm:px-4">
                        <div className="inline-flex flex-col items-center gap-1.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-200/80 bg-rose-50 text-rose-500">
                            <X className="size-4" strokeWidth={3} />
                          </div>
                          <span className="hidden text-[10px] text-slate-500 sm:inline-block">{s.eski}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-center align-middle sm:px-4">
                        <div className="inline-flex flex-col items-center gap-1.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                            <Check className="size-4" strokeWidth={3} />
                          </div>
                          <span className="hidden text-[10px] font-semibold text-emerald-700 sm:inline-block">{s.yeni}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
