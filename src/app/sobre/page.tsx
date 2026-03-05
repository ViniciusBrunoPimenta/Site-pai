import type { Metadata } from "next";
import { CheckCircle, Users, Factory, Award, TrendingUp } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre a Empresa | EmbalaFlex Londrina",
  description:
    "Conheça a EmbalaFlex: fabricantes de embalagens e caixas de papelão em Londrina há mais de 15 anos. Nossa história, estrutura e capacidade produtiva.",
};

const timeline = [
  { year: "2009", title: "Fundação", desc: "Iniciamos as operações em Londrina com um pequeno galpão e duas máquinas onduladas." },
  { year: "2013", title: "Expansão Industrial", desc: "Ampliamos o parque fabril e adquirimos linha automática de corte e impressão." },
  { year: "2017", title: "Certificação", desc: "Obtivemos certificação de qualidade e implementamos controle de processo em toda a linha." },
  { year: "2020", title: "E-commerce", desc: "Criamos linha especializada em embalagens para e-commerce, atendendo ao boom do comércio digital." },
  { year: "2024", title: "Expansão Regional", desc: "Passamos a atender toda a região Norte do Paraná com frota própria de distribuição." },
];

const valores = [
  { icon: <CheckCircle className="w-6 h-6" />, title: "Qualidade", desc: "Matéria-prima selecionada e controle rigoroso em cada etapa da produção." },
  { icon: <Users className="w-6 h-6" />, title: "Parceria", desc: "Construímos relações de longo prazo, entendendo o negócio de cada cliente." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Inovação", desc: "Investimos continuamente em tecnologia e desenvolvimento de novos produtos." },
  { icon: <Award className="w-6 h-6" />, title: "Comprometimento", desc: "Prazo e palavra são sagrados. Entregamos o que prometemos, sempre." },
];

const estrutura = [
  { value: "8.000 m²", label: "Área fabril" },
  { value: "120+", label: "Colaboradores" },
  { value: "5", label: "Linhas de produção" },
  { value: "30+", label: "Equipamentos CNC" },
];

export default function SobrePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0F2340] to-[#1E3A5F] pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Sobre a EmbalaFlex
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Há mais de 15 anos produzindo embalagens de papelão com qualidade, agilidade e
              compromisso. De Londrina para o Norte do Paraná — e muito além.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HISTÓRIA ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Quem Somos
              </span>
              <h2 className="section-title mb-6">
                Uma empresa construída sobre papel, trabalho e propósito
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A EmbalaFlex nasceu em 2009 com um propósito simples: oferecer embalagens de
                  papelão de qualidade para empresas de Londrina e região, com atendimento próximo
                  e preço justo.
                </p>
                <p>
                  O que começou como um pequeno galpão com duas máquinas se transformou em uma
                  fábrica com mais de 8.000 m², 5 linhas de produção e capacidade de produzir
                  milhões de caixas por mês para os mais diversos setores da economia.
                </p>
                <p>
                  Hoje, somos referência no Norte do Paraná em embalagens personalizadas,
                  industriais e para e-commerce, sempre com o mesmo DNA: qualidade, agilidade e
                  comprometimento com o cliente.
                </p>
              </div>
            </div>

            {/* Estrutura */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {estrutura.map((e) => (
                  <div
                    key={e.label}
                    className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white text-center"
                  >
                    <p className="text-3xl font-extrabold mb-1">{e.value}</p>
                    <p className="text-xs text-blue-200">{e.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Factory className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Capacidade Produtiva</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Produzimos mais de 10 milhões de caixas por ano com maquinário moderno,
                  incluindo onduladores, cortadeiras, impressoras flexográficas e coladeiras
                  automatizadas. Nossa capacidade nos permite atender demandas urgentes sem
                  abrir mão da qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LINHA DO TEMPO ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Nossa Trajetória
            </span>
            <h2 className="section-title">15 anos de crescimento</h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 inline-block w-full md:w-auto md:max-w-sm">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{t.year}</span>
                      <h3 className="font-bold text-gray-900 mt-1 mb-2">{t.title}</h3>
                      <p className="text-sm text-gray-500">{t.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow top-5" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSÃO / VISÃO / VALORES ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="section-title">O que guia a EmbalaFlex</h2>
          </div>

          {/* Missão e Visão */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#0F2340] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Missão</h3>
              <p className="text-blue-100 leading-relaxed">
                Fornecer embalagens de papelão com qualidade, agilidade e custo-benefício
                superior, contribuindo para o sucesso das empresas que atendemos e para
                o desenvolvimento sustentável da nossa região.
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3 text-blue-100">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser a principal referência em embalagens de papelão no Norte do Paraná até
                2030, reconhecida pela inovação, sustentabilidade e pelos relacionamentos
                de longo prazo com nossos clientes e parceiros.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Venha conhecer nossa fábrica?" subtitle="Agende uma visita guiada e veja de perto como produzimos suas embalagens." />
    </>
  );
}
