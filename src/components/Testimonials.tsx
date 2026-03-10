import { Award, Users, Package, Clock } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-7 h-7" />,
    value: "500+",
    label: "Clientes Ativos",
    desc: "Empresas de todo o Brasil",
  },
  {
    icon: <Award className="w-7 h-7" />,
    value: "25+",
    label: "Anos de Mercado",
    desc: "Experiência e tradição",
  },
  {
    icon: <Package className="w-7 h-7" />,
    value: "10M+",
    label: "Caixas Produzidas",
    desc: "Capacidade industrial",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    value: "48h",
    label: "Prazo de Resposta",
    desc: "Orçamento rápido",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#0F2340] via-[#1E3A5F] to-[#2563EB] py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Números que comprovam
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            A confiança de quem já escolheu a EmbalaFlex
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            25 anos de entrega consistente, qualidade comprovada e clientes que retornam em todo o Brasil.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-7 text-center transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-400/10 group-hover:bg-amber-400/20 rounded-xl text-amber-400 mb-5 transition-all duration-300">
                {s.icon}
              </div>
              <p className="text-4xl font-black text-white mb-1">{s.value}</p>
              <p className="text-sm font-semibold text-white/90 mb-1">{s.label}</p>
              <p className="text-xs text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider + CTA */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm text-center sm:text-left max-w-md">
            Fabricante com mais de 25 anos atendendo indústrias, e-commerces e
            distribuidoras em todo o Brasil com pontualidade e qualidade.
          </p>
          <a
            href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
