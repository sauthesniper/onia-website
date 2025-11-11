import Link from "next/link";
import Image from "next/image";
import MatrixRain from "./MatrixRain";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Matrix Rain Animation Background */}
      <MatrixRain />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/roai-white.svg"
              alt="ROAI Logo"
              width={512}
              height={512}
              className="h-48 w-auto drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Olimpiada Națională
            <br />
            de Inteligență Artificială
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md">
            Informațiile pentru ediția din anul școlar 2025-2026 și platforma de concurs{" "}
            <strong>vor fi disponibile curând</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://eval.olimpiada-ai.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Platformă Evaluare
            </a>
            <Link
              href="/resurse"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resurse educaționale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
