
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-[#f4f6f8] border-l-4 border-[#1e3a8a] p-6 my-4 page-break-avoid">
      <h4 className="text-[#1e3a8a] text-sm font-bold tracking-widest uppercase mb-4">
        Selected Portfolio of Directed Programs
      </h4>
      
      <div className="space-y-6">
        <div>
          <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Ophthalmology & Optometry</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Comanaging Thyroid Eye Disease: Proactive Care Approaches</span> (CME Monograph) – Grantor: <span className="font-bold italic">Amgen</span>
            </li>
            <li>
              <span className="font-bold">Complement Inhibition in Geographic Atrophy: Slowing Progression</span> (CE Webcast) – Grantor: <span className="font-bold italic">Iveric Bio</span>
            </li>
            <li>
              <span className="font-bold">Targeting DED: Aiming Treatments at Optimal Results</span> (CE Webcast) – Grantor: <span className="font-bold italic">Bausch + Lomb</span>
            </li>
            <li>
              <span className="font-bold">Discussing Evaporative Dry Eye: Diagnosis and New Treatments</span> (CME/CE Podcast) – Grantor: <span className="font-bold italic">Bausch + Lomb</span>
            </li>
            <li>
              <span className="font-bold">Effective Strategies for Managing Ocular Surface Health & Lid Margin Disease</span> (CE Webcast) – Grantors: <span className="font-bold italic">Tarsus & Théa</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Neurology & Psychiatry</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Person-Centered Care Approaches in Parkinson’s Disease</span> (CME Monograph) – Grantor: <span className="font-bold italic">ACADIA Pharmaceuticals</span>
            </li>
            <li>
              <span className="font-bold">Seeing Through LEMS: From Early Detection to Advanced Management</span> (Rare Disease CE Webcast) – Grantor: <span className="font-bold italic">Catalyst Pharmaceuticals</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Aesthetics & Dermatology</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Dynamic Duos: Rejuvenating Perioral Lines and Tear Troughs with HA Fillers</span> (CME Webcast) – Grantor: <span className="font-bold italic">Revance Therapeutics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
