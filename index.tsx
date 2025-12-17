
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Phone, MapPin, Linkedin, Printer, ExternalLink, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

// --- Sub-components ---

const Header = () => (
  <header className="bg-white border-b-[6px] border-[#1e3a8a] p-8 md:p-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
          Fabian <span className="text-[#1e3a8a]">Bresan</span>, MD
        </h1>
        <p className="text-xl font-medium text-slate-500 tracking-[0.2em] uppercase">
          Medical Education Strategist & Scientific Director
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-slate-600 border-l-0 md:border-l border-slate-200 pl-0 md:pl-8">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-[#1e3a8a]" />
          <a href="mailto:fabianbresan@me.com" className="hover:text-[#1e3a8a] transition-colors">fabianbresan@me.com</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-[#1e3a8a]" />
          <span>(561) 788-4408</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-[#1e3a8a]" />
          <span>Palm Beach Gardens, FL</span>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin size={14} className="text-[#1e3a8a]" />
          <a href="https://linkedin.com/in/fabianbresan/" target="_blank" className="hover:text-[#1e3a8a] transition-colors">linkedin.com/in/fabianbresan/</a>
        </div>
      </div>
    </div>
  </header>
);

// Added optional modifier to children to fix TS error in JSX nesting
const SidebarSection = ({ title, icon: Icon, children }: { title: string, icon: any, children?: React.ReactNode }) => (
  <section className="page-break-avoid">
    <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
      <Icon size={16} className="text-[#1e3a8a]" />
      <h3 className="text-[#1e3a8a] text-xs font-bold tracking-widest uppercase">{title}</h3>
    </div>
    {children}
  </section>
);

const Sidebar = () => (
  <aside className="w-full md:w-80 bg-[#f8fafc] p-8 md:p-10 flex flex-col gap-10 border-l border-slate-100">
    <SidebarSection title="Education" icon={GraduationCap}>
      <div className="space-y-4">
        <div>
          <p className="font-bold text-slate-800 text-sm">Goethe University</p>
          <p className="text-slate-500 italic text-xs mb-1">Frankfurt am Main, Germany</p>
          <p className="font-bold text-[#1e3a8a] text-sm">MD, Medicine | 2020</p>
        </div>
        <div className="bg-white p-3 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-sm">
          <p className="font-bold text-slate-800 mb-1 italic">Thesis:</p>
          <p>Investigated travel as a risk factor for acquiring multi-resistant bacteria.</p>
          <p className="mt-2 font-bold text-slate-800 mb-1 italic">Research:</p>
          <p>Developed patient interview forms, statistical analysis, and managed custom clinical database.</p>
        </div>
      </div>
    </SidebarSection>

    <SidebarSection title="Core Competencies" icon={Award}>
      <div className="flex flex-col gap-5">
        {[
          { label: "Scientific Strategy", items: ["Gap Analysis", "Needs Assessments", "Instructional Design", "ACCME Compliance"] },
          { label: "Therapeutic Expertise", items: ["Neurology", "Ophthalmology", "Psychiatry", "Dermatology", "Immunology"] },
          { label: "Leadership", items: ["P&L Management", "Strategic Forecasting", "Vendor Negotiation", "KOL Engagement"] }
        ].map((group, i) => (
          <div key={i}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{group.label}</p>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item, j) => (
                <li key={j} className="bg-white border border-slate-200 text-[10px] px-2 py-0.5 rounded text-slate-600 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SidebarSection>

    <SidebarSection title="Languages" icon={BookOpen}>
      <div className="flex flex-col gap-2 text-xs font-medium text-slate-700">
        <div className="flex justify-between">
          <span>English</span>
          <span className="text-slate-400">Professional</span>
        </div>
        <div className="flex justify-between">
          <span>German</span>
          <span className="text-slate-400">Native</span>
        </div>
      </div>
    </SidebarSection>
  </aside>
);

const ExperienceItem = ({ title, company, location, period, highlights, description }: any) => (
  <div className="page-break-avoid">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <span className="text-sm font-bold text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded-full">{period}</span>
    </div>
    <div className="flex justify-between items-center mb-3 text-sm">
      <span className="font-bold text-slate-600">{company}</span>
      <span className="text-slate-400 italic">{location}</span>
    </div>
    {description && <p className="text-slate-600 italic text-sm mb-3 leading-snug">{description}</p>}
    <ul className="space-y-2">
      {highlights.map((h: string, i: number) => {
        const parts = h.split(': ');
        return (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
            <span className="text-[#1e3a8a] mt-1.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" />
            </span>
            {parts.length > 1 ? (
              <span><span className="font-bold text-slate-900">{parts[0]}:</span> {parts[1]}</span>
            ) : (
              <span>{h}</span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const Portfolio = () => (
  <div className="bg-[#f8fafc] border-l-4 border-[#1e3a8a] p-6 my-6 rounded-r shadow-sm page-break-avoid">
    <h4 className="text-[#1e3a8a] text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
      <ExternalLink size={14} /> Selected Portfolio of Directed Programs
    </h4>
    <div className="grid grid-cols-1 gap-6">
      {[
        { 
          cat: "Ophthalmology & Optometry", 
          items: [
            { t: "Comanaging Thyroid Eye Disease: Proactive Care", g: "Amgen" },
            { t: "Complement Inhibition in Geographic Atrophy", g: "Iveric Bio" },
            { t: "Targeting DED: Aiming Treatments at Optimal Results", g: "Bausch + Lomb" },
            { t: "Discussing Evaporative Dry Eye: Diagnosis & New Treatments", g: "Bausch + Lomb" },
            { t: "Effective Strategies for Ocular Surface Health", g: "Tarsus & Théa" }
          ]
        },
        { 
          cat: "Neurology & Psychiatry", 
          items: [
            { t: "Person-Centered Care Approaches in Parkinson’s", g: "ACADIA" },
            { t: "Seeing Through LEMS: From Detection to Management", g: "Catalyst" }
          ]
        },
        { 
          cat: "Aesthetics & Dermatology", 
          items: [
            { t: "Dynamic Duos: Rejuvenating Perioral Lines with HA Fillers", g: "Revance" }
          ]
        }
      ].map((section, i) => (
        <div key={i} className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{section.cat}</h5>
          <ul className="space-y-3">
            {section.items.map((item, j) => (
              <li key={j} className="text-xs text-slate-700 leading-snug">
                <span className="font-bold text-slate-900">{item.t}</span> – Grantor: <span className="font-bold text-[#1e3a8a] italic">{item.g}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Application ---

const App = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen py-10 print:py-0">
      <div className="max-w-5xl mx-auto flex justify-end mb-6 no-print px-4 sm:px-0">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-[#1e3a8a] text-white font-bold rounded shadow-lg hover:shadow-xl hover:bg-blue-900 transition-all active:scale-95"
        >
          <Printer size={18} /> Print Executive CV
        </button>
      </div>

      <div className="resume-container max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col print:shadow-none border border-slate-200 print:border-none">
        <Header />
        
        <div className="flex flex-col md:flex-row flex-grow">
          {/* Main Column */}
          <main className="flex-1 p-8 md:p-12 order-2 md:order-1">
            <section className="mb-12 page-break-avoid">
              <h2 className="text-[#1e3a8a] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Briefcase size={14} /> Executive Summary
              </h2>
              <p className="text-slate-700 leading-relaxed font-medium text-base">
                MD-credentialed Medical Strategist with high-level expertise in content strategy, gap analysis, and CME program leadership. Proven track record of securing funding, engaging Key Opinion Leaders (KOLs), and managing complex project lifecycles in Neurology, Ophthalmology, and Psychiatry. Combines clinical authority with entrepreneurial business acumen (P&L, strategic marketing, and operations) to deliver commercially viable, scientifically rigorous educational programs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[#1e3a8a] text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-2 border-b border-slate-100 pb-2">
                Professional Experience
              </h2>
              
              <div className="flex flex-col gap-12">
                <ExperienceItem 
                  title="Senior Content Manager" 
                  company="MedEdicus" 
                  location="Remote" 
                  period="2023 – 2025" 
                  description="Strategic lead for a portfolio of CME programs, ensuring scientific accuracy and alignment with commercial goals."
                  highlights={[
                    "Strategic Content Development: Directed gap analyses and needs assessments for high-priority areas (TED, NMOSD, Dry Eye), directly influencing curriculum design.",
                    "KOL & Faculty Management: Cultivated relationships with top-tier Key Opinion Leaders (KOLs), ensuring faculty alignment with emerging clinical data.",
                    "Program Architecture: Architected multi-format educational initiatives resulting in significant learner engagement increases.",
                    "Cross-Functional Leadership: Partnered with grant and events teams to ensure 100% on-time delivery of compliant CME programs."
                  ]}
                />

                <Portfolio />

                <ExperienceItem 
                  title="Medical Writer / Research Scientist" 
                  company="Max Planck Florida Institute for Neuroscience" 
                  location="Jupiter, FL" 
                  period="2020 – 2022" 
                  highlights={[
                    "Grant Writing & Funding: Conceptualized and authored clinical references for 30+ grant applications, securing essential research funding.",
                    "Scientific Communication: Editorial lead for high-impact neurological research publications.",
                    "Clinical Research: Conducted exhaustive literature reviews in Neurology and Psychiatry to support evidence-based content generation."
                  ]}
                />

                <ExperienceItem 
                  title="Principal / Director of Operations" 
                  company="CIQ of Palm Beach" 
                  location="Palm Beach Gardens, FL" 
                  period="2025 – Present" 
                  description="Driving operational infrastructure scaling, P&L management, and strategic growth for capital-intensive business units."
                  highlights={[
                    "P&L & Strategic Growth: Full P&L oversight, strategic forecasting, and investor relations.",
                    "Operational Efficiency: Implemented SOPs that significantly reduced project turnaround time.",
                    "Team Leadership: Leading cross-functional teams of project coordinators and technical staff."
                  ]}
                />
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
      
      <div className="text-center mt-8 text-slate-400 text-xs no-print pb-10">
        Professional Resume of Fabian Bresan, MD — Generated for Executive Review
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
