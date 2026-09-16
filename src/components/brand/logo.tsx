import { cn } from "@/lib/cn";

/**
 * Proformium logo sembolü: marka/logo-sembol.svg dosyasının bire bir kopyası (renk #8b1f3c).
 * Değiştirilmez (CLAUDE.md). `renk` verilirse tek renk olarak boyanır (ör. beyaz zemin dışı).
 */
export function LogoSembol({ className, renk = "#8b1f3c" }: { className?: string; renk?: string }) {
  return (
    <svg
      viewBox="40 12 158 195"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={renk}
        d="M 47.488281 168.667969 C 47.445312 157.957031 51.582031 147.875 59.128906 140.277344 C 66.671875 132.679688 76.726562 128.480469 87.441406 128.449219 L 119.253906 128.363281 C 129.453125 128.335938 139.03125 124.339844 146.222656 117.105469 C 153.410156 109.871094 157.355469 100.269531 157.320312 90.074219 C 157.25 69.09375 140.128906 52.03125 119.152344 52.03125 L 46.910156 52.082031 L 46.816406 18.296875 L 118.964844 18.242188 C 158.699219 18.242188 190.976562 50.417969 191.101562 89.960938 C 191.164062 109.191406 183.734375 127.289062 170.179688 140.921875 C 156.625 154.558594 138.570312 162.09375 119.34375 162.148438 L 87.527344 162.234375 C 85.851562 162.234375 84.277344 162.894531 83.09375 164.085938 C 81.914062 165.273438 81.265625 166.855469 81.273438 168.535156 L 81.398438 200.101562 L 47.617188 200.242188 Z M 47.488281 168.667969"
      />
      <g fill="none" stroke={renk} strokeWidth="10" strokeLinecap="round">
        <path transform="matrix(0.7496,0,0,0.7496,47.031147,65.584404)" d="M 4.997594 4.999503 L 91.001804 4.999503" />
        <path transform="matrix(0.7496,0,0,0.7496,46.639988,87.322802)" d="M 4.998307 4.999347 L 91.002517 4.999347" />
        <path transform="matrix(0.7496,0,0,0.7496,46.639988,109.061201)" d="M 4.998307 4.999191 L 62.117317 4.999191" />
      </g>
    </svg>
  );
}

/** Sembol + "PROFORMIUM" yazısı (uygulamadaki gibi: kalın, büyük harf, geniş aralık). */
export function LogoYatay({
  className,
  boyut = "md",
  acikZemin = true,
}: {
  className?: string;
  boyut?: "sm" | "md";
  acikZemin?: boolean;
}) {
  const sembol = boyut === "sm" ? "h-7 w-auto" : "h-8 w-auto";
  const yazi = boyut === "sm" ? "text-[15px]" : "text-[17px]";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoSembol className={sembol} renk={acikZemin ? "#8b1f3c" : "#ffffff"} />
      <span
        className={cn(
          "font-heading font-bold uppercase tracking-[0.16em]",
          yazi,
          acikZemin ? "text-ink" : "text-white",
        )}
      >
        Proformium
      </span>
    </span>
  );
}
