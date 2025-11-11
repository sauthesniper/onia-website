import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "Elevii care au reprezentat România cu succes la Olimpiada Internațională de Inteligență Artificială.",
};

export default function HallOfFamePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Hall of Fame</h1>
          </div>
          <p className="text-xl text-blue-100">
            Campionii care au reprezentat România la olimpiadele internaționale
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Felicitări elevilor care au reprezentat România cu succes la Olimpiada Internațională de
            Inteligență Artificială și au obținut medalii și mențiuni de onoare.
          </p>

          {/* IOAI 2025 - Beijing - Romania 1 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              IOAI 2025 - Beijing - Echipa României 1
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mihai-Adrian Mocanu */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/mocanu_2024.jpg" 
                  alt="Mihai-Adrian Mocanu" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Mihai-Adrian Mocanu</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Colegiul Național de Informatică „Tudor Vianu", București
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Argint
                </div>
              </div>

              {/* Roland Petrean */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/roland_petrean.jpg" 
                  alt="Roland Petrean" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Roland Petrean</h3>
                <p className="text-sm text-gray-700 mb-3">Colegiul Național Silvania</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Argint
                </div>
              </div>

              {/* Mircea Maxim Rebengiuc */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/rebengiuc_2024.jpg" 
                  alt="Mircea Maxim Rebengiuc" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Mircea Maxim Rebengiuc</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Colegiul Național de Informatică „Tudor Vianu", București
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                  Bronz
                </div>
              </div>

              {/* Ștefan Asandei */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/stefan_asandei.jpg" 
                  alt="Ștefan Asandei" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Ștefan Asandei</h3>
                <p className="text-sm text-gray-700 mb-3">Colegiul Național Iași</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                  Bronz
                </div>
              </div>
            </div>
          </div>

          {/* IOAI 2025 - Beijing - Romania 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              IOAI 2025 - Beijing - Echipa României 2
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tudor Ștefan Mușat */}
              <div className="bg-blue-50 border-2 border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/tudor_musat2024.jpg" 
                  alt="Tudor Ștefan Mușat" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Tudor Ștefan Mușat</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Colegiul Național de Informatică „Tudor Vianu", București
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                  Aur
                </div>
              </div>

              {/* Tudor Morariu */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/tudor_morariu2024.jpg" 
                  alt="Tudor Morariu" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Tudor Morariu</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Colegiul Național "Emil Racoviță", Cluj-Napoca
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Argint
                </div>
              </div>

              {/* Ștefan-Alexandru Dumitrașcu */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/dumitrascu_2024.jpg" 
                  alt="Ștefan-Alexandru Dumitrașcu" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Ștefan-Alexandru Dumitrașcu</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Liceul Teoretic „Grigore Moisil", Timiș
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Argint
                </div>
              </div>

              {/* Simon Slănină */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Image 
                  src="/images/simon_slanina.jpg" 
                  alt="Simon Slănină" 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-black">Simon Slănină</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Colegiul Național "I.L. Caragiale", București
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                  Bronz
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              Pentru informații complete despre toate echipele și medaliile obținute, consultați{" "}
              <a href="/documente" className="text-blue-700 font-semibold hover:underline">
                secțiunea de documente
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
