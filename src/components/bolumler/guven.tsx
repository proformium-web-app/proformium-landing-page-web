import Link from "next/link";
import { Building2, Link2, MapPin, ShieldCheck, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bolum, BolumBasligi, IkonKaresi, Kapsayici } from "@/components/ui/parcalar";

const MADDELER: { ikon: LucideIcon; baslik: string; aciklama: string }[] = [
  {
    ikon: MapPin,
    baslik: "Veriler Avrupa Birliği'nde",
    aciklama: "Sunucu ve veritabanı Frankfurt'ta (Almanya). Türkiye dışına, AB dışına çıkmaz.",
  },
  {
    ikon: Building2,
    baslik: "Her işletmenin verisi ayrı",
    aciklama: "Ayrım veritabanı düzeyinde kuralla sağlanır; bir işletme diğerinin kaydını göremez.",
  },
  {
    ikon: Link2,
    baslik: "Tahmin edilemez müşteri linki",
    aciklama: "Teklif linkleri rastgele anahtar içerir, arama motorlarına kapalıdır. Taslaklar linkle açılmaz.",
  },
  {
    ikon: ShieldCheck,
    baslik: "KVKK'ya uygun",
    aciklama: "Aydınlatma metni ve gizlilik politikası açık. Sitede reklam ya da izleme çerezi yok.",
  },
  {
    ikon: Trash2,
    baslik: "Hesabınızı kendiniz silersiniz",
    aciklama: "İstediğiniz an hesabınızı ve tüm verinizi uygulamadan silebilirsiniz; kimseye sormadan.",
  },
];

export function Guven() {
  return (
    <Bolum id="guven" zemin="surface">
      <Kapsayici>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <BolumBasligi
            hizala="sol"
            etiket="Güven"
            baslik="Müşteri listeniz sizindir"
            aciklama={
              <>
                Uygulamaya girdiğiniz müşteri, ürün ve teklif bilgilerini okumayız, paylaşmayız, satmayız.
                Ayrıntılar{" "}
                <Link href="/gizlilik" className="font-medium text-brand underline underline-offset-4">
                  gizlilik politikasında
                </Link>
                .
              </>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {MADDELER.map((m) => (
              <li key={m.baslik} className="flex gap-4">
                <IkonKaresi>
                  <m.ikon className="size-5" />
                </IkonKaresi>
                <div>
                  <h3 className="text-base font-semibold text-ink">{m.baslik}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{m.aciklama}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Kapsayici>
    </Bolum>
  );
}
