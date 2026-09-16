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
          <tr className="text-base font-bold text-slate-900 sm:text-lg">
            <th className="pb-5 text-base font-semibold text-slate-500 sm:text-lg">Özellik / Senaryo</th>
            <th className="whitespace-nowrap px-3 pb-5 text-center sm:px-5">Klasik yöntem</th>
            <th className="whitespace-nowrap px-3 pb-5 text-center text-primary sm:px-5">Proformium</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/70">
          {SATIRLAR.map((s) => (
            <tr key={s.baslik} className="group">
              <td className="py-6 pr-6">
                <div className="mb-1.5 text-lg font-bold text-slate-900 sm:text-xl">{s.baslik}</div>
                <p className="text-[15px] leading-relaxed text-slate-500 sm:text-base">{s.aciklama}</p>
              </td>
              <td className="whitespace-nowrap px-3 py-6 text-center align-middle sm:px-5">
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/80 bg-rose-50 text-rose-500">
                    <X className="size-5" strokeWidth={3} />
                  </div>
                  <span className="hidden text-sm text-slate-500 sm:inline-block">{s.eski}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-6 text-center align-middle sm:px-5">
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                    <Check className="size-5" strokeWidth={3} />
                  </div>
                  <span className="hidden text-sm font-semibold text-emerald-700 sm:inline-block">{s.yeni}</span>
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
 * Tasarım B (deneme): "Bugün" ve "Proformium ile" iki panel yan yana, ortada ok.
 * Sol panel soluk, sağ panel bordo çerçeveli ve canlı. Her satır ikonlu kart.
 */
function TasarimPaneller() {
  return (
    <div className="relative grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
      {/* Bugün */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
            <X className="size-5" strokeWidth={3} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-slate-700">Bugün</p>
            <p className="text-sm text-slate-500">Word, Excel, WhatsApp, kâğıt</p>
          </div>
        </div>
        <ul className="space-y-3">
          {SATIRLAR.map((s) => (
            <li key={s.baslik} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/70 p-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-400">
                <s.eskiIkon className="size-4" />
              </span>
              <div>
                <p className="text-base font-semibold text-slate-700">{s.baslik}</p>
                <p className="mt-0.5 text-sm text-slate-500">{s.eski}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Ok */}
      <div className="flex items-center justify-center lg:flex-col">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-glow">
          <ArrowRight className="size-6 rotate-90 lg:rotate-0" />
        </span>
      </div>

      {/* Proformium ile */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-6 shadow-2xl sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25">
            <Check className="size-5" strokeWidth={3} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-slate-900">Proformium ile</p>
            <p className="text-sm text-slate-500">Tek uygulama, telefondan</p>
          </div>
        </div>
        <ul className="relative space-y-3">
          {SATIRLAR.map((s) => (
            <li key={s.baslik} className="group flex items-start gap-3 rounded-xl border border-primary/15 bg-primary-50/60 p-4 transition-colors hover:bg-primary-50">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-110">
                <s.yeniIkon className="size-4" />
              </span>
              <div>
                <p className="text-base font-semibold text-slate-900">{s.yeni}</p>
                <p className="mt-0.5 text-sm text-slate-600">{s.aciklama}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Tasarım B · iki panel</p>
            <TasarimPaneller />
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
