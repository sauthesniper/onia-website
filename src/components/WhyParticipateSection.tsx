export default function WhyParticipateSection() {
  return (
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
  );
}
