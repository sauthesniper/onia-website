import Link from "next/link";

export default function QuickInfoSection() {
  return (
    <section id="participare" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Informații esențiale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tot ce trebuie să știi pentru a participa și a excela la ONIA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-400 transition-all group">
            <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 transition-transform shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-blue-700 transition-colors">Resurse complete de pregătire</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Accesează regulamente, programe educaționale, materiale de studiu și probleme din edițiile anterioare.
            </p>
            <Link href="/resurse" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all group/link">
              <span>Explorează resursele</span>
              <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-400 transition-all group">
            <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transition-transform shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-purple-700 transition-colors">Calendarul competiției 2026</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Descoperă datele importante pentru fiecare etapă și planifică-ți pregătirea în mod strategic.
            </p>
            <Link href="/calendar" className="inline-flex items-center gap-2 text-purple-700 font-bold hover:gap-3 transition-all group/link">
              <span>Vezi calendar complet</span>
              <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 hover:shadow-2xl hover:border-orange-400 transition-all group">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 transition-transform shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-orange-600 transition-colors">Campionii României</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Inspiră-te din poveștile elevilor excelenți care au reprezentat țara la competițiile internaționale.
            </p>
            <Link href="/hall-of-fame" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all group/link">
              <span>Hall of Fame</span>
              <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
