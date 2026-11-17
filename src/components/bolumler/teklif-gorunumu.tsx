"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Landmark, QrCode, Stamp } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { FIYAT } from "@/content/fiyatlar";
import { cn } from "@/lib/cn";

/**
 * Teklif görünümü (Adem, 17.11.2026): 3 şablon, 6 renk. Görseller uygulamanın kendi PDF motorundan
 * (uygulama 0.15.20, ../site-icin-pdf-gorselleri). Bilgiler örnek: "Örnek Oto Servis".
 * Her şablon için iki renk görseli var; altı rengin hepsi her şablonla kullanılabilir.
 */
type Renk = { ad: string; hex: string; gorsel: string };
type Sablon = { anahtar: string; ad: string; aciklama: string; renkler: Renk[]; pdf: string };

const SABLONLAR: Sablon[] = [
  {
    anahtar: "klasik",
    ad: "Klasik",
    aciklama: "Sıkı ve düzenli. Çok kalemli tekliflerde en az sayfayı tutar.",
    renkler: [
      { ad: "Bordo", hex: "#8b1f3c", gorsel: "/gorseller/sablonlar/teklif-klasik-bordo.webp" },
      { ad: "Yeşil", hex: "#15803d", gorsel: "/gorseller/sablonlar/teklif-klasik-yesil.webp" },
    ],
    pdf: "/ornek/ornek-teklif-klasik-bordo.pdf",
  },
  {
    anahtar: "ferah",
    ad: "Ferah",
    aciklama: "Büyük logo ve başlık, geniş boşluklar, ince çizgili tablo.",
    renkler: [
      { ad: "Lacivert", hex: "#1e3a8a", gorsel: "/gorseller/sablonlar/teklif-ferah-lacivert.webp" },
      { ad: "Antrasit", hex: "#374151", gorsel: "/gorseller/sablonlar/teklif-ferah-antrasit.webp" },
    ],
    pdf: "/ornek/ornek-teklif-ferah-lacivert.pdf",
  },
  {
    anahtar: "modern",
    ad: "Modern",
    aciklama: "Üstte renk şeridi, yuvarlak kutular, iri genel toplam.",
    renkler: [
      { ad: "Mor", hex: "#7c3aed", gorsel: "/gorseller/sablonlar/teklif-modern-mor.webp" },
      { ad: "Turuncu", hex: "#c2410c", gorsel: "/gorseller/sablonlar/teklif-modern-turuncu.webp" },
    ],
    pdf: "/ornek/ornek-teklif-modern-mor.pdf",
  },
];

const BELGEDE = [
  { ikon: Stamp, metin: "Logo, kaşe ve imza" },
  { ikon: Landmark, metin: "IBAN ile ödeme bilgisi" },
  { ikon: QrCode, metin: "Teklifi telefonda açan QR kodu" },
];

export function TeklifGorunumu() {
  const [sablonNo, setSablonNo] = useState(0);
  const [renkNo, setRenkNo] = useState(0);
  const sablon = SABLONLAR[sablonNo];
  const renk = sablon.renkler[renkNo];

  return (
    <section id="teklif-gorunumu" className="scroll-mt-28 overflow-x-clip bg-slate-50/60 py-20 lg:py-24">
      <Kapsayici>
        <div data-belir className="mx-auto mb-12 max-w-3xl space-y-3 text-center lg:mb-16">
          <BolumEtiketi isaret>Teklif görünümü</BolumEtiketi>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Teklifiniz <span className="text-gradient">işletmenize yakışsın</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            3 şablon, 6 renk. Müşterinizin eline geçen belge tam olarak bu: Proformium&apos;un ürettiği gerçek PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Sol: seçim */}
          <div data-belir className="space-y-8 lg:col-span-5">
            <div>
              <p className="mb-3 text-sm font-bold text-slate-900">Şablon</p>
              <div role="tablist" aria-label="Teklif şablonu" className="flex flex-col gap-3">
                {SABLONLAR.map((s, i) => {
                  const secili = i === sablonNo;
                  return (
                    <button
                      key={s.anahtar}
                      type="button"
                      role="tab"
                      aria-selected={secili}
                      onClick={() => {
                        setSablonNo(i);
                        setRenkNo(0);
                      }}
                      className={cn(
                        "cursor-pointer rounded-2xl border p-4 text-left transition-all sm:p-5",
                        secili
                          ? "border-primary/50 bg-white shadow-raised"
                          : "border-slate-200/80 bg-white/60 hover:border-primary/30 hover:bg-white",
                      )}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className={cn("text-base font-bold sm:text-lg", secili ? "text-primary" : "text-slate-900")}>
                          {s.ad}
                        </span>
                        <span className="flex gap-1.5" aria-hidden="true">
                          {s.renkler.map((r) => (
                            <span key={r.ad} className="size-3.5 rounded-full" style={{ backgroundColor: r.hex }} />
                          ))}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-600">{s.aciklama}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold text-slate-900">
                Renk: <span className="font-semibold text-slate-600">{renk.ad}</span>
              </p>
              <div className="flex items-center gap-3">
                {sablon.renkler.map((r, i) => (
                  <button
                    key={r.ad}
                    type="button"
                    onClick={() => setRenkNo(i)}
                    aria-label={`${r.ad} renk`}
                    aria-pressed={i === renkNo}
                    className={cn(
                      "size-9 cursor-pointer rounded-full ring-offset-2 transition-transform hover:scale-110",
                      i === renkNo ? "ring-2 ring-slate-900" : "ring-1 ring-slate-200",
                    )}
                    style={{ backgroundColor: r.hex }}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Altı renk (bordo, lacivert, antrasit, yeşil, mor, turuncu) her şablonla kullanılabilir; burada her
                şablon için iki örnek var.
              </p>
            </div>

            <ul className="space-y-2.5">
              {BELGEDE.map((b) => (
                <li key={b.metin} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <b.ikon className="size-4" />
                  </span>
                  {b.metin}
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-slate-200 pt-6">
              <a
                href={sablon.pdf}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <FileText className="size-4" />
                Örnek PDF&apos;i incele ({sablon.ad})
              </a>
              <p className="text-sm leading-relaxed text-slate-500">
                Free pakette Klasik şablon ve bordo renk kullanılır. Tüm şablon ve renkler Pro&apos;da ve{" "}
                {FIYAT.denemeGun} günlük denemede açıktır. Seçim uygulamada Ayarlar → Teklif görünümü&apos;nden yapılır.
              </p>
            </div>
          </div>

          {/* Sağ: belge */}
          <div data-belir data-gecikme="2" className="relative lg:col-span-7">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-rose-100/40 to-transparent blur-2xl" />
            <div className="belge-kutu relative mx-auto overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xl">
              <Image
                key={renk.gorsel}
                src={renk.gorsel}
                alt={`Proformium ${sablon.ad} şablonunda, ${renk.ad.toLocaleLowerCase("tr")} renkli örnek fiyat teklifi: logo, kalemler, IBAN, QR kodu, kaşe ve imza`}
                width={1000}
                height={1413}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="animate-belir block h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Örnek belge: firma, müşteri, VKN ve IBAN bilgileri temsilidir.
            </p>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
