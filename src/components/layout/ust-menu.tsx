"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
import { MENU, UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

/** Sabit, buzlu cam üst menü (Stitch). Telefonda açılır liste. */
export function UstMenu() {
  const [acik, setAcik] = useState(false);

  useEffect(() => {
    document.body.style.overflow = acik ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [acik]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <Kapsayici className="flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Proformium ana sayfa" className="shrink-0">
          <LogoYatay />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex xl:gap-8">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} className="whitespace-nowrap transition-colors hover:text-primary">
              {m.etiket}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={UYGULAMA.giris}
            className="px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:text-primary"
          >
            Giriş yap
          </Link>
          <Link
            href={UYGULAMA.kayit}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary-dark active:scale-[0.98]"
          >
            Ücretsiz dene
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
          aria-expanded={acik}
          aria-controls="mobil-menu"
          aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setAcik((v) => !v)}
        >
          {acik ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Kapsayici>

      <div
        id="mobil-menu"
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden",
          acik ? "block" : "hidden",
        )}
      >
        <Kapsayici className="flex flex-col gap-1 py-4">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setAcik(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-primary"
            >
              {m.etiket}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-4">
            <Link
              href={UYGULAMA.kayit}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-glow"
            >
              Ücretsiz dene
            </Link>
            <Link
              href={UYGULAMA.giris}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700"
            >
              Giriş yap
            </Link>
          </div>
        </Kapsayici>
      </div>
    </header>
  );
}
