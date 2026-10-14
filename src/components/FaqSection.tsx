import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappFaqUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, tenho uma dúvida sobre o atendimento terapêutico.'
      : 'Hello Dr. Tatiane, I have a question regarding therapeutic care.'
  );

  return (
    <section className="py-16 lg:py-24 bg-[#FBF9F5] text-[#161B20] border-t border-[#EDE6DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8C631A] font-semibold">
            {t.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111417] mt-2 leading-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#525E6A] mt-3 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#EDE6DC] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer hover:bg-[#FBF8EB]/40 transition-colors"
                >
                  <span className="text-base font-serif font-bold text-[#111417] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'transform rotate-180 bg-[#C9A227] text-white'
                        : 'bg-[#F2ECE4] text-[#734F1B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#475467] leading-relaxed border-t border-[#F7F4EE] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F4EFEA] border border-[#ECDDA3] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#ECDDA3] text-[#734F1B]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#111417]">
                {lang === 'pt' ? 'Ainda tem alguma dúvida pontual?' : 'Still have a specific question?'}
              </p>
              <p className="text-xs text-[#525E6A]">
                {lang === 'pt' ? 'Fale diretamente com nossa equipe no WhatsApp.' : 'Reach out directly on WhatsApp.'}
              </p>
            </div>
          </div>

          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{lang === 'pt' ? 'Tirar Dúvidas no WhatsApp' : 'Ask on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
