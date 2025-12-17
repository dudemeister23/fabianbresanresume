import React from 'react';
import { Printer } from 'lucide-react';
import Sidebar, { SidebarTop, SidebarBottom } from './components/Sidebar';
import MainColumn, { ProfessionalProfile, PrimaryExperience, SecondaryExperience, SecondarySections, Portfolio } from './components/MainColumn';
import Header from './components/Header';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 print:py-0">
      {/* Print Trigger Button */}
      <div className="max-w-5xl mx-auto flex justify-end mb-4 no-print px-4 sm:px-0">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
        >
          <Printer size={18} />
          Print PDF
        </button>
      </div>

      <div className="resume-container max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none min-h-[1100px] flex flex-col">
        {/* Header Section - WEB VIEW */}
        <div className="print:hidden">
          <Header />
        </div>

        {/* ============================================== */}
        {/* WEB VIEW: Standard side-by-side layout        */}
        {/* ============================================== */}
        <div className="print:hidden flex flex-col md:flex-row">
          <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
            <MainColumn />
          </main>
          <aside className="w-full md:w-80 bg-slate-50 p-8 md:p-10 border-l border-gray-100">
            <Sidebar />
          </aside>
        </div>

        {/* ============================================== */}
        {/* PRINT VIEW: Two distinct page blocks           */}
        {/* ============================================== */}
        <div className="hidden print:block">
          {/* --- PAGE 1 BLOCK --- */}
          <div style={{ pageBreakAfter: 'always' }}>
            <Header />
            <div className="flex flex-row">
              <main className="flex-1 p-4 pr-5 border-r border-gray-100">
                <ProfessionalProfile />
                <PrimaryExperience />
                <Portfolio />
              </main>
              <aside className="w-64 bg-slate-50 p-4 border-l border-gray-100">
                <SidebarTop />
              </aside>
            </div>
          </div>

          {/* --- PAGE 2 BLOCK --- */}
          <div>
            <div className="flex flex-row">
              <main className="flex-1 p-4 pr-5 border-r border-gray-100">
                <SecondaryExperience />
                <SecondarySections />
              </main>
              <aside className="w-64 bg-slate-50 p-4 border-l border-gray-100">
                <SidebarBottom />
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Print Footer */}
      <div className="text-center mt-6 text-gray-400 text-sm no-print">
        Fabian Bresan, MD • Resume designed for Executive Medical Placement
      </div>
    </div>
  );
};

export default App;
