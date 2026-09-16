import Link from "next/link";
import { Building2, Link2, Lock, MapPin, ShieldCheck, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { cn } from "@/lib/cn";

const MADDELER: { ikon: LucideIcon; ton: string; baslik: string; aciklama: string }[] = [
  { ikon: MapPin, ton: "bg-blue-50 text-blue-600", baslik: "Veriler Avrupa Birliği'nde", aciklama: "Sunucu ve veritabanı Frankfurt'ta (Almanya). AB dışına çıkmaz." },
  { ikon: Building2, ton: "bg-amber-50 text-amber-600", baslik: "Her işletmenin verisi ayrı", aciklama: "Ayrım veritabanı düzeyinde kuralla sağlanır; bir işletme diğerinin kaydını göremez." },
  { ikon: Link2, ton: "bg-rose-50 text-primary", baslik: "Tahmin edilemez müşteri linki", aciklama: "Teklif linkleri rastgele anahtar içerir, arama motorlarına kapalıdır. Taslaklar linkle açılmaz." },
  { ikon: ShieldCheck, ton: "bg-emerald-50 text-emerald-600", baslik: "KVKK'ya uygun", aciklama: "Aydınlatma metni ve gizlilik politikası açık. Sitede reklam ya da izleme çerezi yok." },
  { ikon: Trash2, ton: "bg-violet-50 text-violet-600", baslik: "Hesabınızı kendiniz silersiniz", aciklama: "İstediğiniz an hesabınızı ve tüm verinizi uygulamadan silebilirsiniz; kimseye sormadan." },
];

/** Güven: solda başlık, sağda tek "Veri güvenliği" paneli (beş madde + yasal bağlantılar). */
export function Guven() {
  return (
    <section id="guven" className="border-y border-slate-200/80 bg-white py-20">
      <Kapsayici>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-belir className="space-y-4 lg:col-span-4">
            <BolumEtiketi isaret hizala="sol">Güven</BolumEtiketi>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Müşteri listeniz <span className="text-gradient">sizindir</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Uygulamaya girdiğiniz müşteri, ürün ve teklif bilgilerini okumayız, paylaşmayız, satmayız.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Ayrıntılar{" "}
              <Link href="/gizlilik" className="font-semibold text-primary underline underline-offset-4">
                gizlilik politikasında
              </Link>{" "}
              ve{" "}
              <Link href="/kvkk" className="font-semibold text-primary underline underline-offset-4">
                KVKK aydınlatma metninde
              </Link>
              .
            </p>
          </div>

          <div data-belir data-gecikme="1" className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

              {/* Panel başlığı */}
              <div className="relative flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50/70 via-white to-primary-50/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
                    <ShieldCheck className="size-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">Veri güvenliği</h3>
                    <p className="text-sm text-slate-500 sm:text-base">Avrupa Birliği sunucuları · KVKK · size ait veri</p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Frankfurt, Almanya
                </span>
              </div>

              {/* Maddeler */}
              <ul className="relative grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
                {MADDELER.map((m) => (
                  <li key={m.baslik} className="group flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-110",
                        m.ton,
                      )}
                    >
                      <m.ikon className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{m.baslik}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{m.aciklama}</p>
                    </div>
                  </li>
                ))}
                <li className="flex items-center">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/kvkk"
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700 transition-all hover:scale-[1.02] hover:bg-emerald-100"
                    >
                      <Lock className="size-3.5" /> KVKK aydınlatma metni
                    </Link>
                    <Link
                      href="/gizlilik"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-600 transition-all hover:scale-[1.02] hover:bg-slate-100"
                    >
                      Gizlilik politikası
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
