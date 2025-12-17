
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Printer } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MainColumn from './components/MainColumn';
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
        {/* Header Section */}
        <Header />

        <div className="flex flex-col md:flex-row flex-grow">
          {/* Main Column (Left/Primary Content) */}
          <main className="flex-1 p-8 md:p-12 order-2 md:order-1 border-r border-gray-100">
             <div className="mb-10 page-break-avoid">
              <h2 className="text-[#1e3a8a] text-lg font-bold tracking-widest uppercase mb-3 border-b-2 border-blue-900/10 pb-1">
                Professional Profile
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                MD-credentialed Medical Strategist with high-level expertise in content strategy, gap analysis, and CME program leadership. Proven track record of securing funding, engaging Key Opinion Leaders (KOLs), and managing complex project lifecycles in Neurology, Ophthalmology, and Psychiatry. Combines clinical authority with entrepreneurial business acumen (P&L, strategic marketing, and operations) to deliver commercially viable, scientifically rigorous educational programs.
              </p>
            </div>

            <MainColumn />
          </main>

          {/* Sidebar (Right Column) */}
          <aside className="w-full md:w-80 bg-slate-50 p-8 md:p-10 order-1 md:order-2 border-l border-gray-100">
            <Sidebar />
          </aside>
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
