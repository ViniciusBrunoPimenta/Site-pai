import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Factory,
  Apple,
  Truck,
  Home,
  Store,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Segmentos Atendidos | EmbalaFlex Londrina",
  description:
    "A EmbalaFlex atende e-commerce, indústrias, alimentos, mudanças, logística e varejo com embalagens de papelão sob medida em Londrina e região.",
};

const segmentos = [
  {
    id: "ecommerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce",
    subtitle: "Embalagens que encantam na entrega",
    description:
      "Para o e-commerce, a caixa é parte do produto. Nossa linha para comércio eletrônico une resistência no transporte com beleza na experiência de unboxing. Personalize com sua marca e surpreenda o cliente.",
    features: [
      "Caixas auto-montáveis (agilidade operacional)",
      "Diversos tamanhos para diferentes produtos",
      "Opção de impressão com logo e cores da marca",
      "Kraft natural ou branco premium",
      "Pedido mínimo acessível para pequenas lojas",
    ],
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "industrias",
    icon: <Factory className="w-8 h-8" />,
    title: "Indústrias",
    subtitle: "Resistência para proteger seu produto",
    description:
      "Indústrias precisam de embalagens robustas que suportem manuseio intenso, transporte pesado e empilhamento em galpões. Desenvolvemos soluções com papelão triplo e quádruplo, testadas para suportar até 50 kg.",
    features: [
      "Papelão triplo e quádruplo ondulado",
      "Capacidade de carga até 50 kg",
      "Reforço interno personalizado",
      "Medidas exatas para paletização",
      "Grandes volumes com entrega programada",
    ],
    color: "bg-slate-700",
    lightColor: "bg-slate-50",
    textColor: "text-slate-700",
  },
  {
    id: "alimentos",
    icon: <Apple className="w-8 h-8" />,
    title: "Alimentos",
    subtitle: "Segurança e higiene na embalagem",
    description:
      "Embalagens para o setor alimentício precisam atender normas de higiene e segurança. Trabalhamos com papelão food grade, adequado para contato indireto com alimentos.",
    features: [
      "Papelão food grade (contato indireto)",
      "Caixas para frutas, legumes e perecíveis",
      "Embalagens para linha de panificação",
      "Resistência à umidade moderada",
      "Personalização com normas de rotulagem",
    ],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    id: "mudancas",
    icon: <Home className="w-8 h-8" />,
    title: "Mudanças",
    subtitle: "Proteção para cada móvel e objeto",
    description:
      "Caixas resistentes e em tamanhos variados para facilitar a organização e proteger móveis, eletrodomésticos e objetos pessoais durante mudanças residenciais e comerciais.",
    features: [
      "Caixas P, M, G e GG prontas para uso",
      "Chapas de proteção para móveis",
      "Caixas especiais para eletrônicos",
      "Venda avulsa e em kits",
      "Entrega rápida em Londrina e região",
    ],
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    id: "logistica",
    icon: <Truck className="w-8 h-8" />,
    title: "Logística",
    subtitle: "Embalagens para o fluxo da cadeia",
    description:
      "Transportadoras e operadores logísticos precisam de embalagens padronizadas, resistentes e de fácil manuseio. Oferecemos soluções volumosas com entrega programada e rastreabilidade.",
    features: [
      "Embalagens padronizadas para paletização",
      "Alta resistência ao transporte e empilhamento",
      "Fita adesiva e fitas de segurança opcionais",
      "Código de barras e etiquetagem integrados",
      "Contratos de fornecimento com SLA definido",
    ],
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    id: "varejo",
    icon: <Store className="w-8 h-8" />,
    title: "Varejo",
    subtitle: "Embalagens que valorizam o produto",
    description:
      "Para o varejo físico e marketplace, a embalagem precisa destacar o produto na gôndola e protegê-lo durante a exposição. Desenvolvemos displays, caixinhas e embalagens promocionais.",
    features: [
      "Caixas para exposição em gôndola",
      "Displays de papelão personalizados",
      "Embalagens promocionais e sazonais",
      "Impressão offset de alta definição",
      "Pequenas tiragens para testes de mercado",
    ],
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    textColor: "text-rose-700",
  },
];

export default function SegmentosPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0F2340] to-[#1E3A5F] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Quem Atendemos
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Segmentos Atendidos
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Desenvolvemos embalagens específicas para cada setor, entendendo as particularidades
            de cada negócio e garantindo a solução mais adequada.
          </p>
        </div>
      </section>

      {/* ─── SEGMENTOS CARDS ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {segmentos.map((seg) => (
              <div
                key={seg.id}
                id={seg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card header */}
                <div className={`${seg.color} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    {seg.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{seg.title}</h2>
                    <p className="text-white/80 text-sm">{seg.subtitle}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-5">{seg.description}</p>
                  <h3 className={`text-sm font-bold uppercase tracking-wider ${seg.textColor} mb-3`}>
                    O que oferecemos
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {seg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${seg.textColor}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contato"
                    className={`inline-flex items-center gap-2 ${seg.color} text-white text-sm font-semibold py-2.5 px-5 rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    Solicitar Orçamento para {seg.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÁREA DE ATUAÇÃO ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Onde Estamos
            </span>
            <h2 className="section-title">Área de Atuação</h2>
            <p className="section-subtitle mx-auto text-center">
              Atendemos Londrina e toda a região Norte do Paraná com frota própria.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Londrina", "Cambé", "Ibiporã", "Rolândia", "Arapongas",
              "Apucarana", "Cornélio Procópio", "Bandeirantes", "Santo Antônio da Platina",
            ].map((city) => (
              <span
                key={city}
                className="bg-blue-50 border border-blue-200 text-blue-700 font-medium px-4 py-2 rounded-full text-sm"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
