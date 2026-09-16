import Link from "next/link";
import { Building2, Link2, MapPin, ShieldCheck, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IkonKaresi, Kapsayici } from "@/components/ui/parcalar";

const MADDELER: { ikon: LucideIcon; ton: "mavi" | "amber" | "marka" | "ok" | "mor"; baslik: string; aciklama: string }[] = [
  { ikon: MapPin, ton: "mavi", baslik: "Veriler Avrupa Birliği'nde", aciklama: "Sunucu ve veritabanı Frankfurt'ta (Almanya). AB dışına çıkmaz." },
  { ikon: Building2, ton: "amber", baslik: "Her işletmenin verisi ayrı", aciklama: "Ayrım veritabanı düzeyinde kuralla sağlanır; bir işletme diğerinin kaydını göremez." },
  { ikon: Link2, ton: "marka", baslik: "Tahmin edilemez müşteri linki", aciklama: "Teklif linkleri rastgele anahtar içerir, arama motorlarına kapalıdır. Taslaklar linkle açılmaz." },
  { ikon: ShieldCheck, ton: "ok", baslik: "KVKK'ya uygun", aciklama: "Aydınlatma metni ve gizlilik politikası açık. Sitede reklam ya da izleme çerezi yok." },
  { ikon: Trash2, ton: "mor", baslik: "Hesabınızı kendiniz silersiniz", aciklama: "İstediğiniz an hesabınızı ve tüm verinizi uygulamadan silebilirsiniz; kimseye sormadan." },
];

export function Guven() {
  return (
    <section id="guven" className="border-y border-slate-200/80 bg-white py-20">
      <Kapsayici>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div data-belir className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Güven</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Müşteri listeniz <span className="text-gradient">sizindir</span>
            </h2>
            <p className="text-base text-slate-600 sm:text-lg">
              Uygulamaya girdiğiniz müşteri, ürün ve teklif bilgilerini okumayız, paylaşmayız, satmayız. Ayrıntılar{" "}
              <Link href="/gizlilik" className="font-semibold text-primary underline underline-offset-4">
                gizlilik politikasında
              </Link>
              .
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {MADDELER.map((m, i) => (
              <li
                key={m.baslik}
                data-belir
                data-gecikme={String(Math.min(i, 4))}
                className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-background-light p-5 transition-all hover:border-primary/40 hover:bg-white"
              >
                <IkonKaresi ton={m.ton} className="size-11 rounded-xl">
                  <m.ikon className="size-5" />
                </IkonKaresi>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">{m.baslik}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{m.aciklama}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Kapsayici>
    </section>
  );
}
