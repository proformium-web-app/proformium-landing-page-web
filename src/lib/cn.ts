import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind sınıflarını çakışmasız birleştirir. */
export function cn(...girdi: ClassValue[]) {
  return twMerge(clsx(girdi));
}
