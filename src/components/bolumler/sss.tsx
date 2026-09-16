import { ChevronDown } from "lucide-react";
import { Bolum, BolumBasligi, Kapsayici } from "@/components/ui/parcalar";
import { SSS } from "@/content/sss";

/** Yerel <details> ile akordeon: JavaScript gerekmez, arama motoru metni okur. */
export function Sss() {
  return (
    <Bolum id="sss" zemin="surface">
      <Kapsayici className="max-w-3xl">
        <BolumBasligi etiket="Sıkça sorulan sorular" baslik="Aklınıza takılanlar" />
        <div className="mt-10 divide-y divide-line rounded-panel border border-line bg-surface">
          {SSS.map((s) => (
            <details key={s.soru} className="group px-5 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {s.soru}
                <ChevronDown className="size-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">{s.cevap}</p>
            </details>
          ))}
        </div>
      </Kapsayici>
    </Bolum>
  );
}
