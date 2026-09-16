import Image from "next/image";
import {
  ClipboardList,
  Eye,
  FilePlus2,
  Link2,
  MessageCircle,
  Scale,
  Trophy,
  UserRound,
  Users,
  BellRing,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bolum, BolumBasligi, IkonKaresi, Kapsayici, Rozet } from "@/components/ui/parcalar";

type Adim = { ikon: LucideIcon; baslik: string; aciklama: string };

const TEKLIF_VER: Adim[] = [
  {
    ikon: UserRound,
    baslik: "Müşteriyi seçin",
    aciklama: "Kayıtlı müşteriden seçin ya da yenisini o an ekleyin. Otomotivde plakayla arayın.",
  },
  {
    ikon: FilePlus2,
    baslik: "Teklifi hazırlayın",
    aciklama: "Ürün adını yazmaya başlayın, fiyatı ve birimi gelsin. KDV, iskonto ve toplam otomatik.",
  },
  {
    ikon: MessageCircle,
    baslik: "WhatsApp'tan gönderin",
    aciklama: "Tek tıkla WhatsApp, e-posta ya da PDF. Müşteriye üye olmadan açılan özel link gider.",
  },
  {
    ikon: Eye,
    baslik: "Açınca görün",
    aciklama: "Müşteri linki açınca teklif \"Görüntülendi\" olur; kaç kez ve ne zaman açıldığı görünür.",
  },
  {
    ikon: BellRing,
    baslik: "Takip edin, satışı kapatın",
    aciklama: "Takip zamanı gelince hatırlatılır. \"Takip ettim\", \"3 gün ertele\", \"kazanıldı\" tek tıkla.",
  },
];

const TEKLIF_ISTE: Adim[] = [
  {
    ikon: ClipboardList,
    baslik: "Kalemleri yazın",
    aciklama: "Ne istediğinizi listeleyin: ad, miktar, birim, not. Son yanıt tarihini belirleyin.",
  },
  {
    ikon: Users,
    baslik: "Tedarikçileri seçin",
    aciklama: "Sektöre göre kayıtlı tedarikçileriniz listelenir. Bir talepte en fazla 10 tedarikçi.",
  },
  {
    ikon: Link2,
    baslik: "Linkleri gönderin",
    aciklama: "Her tedarikçiye kendi linki WhatsApp ya da e-postayla gider; üye olmadan fiyat yazar.",
  },
  {
    ikon: Scale,
    baslik: "Fiyatları karşılaştırın",
    aciklama: "Gelen fiyatlar yan yana. Tedarikçi talebi yazdırabilir, PDF indirebilir.",
  },
  {
    ikon: Trophy,
    baslik: "Kazananı seçin",
    aciklama: "Tek kazanan seçin, onaylı mesajla bilgilendirin; isterseniz diğerlerine teşekkür edin.",
  },
];

function AdimListesi({ adimlar }: { adimlar: Adim[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {adimlar.map((a, i) => (
        <li
          key={a.baslik}
          className="relative rounded-card border border-line bg-surface p-5 shadow-card"
        >
          <div className="flex items-center justify-between">
            <IkonKaresi>
              <a.ikon className="size-5" />
            </IkonKaresi>
            <span className="font-heading text-2xl font-bold text-brand/30">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h4 className="mt-4 text-base font-semibold text-ink">{a.baslik}</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{a.aciklama}</p>
        </li>
      ))}
    </ol>
  );
}

export function NasilCalisir() {
  return (
    <Bolum id="nasil-calisir">
      <Kapsayici>
        <BolumBasligi
          etiket="Nasıl çalışır?"
          baslik="İki iş, tek uygulama"
          aciklama="Müşterinize teklif verin, tedarikçinizden teklif isteyin. Uygulamanın menüsü de bu ikisinden oluşur."
        />

        <div className="mt-14 space-y-16">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Rozet>Teklif Ver</Rozet>
              <h3 className="text-xl font-bold text-ink sm:text-2xl">Müşteriye teklif: hazırla, gönder, takip et</h3>
            </div>
            <AdimListesi adimlar={TEKLIF_VER} />
          </div>

          <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-raised">
            <Image
              src="/gorseller/uygulama-genel-bakis.webp"
              alt="Proformium genel bakış ekranı: takip edilmesi gerekenler, gönderilen teklifler ve son hareketler"
              width={1600}
              height={756}
              sizes="(min-width: 1240px) 1240px, 100vw"
              className="block h-auto w-full"
            />
          </div>

          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Rozet>Teklif İste</Rozet>
              <h3 className="text-xl font-bold text-ink sm:text-2xl">Tedarikçiden fiyat: iste, karşılaştır, seç</h3>
            </div>
            <AdimListesi adimlar={TEKLIF_ISTE} />
          </div>
        </div>
      </Kapsayici>
    </Bolum>
  );
}
