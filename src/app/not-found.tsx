import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border-2 border-blue-200">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/roai.svg"
              alt="ROAI Logo"
              width={120}
              height={120}
            />
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-black text-blue-700 mb-2">
              404
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pagina nu a fost găsită
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Înapoi la pagina principală
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contactează-ne
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">
              Link-uri utile:
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <Link href="/calendar" className="text-blue-600 hover:text-blue-800 font-medium">
                Calendar
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/resurse" className="text-blue-600 hover:text-blue-800 font-medium">
                Resurse
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/hall-of-fame" className="text-blue-600 hover:text-blue-800 font-medium">
                Hall of Fame
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/echipa" className="text-blue-600 hover:text-blue-800 font-medium">
                Echipa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
