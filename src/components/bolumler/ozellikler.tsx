import Image from "next/image";
import { BadgeCheck, BarChart3, BellRing, Clock, History, MessageCircle, PenLine, Smartphone, Sparkles, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { IkonKaresi, Kapsayici } from "@/components/ui/parcalar";

type Ozellik = { ikon: LucideIcon; ton: "marka" | "ok" | "amber" | "rose" | "mavi" | "cyan" | "mor"; baslik: string; aciklama: string };

/** SITE_BAGLAMI.md bölüm 4'te canlıda çalışan özellikler; başkası yazılmaz. */
const ONE_CIKANLAR: Ozellik[] = [
  { ikon: Clock, ton: "marka", baslik: "Zaman damgalı görüntülenme takibi", aciklama: "Müşteriniz teklif linkine tıkladığı an teklif \"Görüntülendi\" olur. Ne zaman açtığını, kaç kez incelediğini ve en son ne zaman baktığını uygulamada görün." },
  { ikon: MessageCircle, ton: "ok", baslik: "Tek tıkla WhatsApp paylaşımı", aciklama: "Ayrı ayrı dosya kaydetme derdi olmadan, hazır mesaj ve müşteriye özel linkle tek dokunuşla WhatsApp'tan paylaşın. E-posta ve PDF de bir tık." },
  { ikon: Sparkles, ton: "amber", baslik: "Müşteri ve ürün hafızası", aciklama: "Kalem adını yazmaya başlar başlamaz fiyatı ve birimi önerilir. Müşteriyi listeden arayıp seçin, yenisini o an ekleyin." },
  { ikon: PenLine, ton: "rose", baslik: "Dijital kaşe & parmakla imza", aciklama: "Logonuzu ve kaşenizi yükleyin, telefon ekranına parmağınızla imza atın; saniyeler içinde resmi görünümlü, güven veren teklif belgesi." },
  { ikon: History, ton: "mavi", baslik: "Kusursuz revizyon ve sürüm takibi", aciklama: "Rev. 1, Rev. 2 geçmişi korunur. Müşterideki link her zaman en son hali gösterir; müşteri sayfadan revize isteyebilir." },
];

const DIGERLERI: Ozellik[] = [
  { ikon: BellRing, ton: "marka", baslik: "Takip hatırlatması", aciklama: "Takip zamanı gelince hatırlatılır; \"takip ettim\", \"3 gün ertele\", \"kazanıldı\" tek tıkla." },
  { ikon: Upload, ton: "cyan", baslik: "Excel'den toplu yükleme", aciklama: "Müşteri ve ürün/hizmet listenizi hazır şablonla bir kerede içeri alın." },
  { ikon: BarChart3, ton: "mor", baslik: "Raporlar", aciklama: "Onaylanan, reddedilen, bekleyen teklifler; dönüşüm oranı; en çok satış yapılan müşteriler." },
  { ikon: Smartphone, ton: "ok", baslik: "Telefonda tam çalışır", aciklama: "İndirilecek uygulama yok. Tarayıcıdan girin; hazırlama, gönderme, imza ve takip telefonda aynı." },
];

export function Ozellikler() {
  return (
    <section id="ozellikler" className="border-y border-slate-200/80 bg-white py-20">
      <Kapsayici>
        <div data-belir className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <BolumEtiketi isaret>Özellikler</BolumEtiketi>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            KOBİ&apos;lerin Proformium&apos;u <span className="text-gradient">tercih etme nedenleri</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Masa başında saatler kaybetmeyin; sahadayken cep telefonunuzdan teklifi hazırlayın, gönderin, takip edin.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="relative flex items-center justify-center lg:col-span-6" data-belir>
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/10 via-rose-100/50 to-transparent blur-2xl" />
            <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-all duration-500 hover:shadow-glow">
              <Image
                src="/gorseller/teklif-belgeleri.webp"
                alt="Proformium ile hazırlanmış, logolu, kaşeli ve imzalı üç fiyat teklifi belgesi"
                width={1200}
                height={896}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BadgeCheck className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Resmi &amp; kurumsal görünüm</h4>
                    <p className="text-sm text-slate-500">Logo, kaşe ve imzalı teklif belgesi</p>
                  </div>
                </div>
                <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600 sm:inline-block">
                  Anında hazır
                </span>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-6 lg:col-span-6">
            {ONE_CIKANLAR.map((o, i) => (
              <div
                key={o.baslik}
                data-belir
                data-gecikme={String(Math.min(i, 4))}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-background-light p-5 transition-all hover:border-primary/40 hover:bg-white sm:gap-5 sm:p-6"
              >
                <IkonKaresi ton={o.ton}>
                  <o.ikon className="size-6" />
                </IkonKaresi>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">{o.baslik}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">{o.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Diğer özellikler: tek satır şerit (Adem seçimi B, 16.09.2026) */}
        <div
          data-belir
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-slate-200/80 bg-background-light px-5 py-5 sm:flex-row sm:justify-center sm:gap-3 sm:px-8"
        >
          <span className="text-sm font-bold text-slate-900">Ayrıca</span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {DIGERLERI.map((o) => (
              <span
                key={o.baslik}
                title={o.aciklama}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <IkonKaresi ton={o.ton} className="size-7 rounded-lg shadow-none group-hover:scale-100">
                  <o.ikon className="size-4" />
                </IkonKaresi>
                {o.baslik}
              </span>
            ))}
          </div>
        </div>
      </Kapsayici>
    </section>
  );
}
