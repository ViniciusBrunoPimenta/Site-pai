import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Produtos | Caixas e Embalagens de Papelão",
  description:
    "Conheça toda nossa linha de embalagens: caixa maleta, corte e vinco, envoltórios, acessórios, pallet, e-commerce, RIB, contentores e projetos especiais.",
};

const WA_NUMBER = "5543998290097";

const products = [
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto1.png",
    label: "Caixa Maleta",
    badge: "Mais vendido",
    badgeColor: "bg-amber-400 text-amber-900",
    desc: "Versátil e resistente, ideal para transporte de produtos frágeis e presentes com acabamento diferenciado.",
    features: ["Alta resistência", "Tampa com encaixe", "Personalizável"],
    accentColor: "from-amber-400 to-orange-500",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto2.png",
    label: "Corte e Vinco",
    badge: "Sob medida",
    badgeColor: "bg-blue-500 text-white",
    desc: "Embalagens com formato personalizado, cortadas com precisão conforme o formato exato do seu produto.",
    features: ["Molde exclusivo", "Qualquer formato", "Proteção total"],
    accentColor: "from-blue-500 to-blue-700",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto3.png",
    label: "Envoltórios",
    badge: "Proteção interna",
    badgeColor: "bg-green-500 text-white",
    desc: "Proteção interna em papelão para fixar e amortecer produtos no interior da caixa durante o transporte.",
    features: ["Amortecimento", "Diversas espessuras", "Corte preciso"],
    accentColor: "from-green-500 to-emerald-600",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto4.png",
    label: "Acessórios",
    badge: "Complementos",
    badgeColor: "bg-purple-500 text-white",
    desc: "Cantoneiras, divisórias, separadores e outros itens complementares em papelão para proteção total.",
    features: ["Cantoneiras", "Divisórias", "Separadores"],
    accentColor: "from-purple-500 to-violet-600",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto6-min.png",
    label: "Embalagem E-commerce",
    badge: "E-commerce",
    badgeColor: "bg-rose-500 text-white",
    desc: "Caixas compactas e resistentes projetadas para o unboxing perfeito e a experiência do cliente.",
    features: ["Unboxing premium", "Tamanhos P/M/G/GG", "Auto-montável"],
    accentColor: "from-rose-500 to-pink-600",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto7.png",
    label: "RIB",
    badge: "Reforço",
    badgeColor: "bg-cyan-600 text-white",
    desc: "Reforço Interno em papelão para garantir maior resistência estrutural e integridade das caixas.",
    features: ["Reforço estrutural", "Resistência extra", "Sob medida"],
    accentColor: "from-cyan-500 to-cyan-700",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto8.png",
    label: "Contentores",
    badge: "Grande volume",
    badgeColor: "bg-teal-600 text-white",
    desc: "Grandes caixas de papelão para armazenamento e movimentação de volumes industriais com segurança.",
    features: ["Grande capacidade", "Empilhável", "Reaproveitável"],
    accentColor: "from-teal-500 to-teal-700",
  },
  {
    img: "https://manancialembalagens.com.br/wp-content/uploads/2019/07/produto9.png",
    label: "Projetos Especiais",
    badge: "Exclusivo",
    badgeColor: "bg-[#1E3A5F] text-white",
    desc: "Soluções sob medida para formatos incomuns, com desenvolvimento de molde exclusivo e protótipo físico.",
    features: ["Molde exclusivo", "Protótipo incluso", "Consultoria técnica"],
    accentColor: "from-[#1E3A5F] to-[#2563EB]",
  },
];

const processos = [
  { step: "01", title: "Briefing", desc: "Entendemos suas necessidades: medidas, gramatura, finalidade e volume." },
  { step: "02", title: "Projeto", desc: "Nossa equipe técnica desenvolve o modelo com diagramação 3D." },
  { step: "03", title: "Aprovação", desc: "Enviamos um protótipo físico para sua validação antes de produzir." },
  { step: "04", title: "Produção", desc: "Fabricamos com agilidade em nossa linha de produção automatizada." },
  { step: "05", title: "Entrega", desc: "Entregamos em todo o Brasil com agilidade e segurança." },
];

export default function ProdutosPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0F2340] to-[#1E3A5F] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Nossa Linha
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Produtos e Embalagens
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Do e-commerce à indústria pesada, desenvolvemos a embalagem certa para cada
            necessidade, com qualidade, resistência e identidade visual.
          </p>
        </div>
      </section>

      {/* ─── PRODUTOS GRID ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Linha Completa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Nossas soluções em embalagens
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Escolha o produto e solicite seu orçamento direto pelo WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <div
                key={p.label}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Topo colorido + imagem */}
                <div className="relative overflow-hidden h-56">
                  {/* Fundo degradê suave */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accentColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                  {/* Badge categoria */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${p.badgeColor} shadow-sm`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Imagem */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.label}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accentColor} opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300`}>
                    <p className="text-white text-2xl font-black text-center px-6 drop-shadow-lg">{p.label}</p>
                  </div>
                </div>

                {/* Linha divisória colorida */}
                <div className={`h-1 bg-gradient-to-r ${p.accentColor}`} />

                {/* Conteúdo */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Botão WhatsApp */}
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Olá! Gostaria de solicitar um orçamento de: ${encodeURIComponent(p.label)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-green-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESSO ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Como Funciona
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Processo de produção</h2>
            <p className="text-gray-500 mx-auto max-w-xl text-center">
              Da ideia à entrega, acompanhamos cada etapa com você.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processos.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < processos.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-blue-100" />
                )}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS TÉCNICOS ───────────────────────────── */}
      <section className="py-20 bg-[#0F2340]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Qualidade Técnica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Produção com controle de qualidade em cada etapa
              </h2>
              <p className="text-blue-200 leading-relaxed mb-8">
                Nosso processo produtivo segue rígidos padrões de qualidade, desde a seleção
                da matéria-prima até o empilhamento final, garantindo embalagens que realmente
                protegem.
              </p>
              <ul className="space-y-3">
                {[
                  "Matéria-prima certificada",
                  "Maquinário moderno e calibrado",
                  "Inspeção visual em 100% das peças",
                  "Teste de resistência ao empilhamento (ECT)",
                  "Armazenagem em ambiente controlado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10M+", label: "Caixas produzidas por ano" },
                { value: "15+", label: "Anos de experiência" },
                { value: "500+", label: "Clientes em todo o Brasil" },
                { value: "48h", label: "Prazo de resposta ao orçamento" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur rounded-xl p-5 text-center"
                >
                  <p className="text-3xl font-extrabold text-blue-300 mb-1">{s.value}</p>
                  <p className="text-xs text-blue-200">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Precisa de uma embalagem personalizada?" />
    </>
  );
}
