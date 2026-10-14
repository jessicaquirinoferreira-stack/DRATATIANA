import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Globe, CheckCircle2, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreServices }) => {
  const t = CONTENT[lang].hero;

  const whatsappHeroUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, vi o seu site e gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I saw your website and would like to schedule a consultation.'
  );

  return (
    <section className="relative overflow-hidden bg-[#0A0C0E] text-[#FBF9F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#C9A227]/30">
      {/* Dynamic ambient glowing aura in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A227]/12 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#8C631A]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#25D366]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle luxury ambient pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161B20] text-[#DFC56E] border border-[#C9A227]/40 font-semibold shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{t.highlightBadge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.onlineBadge}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-white/80 border border-white/10 text-[11px]">
                <Star className="w-3 h-3 fill-[#C9A227] text-[#C9A227]" />
                <span>+14 Anos de Experiência</span>
              </span>
            </div>

            {/* Main Headline with gold gradient touch */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FBF9F5] leading-[1.12] tracking-tight">
              {lang === 'pt' ? (
                <>
                  Mais conexão com a sua história para uma{' '}
                  <span className="text-gold-gradient">vida mais plena.</span>
                </>
              ) : (
                <>
                  More connection with your story for a{' '}
                  <span className="text-gold-gradient">fuller life.</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl font-light leading-relaxed">
              {t.subheadline}
            </p>

            {/* Slogan highlight banner */}
            <div className="border-l-3 border-[#C9A227] bg-white/5 rounded-r-2xl px-4 py-2.5 text-sm sm:text-base italic text-[#E3D9C8] flex items-center justify-between">
              <span>&ldquo;{lang === 'pt' ? CLINIC_INFO.sloganPt : CLINIC_INFO.sloganEn}&rdquo;</span>
              <Sparkles className="w-4 h-4 text-[#C9A227] shrink-0 ml-3" />
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>{t.ctaPrimary}</span>
              </a>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-[#FBF9F5] border border-white/25 hover:border-[#C9A227] hover:text-[#DFC56E] bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Numeric Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">+14</p>
                <p className="text-xs text-white/60 mt-0.5">
                  {lang === 'pt' ? 'Anos de clínica' : 'Years of practice'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">+1.500</p>
                <p className="text-xs text-white/60 mt-0.5">
                  {lang === 'pt' ? 'Vidas acolhidas' : 'Patients welcomed'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">50 EUA</p>
                <p className="text-xs text-white/60 mt-0.5">
                  {lang === 'pt' ? 'Estados atendidos' : 'US states covered'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">100%</p>
                <p className="text-xs text-white/60 mt-0.5">
                  {lang === 'pt' ? 'Sigiloso & Seguro' : 'Confidential'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Card with Framed Portrait & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Luxury gold glow halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C9A227] via-[#8C631A] to-emerald-500/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700" />
              
              <div className="relative rounded-3xl overflow-hidden bg-[#161B20] border-2 border-[#C9A227]/40 shadow-2xl">
                <img
                  src={ASSETS.hero}
                  alt="Dra. Tatiane Vilela - Psicóloga e Sexóloga"
                  className="w-full aspect-[2/3] max-h-[560px] object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />

                {/* Floating Top Pill Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A0C0E]/90 backdrop-blur-md text-[#DFC56E] border border-[#C9A227]/40 font-semibold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Psicóloga & Sexóloga</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-[11px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Online</span>
                  </span>
                </div>

                {/* Bottom luxury frosted card overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A0C0E] via-[#0A0C0E]/90 to-transparent p-6 pt-14 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                        {CLINIC_INFO.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#DFC56E] tracking-wider uppercase mt-0.5">
                        {lang === 'pt' ? CLINIC_INFO.titlePt : CLINIC_INFO.titleEn} · {CLINIC_INFO.crp}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                      <span>{CLINIC_INFO.city}</span>
                    </span>
                    <span className="text-[#DFC56E] font-medium">100% Online Brasil & EUA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
