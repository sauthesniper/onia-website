import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar ONIA 2026",
  description:
    "Programul complet al Olimpiadei Naționale de Inteligență Artificială pentru anul 2026.",
};

export default function CalendarPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Calendar ONIA 2026</h1>
          </div>
          <p className="text-xl text-blue-100">
            Programul complet al competiției pentru anul școlar 2025-2026
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-blue-700 ml-3">
            {/* Etapa Locală */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3.5 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  Etapa Locală
                  <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full">
                    Simulare
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-blue-700">
                  17 ianuarie 2026
                </time>
                <p className="text-base font-normal text-gray-700">
                  O primă experiență practică pentru participanți, simulând formatul oficial al competiției.
                  Ideală pentru familiarizare cu platforma și testarea cunoștințelor inițiale.
                </p>
              </div>
            </div>

            {/* Etapa Județeană */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3.5 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="mb-1 text-lg font-semibold text-black">Etapa Județeană</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-blue-700">
                  14 martie 2026
                </time>
                <p className="text-base font-normal text-gray-700">
                  Organizată de inspectoratele școlare județene, această etapă selectează cei mai buni
                  participanți din fiecare județ. Se ține cont și de clasamentul național pentru a
                  identifica elevii cei mai pregătiți care vor putea participa la etapa națională.
                </p>
              </div>
            </div>

            {/* Etapa Națională */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3.5 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  Etapa Națională
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full">
                    UPB
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-blue-700">
                  9-11 aprilie 2026
                </time>
                <p className="text-base font-normal text-gray-700">
                  La etapa națională participă elevii care au obținut cele mai bune rezultate la etapa
                  județeană. Vor exista clasamente separate pe clase, vor fi acordate premii și medalii
                  recunoscute de Ministerul Educației, iar cei mai buni participanți vor fi selectați
                  pentru loturile de pregătire.
                </p>
              </div>
            </div>

            {/* Lot Lărgit */}
            <div className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3.5 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  Lot Lărgit
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full">
                    UPB
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-blue-700">
                  14-17 mai 2026
                </time>
                <p className="text-base font-normal text-gray-700">
                  Program intensiv de pregătire pentru participanții selectați. Include cursuri avansate,
                  workshopuri pentru consolidarea cunoștințelor și etape de selecție.
                </p>
              </div>
            </div>

            {/* Lot Restrâns */}
            <div className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3.5 ring-8 ring-white">
                <svg
                  className="w-2.5 h-2.5 text-blue-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-black">
                  Lot Restrâns
                  <span className="bg-red-100 text-red-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-full">
                    UPB
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-blue-700">
                  5-7 iunie 2026
                </time>
                <p className="text-base font-normal text-gray-700">
                  Pregătire finală și selecția echipei naționale. Participanții selectați vor reprezenta
                  România la a treia ediție a Olimpiadei Internaționale de Inteligență Artificială din
                  Emiratele Arabe Unite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
