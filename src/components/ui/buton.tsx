import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Gorunum = "birincil" | "ikincil" | "sade" | "beyaz";
type Boyut = "sm" | "md" | "lg";

// Stitch buton dili: rounded-xl, kalın yazı, hover'da hafif büyüme, basınca küçülme
const temel =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold whitespace-nowrap " +
  "transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] " +
  "disabled:pointer-events-none disabled:opacity-50";

const gorunumler: Record<Gorunum, string> = {
  birincil: "bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark",
  ikincil: "border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50",
  sade: "text-slate-700 font-bold hover:text-primary hover:scale-100",
  beyaz: "bg-white text-primary shadow-xl hover:bg-slate-100",
};

const boyutlar: Record<Boyut, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

type Ortak = { gorunum?: Gorunum; boyut?: Boyut; className?: string; children: ReactNode };

export function ButonLink({
  gorunum = "birincil",
  boyut = "md",
  className,
  children,
  ...props
}: Ortak & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(temel, gorunumler[gorunum], boyutlar[boyut], className)} {...props}>
      {children}
    </Link>
  );
}

export function Buton({
  gorunum = "birincil",
  boyut = "md",
  className,
  children,
  type = "button",
  ...props
}: Ortak & ComponentProps<"button">) {
  return (
    <button type={type} className={cn(temel, gorunumler[gorunum], boyutlar[boyut], className)} {...props}>
      {children}
    </button>
  );
}
