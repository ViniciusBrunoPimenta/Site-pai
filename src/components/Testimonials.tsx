const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Logístico",
    company: "MedPharma Indústria",
    text: "As embalagens chegaram antes do prazo e com qualidade impecável. Nossa linha de produção nunca parou por falta de material. Parceiros de longa data!",
    stars: 5,
    initials: "CM",
    color: "bg-blue-600",
  },
  {
    name: "Ana Paula Rocha",
    role: "Proprietária",
    company: "Loja Virtual ModaFit",
    text: "Trabalho com e-commerce e precisava de caixas resistentes e com boa aparência. A EmbalaFlex entregou exatamente o que precisava, com prazo e preço justo.",
    stars: 5,
    initials: "AP",
    color: "bg-indigo-600",
  },
  {
    name: "Roberto Alves",
    role: "Gerente de Compras",
    company: "Frigorífico Sul",
    text: "Produção sob medida, atendimento ágil e entrega pontual. São diferenciais que fazem toda a diferença no nosso negócio. Recomendo muito!",
    stars: 5,
    initials: "RA",
    color: "bg-cyan-600",
  },
  {
    name: "Fernanda Lima",
    role: "Coordenadora",
    company: "Transportadora Velox",
    text: "Usamos as embalagens industriais para proteger cargas sensíveis. Qualidade superior, material reforçado e excelente custo-benefício para nossa operação.",
    stars: 5,
    initials: "FL",
    color: "bg-violet-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle mx-auto text-center">
            Mais de 500 empresas confiam na EmbalaFlex para suas necessidades de embalagem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card p-6 border border-gray-100"
            >
              <Stars count={t.stars} />
              <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Clientes Ativos" },
            { value: "15+", label: "Anos de Mercado" },
            { value: "10M+", label: "Caixas Produzidas" },
            { value: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
