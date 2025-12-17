
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-[#1e3a8a] p-8 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-2">
            Fabian <span className="text-[#1e3a8a]">Bresan</span>, MD
          </h1>
          <p className="text-xl font-medium text-gray-600 tracking-[0.15em] uppercase">
            Medical Education Strategist & Scientific Director
          </p>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#1e3a8a]" />
            <a href="mailto:fabianbresan@me.com" className="hover:underline">fabianbresan@me.com</a>
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
            <a href="https://linkedin.com/in/fabianbresan/" target="_blank" className="hover:underline">linkedin.com/in/fabianbresan/</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
