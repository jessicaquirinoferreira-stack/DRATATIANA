import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { MessageCircle, Phone, ShieldCheck, Heart } from 'lucide-react';

interface CtaSectionProps {
  lang: Language;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].ctaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);

  return (
    <section className="py-20 lg:py-28 bg-[#0F1215] text-[#FBF9F5] relative overflow-hidden border-t border-[#C9A227]/30">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 text-[#DFC56E] border border-[#C9A227]/30 text-xs sm:text-sm font-medium">
          <Heart className="w-3.5 h-3.5 fill-[#C9A227]" />
          <span>{lang === 'pt' ? 'O primeiro passo começa com você' : 'The first step begins with you'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
          {t.title}
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* Big CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>{t.whatsappBtn}</span>
          </a>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-white/90 border border-white/20 hover:border-[#C9A227] hover:text-[#C9A227] bg-white/5 transition-all"
          >
            <Phone className="w-4 h-4 text-[#C9A227]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Reassurances */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>{CLINIC_INFO.crp}</span>
          </div>
          <span>·</span>
          <span>{t.note}</span>
          <span>·</span>
          <span>{CLINIC_INFO.city} + 100% Online</span>
        </div>
      </div>
    </section>
  );
};
