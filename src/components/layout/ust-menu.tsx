"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoYatay } from "@/components/brand/logo";
import { ButonLink } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/parcalar";
import { MENU, UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

/** Sabit üst menü. Telefonda açılır liste. */
export function UstMenu() {
  const [acik, setAcik] = useState(false);

  // Sayfa değişince ya da bağlantıya tıklanınca menüyü kapat; açıkken kaydırmayı kilitle.
  useEffect(() => {
    document.body.style.overflow = acik ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [acik]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <Kapsayici className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label="Proformium ana sayfa" className="shrink-0">
          <LogoYatay />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-brand xl:text-[15px]"
            >
              {m.etiket}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButonLink href={UYGULAMA.giris} gorunum="sade" boyut="sm">
            Giriş yap
          </ButonLink>
          <ButonLink href={UYGULAMA.kayit} boyut="sm">
            Ücretsiz başla
          </ButonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-ink hover:bg-canvas lg:hidden"
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
          "lg:hidden",
          acik ? "block" : "hidden",
          "absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white",
        )}
      >
        <Kapsayici className="flex flex-col gap-1 py-4">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setAcik(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-canvas"
            >
              {m.etiket}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <ButonLink href={UYGULAMA.kayit} boyut="lg">
              Ücretsiz başla
            </ButonLink>
            <ButonLink href={UYGULAMA.giris} gorunum="ikincil" boyut="lg">
              Giriş yap
            </ButonLink>
          </div>
        </Kapsayici>
      </div>
    </header>
  );
}
