import React from 'react';
import { Language, PageId } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Mail, Instagram, ShieldCheck, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  onNavigate,
}) => {
  const t = CONTENT[lang].footer;
  const navT = CONTENT[lang].nav;

  const footerWhatsappUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I would like to schedule a consultation.'
  );

  return (
    <footer className="bg-[#0F1215] text-[#FBF9F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          {/* Brand Col with Official Golden Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Logo Oficial Dra. Tatiane Vilela"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(201,162,39,0.3)]"
              />
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-wide block">
                  {CLINIC_INFO.name}
                </span>
                <div className="flex items-center gap-2 text-xs text-[#DFC56E] tracking-wider uppercase font-medium mt-0.5">
                  <span>{lang === 'pt' ? CLINIC_INFO.titlePt : CLINIC_INFO.titleEn}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/60 font-mono text-[11px]">{CLINIC_INFO.crp}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/70 italic max-w-sm font-light">
              &ldquo;{lang === 'pt' ? CLINIC_INFO.sloganPt : CLINIC_INFO.sloganEn}&rdquo;
            </p>

            <div className="pt-1 text-xs text-white/60 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <span>{CLINIC_INFO.city}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <span>{lang === 'pt' ? CLINIC_INFO.onlineNotePt : CLINIC_INFO.onlineNoteEn}</span>
              </p>
            </div>

            {/* Language switcher in footer */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-white/50">{lang === 'pt' ? 'Idioma:' : 'Language:'}</span>
              <div className="inline-flex items-center bg-white/10 rounded-full p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => onLanguageChange('pt')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all ${
                    lang === 'pt'
                      ? 'bg-[#C9A227] text-[#111417] font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>🇧🇷</span>
                  <span>Português</span>
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all ${
                    lang === 'en'
                      ? 'bg-[#C9A227] text-[#111417] font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFC56E]">
              {t.navigationTitle}
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#DFC56E] transition-colors cursor-pointer"
                >
                  {navT.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-[#DFC56E] transition-colors cursor-pointer"
                >
                  {navT.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-[#DFC56E] transition-colors cursor-pointer"
                >
                  {navT.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eua')}
                  className="hover:text-[#DFC56E] transition-colors cursor-pointer"
                >
                  {navT.usa}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-[#DFC56E] transition-colors cursor-pointer"
                >
                  {navT.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFC56E]">
              {t.contactTitle}
            </h4>

            <div className="space-y-2.5 text-xs text-white/80">
              <a
                href={footerWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-semibold">{CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#DFC56E] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#DFC56E] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{CLINIC_INFO.instagram}</span>
              </a>

              <div className="pt-2 text-[11px] text-white/50 leading-relaxed">
                <p>{t.confidentialityNotice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency disclaimer & copyright */}
        <div className="pt-8 text-xs text-white/50 space-y-3 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <p>{t.copyright}</p>
          <div className="flex items-center justify-center gap-1.5 text-[#DFC56E]/80">
            <ShieldCheck className="w-4 h-4" />
            <span>{CLINIC_INFO.crp}</span>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white/5 text-[11px] text-white/40 text-center leading-normal">
          {t.emergencyNote}
        </div>
      </div>
    </footer>
  );
};
