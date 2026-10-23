"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

const METIN = {
  tr: { kopyalandi: "kopyalandı", aciklama: "E-posta programınıza yapıştırıp bize yazabilirsiniz.", etiket: "E-posta adresini kopyala" },
  en: { kopyalandi: "copied", aciklama: "Paste it into your email app to write to us.", etiket: "Copy email address" },
};

/** Panoya kopyalar; tarayıcı izin vermezse eski yöntemle dener. Başarıyı döndürür. */
async function kopyala(metin: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(metin);
    return true;
  } catch {
    try {
      const alan = document.createElement("textarea");
      alan.value = metin;
      alan.setAttribute("readonly", "");
      alan.style.position = "fixed";
      alan.style.opacity = "0";
      document.body.appendChild(alan);
      alan.select();
      const ok = document.execCommand("copy");
      alan.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/**
 * Destek e-postası (Adem, 23.10.2026): basınca adres panoya kopyalanır ve ekranın altında bildirim çıkar.
 * Kopyalama hiç mümkün değilse e-posta programı açılır.
 */
export function EpostaKopyala({
  eposta = SITE.destekEposta,
  dil = "tr",
  className,
  children,
}: {
  eposta?: string;
  dil?: "tr" | "en";
  className?: string;
  children?: ReactNode;
}) {
  const [bildirim, setBildirim] = useState(false);
  const zamanlayici = useRef<ReturnType<typeof setTimeout> | null>(null);
  const m = METIN[dil];

  useEffect(() => {
    return () => {
      if (zamanlayici.current) clearTimeout(zamanlayici.current);
    };
  }, []);

  async function tikla() {
    const ok = await kopyala(eposta);
    if (!ok) {
      window.location.href = `mailto:${eposta}`;
      return;
    }
    setBildirim(true);
    if (zamanlayici.current) clearTimeout(zamanlayici.current);
    zamanlayici.current = setTimeout(() => setBildirim(false), 3000);
  }

  return (
    <>
      <button
        type="button"
        onClick={tikla}
        title={m.etiket}
        aria-label={`${m.etiket}: ${eposta}`}
        className={cn("cursor-pointer text-left", className)}
      >
        {children ?? eposta}
      </button>
      {/* Bildirim yalnızca tıklamadan sonra (tarayıcıda) çizilir; sunucu çıktısını etkilemez. */}
      {bildirim &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            className="animate-belir pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
          >
            {(
              <div className="flex max-w-md items-start gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-2xl">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                <div className="text-left">
                  <p className="text-sm font-bold">
                    {eposta} {m.kopyalandi}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300">{m.aciklama}</p>
                </div>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
