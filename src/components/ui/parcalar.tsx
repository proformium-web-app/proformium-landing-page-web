import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Sayfa genişliği: Stitch max-w-7xl. */
export function Kapsayici({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

/** Bölüm sarmalayıcı. zemin="surface" Stitch'teki beyaz, çizgili bantlar. */
export function Bolum({
  id,
  className,
  zemin = "canvas",
  children,
}: {
  id?: string;
  className?: string;
  zemin?: "canvas" | "surface" | "soft";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-24",
        zemin === "surface" && "border-y border-slate-200/80 bg-white",
        zemin === "soft" && "border-y border-slate-200/80 bg-slate-50",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Bölüm başlığı: küçük üst etiket, Space Grotesk başlık, açıklama. */
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
    <div
      data-belir
      className={cn("max-w-3xl space-y-3", hizala === "orta" && "mx-auto text-center", className)}
    >
      {etiket && <span className="text-xs font-bold uppercase tracking-widest text-primary">{etiket}</span>}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{baslik}</h2>
      {aciklama && <p className="text-base text-slate-600 sm:text-lg">{aciklama}</p>}
    </div>
  );
}

/** Stitch "announcement chip": gül zemin, bordo yazı, yanıp sönen nokta. */
export function Rozet({
  className,
  ton = "marka",
  nokta = false,
  ...props
}: ComponentProps<"span"> & { ton?: "marka" | "ok" | "notr" | "uyari" | "mavi" | "amber" | "cyan" | "mor"; nokta?: boolean }) {
  const tonlar = {
    marka: "bg-primary-50 border border-primary/20 text-primary",
    ok: "bg-emerald-50 border border-emerald-200 text-emerald-700",
    notr: "bg-slate-100 border border-slate-200 text-slate-600",
    uyari: "bg-amber-50 border border-amber-200 text-amber-600",
    mavi: "bg-blue-50 border border-blue-100 text-blue-600",
    amber: "bg-amber-50 border border-amber-100 text-amber-600",
    cyan: "bg-cyan-50 border border-cyan-100 text-cyan-600",
    mor: "bg-violet-50 border border-violet-100 text-violet-600",
  };
  const noktaRengi = { marka: "bg-primary", ok: "bg-emerald-500", notr: "bg-slate-400", uyari: "bg-amber-500", mavi: "bg-blue-500", amber: "bg-amber-500", cyan: "bg-cyan-500", mor: "bg-violet-500" };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
        tonlar[ton],
        className,
      )}
      {...props}
    >
      {nokta && <span className={cn("h-2 w-2 rounded-full animate-ping", noktaRengi[ton])} />}
      {props.children}
    </span>
  );
}

/** İkon karesi, Stitch özellik kartlarındaki renkli kareler. */
export function IkonKaresi({
  className,
  ton = "marka",
  children,
}: {
  className?: string;
  ton?: "marka" | "ok" | "amber" | "rose" | "mavi" | "cyan" | "mor";
  children: ReactNode;
}) {
  const tonlar = {
    marka: "bg-primary-50 text-primary",
    ok: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-primary",
    mavi: "bg-blue-50 text-blue-600",
    cyan: "bg-cyan-50 text-cyan-600",
    mor: "bg-violet-50 text-violet-600",
  };
  return (
    <span
      className={cn(
        "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:scale-110",
        tonlar[ton],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Kart({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("rounded-2xl border border-slate-200/80 bg-white shadow-card-soft", className)} {...props} />
  );
}
