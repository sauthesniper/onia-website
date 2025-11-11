import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre olimpiadă",
  description:
    "Olimpiada Națională de Inteligență Artificială (ONIA) este o competiție educațională de excelență, acreditată de Ministerul Educației.",
};

export default function DesprePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Despre olimpiadă</h1>
          </div>
          <p className="text-xl text-blue-100">
            Competiție de excelență în domeniul inteligenței artificiale
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Logo Text - Desktop */}
            <div className="hidden lg:block">
              <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-blue-700">
                Olimpiada Națională
                <br />
                de Inteligență
                <br />
                Artificială
              </h2>
            </div>

            {/* Description Text */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6 leading-relaxed text-gray-800">
                  <strong className="text-blue-700">
                    Olimpiada Națională de Inteligență Artificială (ONIA)
                  </strong>{" "}
                  este o competiție educațională de excelență, acreditată de Ministerul Educației și
                  Cercetării, adresată elevilor de liceu pasionați de domeniul inteligenței
                  artificiale. Olimpiada se va desfășura în anul școlar 2025-2026 în trei etape:
                </p>

                <ul className="ml-8 mb-6 text-lg text-gray-800 space-y-2">
                  <li>etapa județeană,</li>
                  <li>etapa națională,</li>
                  <li>etapa de selecție a lotului național.</li>
                </ul>

                <p className="text-lg leading-relaxed text-gray-800">
                  Competiția include probe practice desfășurate pe o platformă de concurs ce urmează
                  a fi lansată și este realizată cu sprijinul{" "}
                  <strong className="text-blue-700">
                    Uniunii Profesorilor de Informatică din România (UPIR)
                  </strong>
                  . În urma parcurgerii etapelor de concurs, elevii pot fi selectați pentru a
                  reprezenta România la Olimpiada Internațională de Inteligență Artificială.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            De ce să participi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3 text-black">Învățare practică</h3>
              <p className="text-gray-700">
                Dezvoltă abilități practice în machine learning, deep learning și alte domenii ale AI.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3 text-black">Oportunități internaționale</h3>
              <p className="text-gray-700">
                Posibilitatea de a reprezenta România la Olimpiada Internațională de AI.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3 text-black">Comunitate</h3>
              <p className="text-gray-700">
                Alătură-te unei comunități de elevi și profesori pasionați de inteligența artificială.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            Parteneri și susținători
          </h2>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <p className="text-lg text-gray-800 text-center mb-6">
              Olimpiada este susținută de instituții de prestigiu din domeniul educației și cercetării:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <span className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-black font-medium">
                Ministerul Educației și Cercetării
              </span>
              <span className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-black font-medium">
                UPIR
              </span>
              <span className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-black font-medium">
                HRIA - UPB
              </span>
              <span className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-black font-medium">
                AI Romania
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
