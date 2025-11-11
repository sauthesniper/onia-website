export default function ContribuieSection() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto mb-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contribuie cu resurse educaționale</h2>
        <p className="text-xl text-blue-100 mb-8">
          Ai materiale educaționale despre inteligența artificială?<br/> Ajută-ne să extindem baza de cunoștințe pentru toți participanții!
        </p>
        <a
          href="mailto:contact@olimpiada-ai.ro?subject=Contribuție%20materiale%20educaționale&body=Bună%20ziua,%0D%0A%0D%0ANumele%20meu%20este:%20%0D%0A%0D%0ADoamnesc%20să%20contribui%20cu%20materiale%20educaționale%20pentru%20ONIA.%0D%0A%0D%0ATip%20material:%20%0D%0ADescriere:%20%0D%0ALink%20sau%20atașament:%20%0D%0A%0D%0AVreau%20să%20fiu%20citat%20pentru%20contribuție:%20DA%20/%20NU%0D%0A%0D%0AVă%20mulțumesc!"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Trimite materiale educaționale
        </a>
      </div>
    </section>
  );
}
