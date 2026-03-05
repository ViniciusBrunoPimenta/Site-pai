import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
}

export default function CTASection({
  title = "Pronto para solicitar seu orçamento?",
  subtitle = "Nossa equipe está pronta para atender você. Resposta rápida e condições especiais para novos clientes.",
  primaryLabel = "Solicitar Orçamento",
  primaryHref = "/contato",
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2563EB] py-20">
      <div className="container-custom text-center">
        {/* Badge */}
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          Orçamento Gratuito
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>

          {showWhatsApp && (
            <a
              href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento de embalagens."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-blue-200 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span> Resposta em até 2 horas
          </span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span> Sem compromisso
          </span>
          <span className="hidden sm:block text-white/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span> Entrega em todo o Brasil
          </span>
        </div>
      </div>
    </section>
  );
}
