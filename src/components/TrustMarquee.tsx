import React from 'react';
import { Language } from '../types';
import { Sparkles, Shield, Globe2, Heart, Award } from 'lucide-react';

interface TrustMarqueeProps {
  lang: Language;
}

export const TrustMarquee: React.FC<TrustMarqueeProps> = ({ lang }) => {
  const items =
    lang === 'pt'
      ? [
          { text: 'CRP 06/98605-SP', icon: Shield },
          { text: 'Terapia Individual', icon: Sparkles },
          { text: 'Terapia de Casal & Reconexão', icon: Heart },
          { text: 'Terapia Sexual Especializada', icon: Award },
          { text: 'Atendimento Online nos 50 Estados dos EUA', icon: Globe2 },
          { text: 'Sigilo Absoluto & Ética CFP', icon: Shield },
          { text: 'São Bernardo do Campo & 100% Online', icon: Globe2 },
          { text: 'Mais de 14 Anos de Experiência Clínica', icon: Award },
        ]
      : [
          { text: 'CRP 06/98605-SP Official License', icon: Shield },
          { text: 'Individual Psychotherapy', icon: Sparkles },
          { text: 'Couple Therapy & Reconnection', icon: Heart },
          { text: 'Specialized Sexual Therapy', icon: Award },
          { text: 'Online Therapy Across All 50 US States', icon: Globe2 },
          { text: 'Strict Confidentiality & Ethics', icon: Shield },
          { text: 'In-Person in SP & 100% Online', icon: Globe2 },
          { text: 'Over 14 Years of Clinical Experience', icon: Award },
        ];

  // Duplicate for seamless infinite loop
  const marqueeList = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#0A0C0E] border-y border-[#C9A227]/30 py-3.5 z-20">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0C0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0C0E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {marqueeList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90 group"
            >
              <Icon className="w-3.5 h-3.5 text-[#DFC56E] group-hover:scale-125 transition-transform" />
              <span className="group-hover:text-[#DFC56E] transition-colors">{item.text}</span>
              <span className="text-[#C9A227]/40 text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
