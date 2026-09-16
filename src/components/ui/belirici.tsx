"use client";

import { useEffect } from "react";

/**
 * Kaydırınca belirme: sayfadaki [data-belir] öğeleri görünür alana girince "belir-goster" sınıfı alır.
 * Tek bir gözlemci, tüm sayfa için. Hareket azaltma tercihinde CSS zaten animasyonu kapatır.
 */
export function Belirici() {
  useEffect(() => {
    const ogeler = document.querySelectorAll<HTMLElement>("[data-belir]");
    if (ogeler.length === 0) return;

    const gozlemci = new IntersectionObserver(
      (girdiler) => {
        for (const g of girdiler) {
          if (g.isIntersecting) {
            g.target.classList.add("belir-goster");
            gozlemci.unobserve(g.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    ogeler.forEach((o) => gozlemci.observe(o));
    return () => gozlemci.disconnect();
  }, []);

  return null;
}
