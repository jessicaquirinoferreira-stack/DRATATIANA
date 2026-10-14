/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { CLINIC_INFO, CONTENT } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveAssessment } from './components/InteractiveAssessment';
import { WhyChooseSection } from './components/WhyChooseSection';
import { UsaSection } from './components/UsaSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingInstagram } from './components/FloatingInstagram';
import { VirtualAssistant } from './components/VirtualAssistant';
import { SplashIntro } from './components/SplashIntro';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { UsaPage } from './pages/UsaPage';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showSplash, setShowSplash] = useState(true);

  // Sync document title and meta description dynamically with language
  useEffect(() => {
    if (lang === 'pt') {
      document.title = 'Dra. Tatiane Vilela | Psicóloga & Sexóloga (CRP 06/98605-SP)';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Consultório de Psicologia e Sexologia com Dra. Tatiane Vilela (CRP 06/98605-SP). Atendimento presencial em São Bernardo do Campo e 100% online para todo o Brasil e Estados Unidos.'
        );
      }
    } else {
      document.title = 'Dr. Tatiane Vilela | Psychologist & Sexologist (CRP 06/98605-SP)';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Psychology and Sexology Practice with Dr. Tatiane Vilela (CRP 06/98605-SP). In-person care in São Bernardo do Campo (Brazil) and 100% online for clients across the United States.'
        );
      }
    }
  }, [lang]);

  // Handle Hash routing for quick bookmarking or navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'sobre', 'servicos', 'eua', 'contato'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    if (currentPage === 'home') {
      const el = document.getElementById('servicos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('servicos');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#161B20] flex flex-col font-sans selection:bg-[#C9A227]/25 selection:text-[#111417]">
      {/* Fixed Sticky Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section with Photo 4912 */}
            <Hero lang={lang} onExploreServices={handleExploreServices} />

            {/* Infinite Trust Marquee Ribbon */}
            <TrustMarquee lang={lang} />

            {/* 2. About / Quem sou eu with Photo 4915 */}
            <AboutSection lang={lang} />

            {/* 3. Services / Serviços (4 exact cards with depth) */}
            <ServicesSection lang={lang} />

            {/* Interactive Therapy Diagnostic Assessment Widget */}
            <InteractiveAssessment lang={lang} />

            {/* 4. Why choose me / Por que me escolher */}
            <WhyChooseSection lang={lang} />

            {/* 5. Online for Brazilians in the USA with Photo 4918 */}
            <UsaSection lang={lang} />

            {/* 6. Official Photo Gallery showcasing all 4 photos completely */}
            <PhotoGallerySection lang={lang} />

            {/* 7. Testimonials (4 realistic short reviews) */}
            <TestimonialsSection lang={lang} />

            {/* 8. FAQ */}
            <FaqSection lang={lang} />

            {/* 9. CTA Section (very strong) */}
            <CtaSection lang={lang} />

            {/* 10. Contact / Contato */}
            <ContactSection lang={lang} />
          </>
        )}

        {currentPage === 'servicos' && (
          <ServicesPage lang={lang} onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'sobre' && (
          <AboutPage lang={lang} onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'eua' && (
          <UsaPage lang={lang} onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'contato' && (
          <div className="pt-6">
            <ContactSection lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onNavigate={handleNavigate}
      />

      {/* FLOATING ACTION BUTTONS */}
      {/* LEFT SIDE: Interactive Virtual Assistant (Q&A + WhatsApp / Instagram referrals) */}
      <VirtualAssistant lang={lang} />

      {/* RIGHT SIDE: Official Instagram Floating Button */}
      <FloatingInstagram lang={lang} />

      {/* RIGHT SIDE: Official WhatsApp Floating Button */}
      <FloatingWhatsApp lang={lang} />

      {/* 5-SECOND LIGHT-THEMED INTRO WITH EMBOSSED GOLDEN LOGO & ASSET PRELOADER */}
      {showSplash && (
        <SplashIntro onComplete={() => setShowSplash(false)} lang={lang} />
      )}
    </div>
  );
}
