"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Package, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/segmentos", label: "Segmentos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className={`text-xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                AP <span className="text-blue-400">Embalagens</span>
              </span>
              <p
                className={`text-xs leading-none transition-colors ${
                  scrolled ? "text-gray-500" : "text-blue-200"
                }`}
              >
                Embalagens de Papelão
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : scrolled
                    ? "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5543998290097"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-blue-600" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              55 43 99829-0097
            </a>
            <a
              href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-sm"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <a
                href="tel:+5543998290097"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600"
              >
                <Phone className="w-4 h-4" />
                55 43 99829-0097
              </a>
              <a
                href="https://wa.me/5543998290097?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center justify-center"
              >
                Solicitar Orçamento pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
