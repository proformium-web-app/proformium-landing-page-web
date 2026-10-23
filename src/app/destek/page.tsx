import type { Metadata } from "next";
import { EpostaKopyala } from "@/components/ui/eposta-kopyala";
import Link from "next/link";
import { ArrowRight, Download, LifeBuoy, Mail, MessageSquareText, Trash2 } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE, UYGULAMA } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Destek ve iletişim",
  description:
    "Proformium destek: sorun yaşarsanız destek@proformium.com adresine yazın ya da uygulamadaki Destek menüsünden talep açın.",
  alternates: { canonical: "/destek" },
};

const ADIMLAR = [
  {
    ikon: MessageSquareText,
    baslik: "Uygulamanın içinden",
    metin: "Sol menüdeki Destek'e basın, konuyu seçip yazın. Talebinizin durumunu Destek → Taleplerim'den takip edin.",
  },
  {
    ikon: Download,
    baslik: "Verilerinizi indirmek",
    metin: "Ayarlar'dan tüm müşteri, ürün, teklif ve tedarikçi kayıtlarınızı tek tıkla Excel olarak indirebilirsiniz.",
  },
  {
    ikon: Trash2,
    baslik: "Hesabı silmek",
    metin: "Hesabınızı ve tüm verinizi Ayarlar'dan kendiniz silebilir ya da bize yazarak isteyebilirsiniz.",
  },
];

/** Destek sayfası (Adem, 22.10.2026): son kullanıcının göreceği açık, tıklanabilir destek e-postası. */
export default function DestekSayfasi() {
  return (
    <>
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Ana sayfa", url: SITE.url },
          { ad: "Destek", url: `${SITE.url}/destek` },
        ])}
      />
      <Kapsayici className="max-w-4xl py-14 sm:py-20">
        <div className="text-center">
          <BolumEtiketi isaret>Destek</BolumEtiketi>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Bir sorun mu yaşıyorsunuz?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Bize e-postayla yazın. Kurulum, teklif, paket, ödeme ya da hesap: hangi konu olursa olsun buradayız.
          </p>
        </div>

        <EpostaKopyala
          className="group mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-3xl border-2 border-primary bg-white px-6 py-8 text-center shadow-glow transition-transform hover:-translate-y-0.5 sm:flex-row sm:gap-5 sm:text-left"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <Mail className="size-7" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-slate-500">Destek e-postası</span>
            <span className="block break-all font-display text-2xl font-bold text-primary group-hover:underline sm:text-3xl">
              {SITE.destekEposta}
            </span>
          </span>
          <ArrowRight className="hidden size-6 text-primary sm:block" />
        </EpostaKopyala>

        <p className="mt-4 text-center text-sm text-slate-500">
          Yazarken işletme adınızı ve sorunu kısaca anlatın; ekran görüntüsü eklerseniz daha hızlı çözeriz.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {ADIMLAR.map((a) => (
            <li key={a.baslik} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <a.ikon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-bold text-slate-900">{a.baslik}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.metin}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-slate-50 p-8 text-center">
          <LifeBuoy className="size-8 text-primary" />
          <p className="text-base text-slate-600">
            Sık sorulan soruların yanıtları ana sayfada.{" "}
            <Link href="/#sss" className="font-semibold text-primary underline underline-offset-4">
              Sıkça sorulan sorular
            </Link>
          </p>
          <p className="text-sm text-slate-500">
            Uygulamaya giriş:{" "}
            <a href={UYGULAMA.giris} className="font-semibold text-primary hover:underline">
              app.proformium.com
            </a>{" "}
            · English: <Link href="/terms" className="hover:underline">Terms of Service</Link> ·{" "}
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </Kapsayici>
    </>
  );
}
