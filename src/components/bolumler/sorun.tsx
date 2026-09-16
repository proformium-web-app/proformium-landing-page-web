import { Check, X } from "lucide-react";
import { Bolum, BolumBasligi, Kapsayici } from "@/components/ui/parcalar";

const SATIRLAR = [
  {
    baslik: "Unutulan takip",
    aciklama: "Teklif gider, müşteri \"düşüneyim\" der, araya işler girer, takip unutulur.",
    eski: "Müşteri başkasından alır",
    yeni: "Takip zamanı gelince hatırlatır, tek tıkla \"takip ettim\" dersiniz",
  },
  {
    baslik: "Baktı mı, bakmadı mı?",
    aciklama: "WhatsApp'a atılan PDF sessizdir. Müşteri açtı mı, ne zaman açtı, bilemezsiniz.",
    eski: "Karanlıkta tahmin",
    yeni: "Müşteri linki açınca teklif \"Görüntülendi\" olur, kaç kez ve ne zaman açıldığı görünür",
  },
  {
    baslik: "Revize karmaşası",
    aciklama: "Fiyat değişir, yeni PDF gider, müşteride eski ve yeni dosya birbirine karışır.",
    eski: "Hangisi son hali?",
    yeni: "Link aynı kalır, her zaman son revizyonu gösterir; geçmiş saklanır",
  },
  {
    baslik: "Tedarikçiden fiyat toplamak",
    aciklama: "Beş tedarikçiyi tek tek arayıp fiyatları Excel'e yazmak saatler alır.",
    eski: "Telefon, not, tablo",
    yeni: "Kalemleri yazın, linkler gitsin, fiyatlar yan yana gelsin, kazananı seçin",
  },
];

export function Sorun() {
  return (
    <Bolum id="neden" zemin="surface">
      <Kapsayici>
        <BolumBasligi
          etiket="Neden Proformium?"
          baslik={
            <>
              Sorun PDF hazırlayamamak değil.{" "}
              <span className="text-brand">&quot;Düşüneyim&quot; diyen müşteriyi unutmak.</span>
            </>
          }
          aciklama="Teklif gönderen her işletme aynı yerde satış kaybeder: gönderdikten sonra. Proformium o boşluğu kapatır."
        />

        <div className="mt-12 overflow-hidden rounded-panel border border-line">
          <div className="hidden grid-cols-[1.3fr_1fr_1.3fr] gap-6 border-b border-line bg-canvas px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink-muted md:grid">
            <span>Durum</span>
            <span>Bugün nasıl</span>
            <span className="text-brand">Proformium ile</span>
          </div>
          <ul className="divide-y divide-line bg-surface">
            {SATIRLAR.map((s) => (
              <li key={s.baslik} className="grid gap-4 px-5 py-5 md:grid-cols-[1.3fr_1fr_1.3fr] md:gap-6 md:px-6">
                <div>
                  <h3 className="text-base font-semibold text-ink">{s.baslik}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.aciklama}</p>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                    <X className="size-3" strokeWidth={3} />
                  </span>
                  {s.eski}
                </div>
                <div className="flex items-start gap-2.5 text-sm font-medium text-ink">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-ok-soft text-emerald-600">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {s.yeni}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Kapsayici>
    </Bolum>
  );
}
