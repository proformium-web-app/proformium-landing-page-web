import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Sayfa genişliği: 1240px, telefonda 16px kenar boşluğu. */
export function Kapsayici({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

/** Bölüm sarmalayıcı: tutarlı dikey boşluk ve isteğe bağlı zemin. */
export function Bolum({
  id,
  className,
  zemin = "canvas",
  children,
}: {
  id?: string;
  className?: string;
  zemin?: "canvas" | "surface";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        zemin === "surface" && "border-y border-line bg-surface",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Bölüm başlığı: küçük üst etiket, başlık, açıklama. */
export function BolumBasligi({
  etiket,
  baslik,
  aciklama,
  hizala = "orta",
  className,
}: {
  etiket?: string;
  baslik: ReactNode;
  aciklama?: ReactNode;
  hizala?: "orta" | "sol";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", hizala === "orta" && "mx-auto text-center", className)}>
      {etiket && (
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand">{etiket}</p>
      )}
      <h2 className="text-[28px] font-bold leading-tight text-ink sm:text-4xl">{baslik}</h2>
      {aciklama && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{aciklama}</p>}
    </div>
  );
}

/** Kart: beyaz zemin, ince çizgi, fısıltı gibi gölge. */
export function Kart({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("rounded-card border border-line bg-surface shadow-card", className)} {...props} />
  );
}

/** Küçük rozet (pill). */
export function Rozet({
  className,
  ton = "marka",
  ...props
}: ComponentProps<"span"> & { ton?: "marka" | "ok" | "notr" | "uyari" }) {
  const tonlar = {
    marka: "bg-brand-soft text-brand",
    ok: "bg-ok-soft text-emerald-700",
    notr: "bg-canvas text-ink-muted border border-line",
    uyari: "bg-warn-soft text-amber-700",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tonlar[ton],
        className,
      )}
      {...props}
    />
  );
}

/** İkon karesi: gül zemin, bordo ikon. */
export function IkonKaresi({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
