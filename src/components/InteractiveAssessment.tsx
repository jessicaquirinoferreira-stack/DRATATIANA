import React, { useState } from 'react';
import { Language } from '../types';
import { buildWhatsAppLink } from '../data/translations';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  Heart,
  User,
  Users,
  Compass,
} from 'lucide-react';

interface InteractiveAssessmentProps {
  lang: Language;
}

export const InteractiveAssessment: React.FC<InteractiveAssessmentProps> = ({ lang }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedObjective, setSelectedObjective] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const objectivesPt = [
    {
      id: 'individual',
      title: 'Ansiedade, Autoconhecimento & Autoestima',
      desc: 'Quero superar sobrecargas, entender minhas emoções e ter mais clareza para minha vida.',
      icon: User,
    },
    {
      id: 'casal',
      title: 'Comunicação, Afeto & Crise no Casamento',
      desc: 'Quero restaurar o diálogo com meu parceiro(a), superar desgastes e reconectar a relação.',
      icon: Heart,
    },
    {
      id: 'sexual',
      title: 'Sexualidade, Desejo & Intimidade',
      desc: 'Quero cuidar da minha vida sexual, resolver inseguranças ou queixas íntimas sem tabus.',
      icon: Sparkles,
    },
    {
      id: 'eua',
      title: 'Adaptação, Saudade & Desafios nos EUA',
      desc: 'Moro no exterior e sinto falta de fazer terapia em português com quem compreende minha cultura.',
      icon: Compass,
    },
    {
      id: 'familiar',
      title: 'Relações & Dinâmica Familiar',
      desc: 'Quero mediar conflitos entre pais, filhos ou parentes e restabelecer a paz no lar.',
      icon: Users,
    },
  ];

  const objectivesEn = [
    {
      id: 'individual',
      title: 'Anxiety, Self-Discovery & Self-Esteem',
      desc: 'I want to overcome emotional overload, understand my feelings, and gain life clarity.',
      icon: User,
    },
    {
      id: 'casal',
      title: 'Communication, Love & Relationship Renewal',
      desc: 'I want to restore constructive dialogue, heal distance, and revive intimacy with my partner.',
      icon: Heart,
    },
    {
      id: 'sexual',
      title: 'Sexuality, Desire & Shame-Free Intimacy',
      desc: 'I want to address sexual concerns, lack of desire, or intimacy hurdles with expert scientific care.',
      icon: Sparkles,
    },
    {
      id: 'eua',
      title: 'Expat Reality, Homesickness & Living in the US',
      desc: 'I live in the US and need compassionate therapy in Portuguese with someone who understands my background.',
      icon: Compass,
    },
    {
      id: 'familiar',
      title: 'Family Harmony & Intergenerational Ties',
      desc: 'I want to resolve family conflict, set boundaries, and bring peace back home.',
      icon: Users,
    },
  ];

  const objectives = lang === 'pt' ? objectivesPt : objectivesEn;

  const locationsPt = [
    {
      id: 'online_eua',
      title: '100% Online nos Estados Unidos (EUA)',
      desc: 'Sessões flexíveis adaptadas ao meu fuso horário americano (EST, CST, MST, PST).',
    },
    {
      id: 'online_br',
      title: '100% Online no Brasil ou outro país',
      desc: 'Sessões por videochamada segura no conforto e privacidade da minha casa.',
    },
    {
      id: 'presencial',
      title: 'Presencial em São Bernardo do Campo – SP',
      desc: 'Atendimento no consultório físico na região do ABC Paulista.',
    },
  ];

  const locationsEn = [
    {
      id: 'online_eua',
      title: '100% Online across the United States',
      desc: 'Flexible virtual sessions adapted to my US time zone (EST, CST, MST, PST).',
    },
    {
      id: 'online_br',
      title: '100% Online in Brazil or International',
      desc: 'Encrypted video call sessions in the comfort and privacy of my home.',
    },
    {
      id: 'presencial',
      title: 'In-Person in São Bernardo do Campo (SP, Brazil)',
      desc: 'Direct consultation in the private clinic in the ABC Paulista region.',
    },
  ];

  const locations = lang === 'pt' ? locationsPt : locationsEn;

  const handleSelectObjective = (id: string) => {
    setSelectedObjective(id);
    setStep(2);
  };

  const handleSelectLocation = (id: string) => {
    setSelectedLocation(id);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedObjective('');
    setSelectedLocation('');
  };

  // Generate customized WhatsApp recommendation
  const getRecommendation = () => {
    let serviceName = '';
    let description = '';
    let prefilledMessage = '';

    if (selectedObjective === 'eua' || selectedLocation === 'online_eua') {
      serviceName =
        lang === 'pt'
          ? 'Terapia Online Especializada para Brasileiros nos EUA'
          : 'Specialized Online Therapy for US Residents';
      description =
        lang === 'pt'
          ? 'O acompanhamento ideal para você é o formato 100% Online internacional, adaptado ao seu fuso horário nos Estados Unidos, com pagamento facilitado em dólares (Zelle/Wise) e acolhimento cultural na sua língua materna.'
          : 'The ideal care path is the 100% Online international format, fitted to your US time zone with easy payment in USD (Zelle/Wise) and deep cultural empathy in Portuguese.';
      prefilledMessage =
        lang === 'pt'
          ? 'Olá Dra. Tatiane, fiz o teste no site e gostaria de agendar uma sessão de Terapia Online para quem mora nos EUA.'
          : 'Hello Dr. Tatiane, I completed the assessment on your website and would like to schedule an online therapy session from the US.';
    } else if (selectedObjective === 'sexual') {
      serviceName =
        lang === 'pt' ? 'Terapia Sexual & Bem-Estar Íntimo' : 'Sexual Therapy & Intimacy Wellness';
      description =
        lang === 'pt'
          ? 'Como sexóloga clínica especializada, a Dra. Tatiane proporciona um espaço 100% sigiloso e acolhedor para desmistificar dúvidas e trabalhar sua saúde sexual com rigor científico e leveza.'
          : 'As a certified clinical sexologist, Dr. Tatiane offers a confidential and warm environment to address sexual health with scientific rigor and natural comfort.';
      prefilledMessage =
        lang === 'pt'
          ? 'Olá Dra. Tatiane, fiz o teste no site e gostaria de agendar uma consulta sobre Terapia Sexual.'
          : 'Hello Dr. Tatiane, I took the quiz on your website and would like to book a Sexual Therapy session.';
    } else if (selectedObjective === 'casal') {
      serviceName =
        lang === 'pt' ? 'Terapia de Casal & Reconexão' : 'Couple Therapy & Reconnection';
      description =
        lang === 'pt'
          ? 'Sua indicação principal é a Terapia de Casal, onde vocês terão a mediação profissional necessária para dialogar sem conflitos destrutivos e restabelecer a intimidade.'
          : 'Your primary indication is Couple Therapy, offering skilled professional mediation to converse without blame and rebuild tenderness.';
      prefilledMessage =
        lang === 'pt'
          ? 'Olá Dra. Tatiane, fiz o teste no site e gostaria de informações sobre a Terapia de Casal.'
          : 'Hello Dr. Tatiane, I completed the assessment and would like information on Couple Therapy.';
    } else if (selectedObjective === 'familiar') {
      serviceName =
        lang === 'pt' ? 'Terapia Familiar' : 'Family Therapy';
      description =
        lang === 'pt'
          ? 'Um espaço neutro e seguro para fortalecer os laços familiares, alinhar limites e harmonizar as relações entre gerações no lar.'
          : 'A neutral and safe setting to reinforce family ties, establish respectful boundaries, and harmonize household dynamics.';
      prefilledMessage =
        lang === 'pt'
          ? 'Olá Dra. Tatiane, fiz o teste no site e gostaria de agendar uma consulta de Terapia Familiar.'
          : 'Hello Dr. Tatiane, I took the assessment and would like to book a Family Therapy consultation.';
    } else {
      serviceName =
        lang === 'pt' ? 'Terapia Individual' : 'Individual Psychotherapy';
      description =
        lang === 'pt'
          ? 'A psicoterapia individual é o caminho de ouro para organizar pensamentos, dissolver padrões de ansiedade e recuperar o protagonismo da sua própria história.'
          : 'Individual psychotherapy is the gold standard to organize thoughts, overcome anxiety loops, and reclaim mastery over your life.';
      prefilledMessage =
        lang === 'pt'
          ? 'Olá Dra. Tatiane, fiz o teste no site e gostaria de agendar uma sessão de Terapia Individual.'
          : 'Hello Dr. Tatiane, I took the quiz and would like to schedule an Individual Therapy session.';
    }

    return { serviceName, description, prefilledMessage };
  };

  const rec = getRecommendation();

  return (
    <section className="py-16 lg:py-24 bg-[#0A0C0E] text-white relative overflow-hidden border-t border-[#C9A227]/30">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#DFC56E] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>{lang === 'pt' ? 'Guia Rápido Interativo' : 'Interactive Quick Guide'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {lang === 'pt' ? 'Descubra o Cuidado Ideal para Você' : 'Find Your Ideal Therapeutic Care'}
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-2 font-light">
            {lang === 'pt'
              ? 'Em apenas 2 passos, receba a recomendação terapêutica personalizada para o seu momento de vida.'
              : 'In just 2 quick steps, receive a tailored therapeutic recommendation for your current season.'}
          </p>
        </div>

        {/* Multi-step Container */}
        <div className="bg-[#161B20]/90 backdrop-blur-md rounded-3xl border border-[#C9A227]/30 p-6 sm:p-10 shadow-2xl relative">
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step >= 1 ? 'bg-[#C9A227] text-[#0A0C0E]' : 'bg-white/10 text-white/40'
                }`}
              >
                1
              </span>
              <span className={step === 1 ? 'text-[#DFC56E] font-semibold' : 'text-white/60'}>
                {lang === 'pt' ? 'Objetivo Principal' : 'Primary Goal'}
              </span>
            </div>

            <span className="text-white/20">───</span>

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step >= 2 ? 'bg-[#C9A227] text-[#0A0C0E]' : 'bg-white/10 text-white/40'
                }`}
              >
                2
              </span>
              <span className={step === 2 ? 'text-[#DFC56E] font-semibold' : 'text-white/60'}>
                {lang === 'pt' ? 'Formato & Local' : 'Format & Location'}
              </span>
            </div>

            <span className="text-white/20">───</span>

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step === 3 ? 'bg-emerald-400 text-[#0A0C0E]' : 'bg-white/10 text-white/40'
                }`}
              >
                3
              </span>
              <span className={step === 3 ? 'text-emerald-400 font-semibold' : 'text-white/60'}>
                {lang === 'pt' ? 'Recomendação' : 'Recommendation'}
              </span>
            </div>
          </div>

          {/* STEP 1: Objective */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
                {lang === 'pt'
                  ? 'O que você mais deseja acolher ou transformar agora?'
                  : 'What would you most like to heal or transform right now?'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {objectives.map((obj) => {
                  const Icon = obj.icon;
                  return (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => handleSelectObjective(obj.id)}
                      className="p-5 rounded-2xl bg-[#0F1215] border border-white/10 hover:border-[#C9A227] hover:bg-[#1C2229] transition-all text-left flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-[#C9A227]/15 group-hover:bg-[#C9A227] transition-colors shrink-0">
                        <Icon className="w-5 h-5 text-[#DFC56E] group-hover:text-[#0A0C0E] transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white group-hover:text-[#DFC56E] transition-colors">
                          {obj.title}
                        </h4>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          {obj.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#C9A227] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Location */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {lang === 'pt'
                    ? 'Qual a sua preferência de atendimento?'
                    : 'Where and how would you like to meet?'}
                </h3>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#DFC56E] hover:underline cursor-pointer"
                >
                  ← {lang === 'pt' ? 'Voltar' : 'Back'}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleSelectLocation(loc.id)}
                    className="p-5 rounded-2xl bg-[#0F1215] border border-white/10 hover:border-[#C9A227] hover:bg-[#1C2229] transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#DFC56E] transition-colors">
                        {loc.title}
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        {loc.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#C9A227] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Personalized Result */}
          {step === 3 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#DFC56E]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#DFC56E] font-semibold">
                      {lang === 'pt' ? 'Recomendação Personalizada' : 'Tailored Recommendation'}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {rec.serviceName}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'pt' ? 'Refazer teste' : 'Retake quiz'}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                {rec.description}
              </p>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-[#0F1215] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>{lang === 'pt' ? 'Sigilo profissional absoluto' : 'Absolute confidentiality'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>{lang === 'pt' ? 'Sessões de 50 minutos' : '50-minute sessions'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>{lang === 'pt' ? 'Sem julgamentos' : 'Zero judgment'}</span>
                </div>
              </div>

              {/* Big CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={buildWhatsAppLink(rec.prefilledMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-sm sm:text-base font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>
                    {lang === 'pt'
                      ? 'Agendar esta sessão no WhatsApp'
                      : 'Schedule this session on WhatsApp'}
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
