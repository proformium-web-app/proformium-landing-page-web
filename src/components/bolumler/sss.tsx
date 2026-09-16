import { ChevronDown } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";
import { SSS } from "@/content/sss";

/** Stitch akordeon görünümü; yerel <details> ile JavaScript'siz çalışır, arama motoru metni okur. */
export function Sss() {
  return (
    <section id="sss" className="py-24">
      <Kapsayici className="max-w-4xl">
        <div data-belir className="mb-16 space-y-3 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Aklınıza takılanlar</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sıkça sorulan sorular
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">Proformium hakkında en çok merak edilen soruların yanıtları.</p>
        </div>
        <div className="space-y-4">
          {SSS.map((s, i) => (
            <details
              key={s.soru}
              data-belir
              data-gecikme={String(Math.min(i % 4, 4))}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-6 text-left font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                {s.soru}
                <ChevronDown className="size-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-base leading-relaxed text-slate-600">{s.cevap}</p>
            </details>
          ))}
        </div>
      </Kapsayici>
    </section>
  );
}
