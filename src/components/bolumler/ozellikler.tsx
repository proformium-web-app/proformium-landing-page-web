import {
  BarChart3,
  BellRing,
  Eye,
  FileDown,
  History,
  MessageCircle,
  PenLine,
  Smartphone,
  Sparkles,
  Upload,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bolum, BolumBasligi, IkonKaresi, Kapsayici } from "@/components/ui/parcalar";

type Ozellik = { ikon: LucideIcon; baslik: string; aciklama: string };

/** SITE_BAGLAMI.md bölüm 4'te canlıda çalışan özellikler; başkası yazılmaz. */
const OZELLIKLER: Ozellik[] = [
  {
    ikon: Eye,
    baslik: "Görüntülenme takibi",
    aciklama:
      "Müşteri linki açınca teklif \"Görüntülendi\" olur. Kaç kez, ne zaman açıldığı görünür. WhatsApp önizlemesi ve kendi açışınız sayılmaz.",
  },
  {
    ikon: MessageCircle,
    baslik: "WhatsApp, e-posta, PDF",
    aciklama:
      "Tek tıkla WhatsApp'ınız açılır, link hazır mesajla gider. İsterseniz e-posta ya da PDF indirme.",
  },
  {
    ikon: BellRing,
    baslik: "Takip hatırlatması",
    aciklama:
      "Gönderilen teklif için takip zamanı gelince hatırlatılır. \"Takip ettim\", \"3 gün ertele\", \"kazanıldı\", \"kaybedildi\" tek tıkla.",
  },
  {
    ikon: Sparkles,
    baslik: "Müşteri ve ürün hafızası",
    aciklama:
      "Ürün adını yazmaya başlayın, fiyatı ve birimiyle önerilsin. Müşteriyi listeden arayıp seçin, yenisini o an ekleyin.",
  },
  {
    ikon: PenLine,
    baslik: "Logo, kaşe ve imza",
    aciklama:
      "Teklif belgesinde logonuz, kaşeniz ve imzanız. İmzayı telefon ekranına parmağınızla atabilirsiniz.",
  },
  {
    ikon: History,
    baslik: "Revizyon ve geçmiş",
    aciklama:
      "Gönderilen teklif revize edilince Rev. 1, Rev. 2 olur. Eski haller saklanır, müşterinin linki hep son hali gösterir. Müşteri sayfadan revize isteyebilir.",
  },
  {
    ikon: Upload,
    baslik: "Excel'den toplu yükleme",
    aciklama: "Müşteri ve ürün/hizmet listenizi hazır Excel şablonuyla bir kerede içeri alın.",
  },
  {
    ikon: BarChart3,
    baslik: "Raporlar",
    aciklama:
      "Kaç teklif onaylandı, reddedildi, bekliyor; dönüşüm oranı; en çok satış yapılan müşteriler.",
  },
  {
    ikon: Smartphone,
    baslik: "Telefonda tam çalışır",
    aciklama:
      "İndirilecek uygulama yok. Tarayıcıdan girin; teklif hazırlama, gönderme, imza ve takip telefonda da aynı.",
  },
  {
    ikon: FileDown,
    baslik: "Otomatik taslak ve numara",
    aciklama:
      "Yarım kalan teklif kendiliğinden taslağa kaydedilir. Teklif numarası işletmenize özel önekle otomatik verilir.",
  },
];

export function Ozellikler() {
  return (
    <Bolum id="ozellikler" zemin="surface">
      <Kapsayici>
        <BolumBasligi
          etiket="Özellikler"
          baslik="Sade, WhatsApp dostu, telefonda kolay"
          aciklama="CRM değil, muhasebe değil, ERP değil. Sadece teklif ve takip; olması gereken kadar."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OZELLIKLER.map((o) => (
            <li
              key={o.baslik}
              className="flex gap-4 rounded-card border border-line bg-canvas p-5 transition-colors hover:border-line-brand hover:bg-surface"
            >
              <IkonKaresi>
                <o.ikon className="size-5" />
              </IkonKaresi>
              <div>
                <h3 className="text-base font-semibold text-ink">{o.baslik}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{o.aciklama}</p>
              </div>
            </li>
          ))}
        </ul>
      </Kapsayici>
    </Bolum>
  );
}
