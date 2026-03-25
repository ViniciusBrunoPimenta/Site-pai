"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Telefone",
    lines: ["55 43 99829-0097 ", "55 43 99829-0097"],
    href: "tel:+5543998290097",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp",
    lines: ["(43) 99829-0097", "Resposta em até 2 horas"],
    href: "https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "E-mail",
    lines: ["Ailton_prod@yahoo.com.br"],
    href: "mailto:Ailton_prod@yahoo.com.br",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Endereço",
    lines: ["Rua Mário de Barros, 370", "86046-140 - Londrina, PR"],
    href: "https://maps.google.com/?q=Rua+Mário+de+Barros+370,+Londrina+PR",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Horário",
    lines: ["Seg a Sex: 08h às 18h", "Sáb: 08h às 12h"],
    href: null,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    segmento: "",
    mensagem: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.nome}`,
      form.empresa ? `Empresa: ${form.empresa}` : null,
      `Telefone: ${form.telefone}`,
      form.segmento ? `Segmento: ${form.segmento}` : null,
      "",
      `Necessidade: ${form.mensagem}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/5543998290097?text=${encodeURIComponent(lines)}`, "_blank");
  };

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0F2340] to-[#1E3A5F] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contato</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Atendemos todo o Brasil. Nossa equipe responde em até 2 horas úteis.
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              {contactInfo.map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.color}`}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{c.title}</p>
                      {c.lines.map((line) =>
                        c.href ? (
                          <a
                            key={line}
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block text-sm text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-gray-500">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento de embalagens."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp justify-center mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp Agora
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Nome completo *
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            required
                            placeholder="João Silva"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Empresa
                          </label>
                          <input
                            type="text"
                            name="empresa"
                            value={form.empresa}
                            onChange={handleChange}
                            placeholder="Minha Empresa Ltda"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          value={form.telefone}
                          onChange={handleChange}
                          required
                          placeholder="(43) 9 9999-0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Segmento
                        </label>
                        <select
                          name="segmento"
                          value={form.segmento}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white transition-shadow"
                        >
                          <option value="">Selecione seu segmento</option>
                          <option>E-commerce</option>
                          <option>Indústria</option>
                          <option>Alimentos</option>
                          <option>Logística / Transportadora</option>
                          <option>Mudanças</option>
                          <option>Varejo</option>
                          <option>Outro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Descreva sua necessidade *
                        </label>
                        <textarea
                          name="mensagem"
                          value={form.mensagem}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Ex: Preciso de 1000 caixas para e-commerce, tamanho aproximado 30x20x15 cm, papelão duplo..."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-shadow"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-whatsapp py-3.5 justify-center"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Enviar pelo WhatsApp
                      </button>

                      <p className="text-xs text-center text-gray-400">
                        Você será redirecionado ao WhatsApp com os dados preenchidos.
                      </p>
                    </form>
                  </>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAPA ────────────────────────────────────────────── */}
      <section className="bg-gray-100">
        <iframe
          src="https://maps.google.com/maps?q=Rua+Mário+de+Barros+370,+Londrina+PR&output=embed"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Manancial Pack - Londrina PR"
        />
      </section>
    </>
  );
}
