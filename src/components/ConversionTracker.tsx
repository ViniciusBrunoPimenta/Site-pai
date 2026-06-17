"use client";

import { useEffect } from "react";
import { reportConversion } from "@/lib/gtag";

/**
 * Registra uma conversão no Google Ads sempre que o usuário clica
 * em qualquer link do WhatsApp (wa.me) em qualquer página do site.
 * Usa delegação de evento, então funciona para botões adicionados no futuro.
 */
export default function ConversionTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.(
        'a[href*="wa.me"]'
      );
      if (link) reportConversion();
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
