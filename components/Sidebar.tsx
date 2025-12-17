
import React from 'react';

const competencies = [
  {
    title: "Scientific Strategy",
    skills: ["Gap Analysis", "Needs Assessments", "Instructional Design", "ACCME Compliance", "Adult Learning Principles"]
  },
  {
    title: "Therapeutic Expertise",
    skills: ["Neurology", "Ophthalmology", "Psychiatry", "Dermatology", "Internal Medicine", "Immunology"]
  },
  {
    title: "Operational Leadership",
    skills: ["Budgeting & P&L", "Cross-functional Leadership", "Vendor Negotiation", "Strategic Forecasting"]
  },
  {
    title: "Medical Communications",
    skills: ["Publication Planning", "Grant Development", "Storyboarding", "Omnichannel Optimization"]
  }
];

export const SidebarTop: React.FC = () => {
  return (
    <section className="page-break-avoid">
      <h3 className="text-[#1e3a8a] text-sm font-bold tracking-widest uppercase mb-3 border-b border-gray-200 pb-1">
        Education
      </h3>
      <div className="mb-3">
        <p className="font-bold text-gray-800">Goethe University</p>
        <p className="text-gray-600 italic">Frankfurt am Main, Germany</p>
        <p className="font-semibold text-gray-800 mt-1">MD, Medicine | 2020</p>
      </div>
      <div className="text-xs text-gray-600 leading-relaxed">
        <p className="font-semibold text-gray-800 mb-1 underline">Thesis:</p>
        <p>Investigated travel as a risk factor for acquiring multi-resistant bacteria.</p>
        <p className="mt-1 font-semibold text-gray-800 mb-1 underline">Research:</p>
        <p>Developed patient interview forms, statistical analysis, and custom clinical database management.</p>
      </div>
    </section>
  );
};

export const SidebarBottom: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Core Competencies */}
      <section className="page-break-avoid">
        <h3 className="text-[#1e3a8a] text-sm font-bold tracking-widest uppercase mb-4 border-b border-gray-200 pb-1">
          Core Competencies
        </h3>
        <div className="flex flex-col gap-4">
          {competencies.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-xs text-gray-900 uppercase mb-1.5 tracking-wider">{group.title}</h4>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-600 rounded">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Languages (Implicitly expected for MD from Germany) */}
      <section className="page-break-avoid">
        <h3 className="text-[#1e3a8a] text-sm font-bold tracking-widest uppercase mb-3 border-b border-gray-200 pb-1">
          Languages
        </h3>
        <div className="flex flex-col gap-1 text-xs text-gray-700 font-medium">
          <p>English (Native/Professional)</p>
          <p>German (Native/Professional)</p>
        </div>
      </section>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <SidebarTop />
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
