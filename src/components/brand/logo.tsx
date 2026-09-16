import { cn } from "@/lib/cn";

/**
 * Yatay logo: marka/logo-yatay-proformium.svg (Adem, 16.09.2026) → public/logo-yatay.svg.
 * Sembol + "PROFORMIUM" yazısı tek dosyada; yazı kontura çevrilmiş, yazı tipine bağımlı değil.
 * Değiştirilmez (CLAUDE.md). Oran 350×64.
 */
export function LogoYatay({ className, boyut = "md" }: { className?: string; boyut?: "sm" | "md" }) {
  const yukseklik = boyut === "sm" ? 30 : 36;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statik SVG, optimizasyon gerekmez
    <img
      src="/logo-yatay.svg"
      alt="Proformium"
      width={Math.round((yukseklik * 350) / 64)}
      height={yukseklik}
      className={cn("block h-auto w-auto", className)}
      style={{ height: yukseklik }}
      decoding="async"
    />
  );
}

/** Sadece sembol (marka/logo-sembol.svg → public/logo-sembol.svg). */
export function LogoSembol({ className, boyut = 32 }: { className?: string; boyut?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- statik SVG
    <img src="/logo-sembol.svg" alt="" aria-hidden="true" width={boyut} height={boyut} className={cn("block", className)} />
  );
}
