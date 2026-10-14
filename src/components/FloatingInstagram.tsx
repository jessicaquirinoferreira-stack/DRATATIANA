import React, { useState } from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Instagram } from 'lucide-react';

interface FloatingInstagramProps {
  lang: Language;
}

export const FloatingInstagram: React.FC<FloatingInstagramProps> = ({ lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Instagram da Dra. Tatiane Vilela" className="fixed bottom-24 right-6 z-40 flex items-center">
      {/* Tooltip */}
      {isHovered && (
        <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#111417]/95 text-white text-xs font-medium shadow-xl border border-white/10 whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150">
          <p className="font-semibold text-pink-400">Instagram Oficial</p>
          <p className="text-[11px] text-white/70">{CLINIC_INFO.instagram}</p>
        </div>
      )}

      {/* Official Instagram Gradient Floating Button */}
      <a
        href={CLINIC_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Abrir Instagram oficial da Dra. Tatiane Vilela"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group"
      >
        {/* Subtle glow effect */}
        <span className="absolute -inset-1 rounded-full bg-pink-500/30 blur-xs group-hover:bg-pink-500/50 transition-all pointer-events-none" />

        <Instagram className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform group-hover:rotate-6" />

        {/* Floating badge for mobile/desktop clarity */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 border border-white text-[9px] font-bold text-white items-center justify-center">
            ✦
          </span>
        </span>
      </a>
    </aside>
  );
};
