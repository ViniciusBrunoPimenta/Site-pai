// Google Ads — configuração de conversões
// ─────────────────────────────────────────────────────────────
// ID da conta do Google Ads (tag base, já instalada no layout.tsx)
export const GA_ADS_ID = "AW-11481397027";

// ⚠️ SUBSTITUA pelo "rótulo da conversão" gerado no Google Ads.
// É a parte que vem DEPOIS da barra "/" no snippet de conversão.
// Ex: se o Google Ads mostrar  'AW-11481397027/AbC-D_efGh12'
//     então cole aqui apenas:  'AbC-D_efGh12'
export const CONVERSION_LABEL = "COLE_AQUI_O_ROTULO";

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
    event_callback: callback,
  });
}
