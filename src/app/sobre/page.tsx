import type { Metadata } from "next";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre a Empresa | Manancial Pack Londrina",
  description:
    "Conheça a Manancial Pack: mais de 25 anos fabricando embalagens e caixas de papelão com qualidade, compromisso e atendimento em todo o Brasil.",
};

const valores = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Qualidade",
    desc: "Matéria-prima selecionada e controle rigoroso em cada etapa da produção.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parceria",
    desc: "Construímos relações de longo prazo, entendendo o negócio de cada cliente.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Inovação",
    desc: "Investimos continuamente em tecnologia e desenvolvimento de novos produtos.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Comprometimento",
    desc: "Prazo e palavra são sagrados. Entregamos o que prometemos, sempre.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0F2340] to-[#1E3A5F] pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Manancial Pack
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Há mais de 25 anos fabricando embalagens de papelão com qualidade, agilidade e
              compromisso. Atendemos todo o Brasil com a tradição de quem conhece o setor.
            </p>
          </div>
        </div>
      </section>

      {/* ─── O QUE NOS GUIA ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="section-title">O que guia a Manancial Pack</h2>
            <p className="section-subtitle mx-auto text-center">
              Princípios que construímos ao longo de 25 anos e que orientam cada decisão.
            </p>
          </div>

          {/* Missão e Visão */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#0F2340] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Missão</h3>
              <p className="text-blue-100 leading-relaxed">
                Fornecer embalagens de papelão com qualidade, agilidade e custo-benefício
                superior, contribuindo para o sucesso das empresas que atendemos em todo
                o Brasil.
              </p>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-blue-100">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser referência nacional em embalagens de papelão, reconhecida pela
                inovação, sustentabilidade e pelos relacionamentos duradouros com nossos
                clientes e parceiros.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div
                key={v.title}
                className="group text-center p-7 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
