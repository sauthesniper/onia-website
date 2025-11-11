import InteractiveLogo from "./InteractiveLogo";

export default function AboutSection() {
  return (
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
  );
}
