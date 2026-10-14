import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/translations';
import { ShieldCheck, Lock, Globe2, HeartHandshake, Clock, Sparkles } from 'lucide-react';

interface WhyChooseSectionProps {
  lang: Language;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].whyChoose;

  const icons = [
    <ShieldCheck className="w-5 h-5 text-[#C9A227]" key="shield" />,
    <Lock className="w-5 h-5 text-[#C9A227]" key="lock" />,
    <Globe2 className="w-5 h-5 text-[#C9A227]" key="globe" />,
    <Sparkles className="w-5 h-5 text-[#C9A227]" key="sparkles" />,
    <Clock className="w-5 h-5 text-[#C9A227]" key="clock" />,
    <HeartHandshake className="w-5 h-5 text-[#C9A227]" key="heart" />,
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0F1215] text-[#FBF9F5] border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#DFC56E] font-semibold">
            {t.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-3 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#161B20] border border-white/10 hover:border-[#C9A227]/40 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center mb-4">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#FBF9F5] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
