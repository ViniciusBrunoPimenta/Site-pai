// Google Ads — configuração de conversões
// ─────────────────────────────────────────────────────────────
// ID da conta do Google Ads (tag base, já instalada no layout.tsx)
export const GA_ADS_ID = "AW-11481397027";

// Rótulo da conversão "Lead WhatsApp" gerado no Google Ads
// (a parte que vem DEPOIS da barra "/" no snippet de conversão).
export const CONVERSION_LABEL = "QmGjCM2bp8AcEKPu4OIq";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara o evento de conversão do Google Ads.
 * @param callback Executado após o registro (ou imediatamente, se o gtag não estiver disponível).
 */
export function reportConversion(callback?: () => void) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    callback?.();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/${CONVERSION_LABEL}`,
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  });
}
