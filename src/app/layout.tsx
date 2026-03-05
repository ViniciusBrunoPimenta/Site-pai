import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  title: {
    default: "EmbalaFlex | Embalagens de Papelão em Londrina",
    template: "%s | EmbalaFlex",
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
  authors: [{ name: "EmbalaFlex" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://embalaflex.com.br",
    siteName: "EmbalaFlex",
    title: "EmbalaFlex | Embalagens de Papelão em Londrina",
    description:
      "Fabricantes de caixas e embalagens de papelão em Londrina e região. Solicite seu orçamento!",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
