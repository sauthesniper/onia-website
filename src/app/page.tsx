import Link from "next/link";
import Image from "next/image";
import InteractiveLogo from "@/components/InteractiveLogo";
import CompleteTeamPage from "@/components/CompleteTeamPage";
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logos/roai-white.svg"
                alt="ROAI Logo"
                width={512}
                height={512}
                className="h-48 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Olimpiada Națională
              <br />
              de Inteligență Artificială
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Informațiile pentru ediția din anul școlar 2025-2026 și platforma de concurs{" "}
              <strong>vor fi disponibile curând</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://eval.olimpiada-ai.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl transform "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Platformă Evaluare
              </a>
              <Link
                href="/resurse"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors"
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

      {/* Ce este ONIA Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-center">
            {/* Logo - Desktop & Mobile */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <InteractiveLogo />
            </div>

            {/* Description Text */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Olimpiada Națională de{" "}
                  <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Inteligență Artificială
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-black">
                  <strong className="text-blue-700">ONIA</strong> este o competiție educațională de excelență, dedicată elevilor de liceu pasionați de inteligența artificială. Competiția se desfășoară în anul școlar 2025-2026 și parcurge trei etape: <span className="font-semibold">etapa județeană</span>, <span className="font-semibold">etapa națională</span> și <span className="font-semibold">etapa de selecție a lotului național</span>.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-black">
                  Fiecare etapă include probe practice desfășurate pe o platformă modernă de concurs, dezvoltată cu sprijinul <span className="font-semibold text-blue-700">Uniunii Profesorilor de Informatică din România (UPIR)</span>. Elevii care excelează în aceste probe au șansa unică de a reprezenta România la Olimpiada Internațională de Inteligență Artificială, competind alături de cei mai talentați tineri din întreaga lume.
                </p>


                <div className="pt-6">
                  <a href="#participare" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all hover:scale-105 group">
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Descoperă provocarea AI
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De ce să participi Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            De ce să participi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="w-14 h-14 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 transition-transform shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-blue-700 transition-colors">Transformă-ți pasiunea în competență</h3>
              <p className="text-gray-700 leading-relaxed">
                Stăpânește <strong className="text-blue-700">machine learning</strong>, <strong className="text-blue-700">deep learning</strong> și <strong className="text-blue-700">neural networks</strong> prin provocări practice care te pregătesc pentru viitorul AI.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 transition-transform shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-purple-700 transition-colors">Reprezintă România pe scena internațională</h3>
              <p className="text-gray-700 leading-relaxed">
                Performanțele excepționale te pot duce la <strong className="text-purple-700">Olimpiada Internațională de AI</strong>, unde vei concura alături de cei mai buni minți tinere din <strong className="text-purple-700">întreaga lume</strong>.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 transition-transform shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-orange-600 transition-colors">Intră într-o comunitate de elite</h3>
              <p className="text-gray-700 leading-relaxed">
                Conectează-te cu <strong className="text-orange-600">cei mai pasionați elevi și profesori</strong> din România, schimbă idei, colaborează și construiește-ți un network valoros în domeniul AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
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

      <CompleteTeamPage />
    </>
  );
}
