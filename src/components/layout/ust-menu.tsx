"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CircleHelp,
  LayoutGrid,
  Lightbulb,
  Menu,
  Rss,
  Store,
  Tag,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LogoYatay } from "@/components/brand/logo";
import { Kapsayici } from "@/components/ui/parcalar";
import { MENU, UYGULAMA } from "@/content/site";
import { cn } from "@/lib/cn";

/** Menü öğelerinin ikonları (href'e göre). */
const IKONLAR: Record<string, LucideIcon> = {
  "/#neden": Lightbulb,
  "/#nasil-calisir": Zap,
  "/#ozellikler": LayoutGrid,
  "/#sektorler": Store,
  "/#fiyatlar": Tag,
  "/blog": Rss,
  "/#sss": CircleHelp,
};

/** Menü bağlantısı: hover'da alttan kayan çizgi, aktifken sabit çizgi (shadcn NavigationMenu örneği). */
const baglantiSinifi =
  "group relative inline-flex h-9 w-max items-center gap-2 px-0.5 py-2 text-sm font-semibold text-slate-600 transition-colors " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 " +
  "hover:text-primary hover:before:scale-x-100 focus-visible:text-primary focus-visible:before:scale-x-100 " +
  "data-[aktif=true]:text-slate-900 data-[aktif=true]:before:scale-x-100";

/** Ana sayfada kaydırdıkça görünen bölümü izler; menüde aktif öğeyi belirler. */
function useAktifBolum(anaSayfada: boolean) {
  const [aktif, setAktif] = useState<string | null>(null);

  useEffect(() => {
    if (!anaSayfada) return;
    const kimlikler = MENU.map((m) => m.href.split("#")[1]).filter(Boolean);
    const bolumler = kimlikler
      .map((id) => document.getElementById(id))
      .filter((b): b is HTMLElement => b !== null);
    if (bolumler.length === 0) return;

    const gozlemci = new IntersectionObserver(
      (girdiler) => {
        // Görünür alanın üst yarısına en yakın bölüm aktif olsun
        const gorunen = girdiler.filter((g) => g.isIntersecting);
        if (gorunen.length > 0) setAktif(gorunen[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    bolumler.forEach((b) => gozlemci.observe(b));

    const enUstte = () => {
      if (window.scrollY < 200) setAktif(null);
    };
    window.addEventListener("scroll", enUstte, { passive: true });
    return () => {
      gozlemci.disconnect();
      window.removeEventListener("scroll", enUstte);
    };
  }, [anaSayfada]);

  return aktif;
}

export function UstMenu() {
  const [acik, setAcik] = useState(false);
  const yol = usePathname();
  const anaSayfada = yol === "/";
  const aktifBolum = useAktifBolum(anaSayfada);

  const aktifMi = (href: string) => {
    if (href === "/blog") return yol.startsWith("/blog");
    return anaSayfada && aktifBolum !== null && href === `/#${aktifBolum}`;
  };

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

        <nav aria-label="Ana menü" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {MENU.map((m) => {
            const Ikon = IKONLAR[m.href];
            return (
              <Link
                key={m.href}
                href={m.href}
                data-aktif={aktifMi(m.href)}
                aria-current={aktifMi(m.href) ? "true" : undefined}
                className={cn(baglantiSinifi, "whitespace-nowrap")}
              >
                {Ikon && <Ikon className="hidden size-4 shrink-0 text-slate-400 transition-colors group-hover:text-primary group-data-[aktif=true]:text-primary xl:inline" />}
                {m.etiket}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href={UYGULAMA.giris}
            className="whitespace-nowrap px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:text-primary"
          >
            Giriş yap
          </Link>
          <Link
            href={UYGULAMA.kayit}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary-dark active:scale-[0.98]"
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
          {MENU.map((m) => {
            const Ikon = IKONLAR[m.href];
            return (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setAcik(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-primary",
                  aktifMi(m.href) && "bg-primary-50 text-primary",
                )}
              >
                {Ikon && <Ikon className="size-5 text-slate-400" />}
                {m.etiket}
              </Link>
            );
          })}
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
