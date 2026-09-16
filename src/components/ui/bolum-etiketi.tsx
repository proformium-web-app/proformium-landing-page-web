import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Logodaki "P" içindeki üç çizgi: bölüm etiketlerinin önünde küçük marka işareti. */
export function CizgiIsareti({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 14" aria-hidden="true" className={cn("h-3.5 w-6 shrink-0", className)}>
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M2 2h20" />
        <path d="M2 7h20" />
        <path d="M2 12h13" />
      </g>
    </svg>
  );
}

/**
 * Bölüm etiketi: başlığın üstündeki küçük bordo, büyük harfli yazı. Tüm bölümlerde aynı görünüm
 * (kutu, çerçeve, nokta yok). `isaret` verilirse önüne logodaki üç çizgi gelir.
 */
export function BolumEtiketi({
  children,
  isaret = false,
  hizala = "orta",
  className,
}: {
  children: ReactNode;
  isaret?: boolean;
  hizala?: "orta" | "sol";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.16em] text-primary",
        hizala === "orta" && "justify-center",
        className,
      )}
    >
      {isaret && <CizgiIsareti />}
      <span>{children}</span>
    </p>
  );
}
