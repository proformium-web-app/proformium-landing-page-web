import { Hero } from "@/components/bolumler/hero";
import { Sorun } from "@/components/bolumler/sorun";
import { NasilCalisir } from "@/components/bolumler/nasil-calisir";
import { Ozellikler } from "@/components/bolumler/ozellikler";
import { Sektorler } from "@/components/bolumler/sektorler";
import { Guven } from "@/components/bolumler/guven";
import { Fiyatlar } from "@/components/bolumler/fiyatlar";
import { Sss } from "@/components/bolumler/sss";
import { Iletisim, SonCagri } from "@/components/bolumler/iletisim-ve-cagri";
import { JsonLd } from "@/components/seo/json-ld";
import { anaSayfaJsonLd } from "@/lib/json-ld";

export default function AnaSayfa() {
  return (
    <>
      <JsonLd veri={anaSayfaJsonLd()} />
      <Hero />
      <Sorun />
      <NasilCalisir />
      <Ozellikler />
      <Sektorler />
      <Guven />
      <Fiyatlar />
      <Sss />
      <Iletisim />
      <SonCagri />
    </>
  );
}
