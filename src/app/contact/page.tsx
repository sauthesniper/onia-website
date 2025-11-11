"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formular-olimpiada-ai.headinnovation.app/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          </div>
          <p className="text-xl text-blue-100">
            Ai întrebări? Trimite-ne un mesaj sau abonează-te la newsletter
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Trimite-ne un mesaj</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form_type" value="contact" />
                <input type="hidden" name="origin" value="contact" />

                <div>
                  <label htmlFor="nume_complet" className="block text-sm font-medium text-black mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="nume_complet"
                    name="nume_complet"
                    required
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                    placeholder="Nume și prenume"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                    placeholder="nume@exemplu.ro"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                    placeholder="Scrie mesajul tău aici..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {formStatus === "loading" ? "Se trimite..." : "Trimite mesaj"}
                </button>

                {formStatus === "success" && (
                  <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    <strong>Trimis!</strong> Îți mulțumim pentru mesaj.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <strong>Eroare!</strong> Contactează-ne la contact@olimpiada-ai.ro
                  </div>
                )}
              </form>
            </div>

            {/* Newsletter Form */}
            <div id="newsletter">
              <h2 className="text-3xl font-bold mb-6 text-black">Abonează-te la newsletter</h2>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-gray-700 mb-6">
                  Primește toate noutățile despre olimpiadă, informații despre etape și resurse utile
                  direct pe email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form_type" value="newsletter" />
                  <input type="hidden" name="origin" value="newsletter" />

                  <div>
                    <label htmlFor="newsletter_nume" className="block text-sm font-medium text-black mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="newsletter_nume"
                      name="nume_complet"
                      required
                      className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                      placeholder="Nume și prenume"
                    />
                  </div>

                  <div>
                    <label htmlFor="newsletter_email" className="block text-sm font-medium text-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="newsletter_email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                      placeholder="nume@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label htmlFor="tip_abonare" className="block text-sm font-medium text-black mb-2">
                      Tip abonare *
                    </label>
                    <select
                      id="tip_abonare"
                      name="tip_abonare"
                      required
                      className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-black"
                    >
                      <option value="">Selectează tipul...</option>
                      <option value="Profesor">Profesor</option>
                      <option value="Elev">Elev</option>
                      <option value="Organizator">Organizator</option>
                      <option value="Sponsor">Sponsor</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {formStatus === "loading" ? "Se trimite..." : "Abonează-te"}
                  </button>

                  {formStatus === "success" && (
                    <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      <strong>Trimis!</strong> Te-ai abonat cu succes.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      <strong>Eroare!</strong> Încearcă din nou mai târziu.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-black text-center">Informații de contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Email</h4>
                  <a
                    href="mailto:contact@olimpiada-ai.ro"
                    className="text-black hover:text-blue-700 transition-colors"
                  >
                    contact@olimpiada-ai.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Adresă</h4>
                  <p className="text-black">
                    Universitatea POLITEHNICA București
                    <br />
                    Splaiul Independenței 313, București
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
