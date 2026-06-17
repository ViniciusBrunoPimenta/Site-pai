import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ConversionTracker from "@/components/ConversionTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://manancialpack.com.br"),
  title: {
    default: "Manancial Pack | Embalagens de Papelão em Londrina",
    template: "%s | Manancial Pack",
  },
  description:
    "Fabricantes de caixas e embalagens de papelão em Londrina e região. Caixas personalizadas, para e-commerce, industriais e projetos sob medida. Solicite seu orçamento!",
  keywords: [
    "embalagens papelão Londrina",
    "caixas papelão Londrina",
    "caixas e-commerce Londrina",
    "embalagens industriais Londrina",
    "caixas personalizadas Londrina",
    "embalagens Cambé",
    "embalagens Ibiporã",
    "embalagens Rolândia",
    "norte do Paraná",
  ],
  authors: [{ name: "Manancial Pack" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://manancialpack.com.br",
    siteName: "Manancial Pack",
    title: "Manancial Pack | Embalagens de Papelão em Londrina",
    description:
      "Fabricantes de caixas e embalagens de papelão em Londrina e região. Solicite seu orçamento!",
    images: [
      {
        url: "/logo.png",
        width: 44,
        height: 44,
        alt: "Manancial Pack",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11481397027"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11481397027');
          `}
        </Script>
        <ConversionTracker />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
