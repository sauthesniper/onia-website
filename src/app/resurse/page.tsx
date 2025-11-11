"use client";

import type { Metadata } from "next";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  VideoCameraIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import CopyLinkButton from "@/components/CopyLinkButton";
import DocumentCopyButton from "@/components/DocumentCopyButton";
import ContribuieSection from "@/components/ContribuieSection";

const metadata: Metadata = {
  title: "Resurse - ONIA",
  description:
    "Regulament oficial, rapoarte, programe și resurse educaționale ale Olimpiadei Naționale de Inteligență Artificială.",
};

export default function DocumentePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <DocumentTextIcon className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Resurse Educaționale</h1>
          </div>
          <p className="text-xl text-blue-100">
            Regulamente, rapoarte, programe și materiale educaționale pentru olimpiadă
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Official Documents */}
          <div className="mb-16" id="resurse-oficiale">
            <div className="group/section flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-black">Resurse oficiale</h2>
              <div className="opacity-0 group-hover/section:opacity-100 transition-opacity duration-200">
                <CopyLinkButton url={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#resurse-oficiale` : ''} />
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Găsește regulamentul, rapoartele și alte documente oficiale necesare pentru participarea la olimpiadă.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="/documente/Regulament_OIA_2024.docx"
                className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition-all group border-2 border-blue-200 relative"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/Regulament_OIA_2024.docx` : ''} />
                <DocumentTextIcon className="w-8 h-8 mx-auto mb-3 text-blue-700 group-hover:text-white" />
                <h3 className="font-bold text-blue-900 group-hover:text-white mb-2">Regulament</h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100">
                  Regulamentul oficial al olimpiadei
                </p>
              </a>

              <a
                href="/documente/Raport_IOIA_2025.docx"
                className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition-all group border-2 border-blue-200 relative"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/Raport_IOIA_2025.docx` : ''} />
                <DocumentTextIcon className="w-8 h-8 mx-auto mb-3 text-blue-700 group-hover:text-white" />
                <h3 className="font-bold text-blue-900 group-hover:text-white mb-2">Raport IOIA</h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100">
                  Raportul olimpiadei internaționale
                </p>
              </a>

              <a
                href="/documente/programa.pdf"
                className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition-all group border-2 border-blue-200 relative"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/programa.pdf` : ''} />
                <AcademicCapIcon className="w-8 h-8 mx-auto mb-3 text-blue-700 group-hover:text-white" />
                <h3 className="font-bold text-blue-900 group-hover:text-white mb-2">Programă opțional</h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100">
                  Programa disciplinei opționale
                </p>
              </a>

              <a
                href="https://olimpiada-ai.github.io/programa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition-all group border-2 border-blue-200 relative"
              >
                <DocumentCopyButton url="https://olimpiada-ai.github.io/programa/" />
                <AcademicCapIcon className="w-8 h-8 mx-auto mb-3 text-blue-700 group-hover:text-white" />
                <h3 className="font-bold text-blue-900 group-hover:text-white mb-2">Programă orientativă</h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100">
                  Program orientativ de pregătire
                </p>
              </a>

              <a
                href="/documente/acreditare.pdf"
                className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-900 hover:text-white transition-all group border-2 border-blue-200 relative"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/acreditare.pdf` : ''} />
                <DocumentTextIcon className="w-8 h-8 mx-auto mb-3 text-blue-700 group-hover:text-white" />
                <h3 className="font-bold text-blue-900 group-hover:text-white mb-2">Acreditare IOIA</h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100">
                  Document oficial de acreditare
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContribuieSection />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Lot Largit */}
          <div className="mb-16" id="lot-largit">
            <div className="group/section flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-black">Lot Lărgit</h2>
              <div className="opacity-0 group-hover/section:opacity-100 transition-opacity duration-200">
                <CopyLinkButton url={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#lot-largit` : ''} />
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Materiale pentru pregătirea etapei de lot lărgit din 2024.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://docs.google.com/document/d/17uYj7I1qKqvrxk85XErk32Stk-DSelwAELItOveIUr0/edit?tab=t.0#heading=h.r4atvx22wjw7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url="https://docs.google.com/document/d/17uYj7I1qKqvrxk85XErk32Stk-DSelwAELItOveIUr0/edit?tab=t.0#heading=h.r4atvx22wjw7" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot lărgit
                </span>
                <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 1</h3>
              </a>
              
              <a
                href="https://docs.google.com/document/d/19fE3_9nExRl5aR6fTGmZzZt1wjb2Lovd/edit#heading=h.jfou3qe3jff7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url="https://docs.google.com/document/d/19fE3_9nExRl5aR6fTGmZzZt1wjb2Lovd/edit#heading=h.jfou3qe3jff7" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot lărgit
                </span>
                <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 2</h3>
              </a>
              
              <a
                href="https://www.youtube.com/watch?v=cT8fHqN1YrU"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url="https://www.youtube.com/watch?v=cT8fHqN1YrU" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot lărgit
                </span>
                <VideoCameraIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white">Editorial</h3>
              </a>
            </div>
          </div>
          {/* Lot Restrans */}
          <div className="mb-16" id="lot-restrans">
            <div className="group/section flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-black">Lot Restrâns</h2>
              <div className="opacity-0 group-hover/section:opacity-100 transition-opacity duration-200">
                <CopyLinkButton url={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#lot-restrans` : ''} />
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Materiale pentru pregătirea intensivă a lotului restrâns 2024.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="/documente/OI_AI_2024_NLP.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/OI_AI_2024_NLP.ipynb` : ''} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot restrâns
                </span>
                <Square3Stack3DIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">NLP</h3>
              </a>
              
              <a
                href="/documente/IOAI2024_CV_Problem_EVAL.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/IOAI2024_CV_Problem_EVAL.ipynb` : ''} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot restrâns
                </span>
                <Square3Stack3DIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">CV - EVAL</h3>
              </a>
              
              <a
                href="/documente/IOAI2024_CV_Problem_TASK.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/IOAI2024_CV_Problem_TASK.ipynb` : ''} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot restrâns
                </span>
                <Square3Stack3DIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">CV - TASK</h3>
              </a>
              
              <a
                href="/documente/IOAI2024_CV_Problem_Intro.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/IOAI2024_CV_Problem_Intro.ipynb` : ''} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot restrâns
                </span>
                <Square3Stack3DIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">CV - INTRO</h3>
              </a>
              
              <a
                href="https://www.youtube.com/playlist?list=PLByLNt67Fbicqh8kXVGLh8djihbSq-OVt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
              >
                <DocumentCopyButton url="https://www.youtube.com/playlist?list=PLByLNt67Fbicqh8kXVGLh8djihbSq-OVt" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-0">
                  Lot restrâns
                </span>
                <VideoCameraIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                <h3 className="font-semibold text-blue-900 group-hover:text-white mt-2">Cursuri Lot</h3>
              </a>
            </div>
          </div>

          {/* Past Competitions */}
          <div className="mb-16" id="editii-anterioare">
            <div className="group/section flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-black">Probleme din ediții anterioare</h2>
              <div className="opacity-0 group-hover/section:opacity-100 transition-opacity duration-200">
                <CopyLinkButton url={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#editii-anterioare` : ''} />
              </div>
            </div>
            
            {/* Locala 2024 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Etapa Locală 2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/documente/locala/Problema1-etlocala.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/locala/Problema1-etlocala.zip` : ''} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-0">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 1</h4>
                </a>
                <a
                  href="/documente/locala/Problema2-etlocala.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/locala/Problema2-etlocala.zip` : ''} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-0">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 2</h4>
                </a>
              </div>
            </div>

            {/* Judeteana 2024 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Etapa Județeană 2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/documente/judeteana/Problema1-etjudeteana.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/judeteana/Problema1-etjudeteana.zip` : ''} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-0">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 1</h4>
                </a>
                <a
                  href="/documente/judeteana/Problema2-etjudeteana.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <DocumentCopyButton url={typeof window !== 'undefined' ? `${window.location.origin}/documente/judeteana/Problema2-etjudeteana.zip` : ''} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-0">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white mt-2">Problema 2</h4>
                </a>
              </div>
            </div>

            {/* Nationala 2024 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Etapa Națională 2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-xl p-4 text-center opacity-60 cursor-not-allowed relative">
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <h4 className="font-semibold text-blue-900 mt-2">
                    Problema 1<br />
                    <span className="text-xs text-gray-500">(în curând)</span>
                  </h4>
                </div>
                <div className="bg-white shadow-md rounded-xl p-4 text-center opacity-60 cursor-not-allowed relative">
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Arhivă
                  </span>
                  <ClipboardDocumentListIcon className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <h4 className="font-semibold text-blue-900 mt-2">
                    Problema 2<br />
                    <span className="text-xs text-gray-500">(în curând)</span>
                  </h4>
                </div>
              </div>
            </div>

            {/* IOAI 2024 */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">IOAI 2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://youtube.com/playlist?list=PLByLNt67FbifCxAGJwffyIMlI2dyzmHbC&si=XT-nbux3aUqnpbLH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Arhivă
                  </span>
                  <VideoCameraIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white">Webinarii</h4>
                </a>
                <a
                  href="/documente/IOAI2024Assignment.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-blue-900 hover:text-white transition-all relative group"
                >
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Arhivă
                  </span>
                  <DocumentTextIcon className="w-6 h-6 mx-auto mb-2 text-blue-700 group-hover:text-white" />
                  <h4 className="font-semibold text-blue-900 group-hover:text-white">Assignment</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
    </div>
  );
}
