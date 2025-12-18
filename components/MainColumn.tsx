import React from 'react';
import PortfolioComponent from './Portfolio';
import ExperienceItem from './ExperienceItem';

export const Portfolio = PortfolioComponent;

export const ProfessionalProfile: React.FC = () => (
  <div className="mb-6 page-break-avoid">
    <h2 className="text-[#1e3a8a] text-lg font-bold tracking-widest uppercase mb-2 border-b-2 border-blue-900/10 pb-1">
      Professional Profile
    </h2>
    <p className="text-gray-700 leading-relaxed font-medium">
      MD-credentialed Medical Strategist with high-level expertise in content strategy, gap analysis, and CME program leadership. Proven track record of securing funding, engaging Key Opinion Leaders (KOLs), and managing complex project lifecycles in Neurology, Ophthalmology, and Psychiatry. Combines clinical authority with entrepreneurial business acumen (P&L, strategic marketing, and operations) to deliver commercially viable, scientifically rigorous educational programs.
    </p>
  </div>
);

export const PrimaryExperience: React.FC = () => (
  <section>
    <h2 className="text-[#1e3a8a] text-lg font-bold tracking-widest uppercase mb-3 border-b-2 border-blue-900/10 pb-1">
      Medical Communications Experience
    </h2>

    <div className="flex flex-col gap-4">
      {/* MedEdicus - Senior Role */}
      <ExperienceItem
        title="Senior Content Manager"
        company="MedEdicus"
        location="Remote"
        period="Dec. 2023 – Apr. 2025"
        description="Operated as the strategic lead for a portfolio of CME programs, ensuring scientific accuracy and alignment with commercial goals."
        highlights={[
          "Strategic Content Development: Directed comprehensive gap analyses and needs assessments for high-priority therapeutic areas (Thyroid Eye Disease, NMOSD, Dry Eye Disease), directly influencing the curriculum design for accredited programs.",
          "KOL & Faculty Management: Cultivated and managed relationships with top-tier Key Opinion Leaders (KOLs), ensuring faculty alignment with emerging clinical data and evolving guidelines.",
          "Program Architecture: Architected multi-format educational initiatives (webcasts, podcasts, interactive modules), resulting in an increase in learner engagement and retention.",
          "Cross-Functional Leadership: Partnered with grant, accreditation, and events teams to ensure 100% on-time delivery of compliant CME programs while maintaining strict budget adherence."
        ]}
      />
    </div>
  </section>
);

export const SecondaryExperience: React.FC = () => (
  <div className="flex flex-col gap-4 mt-4">
    <div className="flex flex-col gap-4">
      {/* MedEdicus - Developer Role */}
      <ExperienceItem
        title="Medical Education Content Developer"
        company="MedEdicus"
        location="Remote"
        period="Nov. 2022 – Dec. 2023"
        highlights={[
          "Curriculum Design: Developed educational agendas and complex case studies for live symposia, translating high-science data into practical clinical applications.",
          "On-Site Scientific Lead: Provided on-site medical direction for live educational programs, managing faculty requirements and real-time scientific inquiries.",
          "Reach Optimization: Spearheaded the restructuring of digital content formats, significantly expanding distribution channels and maximizing the educational impact of funded programs."
        ]}
      />

      {/* Max Planck */}<ExperienceItem
        title="Medical Writer / Research Scientist"
        company="Max Planck Florida Institute for Neuroscience"
        location="Jupiter, FL"
        period="Oct. 2020 – Nov. 2022"
        highlights={[
          "Grant Writing & Funding: Conceptualized and authored clinical references for 30+ grant applications, effectively securing essential research funding.",
          "Scientific Communication: Served as editorial lead for high-impact scientific publications, ensuring data integrity and narrative clarity for complex neurological research.",
          "Clinical Research: Conducted exhaustive literature reviews in Neurology and Psychiatry to support evidence-based content generation."
        ]}
      />
    </div>
  </div>
);

export const SecondarySections: React.FC = () => (
  <div className="flex flex-col gap-4 mt-4">
    {/* EXECUTIVE OPERATIONS SECTION */}
    <section className="pt-1">
      <h2 className="text-[#1e3a8a] text-lg font-bold tracking-widest uppercase mb-3 border-b-2 border-blue-900/10 pb-1">
        Executive Operations Leadership
      </h2>
      <ExperienceItem
        title="Principal / Director of Operations"
        company="CIQ of Palm Beach"
        location="Palm Beach Gardens, FL"
        period="May 2025 – Present"
        description="Leveraged entrepreneurial opportunity to build and scale an operational infrastructure, mastering P&L and resource management."
        highlights={[
          "P&L & Strategic Growth: Manage full P&L oversight, strategic forecasting, and investor relations for a capital-intensive business unit.",
          "Operational Efficiency: Direct complex, multi-phase client projects; implemented SOPs that reduced project turnaround time.",
          "Team Leadership: Recruited and lead a cross-functional team of project coordinators and technical staff, establishing accountability.",
          "Vendor Negotiation: Negotiate high-value contracts and manage subcontractor partnerships to optimize profit margins."
        ]}
      />
    </section>

    {/* CLINICAL INTERNSHIP SECTION */}
    <section className="pt-1">
      <h2 className="text-[#1e3a8a] text-lg font-bold tracking-widest uppercase mb-3 border-b-2 border-blue-900/10 pb-1">
        Additional Experience
      </h2>
      <ExperienceItem
        title="Medical Intern"
        company="Boca Raton Regional Hospital"
        location="Boca Raton, FL"
        period="Nov. 2019 – Oct. 2020"
        highlights={[
          "Completed clinical rotations in Neurology, Surgery, and Internal Medicine.",
          "Delivered oral presentations on updated guidelines and clinical data to department leadership."
        ]}
      />
    </section>
  </div>
);

const MainColumn: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ProfessionalProfile />
      <PrimaryExperience />
      <Portfolio />
      <SecondaryExperience />
      <SecondarySections />
    </div>
  );
};

export default MainColumn;
