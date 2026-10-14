import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Globe, Clock, CreditCard, ShieldCheck, CheckCircle2, Heart, Star } from 'lucide-react';

interface UsaPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const UsaPage: React.FC<UsaPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].usaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);

  const statesSample = [
    'Florida (Miami, Orlando, Tampa)',
    'Massachusetts (Boston, Framingham, Worcester)',
    'California (Los Angeles, San Francisco, San Diego)',
    'New York & New Jersey (NYC, Newark)',
    'Texas (Houston, Dallas, Austin)',
    'Georgia, Washington, Illinois e todos os outros estados',
  ];

  const timezones = [
    { zone: 'EST (Eastern)', ex: 'New York, Miami, Boston, Atlanta' },
    { zone: 'CST (Central)', ex: 'Chicago, Dallas, Houston' },
    { zone: 'MST (Mountain)', ex: 'Denver, Phoenix, Salt Lake City' },
    { zone: 'PST (Pacific)', ex: 'Los Angeles, San Francisco, Seattle' },
  ];

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🇧🇷</span>
            <span className="text-xl">🇺🇸</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#111417] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/20 text-[#DFC56E] border border-[#C9A227]/40 text-xs font-medium">
                <span>🇧🇷</span>
                <span>{t.highlightBadge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {t.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
                {t.p1}
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{t.cta}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl max-w-xs">
                <img
                  src={ASSETS.usa}
                  alt="Dra. Tatiane Vilela - Online therapy USA"
                  className="w-full aspect-[2/3] max-h-[460px] object-cover object-top"
                />
                <div className="p-3 bg-[#161B20] text-center text-xs text-white/70">
                  {lang === 'pt' ? 'Atendimento no seu fuso horário' : 'Scheduled in your local US time zone'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why mother tongue matters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
              {lang === 'pt' ? 'Por que fazer psicoterapia na sua língua materna?' : 'Why engage in therapy in your native language?'}
            </h2>
            <p>
              {lang === 'pt'
                ? 'Mesmo dominando o inglês no trabalho ou na vida cotidiana, quando falamos de dores emocionais profundas, memórias de infância, dinâmicas de casal ou vulnerabilidades íntimas, a língua materna é o idioma do coração.'
                : 'Even when fully proficient in English for work and daily life, when processing deep emotional pain, childhood memories, couple struggles, or intimate vulnerabilities, our mother tongue is the language of the heart.'}
            </p>
            <p>
              {lang === 'pt'
                ? 'Com a Dra. Tatiane Vilela, você não precisa traduzir seus sentimentos nem explicar o contexto sociocultural do Brasil: ela compreende a fundo a realidade da comunidade brasileira no exterior e os impactos psicológicos da imigração.'
                : 'With Dr. Tatiane Vilela, you never have to translate your feelings or explain Brazilian cultural nuances: she thoroughly understands the reality of the diaspora and the psychological impacts of migration.'}
            </p>

            {/* US States coverage pill box */}
            <div className="p-6 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111417] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Atendemos pacientes em todos os estados dos EUA:' : 'Serving clients across all US states:'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#525E6A]">
                {statesSample.map((st, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time zones & Payment details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Time zone card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <Clock className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Fusos Horários dos EUA' : 'US Time Zones'}
                </h3>
              </div>
              <p className="text-xs text-[#525E6A]">
                {lang === 'pt'
                  ? 'Flexibilidade total de agendamento compatível com a sua rotina de trabalho nos Estados Unidos.'
                  : 'Total scheduling flexibility tailored to your work and family routine in the United States.'}
              </p>
              <div className="space-y-2 text-xs">
                {timezones.map((tz, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#FBF8EB] flex items-center justify-between">
                    <span className="font-bold text-[#111417]">{tz.zone}</span>
                    <span className="text-[#525E6A] text-[11px]">{tz.ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <CreditCard className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Formas de Pagamento Facilitadas' : 'Convenient Payment Methods'}
                </h3>
              </div>
              <p className="text-xs text-[#525E6A]">
                {lang === 'pt'
                  ? 'Pague com simplicidade em Dólares ou em Reais:'
                  : 'Pay with simplicity in US Dollars or Brazilian Reais:'}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#111417]">
                <div className="p-2 rounded-lg bg-[#F4EFEA] text-center border border-[#ECDDA3]">Zelle (USD)</div>
                <div className="p-2 rounded-lg bg-[#F4EFEA] text-center border border-[#ECDDA3]">Wise (TransferWise)</div>
                <div className="p-2 rounded-lg bg-[#F4EFEA] text-center border border-[#ECDDA3]">Cartão Internacional</div>
                <div className="p-2 rounded-lg bg-[#F4EFEA] text-center border border-[#ECDDA3]">PIX (BRL)</div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-[#111417] text-white text-center space-y-3 border border-[#C9A227]/30">
              <p className="text-sm font-serif font-bold">
                {lang === 'pt' ? 'Mora nos EUA e quer dar o primeiro passo?' : 'Living in the US and ready for the first step?'}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'pt' ? 'Conversar no WhatsApp agora' : 'Chat on WhatsApp now'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
