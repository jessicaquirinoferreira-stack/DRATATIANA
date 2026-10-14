import React, { useState } from 'react';
import { Language } from '../types';
import { ASSETS } from '../assets';
import { CLINIC_INFO, buildWhatsAppLink } from '../data/translations';
import { Sparkles, MessageCircle, X, Maximize2, ShieldCheck, HeartHandshake, MapPin, Award } from 'lucide-react';

interface PhotoGallerySectionProps {
  lang: Language;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({ lang }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // 3 unique photos strictly displayed here: photo_unnamed_2, photo_unnamed_3, photo_4912
  const presentationItems = [
    {
      src: ASSETS.presentation1,
      aspect: 'aspect-square',
      title: lang === 'pt' ? 'Registro Profissional & Rigor Técnico' : 'Professional Credential & Ethics',
      subtitle: lang === 'pt' ? 'CRP 06/98605-SP · Psicologia & Sexologia' : 'CRP 06/98605-SP · Psychology & Sexology',
      desc:
        lang === 'pt'
          ? 'Formação sólida e contínuo aprimoramento científico. Prática clínica fundamentada na ética do Conselho Federal de Psicologia e na compreensão profunda do comportamento humano.'
          : 'Solid clinical training and continuous scientific development. Ethical practice grounded in the Psychology Licensing Council and deep understanding of human behavior.',
      tag: lang === 'pt' ? 'Registro Oficial' : 'Official License',
      whatsappMsg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, gostaria de verificar a disponibilidade de horários para consulta.'
          : 'Hello Dr. Tatiane, I would like to check appointment availability.',
      icon: Award,
    },
    {
      src: ASSETS.presentation2,
      aspect: 'aspect-square',
      title: lang === 'pt' ? 'Acolhimento & Vínculo Terapêutico' : 'Empathetic Connection & Trust',
      subtitle: lang === 'pt' ? 'Escuta Sensível e Sem Julgamentos' : 'Sensitive, Non-Judgmental Listening',
      desc:
        lang === 'pt'
          ? 'Mais do que uma técnica, a terapia é um encontro genuíno. Um espaço seguro onde suas angústias, vulnerabilidades e história são acolhidas com respeito absoluto e calor humano.'
          : 'More than a clinical method, therapy is a genuine human encounter. A secure space where vulnerabilities and personal stories are embraced with warmth and zero judgment.',
      tag: lang === 'pt' ? 'Apresentação' : 'Meet Tatiane',
      whatsappMsg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, li sua apresentação e gostaria de iniciar meu processo terapêutico.'
          : 'Hello Dr. Tatiane, I read your presentation and would like to start my therapy journey.',
      icon: HeartHandshake,
    },
    {
      src: ASSETS.space,
      aspect: 'aspect-[2/3]',
      title: lang === 'pt' ? 'Conheça o Meu Espaço Terapêutico' : 'The Therapeutic Sanctuary',
      subtitle: lang === 'pt' ? 'Presencial em SBC e 100% Online' : 'In-Person in SBC & 100% Online',
      desc:
        lang === 'pt'
          ? 'Ambiente acolhedor estruturado para conversas reais, com total privacidade e serenidade. Escuta, respeito, acolhimento, evolução e mais você em cada sessão.'
          : 'A comforting setting structured for genuine conversations with total privacy and serenity. Listening, respect, warmth, personal growth, and authentic self.',
      tag: lang === 'pt' ? 'O Consultório' : 'The Practice',
      whatsappMsg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, gostaria de conhecer o consultório e agendar uma consulta.'
          : 'Hello Dr. Tatiane, I would like to learn about the clinic and schedule a session.',
      icon: MapPin,
    },
  ];

  return (
    <section id="apresentacao" className="py-20 lg:py-28 bg-[#0F1215] text-[#FBF9F5] border-t border-[#C9A227]/30 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#161B20] border border-[#C9A227]/40 text-[#DFC56E] text-xs font-semibold mb-3.5">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>{lang === 'pt' ? 'Registro & Apresentação' : 'Credentials & Presentation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {lang === 'pt'
              ? 'Compromisso Ético & Identidade Clínica'
              : 'Ethical Commitment & Clinical Identity'}
          </h2>
          <p className="text-base sm:text-lg text-white/75 mt-3 font-light leading-relaxed">
            {lang === 'pt'
              ? 'Conheça em detalhes a trajetória, o registro oficial e o ambiente dedicado a transformar sua saúde emocional.'
              : 'Discover the clinical background, official credentials, and sanctuary dedicated to your emotional well-being.'}
          </p>
        </div>

        {/* 3 Presentation Cards - Tailored aspect ratio, showing each photo completely without repeats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {presentationItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-[#161B20] border-2 border-[#C9A227]/30 hover:border-[#C9A227] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-[#0A0C0E]`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161B20] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Top Tag & Zoom button */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#0A0C0E]/90 backdrop-blur-md text-[#DFC56E] border border-[#C9A227]/40 font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{item.tag}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPhotoIndex(idx)}
                      aria-label="Ampliar foto"
                      className="p-2 rounded-full bg-[#0A0C0E]/85 text-white/80 hover:text-white hover:bg-[#C9A227] transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content & Action Button */}
                <div className="p-6 text-left space-y-4 bg-[#161B20] flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#DFC56E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#DFC56E] mt-1 font-mono">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-white/70 mt-3 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={buildWhatsAppLink(item.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                      <span>{lang === 'pt' ? 'Falar no WhatsApp' : 'Speak on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full Uncropped View */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#161B20] rounded-3xl overflow-hidden border-2 border-[#C9A227] shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-[#C9A227] transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Complete photo display */}
            <div className="w-full max-h-[75vh] bg-[#0A0C0E] flex items-center justify-center overflow-hidden p-2">
              <img
                src={presentationItems[selectedPhotoIndex].src}
                alt={presentationItems[selectedPhotoIndex].title}
                className="w-full h-full max-h-[70vh] object-contain object-center rounded-2xl"
              />
            </div>

            <div className="p-5 text-left bg-[#161B20] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h4 className="text-lg font-serif font-bold text-white">
                  {presentationItems[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs text-[#DFC56E] font-mono mt-0.5">
                  {presentationItems[selectedPhotoIndex].subtitle}
                </p>
              </div>

              <a
                href={buildWhatsAppLink(presentationItems[selectedPhotoIndex].whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'pt' ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
