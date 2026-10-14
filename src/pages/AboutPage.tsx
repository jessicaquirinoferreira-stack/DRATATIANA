import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Award, BookOpen, Heart, Shield, CheckCircle2, MapPin } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].about;
  const whatsappUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma primeira conversa.'
      : 'Hello Dr. Tatiane, I would like to schedule an introductory conversation.'
  );

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <span className="text-xs text-[#525E6A] font-mono">{CLINIC_INFO.crp}</span>
        </div>

        {/* Hero Banner with Dra. Tatiane's Portrait */}
        <div className="bg-[#111417] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DFC56E] font-semibold">
                {lang === 'pt' ? 'Trajetória & Filosofia Clínica' : 'Clinical Journey & Philosophy'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {CLINIC_INFO.name}
              </h1>
              <p className="text-base sm:text-lg text-[#C9A227] font-medium">
                {lang === 'pt' ? CLINIC_INFO.titlePt : CLINIC_INFO.titleEn} · {CLINIC_INFO.crp}
              </p>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl font-light leading-relaxed">
                &ldquo;{lang === 'pt' ? CLINIC_INFO.sloganPt : CLINIC_INFO.sloganEn}&rdquo;
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'pt' ? 'Falar com a Dra. Tatiane no WhatsApp' : 'Chat with Dr. Tatiane on WhatsApp'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <img
                src={ASSETS.about}
                alt="Dra. Tatiane Vilela"
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl object-cover object-top border-4 border-[#C9A227] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Deep Narrative & Office Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
              {t.title}
            </h2>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>

            <div className="p-6 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs space-y-3">
              <h3 className="text-base font-serif font-bold text-[#111417] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Compromisso com o Código de Ética' : 'Commitment to the Ethics Code'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#525E6A] leading-relaxed">
                {lang === 'pt'
                  ? 'Toda a atividade clínica é exercida sob a chancela do Conselho Regional de Psicologia (CRP SP nº 06/98605-SP), garantindo proteção jurídica, confidencialidade irrevogável e aperfeiçoamento científico contínuo.'
                  : 'All clinical practice is conducted under the licensing of the Regional Council of Psychology (CRP SP # 06/98605-SP), ensuring full legal protection, irrevocable confidentiality, and continual scientific development.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EDE6DC]">
              <img
                src={ASSETS.clinic}
                alt="Consultório Terapêutico da Dra. Tatiane Vilela"
                className="w-full aspect-[2/3] max-h-[500px] object-cover object-top"
              />
              <div className="p-5 bg-white text-xs text-[#525E6A]">
                <p className="font-semibold text-[#111417] text-sm mb-1">
                  {lang === 'pt' ? 'O Ambiente Terapêutico' : 'The Therapeutic Setting'}
                </p>
                <p>
                  {lang === 'pt'
                    ? 'Um refúgio planejado em cada detalhe para promover serenidade, acolhimento e profunda segurança emocional.'
                    : 'A sanctuary thoughtfully designed in every detail to foster serenity, warmth, and deep emotional security.'}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4EFEA] border border-[#ECDDA3] text-xs text-[#60421C] space-y-2">
              <p className="font-bold uppercase tracking-wider text-[#8C631A]">
                {lang === 'pt' ? 'Locais de Atendimento' : 'Care Locations'}
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>São Bernardo do Campo – SP (Consultório Presencial)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>100% Online em todo o território do Brasil e nos Estados Unidos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
