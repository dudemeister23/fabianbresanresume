import React from 'react';
import { Printer } from 'lucide-react';
import Sidebar, { SidebarTop, SidebarBottom } from './components/Sidebar';
import MainColumn, { ProfessionalProfile, PrimaryExperience, SecondaryExperience, SecondarySections, Portfolio } from './components/MainColumn';
import Header from './components/Header';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  // Detect clean export mode and page number
  const [isExportMode, setIsExportMode] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('export') === 'true') {
      setIsExportMode(true);
    }
    const page = parseInt(params.get('page') || '1');
    setCurrentPage(page);
  }, []);

  const ResumeContent = () => {
    if (currentPage === 2) {
      return (
        <div className="flex flex-row">
          <main className="flex-1 p-4 pr-5">
            <SecondaryExperience />
            <SecondarySections />
          </main>
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
          <main className="flex-1 p-4 pr-5 border-r border-gray-100">
            <ProfessionalProfile />
            <PrimaryExperience />
            <Portfolio />
          </main>
          <aside className="w-64 bg-slate-50 p-4 border-l border-gray-100">
            <Sidebar />
          </aside>
        </div>
      </div>
    );
  };

  if (isExportMode) {
    return (
      <div className="bg-white">
        <div className="resume-container max-w-5xl mx-auto flex flex-col">
          <ResumeContent />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 print:py-0">
      {/* Navigation and Print Controls */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-4 no-print px-4 sm:px-0">
        <div className="flex gap-2">
          <button
            onClick={() => {
              const url = new URL(window.location.href);
              url.searchParams.set('page', '1');
              window.location.href = url.toString();
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 1 ? 'bg-[#1e3a8a] text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
          >
            Page 1
          </button>
          <button
            onClick={() => {
              const url = new URL(window.location.href);
              url.searchParams.set('page', '2');
              window.location.href = url.toString();
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 2 ? 'bg-[#1e3a8a] text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
          >
            Page 2
          </button>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
        >
          <Printer size={18} />
          Print PDF
        </button>
      </div>

      <div className="resume-container max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none min-h-[1100px] flex flex-col">
        {/* Standard side-by-side layout (Simplified for single page view) */}
        <div className="flex-1">
          <ResumeContent />
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
