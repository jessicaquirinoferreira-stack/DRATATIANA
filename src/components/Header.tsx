import React, { useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Menu, X, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'sobre', label: t.about },
    { id: 'servicos', label: t.services },
    { id: 'eua', label: t.usa },
    { id: 'contato', label: t.contact },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const headerWhatsappLink = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I would like to schedule a consultation.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111417]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#C9A227]/20 py-2.5'
            : 'bg-[#111417] border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Identity with Transparent Golden Emblem */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <img
                src={ASSETS.logo}
                alt="Logo Oficial Dra. Tatiane Vilela"
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(201,162,39,0.35)] group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-serif font-bold tracking-wide text-[#FBF9F5] group-hover:text-[#DFC56E] transition-colors leading-tight">
                    {CLINIC_INFO.name}
                  </span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#DFC56E] tracking-wider uppercase font-medium">
                  <span>{lang === 'pt' ? CLINIC_INFO.titlePt : CLINIC_INFO.titleEn}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/60 font-mono text-[10px]">{CLINIC_INFO.crp}</span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all relative ${
                      isActive
                        ? 'text-[#C9A227] font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A227] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Language Switcher + Sticky WhatsApp CTA */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/15">
                <button
                  type="button"
                  onClick={() => onLanguageChange('pt')}
                  aria-label="Português"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    lang === 'pt'
                      ? 'bg-[#C9A227] text-[#111417] shadow-sm font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="text-sm">🇧🇷</span>
                  <span>PT</span>
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  aria-label="English"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    lang === 'en'
                      ? 'bg-[#C9A227] text-[#111417] shadow-sm font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="text-sm">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={headerWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161B20] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                      isActive
                        ? 'bg-[#C9A227]/20 text-[#C9A227] font-bold'
                        : 'text-white/90 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href={headerWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-[#25D366] text-white shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.ctaHeader}</span>
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to offset fixed header */}
      <div className="h-20" />
    </>
  );
};
