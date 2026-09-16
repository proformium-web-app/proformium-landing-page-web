import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ButonLink } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/parcalar";
import { JsonLd } from "@/components/seo/json-ld";
import { FIYAT } from "@/content/fiyatlar";
import { SITE, UYGULAMA } from "@/content/site";
import { tarihBicimle, tumYazilar, yaziGetir } from "@/lib/blog";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";

export function generateStaticParams() {
  return tumYazilar().map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const yazi = yaziGetir(slug);
  if (!yazi) return {};
  return {
    title: yazi.baslik,
    description: yazi.aciklama,
    alternates: { canonical: `/blog/${yazi.slug}` },
    openGraph: {
      type: "article",
      title: yazi.baslik,
      description: yazi.aciklama,
      url: `${SITE.url}/blog/${yazi.slug}`,
      publishedTime: yazi.tarih,
      images: yazi.gorsel ? [{ url: yazi.gorsel, alt: yazi.gorselAlt ?? yazi.baslik }] : undefined,
    },
  };
}

export default async function BlogYazisi({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const yazi = yaziGetir(slug);
  if (!yazi) notFound();

  const adres = `${SITE.url}/blog/${yazi.slug}`;

  return (
    <>
      <JsonLd
        veri={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: yazi.baslik,
            description: yazi.aciklama,
            datePublished: yazi.tarih,
            dateModified: yazi.tarih,
            inLanguage: "tr",
            mainEntityOfPage: adres,
            image: yazi.gorsel ? `${SITE.url}${yazi.gorsel}` : undefined,
            author: { "@type": "Organization", name: yazi.yazar, url: SITE.url },
            publisher: organizationJsonLd(),
          },
          breadcrumbJsonLd([
            { ad: "Ana sayfa", url: SITE.url },
            { ad: "Blog", url: `${SITE.url}/blog` },
            { ad: yazi.baslik, url: adres },
          ]),
        ]}
      />

      <article className="py-12 sm:py-16">
        <Kapsayici className="max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-brand">
            <ArrowLeft className="size-4" /> Blog
          </Link>
          <header className="mt-6">
            <p className="text-sm text-ink-muted">
              <time dateTime={yazi.tarih}>{tarihBicimle(yazi.tarih)}</time> · {yazi.okumaDakika} dk okuma ·{" "}
              {yazi.yazar}
            </p>
            <h1 className="mt-3 text-[32px] font-extrabold leading-[1.15] text-ink sm:text-[42px]">{yazi.baslik}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{yazi.aciklama}</p>
          </header>

          {yazi.gorsel && (
            <Image
              src={yazi.gorsel}
              alt={yazi.gorselAlt ?? ""}
              width={1400}
              height={788}
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="mt-8 aspect-[16/9] w-full rounded-panel border border-line object-cover"
            />
          )}

          <div className="yazi-govde mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{yazi.icerik}</ReactMarkdown>
          </div>

          <aside className="mt-14 rounded-panel border border-line-brand bg-brand-faint p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-ink">Teklifi gönderip beklemeyin</h2>
            <p className="mt-2 text-base text-ink-soft">
              Proformium ile teklifi WhatsApp&apos;tan gönderin, müşteri açınca görün, takibi unutmayın.{" "}
              {FIYAT.denemeGun} gün ücretsiz, kredi kartı gerekmez.
            </p>
            <ButonLink href={UYGULAMA.kayit} className="mt-6">
              Ücretsiz başla <ArrowRight className="size-4" />
            </ButonLink>
          </aside>
        </Kapsayici>
      </article>
    </>
  );
}
