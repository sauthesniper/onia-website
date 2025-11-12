import Image from "next/image";
import Link from "next/link";

export default function CompleteTeamPage() {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Partenerii Noștri
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed max-w-3xl mx-auto">
                Olimpiada Națională de Inteligență Artificială este posibilă datorită sprijinului
                partenerilor și sponsorilor care cred în importanța educației în domeniul AI.
              </p>
            </div>
          </div>

          {/* Sponsori */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-black">Sponsori</h2>
              <p className="text-base md:text-lg mb-0 text-gray-800">Mulțumim companiilor care susțin educația în inteligența artificială.</p>
              <p className="text-gray-600 text-sm md:text-base">Partenerii noștri contribuie la dezvoltarea viitorilor experți în AI.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
                <a href="https://www.bitdefender.ro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image 
                    src="/logos/bitdefender.95ae000c.png" 
                    alt="Bitdefender" 
                    width={150} 
                    height={60} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
                <a href="https://head-innovation.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image 
                    src="https://head-innovation.com/wp-content/uploads/2022/11/hi-logo-black.svg" 
                    alt="Head Innovation" 
                    width={150} 
                    height={60} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Organizatori */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-black">Organizatori</h2>
              <p className="text-base md:text-lg mb-0 text-gray-800">Instituțiile academice care coordonează olimpiada.</p>
              <p className="text-gray-600 text-sm md:text-base">Parteneri instituționali care asigură calitatea și organizarea competiției.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" title="Ministerul Educației">
                  <Image src="/logos/minister.webp" alt="Ministerul Educației" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://hria.ro/" target="_blank" rel="noopener noreferrer" title="HRIA">
                  <Image src="/logos/hria.png" alt="HRIA" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://upir.ro/" target="_blank" rel="noopener noreferrer" title="UPIR">
                  <Image src="/logos/upir.jpeg" alt="UPIR" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://upb.ro/" target="_blank" rel="noopener noreferrer" title="UPB">
                  <Image src="/logos/oraganizatori/unstpb.3a713b2d.jpeg" alt="UPB" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://unibuc.ro/" target="_blank" rel="noopener noreferrer" title="Universitatea București">
                  <Image src="/logos/oraganizatori/Logo_Universitatea_din_București.png" alt="Universitatea București" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://airomania.eu/" target="_blank" rel="noopener noreferrer" title="AIR">
                  <Image src="/logos/oraganizatori/airomania.26d19a99.jpg" alt="AIR" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://aria.org.ro/" target="_blank" rel="noopener noreferrer" title="ARIA">
                  <Image src="/logos/oraganizatori/aria.1e05057e.png" alt="ARIA" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://ilds.ro/" target="_blank" rel="noopener noreferrer" title="ILDS">
                  <Image src="/logos/oraganizatori/ilds.eb7cf084.png" alt="ILDS" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://uaic.ro/" target="_blank" rel="noopener noreferrer" title="UAIC">
                  <Image src="/logos/oraganizatori/uaic.85d0bb79.webp" alt="UAIC" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://ubbcluj.ro/" target="_blank" rel="noopener noreferrer" title="UBB">
                  <Image src="/logos/oraganizatori/ubb.db2f1971.svg" alt="UBB" width={140} height={90} className="" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://upt.ro/" target="_blank" rel="noopener noreferrer" title="UPT">
                  <Image src="/logos/oraganizatori/upt.da1e7ae2.jpg" alt="UPT" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center justify-center">
                <a href="https://uvt.ro/" target="_blank" rel="noopener noreferrer" title="UVT">
                  <Image src="/logos/oraganizatori/uvt.4dcbccb2.png" alt="UVT" width={140} height={90} className="max-h-16 w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Echipa Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-black">Echipa ONIA</h2>
            
            {/* Organizare */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Organizare
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/danielpopa.jpg" 
                    alt="Daniel Popa" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Daniel Popa</h4>
                    <p className="text-sm text-gray-700">Organizator</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/emilonea.jpg" 
                    alt="Emil Onea" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Emil Onea</h4>
                    <p className="text-sm text-gray-700">Organizator</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/emil-onea-8a59871a/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/flavia.jpg" 
                    alt="Zaim-Oprea Flavia" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Zaim-Oprea Flavia</h4>
                    <p className="text-sm text-gray-700">Organizator</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/flavia-oprea/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Comisie Științifică */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Comisie Științifică
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/anamaria.jpg" 
                    alt="Arisanu Ana-Maria" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Arisanu Ana-Maria</h4>
                    <p className="text-sm text-gray-700">Membru Comisie</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/mihainan.jpeg" 
                    alt="Mihai Nan" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Mihai Nan</h4>
                    <p className="text-sm text-gray-700">Membru Comisie</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/mihai-nan-558739284/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/dimitriu.jpeg" 
                    alt="Petru Dimitriu" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Petru Dimitriu</h4>
                    <p className="text-sm text-gray-700">Membru Comisie</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/petrudimitriu/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Echipa Tehnică */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Echipa Tehnică
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/alexbotici.jpeg" 
                    alt="Alexandru Botici" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Alexandru Botici</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/alexandru-botici" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/denistroncota.jpeg" 
                    alt="Denis Troncota" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Denis Troncota</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/tdenisr/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/liviu.png" 
                    alt="Liviu Popa" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Liviu Popa</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/popa-stefan-liviu-8a9225236/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/colca.jpeg" 
                    alt="Robert Colca" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Robert Colca</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/robert-colca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/rochian.png" 
                    alt="Vlad Rochian" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Vlad Rochian</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/vladrochian/?originalSubdomain=ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center">
                  <Image 
                    src="/images/programatori/rusudinu.jpeg" 
                    alt="Ștefan Rusu" 
                    width={80} 
                    height={80} 
                    className="rounded-full w-16 h-16 object-cover shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-bold text-black">Ștefan Rusu</h4>
                    <p className="text-sm text-gray-700">Software Engineer</p>
                  </div>
                  <div className="flex gap-2 ml-2 shrink-0">
                    <a 
                      href="https://www.linkedin.com/in/rusudinu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" className="w-6 h-6" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://rusudinu.ro/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Website personal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#1E40AF" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
