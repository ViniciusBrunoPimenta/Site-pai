import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  minQty?: string;
  specs: string[];
  icon?: React.ReactNode;
  highlight?: boolean;
}

export default function ProductCard({
  title,
  description,
  specs,
  icon,
  highlight = false,
}: ProductCardProps) {
  return (
    <div
      className={`card p-6 flex flex-col h-full border ${
        highlight ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-100"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          highlight ? "bg-blue-600" : "bg-gray-100"
        }`}
      >
        {icon ? (
          <span className={highlight ? "text-white" : "text-blue-600"}>{icon}</span>
        ) : (
          <Package className={`w-6 h-6 ${highlight ? "text-white" : "text-blue-600"}`} />
        )}
      </div>

      {highlight && (
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit">
          Mais Solicitado
        </span>
      )}

      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      {/* Specs */}
      <ul className="space-y-1.5 mb-4">
        {specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
            {spec}
          </li>
        ))}
      </ul>

      <Link
        href="/contato"
        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
          highlight
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
        }`}
      >
        Solicitar Orçamento
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
