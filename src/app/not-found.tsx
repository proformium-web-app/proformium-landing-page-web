import { ButonLink } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/parcalar";

export default function BulunamadiSayfasi() {
  return (
    <Kapsayici className="flex flex-col items-center py-24 text-center sm:py-32">
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.
      </p>
      <ButonLink href="/" className="mt-8">
        Ana sayfaya dön
      </ButonLink>
    </Kapsayici>
  );
}
