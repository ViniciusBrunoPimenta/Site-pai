import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Package,
  ShoppingCart,
  Factory,
  Layers,
  Ruler,
  Truck,
  Star,
  Shield,
  Zap,
  HeadphonesIcon,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Manancial Pack | Embalagens e Caixas de Papelão em Londrina",
  description:
    "Fabricantes de caixas e embalagens de papelão em Londrina e região Norte do Paraná. Caixas para e-commerce, indústrias e personalizadas. Solicite orçamento agora!",
};

const diferenciais = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Entrega Ágil",
    desc: "Prazo cumprido. Produção rápida e logística eficiente para toda a região.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Qualidade Garantida",
    desc: "Papelão de alta resistência, testado para proteger seu produto do início ao fim.",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Projetos Sob Medida",
    desc: "Desenvolvemos embalagens no formato e gramatura exatos que você precisa.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "Atendimento Próximo",
    desc: "Consultores especializados prontos para atender você pelo WhatsApp ou telefone.",
  },
];

const homeProducts = [
  {
    title: "Caixas Personalizadas",
    description:
      "Desenvolvemos caixas com sua logomarca, cores e medidas exclusivas. Ideal para fortalecer sua marca na entrega.",
    specs: ["Impressão flexográfica", "Diversas gramaturas", "Modelos exclusivos"],
    highlight: true,
  },
  {
    title: "Caixas para E-commerce",
    description:
      "Resistentes, leves e econômicas. Perfeitas para proteger produtos no transporte e surpreender seu cliente.",
    specs: ["Papel Kraft resistente", "Fechamento seguro", "Tamanhos variados"],
  },
  {
    title: "Embalagens Industriais",
    description:
      "Caixas robustas para proteger peças, equipamentos e cargas pesadas no armazenamento e transporte.",
    specs: ["Alta resistência", "Reforço interno", "Dimensões sob medida"],
  },
];

const segmentos = [
  { icon: <ShoppingCart className="w-5 h-5" />, label: "E-commerce" },
  { icon: <Factory className="w-5 h-5" />, label: "Indústrias" },
  { icon: <Package className="w-5 h-5" />, label: "Alimentos" },
  { icon: <Truck className="w-5 h-5" />, label: "Logística" },
  { icon: <Layers className="w-5 h-5" />, label: "Mudanças" },
  { icon: <Star className="w-5 h-5" />, label: "Varejo" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F2340] via-[#1E3A5F] to-[#2563EB]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Atendemos todo o Brasil
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Embalagens de papelão{" "}
              <span className="text-blue-300">para o seu negócio crescer</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Caixas personalizadas, industriais e para e-commerce. Produção ágil,
              qualidade comprovada e entrega em todo o Brasil.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {["Entrega rápida", "Qualidade garantida", "Projetos sob medida"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-4 px-8 text-base justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Orçamento
              </a>
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-lg text-base transition-all duration-200"
              >
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 42.5C1200 35 1320 20 1380 12.5L1440 5V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── VÍDEO ──────────────────────────────────────────────── */}
      <section className="bg-[#0F2340] py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Coluna esquerda — Vídeo */}
            <div className="w-full lg:w-[60%] relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/manancial.mp4" type="video/mp4" />
                </video>
                {/* Badge flutuante */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1E3A5F] text-sm font-semibold px-4 py-2 rounded-full shadow-lg pointer-events-none">
                  <span className="text-base">▶</span>
                  <span>Assista como produzimos</span>
                </div>
              </div>
            </div>

            {/* Coluna direita — Conteúdo */}
            <div className="w-full lg:w-[40%] text-white">
              <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Nossa Fábrica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Tecnologia e precisão em cada embalagem
              </h2>
              <p className="text-white/70 text-base mb-8 leading-relaxed">
                Da matéria-prima à entrega, cada etapa é controlada para garantir resistência,
                encaixe perfeito e a melhor proteção para o seu produto.
              </p>

              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "25+", label: "Anos de experiência" },
                  { value: "20 Milhões+", label: "Caixas por ano" },
                  { value: "500+", label: "Clientes ativos" },
                  { value: "48h", label: "Prazo de resposta" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-2xl font-black text-amber-400">{stat.value}</p>
                    <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA WhatsApp */}
              <a
                href="https://wa.me/5543998290097?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L.057 23.629a.75.75 0 00.92.919l5.934-1.553A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 01-4.953-1.36l-.355-.212-3.679.963.983-3.595-.232-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Por que a Manancial Pack?
            </span>
            <h2 className="section-title">Seus diferenciais de uma fábrica local</h2>
            <p className="section-subtitle mx-auto text-center">
              Combinamos tecnologia de produção com atendimento próximo para entregar o que você precisa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <div key={d.title} className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:text-white transition-all duration-300">
                  {d.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUTOS DESTAQUE ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Linha de Produtos
            </span>
            <h2 className="section-title">Embalagens para cada necessidade</h2>
            <p className="section-subtitle mx-auto text-center">
              Do e-commerce à indústria pesada, temos a caixa certa para proteger seu produto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {homeProducts.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/produtos" className="btn-primary">
              Ver todos os produtos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SEGMENTOS ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Quem Atendemos
              </span>
              <h2 className="section-title mb-4">
                Soluções para cada segmento de negócio
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Seja você uma pequena loja online ou uma grande indústria, atendemos em todo o Brasil
                com embalagens desenvolvidas para as particularidades do seu setor.
              </p>
              <Link href="/segmentos" className="btn-primary">
                Conhecer segmentos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {segmentos.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 bg-white group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
      <Testimonials />

      {/* ─── CTA FINAL ──────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
