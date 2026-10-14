import React from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { MessageCircle, CheckCircle2, ArrowRight, ShieldCheck, Clock, User, Heart, Users, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].services;

  const getIcon = (name: string) => {
    switch (name) {
      case 'user':
        return <User className="w-8 h-8 text-[#C9A227]" />;
      case 'heart':
        return <Heart className="w-8 h-8 text-[#C9A227]" />;
      case 'users':
        return <Users className="w-8 h-8 text-[#C9A227]" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-8 h-8 text-[#C9A227]" />;
    }
  };

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <span className="text-xs text-[#525E6A]">CRP 06/98605-SP</span>
        </div>

        {/* Page Banner */}
        <div className="bg-[#111417] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#DFC56E] font-semibold">
              {lang === 'pt' ? 'Guia Completo de Serviços' : 'Complete Services Guide'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-4 font-light leading-relaxed">
              {t.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                {lang === 'pt' ? 'Sessões de 50 minutos' : '50-minute sessions'}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                {lang === 'pt' ? 'Sigilo profissional absoluto' : 'Absolute professional confidentiality'}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Sections for each service */}
        <div className="space-y-16">
          {t.items.map((service, index) => {
            const isEven = index % 2 === 0;
            const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

            return (
              <div
                key={service.id}
                id={`servico-${service.id}`}
                className={`bg-white rounded-3xl p-8 sm:p-10 border border-[#EDE6DC] shadow-sm hover:border-[#C9A227]/50 transition-all ${
                  isEven ? 'bg-white' : 'bg-[#FCFBF8]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#FBF8EB] border border-[#ECDDA3]">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
                          {service.title}
                        </h2>
                        <p className="text-sm font-medium text-[#8C631A] italic">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-[#475467] leading-relaxed">
                      {service.fullDesc.map((par, i) => (
                        <p key={i}>{par}</p>
                      ))}
                    </div>

                    {/* Benefits Grid */}
                    <div className="pt-3">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-3">
                        {lang === 'pt' ? 'O que trabalhamos nesta modalidade:' : 'What we focus on in this modality:'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((b, bi) => (
                          <div
                            key={bi}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FBF8EB]/70 text-xs sm:text-sm text-[#303841]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* For whom */}
                    <div className="pt-2">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-2">
                        {lang === 'pt' ? 'Para quem é indicado:' : 'Who is this for:'}
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#525E6A]">
                        {service.forWhom.map((fw, fwi) => (
                          <li key={fwi} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                            <span>{fw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Card Action Box */}
                  <div className="lg:col-span-4 bg-[#F4EFEA] rounded-2xl p-6 border border-[#ECDDA3] space-y-4">
                    <h3 className="text-lg font-serif font-bold text-[#111417]">
                      {lang === 'pt' ? 'Como agendar esta sessão' : 'How to book this session'}
                    </h3>
                    <p className="text-xs text-[#525E6A] leading-relaxed">
                      {lang === 'pt'
                        ? 'Você pode iniciar seu processo terapêutico de forma simples e rápida conversando diretamente conosco via WhatsApp.'
                        : 'You can begin your therapeutic process simply and quickly by chatting directly with us on WhatsApp.'}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-[#EDE6DC] text-xs text-[#60421C] space-y-1">
                      <p className="font-semibold">{lang === 'pt' ? 'Disponibilidade:' : 'Availability:'}</p>
                      <p>{lang === 'pt' ? 'Presencial em SBC e 100% Online (Brasil e EUA)' : 'In-person in SBC & 100% Online (Brazil & USA)'}</p>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{lang === 'pt' ? 'Agendar no WhatsApp' : 'Book on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
