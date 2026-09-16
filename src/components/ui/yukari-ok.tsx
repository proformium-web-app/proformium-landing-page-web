"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

/** Sağ altta yuvarlak "yukarı" düğmesi; sayfa 500 px kaydırılınca belirir. */
export function YukariOk() {
  const [gorunur, setGorunur] = useState(false);

  useEffect(() => {
    const kontrol = () => setGorunur(window.scrollY > 500);
    kontrol();
    window.addEventListener("scroll", kontrol, { passive: true });
    return () => window.removeEventListener("scroll", kontrol);
  }, []);

  return (
    <button
      type="button"
      aria-label="Sayfanın başına dön"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-glow",
        gorunur ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" strokeWidth={2.5} />
    </button>
  );
}
