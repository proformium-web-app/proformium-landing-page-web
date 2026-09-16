import Image from "next/image";
import { BatteryFull, Camera, CheckCheck, ChevronLeft, Eye, Mic, Paperclip, Phone, Send, Signal, Video, Wifi } from "lucide-react";

/**
 * "Nasıl çalışır" ortadaki görsel (Adem seçimi B, 16.09.2026): tarayıcıda uygulama ekranı,
 * önünde WhatsApp sohbeti açık gerçekçi bir telefon. Veriler temsilî, özellikler gerçek.
 */
export function MockupTarayiciTelefon() {
  return (
    <div className="relative pb-40 pr-8 sm:pb-44 sm:pr-16">
      {/* Tarayıcı: uygulama */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[11px] text-slate-400">app.proformium.com</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Canlı</span>
        </div>
        <Image
          src="/gorseller/uygulama-genel-bakis.webp"
          alt="Proformium genel bakış ekranı: taslaklar, revize talepleri, gönderilen teklifler"
          width={1600}
          height={756}
          sizes="(min-width: 1024px) 420px, 100vw"
          className="block h-auto w-full object-cover"
        />
      </div>

      {/* Rozetler */}
      <div className="absolute -top-3 left-4 z-10 hidden items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:flex">
        <Eye className="size-4" />
        Müşteri görüntüledi
      </div>

      {/* Telefon: WhatsApp sohbeti */}
      <div className="absolute bottom-0 right-0 z-20 w-[200px] rounded-[2.2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl sm:w-[210px]">
        {/* Yan tuşlar */}
        <span className="absolute -left-[8px] top-16 h-8 w-[3px] rounded-l bg-slate-700" />
        <span className="absolute -left-[8px] top-28 h-12 w-[3px] rounded-l bg-slate-700" />
        <span className="absolute -right-[8px] top-24 h-14 w-[3px] rounded-r bg-slate-700" />

        <div className="relative flex h-[400px] flex-col overflow-hidden rounded-[1.8rem] bg-[#efeae2]">
          {/* Dinamik ada */}
          <span className="absolute left-1/2 top-2 z-20 h-5 w-16 -translate-x-1/2 rounded-full bg-slate-900" />

          {/* Durum çubuğu */}
          <div className="flex items-center justify-between bg-[#075e54] px-4 pb-1 pt-2.5 text-[10px] font-semibold text-white">
            <span>10:12</span>
            <span className="flex items-center gap-1">
              <Signal className="size-3" />
              <Wifi className="size-3" />
              <BatteryFull className="size-3.5" />
            </span>
          </div>

          {/* Sohbet başlığı */}
          <div className="flex items-center gap-2 bg-[#075e54] px-2.5 pb-2 pt-1 text-white">
            <ChevronLeft className="size-4" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-[10px] font-bold">AY</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold leading-tight">Ahmet Yılmaz</p>
              <p className="text-[8px] leading-tight text-emerald-100">çevrimiçi</p>
            </div>
            <Video className="size-3.5" />
            <Phone className="size-3.5" />
          </div>

          {/* Mesajlar */}
          <div className="flex-1 space-y-2 overflow-hidden px-2.5 py-3 [background-image:radial-gradient(#d8d2c6_0.6px,transparent_0.6px)] [background-size:12px_12px]">
            <div className="mx-auto w-fit rounded-md bg-[#e1f2fb] px-2 py-0.5 text-[8px] font-semibold text-slate-600 shadow-sm">Bugün</div>

            <div className="ml-7 rounded-lg rounded-tr-none bg-[#d9fdd3] p-2 text-[9px] leading-snug text-slate-800 shadow-sm">
              Merhaba Ahmet Bey, aracınızın bakım teklifi hazır. Linkten inceleyebilirsiniz:
              <span className="block truncate font-semibold text-[#027eb5] underline">app.proformium.com/t/k7x2…</span>
              <div className="mt-0.5 flex items-center justify-end gap-1 text-[8px] text-slate-500">
                10:12 <CheckCheck className="size-3 text-[#53bdeb]" />
              </div>
            </div>

            <div className="mr-7 rounded-lg rounded-tl-none bg-white p-2 text-[9px] leading-snug text-slate-800 shadow-sm">
              Teşekkürler, açtım inceliyorum 👍
              <div className="mt-0.5 text-right text-[8px] text-slate-500">14:21</div>
            </div>

            <div className="ml-7 rounded-lg rounded-tr-none bg-[#d9fdd3] p-2 text-[9px] leading-snug text-slate-800 shadow-sm">
              Aklınıza takılan bir şey olursa buradayım.
              <div className="mt-0.5 flex items-center justify-end gap-1 text-[8px] text-slate-500">
                14:23 <CheckCheck className="size-3 text-[#53bdeb]" />
              </div>
            </div>
          </div>

          {/* Mesaj çubuğu */}
          <div className="flex items-center gap-1.5 bg-[#f0f0f0] px-2 py-2">
            <div className="flex flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[9px] text-slate-400">
              <span className="flex-1">Mesaj</span>
              <Paperclip className="size-3" />
              <Camera className="size-3" />
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a884] text-white">
              <Mic className="size-3.5" />
            </span>
          </div>
          <div className="mx-auto mb-1.5 h-1 w-16 rounded-full bg-slate-900/70" />
        </div>
      </div>

      <div className="absolute -right-2 top-1/2 z-30 hidden items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:flex">
        <Send className="size-3.5" /> Tek tıkla WhatsApp
      </div>
    </div>
  );
}
