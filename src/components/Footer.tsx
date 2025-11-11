import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <Link href="/" className="flex items-start flex-col space-x-3 mb-4 group">
              <Image
                src="/logos/roai-white.svg"
                alt="ROAI Logo"
                width={50}
                height={50}
                className="h-24 w-auto transition-transform "
              />
              <div className="hidden lg:block">
                <span className="text-lg font-black text-white uppercase tracking-wide leading-tight" style={{ fontWeight: 900 }}>
                  OLIMPIADA NAȚIONALĂ<br />DE INTELIGENȚĂ ARTIFICIALĂ
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Olimpiada Națională de Inteligență Artificială este o competiție educațională de excelență pentru elevii pasionați de AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Link-uri rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/despre" className="text-gray-300 hover:text-blue-200 transition-colors">
                  Despre olimpiadă
                </a>
              </li>
              <li>
                <a href="/resurse" className="text-gray-300 hover:text-blue-200 transition-colors">
                  Resurse
                </a>
              </li>
              <li>
                <a href="/calendar" className="text-gray-300 hover:text-blue-200 transition-colors">
                  Calendar
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Email:{" "}
                <a href="mailto:contact@olimpiada-ai.ro" className="hover:text-blue-200 transition-colors">
                  contact@olimpiada-ai.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Olimpiada Națională de Inteligență Artificială. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
