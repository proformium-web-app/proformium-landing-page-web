import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Kapsayici } from "@/components/ui/parcalar";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/content/site";
import { tarihBicimle, tumYazilar } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Blog: teklif hazırlama, takip ve satış",
  description:
    "Fiyat teklifi nasıl hazırlanır, WhatsApp'tan teklif gönderirken nelere dikkat edilir, teklif sonrası müşteri takibi nasıl yapılır? Küçük işletmeler için pratik yazılar.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Proformium Blog", url: `${SITE.url}/blog` },
};

export default function BlogListesi() {
  const yazilar = tumYazilar();

  return (
    <>
      <JsonLd
        veri={breadcrumbJsonLd([
          { ad: "Ana sayfa", url: SITE.url },
          { ad: "Blog", url: `${SITE.url}/blog` },
        ])}
      />
      <Kapsayici className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">Blog</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Teklif, takip ve satış üzerine
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Küçük işletmeler için pratik yazılar: teklif nasıl hazırlanır, nasıl takip edilir, tedarikçiden fiyat
            nasıl toplanır.
          </p>
        </div>

        {yazilar.length === 0 ? (
          <p className="mt-12 text-ink-muted">Yakında.</p>
        ) : (
          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {yazilar.map((y) => (
              <li key={y.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-card transition-shadow hover:shadow-raised">
                  <Link href={`/blog/${y.slug}`} className="block">
                    {y.gorsel ? (
                      <Image
                        src={y.gorsel}
                        alt={y.gorselAlt ?? ""}
                        width={1400}
                        height={788}
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    ) : (
                      <div className="aspect-[16/9] w-full bg-brand-soft" />
                    )}
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-ink-muted">
                      <time dateTime={y.tarih}>{tarihBicimle(y.tarih)}</time> · {y.okumaDakika} dk okuma
                    </p>
                    <h2 className="mt-2 text-xl font-bold leading-snug text-ink">
                      <Link href={`/blog/${y.slug}`} className="hover:text-brand">
                        {y.baslik}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{y.aciklama}</p>
                    <Link
                      href={`/blog/${y.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                    >
                      Yazıyı oku <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Kapsayici>
    </>
  );
}
