import Image from "next/image";
import { Eye, Trophy } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { MockupAkis, MockupTarayiciTelefon, MockupTelefon } from "@/components/bolumler/mockuplar";

type Adim = { no: string; baslik: string; aciklama: string };

const TEKLIF_VER: Adim[] = [
  { no: "01", baslik: "Müşteriyi ve kalemleri seçin", aciklama: "Kayıtlı müşteri ve ürün hafızasından saniyeler içinde teklif içeriğini doldurun; KDV, iskonto ve toplam otomatik." },
  { no: "02", baslik: "WhatsApp ile tek tıkla paylaşın", aciklama: "PDF indirme derdi olmadan, müşteriye özel link tek dokunuşla WhatsApp'tan gitsin. İsterseniz e-posta ya da PDF." },
  { no: "03", baslik: "Açıldığında görün", aciklama: "Müşteri linki açınca teklif \"Görüntülendi\" olur; kaç kez ve ne zaman açıldığı uygulamada görünür." },
  { no: "04", baslik: "Takip edin, satışı kapatın", aciklama: "Takip zamanı gelince hatırlatılır; revize isteklerini yönetin, \"kazanıldı\" deyin." },
];

const TEKLIF_ISTE: Adim[] = [
  { no: "01", baslik: "Kalemleri yazın", aciklama: "Ne istediğinizi listeleyin: ad, miktar, birim, not. Son yanıt tarihini belirleyin." },
  { no: "02", baslik: "Tedarikçilere link gönderin", aciklama: "Sektöre göre tedarikçileri seçin (bir talepte 10'a kadar); her birine kendi linki WhatsApp ya da e-postayla gider." },
  { no: "03", baslik: "Fiyatlar yan yana gelsin", aciklama: "Tedarikçi üye olmadan fiyatını yazar; gelen fiyatlar karşılaştırma tablonuza düşer." },
  { no: "04", baslik: "Kazananı seçin", aciklama: "Tek kazanan seçin, onaylı mesajla bilgilendirin; isterseniz diğerlerine teşekkür edin." },
];

function AdimSutunu({ adimlar, saga }: { adimlar: Adim[]; saga?: boolean }) {
  return (
    <div className={`flex flex-col gap-10 text-left lg:col-span-4 lg:gap-14 ${saga ? "lg:text-right" : ""}`}>
      {adimlar.map((a, i) => (
        <div key={a.no} data-belir data-gecikme={String(i + 1)}>
          <div className="mb-2 font-display text-4xl font-bold tracking-tight text-primary/80 lg:text-5xl">{a.no}</div>
          <h3 className="mb-2 text-xl font-bold text-slate-900">{a.baslik}</h3>
          <p className="text-base leading-relaxed text-slate-600">{a.aciklama}</p>
        </div>
      ))}
    </div>
  );
}

export function NasilCalisir() {
  return (
    <section id="nasil-calisir" className="py-24">
      <Kapsayici>
        <div data-belir className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <BolumEtiketi isaret>Nasıl çalışır?</BolumEtiketi>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Teklifi hazırla, gönder, takip et ve <span className="text-primary">satışı kapat</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Karmaşık süreçlere boğulmadan dakikalar içinde profesyonel teklif akışınızı yönetin.
          </p>
        </div>

        {/* Teklif Ver: 01-02 solda, ekran ortada, 03-04 sağda */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <AdimSutunu adimlar={TEKLIF_VER.slice(0, 2)} saga />

          <div className="relative flex items-center justify-center lg:col-span-4" data-belir data-gecikme="2">
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">app.proformium.com</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Canlı</span>
                </div>
                <Image
                  src="/gorseller/uygulama-genel-bakis.webp"
                  alt="Proformium genel bakış ekranı: taslaklar, revize talepleri, gönderilen teklifler"
                  width={1600}
                  height={756}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -top-3 z-10 hidden items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-lg sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                Bildirim düştü
              </div>
              <div className="absolute -bottom-3 -left-3 z-10 hidden items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:flex">
                <Eye className="size-4" />
                Müşteri görüntüledi
              </div>
            </div>
          </div>

          <AdimSutunu adimlar={TEKLIF_VER.slice(2)} />
        </div>

        {/* DENEME: ortadaki görsel için üç öneri; Adem seçince biri ortaya alınacak, diğerleri silinecek */}
        <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white/60 p-6 sm:p-8">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Deneme · ortadaki görsel için öneriler</p>
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <div>
              <p className="mb-6 text-center text-sm font-bold text-slate-500">A · Müşterinin telefonu</p>
              <MockupTelefon />
            </div>
            <div>
              <p className="mb-6 text-center text-sm font-bold text-slate-500">B · Uygulama + WhatsApp</p>
              <MockupTarayiciTelefon />
            </div>
            <div>
              <p className="mb-6 text-center text-sm font-bold text-slate-500">C · Teklifin yaşam akışı</p>
              <MockupAkis />
            </div>
          </div>
        </div>

        {/* Teklif İste */}
        <div data-belir className="mx-auto mb-14 mt-24 max-w-3xl space-y-3 text-center">
          <BolumEtiketi isaret>İkinci güç · Teklif İste</BolumEtiketi>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tedarikçilerden fiyat toplayın, <span className="text-gradient">yan yana karşılaştırın</span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Beş tedarikçiyi tek tek aramak yerine bir liste yazın, linkler gitsin, fiyatlar tek ekranda toplansın.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <AdimSutunu adimlar={TEKLIF_ISTE.slice(0, 2)} saga />

          <div className="relative flex items-center justify-center lg:col-span-4" data-belir data-gecikme="2">
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xl transition-transform duration-300 hover:scale-[1.01] sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Teklif talebi</span>
                  <h4 className="font-mono text-sm font-bold text-slate-900 sm:text-base">TLP-004 · Isıcam paketi</h4>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" /> 3 / 5 yanıt
                </span>
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { ad: "Cam Sanayi A.Ş.", not: "Bugün 10:12", tutar: "₺16.650", kazanan: true },
                  { ad: "Profil Toptan", not: "Dün 16:40", tutar: "₺17.200" },
                  { ad: "Doğrama Market", not: "Dün 11:05", tutar: "₺18.900" },
                  { ad: "Yalıtım Cam", not: "Bekleniyor", tutar: "—" },
                ].map((t) => (
                  <div
                    key={t.ad}
                    className={`flex items-center justify-between rounded-xl border p-2.5 ${
                      t.kazanan ? "border-primary/30 bg-primary-50" : "border-slate-200/70 bg-slate-50"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-slate-800">{t.ad}</p>
                      <p className="text-[10px] text-slate-400">{t.not}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {t.kazanan && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                          <Trophy className="size-3" /> Kazanan
                        </span>
                      )}
                      <span className="font-bold tabular-nums text-slate-900">{t.tutar}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-slate-500">Kazanan bilgilendirildi · diğer tedarikçilere teşekkür gönderildi</p>
            </div>
          </div>

          <AdimSutunu adimlar={TEKLIF_ISTE.slice(2)} />
        </div>
      </Kapsayici>
    </section>
  );
}
