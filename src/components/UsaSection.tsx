import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Globe, Clock, CreditCard, Sparkles, CheckCircle2, Shield, MapPin } from 'lucide-react';

interface UsaSectionProps {
  lang: Language;
}

export const UsaSection: React.FC<UsaSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].usaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);
  const [activePaymentTab, setActivePaymentTab] = useState<'zelle' | 'wise' | 'card' | 'pix'>('zelle');

  const benefitIcons = [
    <Globe className="w-5 h-5 text-[#C9A227]" key="globe" />,
    <Sparkles className="w-5 h-5 text-[#C9A227]" key="sparkles" />,
    <Clock className="w-5 h-5 text-[#C9A227]" key="clock" />,
    <CreditCard className="w-5 h-5 text-[#C9A227]" key="card" />,
  ];

  const timezones = [
    { zone: 'EST (Eastern Time)', cities: 'Miami, Orlando, Boston, New York, Atlanta' },
    { zone: 'CST (Central Time)', cities: 'Chicago, Dallas, Houston, Minneapolis' },
    { zone: 'MST (Mountain Time)', cities: 'Denver, Phoenix, Salt Lake City' },
    { zone: 'PST (Pacific Time)', cities: 'Los Angeles, San Francisco, San Diego, Seattle' },
  ];

  return (
    <section id="eua" className="py-20 lg:py-28 bg-[#0F1215] text-[#FBF9F5] relative overflow-hidden border-t border-[#C9A227]/30">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Flags & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Flags Banner */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#161B20] text-white text-xs sm:text-sm font-semibold shadow-xl mb-4 border border-[#C9A227]/50 animate-shimmer">
            <span className="text-2xl">🇧🇷</span>
            <span className="text-[#C9A227] font-bold">✕</span>
            <span className="text-2xl">🇺🇸</span>
            <span className="ml-1 tracking-wide text-[#DFC56E]">{t.highlightBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#DFC56E] font-semibold mt-2">
            {t.tagline}
          </p>
        </div>

        {/* Content Layout: Left narrative + Right visual card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-base text-white/80 leading-relaxed font-light">
              <p className="text-lg font-normal text-white">
                {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
            </div>

            {/* 4 Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#161B20] border border-white/10 hover:border-[#C9A227]/60 transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-xl bg-[#C9A227]/15 group-hover:bg-[#C9A227] transition-colors shrink-0">
                      {benefitIcons[idx % benefitIcons.length]}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#DFC56E] transition-colors">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* US Time Zones Banner */}
            <div className="p-5 rounded-2xl bg-[#161B20] border border-[#C9A227]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#DFC56E]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  {lang === 'pt' ? 'Fusos Horários dos EUA Atendidos:' : 'Covered US Time Zones:'}
                </span>
                <span className="text-white/60 font-mono text-[11px]">Online Mon-Sat</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {timezones.map((tz, i) => (
                  <div key={i} className="p-2 rounded-xl bg-[#0F1215] border border-white/5 flex flex-col justify-center">
                    <span className="font-bold text-white">{tz.zone}</span>
                    <span className="text-[11px] text-white/50 truncate">{tz.cities}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & State Badges */}
            <div className="p-4 rounded-xl bg-[#161B20] border border-white/10 text-xs text-white/80 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#DFC56E]">
                <CreditCard className="w-4 h-4 text-[#C9A227]" />
                <span>
                  {lang === 'pt'
                    ? 'Pagamento Internacional Sem Complicações:'
                    : 'Hassle-Free International Payments:'}
                </span>
              </div>
              <p className="text-white/60">
                Zelle (USD) · Wise · Cartões de Crédito Internacionais · PIX (BRL)
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.cta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Setting Visual with Glass Overlay */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C9A227] via-blue-500/20 to-emerald-500/20 rounded-3xl blur-md opacity-40" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 bg-[#161B20]">
                <img
                  src={ASSETS.usa}
                  alt="Dra. Tatiane Vilela - Terapia Online para Brasileiros nos EUA"
                  className="w-full aspect-[2/3] max-h-[560px] object-cover object-top"
                  loading="lazy"
                />

                {/* Floating pill over image */}
                <div className="absolute top-4 left-4 right-4 bg-[#0A0C0E]/95 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white shadow-xl">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="flex items-center gap-2 font-bold text-white">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      {lang === 'pt' ? 'Atendimento Online Ativo' : 'Active Online Practice'}
                    </span>
                    <span className="text-[#DFC56E] font-mono text-[11px] font-bold">
                      50 STATES
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60">
                    {lang === 'pt'
                      ? 'Terapia em português no conforto do seu lar.'
                      : 'Therapy in Portuguese in the comfort of your home.'}
                  </p>
                </div>

                <div className="p-4 bg-[#161B20] text-center border-t border-white/10 text-xs text-white/70">
                  <p className="font-medium text-[#DFC56E]">
                    {lang === 'pt'
                      ? 'California, Florida, Massachusetts, New York, Texas e todo o território dos EUA.'
                      : 'California, Florida, Massachusetts, New York, Texas and all US states.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
