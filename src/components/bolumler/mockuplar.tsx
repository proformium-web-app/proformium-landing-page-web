import Image from "next/image";
import { BellRing, CheckCheck, Download, Eye, FileText, MessageCircle, PenLine, Send, Trophy } from "lucide-react";

/**
 * "Nasıl çalışır" bölümü için uygulama tanıtım görselleri (temsilî veri, gerçek özellikler).
 * A: müşterinin telefonda gördüğü teklif sayfası · B: tarayıcı + WhatsApp telefonu · C: teklifin yaşam akışı.
 */

/** Telefon çerçevesi */
function Telefon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-[260px] rounded-[2.4rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl ${className}`}>
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="overflow-hidden rounded-[2rem] bg-white">{children}</div>
    </div>
  );
}

/** A · Müşterinin telefonda açtığı teklif linki (üye olmadan) */
export function MockupTelefon() {
  return (
    <div className="relative">
      <Telefon>
        <div className="bg-slate-50 px-4 pb-4 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[11px] font-black text-white">K</span>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Kardeşler Otomotiv</p>
                <p className="text-[9px] text-slate-500">Teklif ATS-017 · Rev. 1</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">Geçerli</span>
          </div>
        </div>
        <div className="space-y-2 px-4 py-3 text-[11px]">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Sayın Ahmet Bey</p>
          {[
            ["Motor yağı 5W-30 (5 L)", "₺2.450"],
            ["Yağ, hava, polen filtresi", "₺1.800"],
            ["Periyodik bakım işçiliği", "₺1.200"],
          ].map(([ad, tutar]) => (
            <div key={ad} className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2">
              <span className="text-slate-700">{ad}</span>
              <span className="font-semibold text-slate-900">{tutar}</span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-lg bg-primary-50 px-3 py-2">
            <span className="font-semibold text-primary">Toplam (KDV dahil)</span>
            <span className="font-display text-sm font-black text-primary">₺6.540</span>
          </div>
          <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-500">
            <PenLine className="size-3 text-primary" /> Kaşe ve imzalı
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 pb-5 pt-1">
          <button type="button" className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 py-2 text-[9px] font-semibold text-slate-700">
            <Download className="size-4 text-primary" /> PDF indir
          </button>
          <button type="button" className="flex flex-col items-center gap-1 rounded-xl bg-emerald-600 py-2 text-[9px] font-semibold text-white">
            <MessageCircle className="size-4" /> WhatsApp
          </button>
          <button type="button" className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 py-2 text-[9px] font-semibold text-slate-700">
            <FileText className="size-4 text-primary" /> Revize iste
          </button>
        </div>
      </Telefon>

      <div className="absolute -right-2 top-16 z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-xl sm:-right-8">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <Eye className="size-4" />
        </span>
        <div>
          <p className="text-[11px] font-bold text-slate-900">Görüntülendi</p>
          <p className="text-[10px] text-slate-400">bugün 14:20 · 2. açılış</p>
        </div>
      </div>
      <div className="absolute -left-2 bottom-20 z-20 rounded-xl bg-primary px-3 py-1.5 text-[11px] font-bold text-white shadow-glow sm:-left-8">
        Üye olmadan açılır
      </div>
    </div>
  );
}

/** B · Tarayıcıda uygulama + önde WhatsApp sohbeti olan telefon */
export function MockupTarayiciTelefon() {
  return (
    <div className="relative pb-24 pr-6 sm:pr-16">
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[11px] text-slate-400">app.proformium.com</span>
          <span className="w-10" />
        </div>
        <Image
          src="/gorseller/uygulama-genel-bakis.webp"
          alt="Proformium genel bakış ekranı"
          width={1600}
          height={756}
          sizes="(min-width: 1024px) 420px, 100vw"
          className="block h-auto w-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[190px] rounded-[1.8rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#efe7dd]">
          <div className="flex items-center gap-2 bg-emerald-700 px-3 py-2 text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">A</span>
            <div>
              <p className="text-[10px] font-bold leading-tight">Ahmet Bey</p>
              <p className="text-[8px] leading-tight text-emerald-100">çevrimiçi</p>
            </div>
          </div>
          <div className="space-y-2 px-2.5 py-3">
            <div className="ml-6 rounded-xl rounded-tr-sm bg-[#d9fdd3] p-2 text-[9px] text-slate-800 shadow-sm">
              Merhaba Ahmet Bey, bakım teklifiniz hazır: <span className="font-semibold text-blue-700">app.proformium.com/t/…</span>
              <div className="mt-1 flex items-center justify-end gap-1 text-[8px] text-slate-500">
                10:12 <CheckCheck className="size-3 text-sky-500" />
              </div>
            </div>
            <div className="mr-6 rounded-xl rounded-tl-sm bg-white p-2 text-[9px] text-slate-800 shadow-sm">
              Teşekkürler, inceleyip döneceğim 👍
              <div className="mt-1 text-right text-[8px] text-slate-500">14:21</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 right-8 z-10 flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
        <Send className="size-3.5" /> Tek tıkla WhatsApp
      </div>
    </div>
  );
}

/** C · Teklifin yaşam akışı: hazırlandı → gönderildi → görüntülendi → hatırlatma → kazanıldı */
export function MockupAkis() {
  const adimlar = [
    { ikon: FileText, ton: "bg-slate-100 text-slate-600", baslik: "Teklif hazırlandı", not: "ATS-017 · ₺6.540 · kaşe ve imzalı", zaman: "Pzt 09:40" },
    { ikon: Send, ton: "bg-emerald-50 text-emerald-600", baslik: "WhatsApp'tan gönderildi", not: "Müşteriye özel link", zaman: "Pzt 10:12" },
    { ikon: Eye, ton: "bg-primary-50 text-primary", baslik: "Müşteri görüntüledi", not: "2 kez açtı · son açılış 14:20", zaman: "Pzt 14:20" },
    { ikon: BellRing, ton: "bg-amber-50 text-amber-600", baslik: "Takip hatırlatması", not: "\"Takip ettim\" işaretlendi", zaman: "Per 09:00" },
    { ikon: Trophy, ton: "bg-emerald-600 text-white", baslik: "Kazanıldı", not: "Teklif onaylandı, iş alındı", zaman: "Cum 11:05" },
  ];
  return (
    <div className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xl sm:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Teklif geçmişi</p>
          <p className="font-mono text-sm font-bold text-slate-900">ATS-017 · Kardeşler Otomotiv</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
          <Trophy className="size-3" /> Kazanıldı
        </span>
      </div>
      <ol className="relative space-y-4 before:absolute before:bottom-3 before:left-[17px] before:top-3 before:w-px before:bg-slate-200">
        {adimlar.map((a) => (
          <li key={a.baslik} className="relative flex items-start gap-3">
            <span className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white shadow-sm ${a.ton}`}>
              <a.ikon className="size-4" />
            </span>
            <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold text-slate-900">{a.baslik}</p>
                <span className="font-mono text-[10px] text-slate-400">{a.zaman}</span>
              </div>
              <p className="text-xs text-slate-500">{a.not}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
