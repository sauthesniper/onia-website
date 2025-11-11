import type { Metadata } from "next";
import CompleteTeamPage from "@/components/CompleteTeamPage";

export const metadata: Metadata = {
  title: "Echipa ONIA",
  description:
    "Echipa, partenerii și sponsorii care fac posibilă Olimpiada Națională de Inteligență Artificială.",
};

export default function EchipaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Echipa ONIA</h1>
          </div>
          <p className="text-xl text-blue-100">
            Oamenii și organizațiile care fac posibilă Olimpiada Națională de Inteligență Artificială
          </p>
        </div>
      </section>

      <CompleteTeamPage />
    </div>
  );
}
