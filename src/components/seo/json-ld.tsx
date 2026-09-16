/** Yapılandırılmış veri (schema.org) betiği. `<` karakteri kaçırılır; HTML içine güvenle gömülür. */
export function JsonLd({ veri }: { veri: object | object[] }) {
  const metin = JSON.stringify(veri).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: metin }} />;
}
