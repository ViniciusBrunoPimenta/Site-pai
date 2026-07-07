import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera o site como arquivos estáticos (HTML/CSS/JS) na pasta "out/",
  // para hospedar na Hostinger (hospedagem compartilhada, sem Node.js).
  output: "export",

  // Em site estático não há servidor para otimizar imagens em tempo real.
  images: {
    unoptimized: true,
  },

  // Gera URLs como /sobre/ (pasta com index.html) — melhor para Apache/Hostinger.
  trailingSlash: true,
};

// Obs: os headers de segurança e cache (X-Frame-Options, Cache-Control, etc.)
// foram movidos para o arquivo public/.htaccess, pois "headers()" do Next
// só funciona com servidor Node e é ignorado na exportação estática.

export default nextConfig;
