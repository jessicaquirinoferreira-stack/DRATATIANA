import React, { useEffect, useState } from 'react';
import { ASSETS } from '../assets';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface SplashIntroProps {
  onComplete: () => void;
  lang: Language;
}

export const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete, lang }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const totalDuration = 5000; // 5 seconds
  const updateInterval = 50;

  // Preload all 6 photos + logo during the 5 seconds for instant site loading
  useEffect(() => {
    const imagesToPreload = [
      ASSETS.logo,
      ASSETS.hero,
      ASSETS.about,
      ASSETS.usa,
      ASSETS.space,
      ASSETS.presentation1,
      ASSETS.presentation2,
    ];

    let loaded = 0;
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        setImagesLoadedCount(loaded);
      };
      img.onerror = () => {
        loaded += 1;
        setImagesLoadedCount(loaded);
      };
    });
  }, []);

  // 5-second countdown & progress timer
  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleFinish();
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, []);

  const handleFinish = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const secondsRemaining = Math.max(0, Math.ceil((totalDuration - (progress / 100) * totalDuration) / 1000));

  return (
    <div
      role="banner"
      aria-label="Introdução oficial Dra. Tatiane Vilela"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-10 transition-all duration-700 select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      } bg-[#FAF7F2] text-[#161B20] overflow-hidden`}
    >
      {/* Light Luxury Ambient Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EEDCB0]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF0D6]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3E8CE]/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle luxury pattern texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Top Header: Badge & Skip Button */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EDE6DC] shadow-xs text-xs font-semibold text-[#8C631A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>CRP 06/98605-SP · Psicologia & Sexologia</span>
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-[#734F1B] hover:text-[#111417] border border-[#EDE6DC] shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <span>{lang === 'pt' ? 'Entrar no site' : 'Enter site'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center: Official Golden Logo with 3D Emboss & Shimmer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto max-w-xl px-4 animate-in fade-in zoom-in-95 duration-1000">
        {/* Logo Container with Subtle Floating Aura */}
        <div className="relative group mb-6">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#C9A227]/20 via-[#DFB75A]/30 to-transparent rounded-full blur-xl animate-pulse pointer-events-none" />

          <img
            src={ASSETS.logo}
            alt="Dra. Tatiane Vilela - Logo Dourado Oficial"
            className="w-48 sm:w-64 md:w-72 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(201,162,39,0.25)] hover:scale-102 transition-transform duration-500"
          />
        </div>

        {/* Brand Name & Slogan Reveal */}
        <div className="space-y-2.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide text-[#111417]">
            Dra. Tatiane Vilela
          </h1>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#8C631A]">
            {lang === 'pt' ? 'Psicóloga Clínica · Sexóloga' : 'Clinical Psychologist · Sexologist'}
          </p>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto my-3 rounded-full" />
          <p className="text-sm sm:text-base italic text-[#525E6A] font-light font-serif">
            &ldquo;{lang === 'pt' ? 'Saúde emocional para uma vida mais plena.' : 'Emotional health for a fuller life.'}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom: Luxury Progress Bar & Speed Preloader Indicator */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-3">
        {/* Sleek golden progress line */}
        <div className="w-full h-1.5 bg-[#EFE9DF] rounded-full overflow-hidden shadow-inner relative">
          <div
            className="h-full bg-gradient-to-r from-[#DFB75A] via-[#C9A227] to-[#8C631A] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(201,162,39,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[11px] text-[#734F1B] font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {lang === 'pt'
                ? `Carregando todas as fotos (${imagesLoadedCount}/7)...`
                : `Preloading all photos (${imagesLoadedCount}/7)...`}
            </span>
          </span>
          <span className="font-mono text-xs">{secondsRemaining}s</span>
        </div>
      </div>
    </div>
  );
};
