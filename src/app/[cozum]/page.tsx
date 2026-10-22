import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronDown, Download } from "lucide-react";
import { BolumEtiketi } from "@/components/ui/bolum-etiketi";
import { Kapsayici } from "@/components/ui/parcalar";
import { JsonLd } from "@/components/seo/json-ld";
import { COZUMLER, cozumGetir } from "@/content/cozumler";
import { FIYAT, VERI_INDIRME_NOTU } from "@/content/fiyatlar";
import { SITE, UYGULAMA } from "@/content/site";
import { breadcrumbJsonLd, organizationJsonLd } from "@/lib/json-ld";

/** Anahtar kelime sayfaları: /e-proforma, /e-teklif, … (src/content/cozumler.ts). Sadece listedekiler üretilir. */
export const dynamicParams = false;

export function generateStaticParams() {
  return COZUMLER.map((c) => ({ cozum: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[cozum]">): Promise<Metadata> {
  const { cozum } = await params;
  const c = cozumGetir(cozum);
  if (!c) return {};
  return {
    title: c.metaBaslik,
    description: c.metaAciklama,
    alternates: { canonical: `/${c.slug}` },
    openGraph: { type: "article", title: c.metaBaslik, description: c.metaAciklama, url: `${SITE.url}/${c.slug}` },
  };
}

export default async function CozumSayfasi({ params }: PageProps<"/[cozum]">) {
  const { cozum } = await params;
  const c = cozumGetir(cozum);
  if (!c) notFound();

  const adres = `${SITE.url}/${c.slug}`;
  const ilgili = c.ilgili.map((s) => cozumGetir(s)).filter((x) => x !== undefined);

  return (
    <>
      <JsonLd
        veri={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: c.h1,
            description: c.metaAciklama,
            url: adres,
            inLanguage: "tr",
            about: { "@type": "SoftwareApplication", name: SITE.ad, applicationCategory: "BusinessApplication", operatingSystem: "Web" },
            publisher: organizationJsonLd(),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.sss.map((s) => ({
              "@type": "Question",
              name: s.soru,
              acceptedAnswer: { "@type": "Answer", text: s.cevap },
            })),
          },
          breadcrumbJsonLd([
            { ad: "Ana sayfa", url: SITE.url },
            { ad: c.kisaAd, url: adres },
          ]),
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
        </div>
        <Kapsayici className="relative max-w-4xl py-14 sm:py-20">
          <nav aria-label="Konum" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary">Ana sayfa</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-slate-700">{c.kisaAd}</span>
          </nav>
          <BolumEtiketi isaret hizala="sol">{c.etiket}</BolumEtiketi>
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">{c.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{c.giris}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={UYGULAMA.kayit}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-bold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-primary-dark"
            >
              Ücretsiz başla <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#nasil-calisir"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Nasıl çalışır?
            </Link>
          </div>
        </Kapsayici>
      </section>

      <Kapsayici className="max-w-4xl py-14 sm:py-16">
        <div className="space-y-12">
          {c.bolumler.map((b) => (
            <section key={b.baslik}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{b.baslik}</h2>
              {b.paragraflar?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[17px]">
                  {p}
                </p>
              ))}
              {b.maddeler && (
                <ul className="mt-5 space-y-3">
                  {b.maddeler.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-base text-slate-700 sm:text-[17px]">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Sık sorulan sorular</h2>
          <div className="mt-6 space-y-3">
            {c.sss.map((s) => (
              <details key={s.soru} className="group rounded-2xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {s.soru}
                  <ChevronDown className="size-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-base leading-relaxed text-slate-600">{s.cevap}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="mt-16 rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-[#4a0d1e] p-8 text-white shadow-glow sm:p-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Proformium&apos;u ücretsiz deneyin</h2>
          <p className="mt-3 text-base text-rose-100">
            Free paketle hemen başlayın; Pro&apos;yu {FIYAT.denemeGun} gün ücretsiz deneyin, kredi kartı gerekmez.
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-rose-200">
            <Download className="mt-0.5 size-4 shrink-0" />
            {VERI_INDIRME_NOTU}
          </p>
          <Link
            href={UYGULAMA.kayit}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-primary hover:bg-slate-100"
          >
            Ücretsiz başla <ArrowRight className="size-4" />
          </Link>
        </aside>

        {ilgili.length > 0 && (
          <nav aria-label="İlgili sayfalar" className="mt-14">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">İlgili</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {ilgili.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/${i.slug}`}
                    className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 font-semibold text-slate-800 transition-all hover:border-primary/40 hover:text-primary"
                  >
                    {i.kisaAd}
                    <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Kapsayici>
    </>
  );
}
