import Link from "next/link";
import { Building2, Check, Link2, Lock, MapPin, ShieldCheck, Trash2 } from "lucide-react";
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

            {/* Veri güvenliği kartı: sadece doğrulanabilir bilgiler */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card-soft sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-100/60 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <ShieldCheck className="size-7" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 sm:text-lg">Veri güvenliği</p>
                  <p className="text-sm text-slate-500">Avrupa Birliği sunucuları · KVKK</p>
                </div>
              </div>
              <ul className="relative mt-6 space-y-3 text-sm text-slate-700 sm:text-[15px]">
                {[
                  "Sunucu ve veritabanı Frankfurt, Almanya",
                  "Her işletmenin verisi veritabanı düzeyinde ayrı",
                  "Müşteri linkleri rastgele, arama motorlarına kapalı",
                  "Hesabınızı ve verinizi istediğiniz an silersiniz",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
                <Link href="/kvkk" className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-100">
                  <Lock className="size-3.5" /> KVKK aydınlatma metni
                </Link>
                <Link href="/gizlilik" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100">
                  Gizlilik politikası
                </Link>
              </div>
            </div>
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
                  <h3 className="text-base font-bold text-slate-900">{m.baslik}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{m.aciklama}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Kapsayici>
    </section>
  );
}
