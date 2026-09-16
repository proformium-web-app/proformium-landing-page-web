import Link from "next/link";
import { ArrowRight, BellRing, Check, Eye, FileStack, Link2, MessageSquareOff, Phone, Scale, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";

type Satir = {
  baslik: string;
  aciklama: string;
  eski: string;
  eskiIkon: LucideIcon;
  yeni: string;
  yeniIkon: LucideIcon;
};

const SATIRLAR: Satir[] = [
  {
    baslik: "Unutulan takipler",
    aciklama: "Teklifi gönderdikten sonra araya günlük işler girer, müşteri rakibe gider.",
    eski: "Unutulur, satış kaçar",
    eskiIkon: MessageSquareOff,
    yeni: "Takip zamanı hatırlatması",
    yeniIkon: BellRing,
  },
  {
    baslik: "\"Baktı mı, bakmadı mı?\" belirsizliği",
    aciklama: "WhatsApp'a atılan PDF sessizdir. Müşteri açtı mı, ne zaman açtı, bilemezsiniz.",
    eski: "Karanlıkta tahmin",
    eskiIkon: MessageSquareOff,
    yeni: "Görüntülendi bilgisi",
    yeniIkon: Eye,
  },
  {
    baslik: "WhatsApp'ta kaybolan dosyalar",
    aciklama: "Revize istendiğinde eski ve yeni PDF'ler birbirine karışır, hangisi son hali belli olmaz.",
    eski: "Karışıklık, açılmayan PDF",
    eskiIkon: FileStack,
    yeni: "Tek link, hep son revizyon",
    yeniIkon: Link2,
  },
  {
    baslik: "Saatler süren fiyat toplama",
    aciklama: "Tedarikçileri tek tek arayıp WhatsApp'tan sormak, Excel'de karşılaştırmak saatlerinizi çalar.",
    eski: "Telefon, not, tablo",
    eskiIkon: Phone,
    yeni: "Yan yana teklif toplama",
    yeniIkon: Scale,
  },
];

/** Tasarım A: tablo (Stitch). Biraz büyütüldü (Adem, 16.09.2026). */
function TasarimTablo() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="border-b border-slate-200">
          <tr className="text-sm font-bold text-slate-900 sm:text-base">
            <th className="pb-4 text-sm font-semibold text-slate-500 sm:text-base">Özellik / Senaryo</th>
            <th className="whitespace-nowrap px-3 pb-5 text-center sm:px-5">Klasik yöntem</th>
            <th className="whitespace-nowrap px-3 pb-5 text-center text-primary sm:px-5">Proformium</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/70">
          {SATIRLAR.map((s) => (
            <tr key={s.baslik} className="group">
              <td className="py-5 pr-6">
                <div className="mb-1 text-base font-bold text-slate-900 sm:text-lg">{s.baslik}</div>
                <p className="text-sm leading-relaxed text-slate-500 sm:text-[15px]">{s.aciklama}</p>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-center align-middle sm:px-5">
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-rose-200/80 bg-rose-50 text-rose-500">
                    <X className="size-4" strokeWidth={3} />
                  </div>
                  <span className="hidden text-xs text-slate-500 sm:inline-block">{s.eski}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-center align-middle sm:px-5">
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                    <Check className="size-4" strokeWidth={3} />
                  </div>
                  <span className="hidden text-xs font-semibold text-emerald-700 sm:inline-block">{s.yeni}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Tasarım C (deneme): dört sorun, dört kart. Her kartta üstte "Bugün" (kırmızı), altta "Proformium ile" (yeşil),
 * arada aşağı ok. Telefonda tek sütun, tablette iki, masaüstünde dört.
 */
function TasarimKartlar() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {SATIRLAR.map((s, i) => (
        <div
          key={s.baslik}
          data-belir
          data-gecikme={String(i)}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-glow"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-transform group-hover:scale-110">
              <s.yeniIkon className="size-5" />
            </span>
            <h3 className="text-base font-bold leading-snug text-slate-900">{s.baslik}</h3>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-3.5">
              <p className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-500">
                <X className="size-3.5" strokeWidth={3} /> Bugün
              </p>
              <p className="text-sm font-semibold text-slate-700">{s.eski}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{s.aciklama}</p>
            </div>

            <div className="flex justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/25">
                <ArrowRight className="size-4 rotate-90" />
              </span>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-3.5">
              <p className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                <Check className="size-3.5" strokeWidth={3} /> Proformium ile
              </p>
              <p className="text-sm font-semibold text-slate-900">{s.yeni}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Sorun() {
  return (
    <section id="neden" className="border-y border-slate-200/80 bg-white py-20">
      <Kapsayici>
        <div
          data-belir
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-tr from-primary-50/70 via-white to-rose-50/50 p-8 shadow-sm sm:p-12 lg:p-16"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-6 border-b border-slate-200/80 pb-8 text-center">
              <div className="max-w-3xl space-y-3">
                <BolumEtiketi isaret>Karşılaştırma</BolumEtiketi>
                <h2 className="font-display text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Sorun PDF hazırlayamamak değil;{" "}
                  <span className="text-primary">&quot;Düşüneyim&quot; diyen müşteriyi unutmak</span> ve satışı
                  başkasına kaptırmak.
                </h2>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
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

            {/* DENEME: iki tasarım alt alta; Adem seçince diğeri kaldırılacak */}
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Tasarım A · tablo</p>
            <TasarimTablo />
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Tasarım C · dört kart</p>
            <TasarimKartlar />
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
