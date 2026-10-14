import React, { useState } from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { MessageCircle, X, Send } from 'lucide-react';
import { ASSETS } from '../assets';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');
  const t = CONTENT[lang].floatingWidget;

  const quickOptions = [
    {
      label: t.option1,
      msg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
          : 'Hello Dr. Tatiane, I would like to schedule a consultation.',
    },
    {
      label: t.option2,
      msg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, moro nos EUA e gostaria de informações sobre terapia online.'
          : 'Hello Dr. Tatiane, I live in the US and would like details regarding online therapy.',
    },
    {
      label: t.option3,
      msg:
        lang === 'pt'
          ? 'Olá Dra. Tatiane, tenho interesse em Terapia de Casal e Sexualidade.'
          : 'Hello Dr. Tatiane, I am interested in Couple Therapy and Sexuality.',
    },
  ];

  const handleSendQuick = (message: string) => {
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      customText.trim() ||
      (lang === 'pt'
        ? 'Olá Dra. Tatiane, gostaria de mais informações.'
        : 'Hello Dr. Tatiane, I would like more information.');
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setCustomText('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#EDE6DC] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Card Header */}
          <div className="bg-[#111417] text-white p-4 flex items-center justify-between border-b border-[#C9A227]/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={ASSETS.avatar}
                  alt={CLINIC_INFO.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#C9A227]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border border-black" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-serif font-bold text-white">
                  {CLINIC_INFO.name}
                </h4>
                <p className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
                  <span>●</span> {t.onlineStatus}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body with welcoming bubble & quick options */}
          <div className="p-4 bg-[#FBF9F5] space-y-3 text-left">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs border border-[#EDE6DC] text-xs text-[#303841] leading-relaxed">
              <p className="font-semibold text-[#111417] mb-1">{t.greeting}</p>
              <p className="text-[#525E6A]">
                {lang === 'pt'
                  ? 'Escolha um assunto abaixo ou escreva sua mensagem para falar diretamente comigo:'
                  : 'Choose a topic below or type your message to chat directly:'}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5 pt-1">
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendQuick(opt.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#FBF8EB] border border-[#EDE6DC] hover:border-[#C9A227] text-xs font-medium text-[#111417] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={t.typeMessage}
                className="flex-1 px-3 py-2 rounded-xl border border-[#EDE6DC] text-xs bg-white text-[#111417] focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
                aria-label="Enviar"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Falar no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
          )}
        </button>

        {/* Small tooltip on desktop when closed */}
        {!isOpen && (
          <div className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-[#111417] text-white text-xs font-medium whitespace-nowrap shadow-lg border border-[#C9A227]/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            {lang === 'pt' ? 'Atendimento no WhatsApp' : 'Chat on WhatsApp'}
          </div>
        )}
      </div>
    </div>
  );
};
