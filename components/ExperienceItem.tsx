
import React from 'react';

interface Props {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  highlights: string[];
}

const ExperienceItem: React.FC<Props> = ({ title, company, location, period, description, highlights }) => {
  return (
    <div className="page-break-avoid">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <span className="text-sm font-semibold text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap">{period}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-bold text-gray-700">{company}</span>
        <span className="text-xs text-gray-500 font-medium italic">{location}</span>
      </div>
      {description && (
        <p className="text-gray-600 italic text-sm mb-3 font-medium leading-snug">
          {description}
        </p>
      )}
      <ul className="list-disc ml-4 space-y-1.5">
        {highlights.map((bullet, idx) => {
          const parts = bullet.split(': ');
          if (parts.length > 1) {
            return (
              <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                <span className="font-bold text-gray-900">{parts[0]}:</span> {parts[1]}
              </li>
            );
          }
          return <li key={idx} className="text-gray-700 text-sm leading-relaxed">{bullet}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;
