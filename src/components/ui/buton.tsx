import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Gorunum = "birincil" | "ikincil" | "sade" | "beyaz";
type Boyut = "sm" | "md" | "lg";

const temel =
  "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold whitespace-nowrap " +
  "transition-[background-color,box-shadow,transform,color] duration-200 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const gorunumler: Record<Gorunum, string> = {
  birincil: "bg-brand text-white shadow-brand hover:bg-brand-strong",
  ikincil: "border border-line bg-surface text-ink hover:border-brand/40 hover:text-brand",
  sade: "text-ink hover:text-brand",
  beyaz: "bg-white text-brand hover:bg-brand-faint",
};

const boyutlar: Record<Boyut, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base sm:h-13 sm:px-7",
};

type Ortak = { gorunum?: Gorunum; boyut?: Boyut; className?: string; children: ReactNode };

/** Bağlantı olarak buton. Dış adresler için otomatik `target` verilmez; ana akış aynı sekmede kalır. */
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
