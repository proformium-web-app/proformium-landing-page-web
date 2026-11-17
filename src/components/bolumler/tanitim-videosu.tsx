"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { TANITIM_VIDEO as V } from "@/content/video";

/**
 * Tanıtım videosu (Adem, 17.11.2026). Kendiliğinden başlamaz: kapak görseli ve oynat düğmesi görünür,
 * basınca sesli oynar. preload="none" olduğu için video dosyası basılana kadar indirilmez.
 * 16:9 kutu yer tutar; sayfa yüklenirken kayma olmaz.
 */
export function TanitimVideosu() {
  const video = useRef<HTMLVideoElement>(null);
  const [basladi, setBasladi] = useState(false);

  function oynat() {
    setBasladi(true);
    video.current?.play().catch(() => {
      /* Tarayıcı oynatmayı engellerse standart kontroller görünür; kullanıcı oradan başlatır. */
    });
  }

  return (
    <section id="video" className="scroll-mt-28 pb-20 lg:pb-24">
      <Kapsayici className="max-w-5xl">
        <div data-belir className="text-center">
          <BolumEtiketi isaret>Tanıtım videosu</BolumEtiketi>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {V.baslik}
          </h2>
        </div>

        <div
          data-belir
          className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-raised sm:mt-10 sm:rounded-3xl"
        >
          <video
            ref={video}
            className="absolute inset-0 h-full w-full"
            poster={V.kapak}
            preload="none"
            playsInline
            controls={basladi}
            title={V.ad}
            width={V.genislik}
            height={V.yukseklik}
          >
            <source src={V.dosya} type="video/mp4" />
          </video>

          {!basladi && (
            <button
              type="button"
              onClick={oynat}
              aria-label="Tanıtım videosunu oynat"
              className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-900/10 transition-colors hover:bg-slate-900/20 focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-primary"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-brand ring-8 ring-white/40 transition-transform group-hover:scale-110 sm:size-20">
                <Play className="ml-1 size-7 fill-current sm:size-9" />
              </span>
            </button>
          )}
        </div>
      </Kapsayici>
    </section>
  );
}
