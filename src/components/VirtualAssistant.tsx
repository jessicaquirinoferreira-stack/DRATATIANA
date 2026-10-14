import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { CLINIC_INFO, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import {
  MessageSquare,
  X,
  Send,
  MessageCircle,
  Instagram,
  Sparkles,
  Bot,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface VirtualAssistantProps {
  lang: Language;
}

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: {
    type: 'whatsapp' | 'instagram' | 'question';
    label: string;
    payload?: string;
  }[];
}

export const VirtualAssistant: React.FC<VirtualAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getInitialMessages = (currentLang: Language): ChatMessage[] => {
    if (currentLang === 'pt') {
      return [
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: 'Olá! Sou a assistente virtual da Dra. Tatiane Vilela (CRP 06/98605-SP). Estou aqui para tirar suas dúvidas sobre os atendimentos e conectar você com a Tatiane!',
          timestamp: 'Agora',
          suggestedActions: [
            {
              type: 'question',
              label: '🇺🇸 Terapia para quem mora nos EUA',
              payload: 'Como funciona a terapia para quem mora nos EUA?',
            },
            {
              type: 'question',
              label: '✨ Terapia Sexual & Tabus',
              payload: 'Como funciona a Terapia Sexual?',
            },
            {
              type: 'question',
              label: '💬 Terapia de Casal',
              payload: 'Como funciona a Terapia de Casal?',
            },
            {
              type: 'question',
              label: '📍 Local do consultório presencial',
              payload: 'Onde fica o consultório presencial?',
            },
            {
              type: 'question',
              label: '📅 Como agendar e valores',
              payload: 'Como agendar uma consulta e quais os valores?',
            },
            {
              type: 'whatsapp',
              label: '🟢 Falar direto no WhatsApp',
              payload: 'Olá Dra. Tatiane, gostaria de falar com você sobre agendamento de consulta.',
            },
            {
              type: 'instagram',
              label: '🟣 Ver Instagram da Tatiane',
            },
          ],
        },
      ];
    } else {
      return [
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: 'Hello! I am Dr. Tatiane Vilela\'s virtual assistant (CRP 06/98605-SP). I am here to answer your questions about our therapy modalities and connect you directly with Dr. Tatiane!',
          timestamp: 'Just now',
          suggestedActions: [
            {
              type: 'question',
              label: '🇺🇸 Online Therapy in the US',
              payload: 'How does online therapy work for US residents?',
            },
            {
              type: 'question',
              label: '✨ Sexual Therapy details',
              payload: 'How does Sexual Therapy work?',
            },
            {
              type: 'question',
              label: '💬 Couple Therapy',
              payload: 'How does Couple Therapy work?',
            },
            {
              type: 'question',
              label: '📍 In-person practice location',
              payload: 'Where is the in-person office located?',
            },
            {
              type: 'question',
              label: '📅 Booking & fees',
              payload: 'How to book a session and fee information?',
            },
            {
              type: 'whatsapp',
              label: '🟢 Speak directly on WhatsApp',
              payload: 'Hello Dr. Tatiane, I would like to chat regarding scheduling an appointment.',
            },
            {
              type: 'instagram',
              label: '🟣 Visit Tatiane\'s Instagram',
            },
          ],
        },
      ];
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => getInitialMessages(lang));

  // Reset or translate when language changes
  useEffect(() => {
    setMessages(getInitialMessages(lang));
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const processResponse = (userInput: string) => {
    const query = userInput.toLowerCase();

    let reply = '';
    let actions: ChatMessage['suggestedActions'] = [];

    if (lang === 'pt') {
      if (query.includes('eua') || query.includes('estados unidos') || query.includes('morar fora') || query.includes('exterior') || query.includes('dolar') || query.includes('fuso')) {
        reply =
          'A Dra. Tatiane realiza atendimento 100% ONLINE para brasileiros que moram nos Estados Unidos em todos os 50 estados (Flórida, Massachusetts, Califórnia, Nova York, Texas, etc.) e americanos que falam português! As sessões são no fuso horário do paciente (EST, CST, MST, PST) e os pagamentos são facilitados via Zelle, Wise, Cartão Internacional ou PIX.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Agendar sessão dos EUA no WhatsApp',
            payload: 'Olá Dra. Tatiane, moro nos Estados Unidos e gostaria de agendar uma consulta online.',
          },
          {
            type: 'instagram',
            label: '🟣 Acompanhar conteúdos no Instagram',
          },
        ];
      } else if (query.includes('sexual') || query.includes('sexo') || query.includes('desejo') || query.includes('orgasmo') || query.includes('ereção') || query.includes('tabu')) {
        reply =
          'A Terapia Sexual com a Dra. Tatiane é conduzida com máximo rigor científico, sigilo e leveza. Trabalhamos questões como falta ou discrepância de desejo, dores na relação, anorgasmia, ejaculação precoce, dificuldades eréteis ou autoconhecimento corporal — para pessoas solteiras ou casais, sem tabus e sem nenhum julgamento.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Tirar dúvidas sobre Terapia Sexual no WhatsApp',
            payload: 'Olá Dra. Tatiane, gostaria de saber mais sobre a Terapia Sexual com total sigilo.',
          },
          {
            type: 'instagram',
            label: '🟣 Ver vídeos sobre sexualidade no Instagram',
          },
        ];
      } else if (query.includes('casal') || query.includes('casamento') || query.includes('namoro') || query.includes('divorcio') || query.includes('traição') || query.includes('relação')) {
        reply =
          'A Terapia de Casal ajuda a reconstruir a comunicação empática, restaurar a intimidade e a cumplicidade, alinhar projetos de vida e mediar momentos de crise ou transição sem ataques. As sessões podem ser presenciais ou online.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Agendar Terapia de Casal no WhatsApp',
            payload: 'Olá Dra. Tatiane, gostaria de agendar uma sessão de Terapia de Casal.',
          },
          {
            type: 'instagram',
            label: '🟣 Ver dicas para casais no Instagram',
          },
        ];
      } else if (query.includes('individual') || query.includes('ansiedade') || query.includes('depressao') || query.includes('autoestima') || query.includes('luto')) {
        reply =
          'A Terapia Individual é um processo acolhedor e profundo de autoconhecimento para lidar com ansiedade, insegurança, sobrecarga mental, luto, términos e fortalecimento da autoestima. Sessões de 50 minutos semanais.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Agendar Terapia Individual',
            payload: 'Olá Dra. Tatiane, gostaria de agendar uma sessão de Terapia Individual.',
          },
          {
            type: 'instagram',
            label: '🟣 Conhecer o trabalho no Instagram',
          },
        ];
      } else if (query.includes('familiar') || query.includes('familia') || query.includes('filhos') || query.includes('pais')) {
        reply =
          'A Terapia Familiar foca em harmonizar as dinâmicas entre gerações, construir limites saudáveis e restaurar o diálogo no lar durante fases de conflito ou reestruturação familiar.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Falar sobre Terapia Familiar no WhatsApp',
            payload: 'Olá Dra. Tatiane, gostaria de informações sobre a Terapia Familiar.',
          },
        ];
      } else if (query.includes('onde') || query.includes('local') || query.includes('endereço') || query.includes('presencial') || query.includes('são bernardo')) {
        reply =
          'O consultório presencial da Dra. Tatiane fica em São Bernardo do Campo – SP (região do ABC Paulista), em um espaço acolhedor e privativo com fácil acesso e estacionamento. Os atendimentos presenciais acontecem mediante agendamento prévio!';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Consultar horários presenciais em SBC',
            payload: 'Olá Dra. Tatiane, gostaria de verificar os horários para atendimento presencial em São Bernardo do Campo.',
          },
          {
            type: 'instagram',
            label: '🟣 Conhecer o consultório no Instagram',
          },
        ];
      } else if (query.includes('valor') || query.includes('preço') || query.includes('quanto custa') || query.includes('agendar') || query.includes('marcar') || query.includes('horario')) {
        reply =
          'Em conformidade com o Código de Ética do Psicólogo (CFP), valores e honorários são informados diretamente no primeiro contato de acordo com a modalidade (individual, casal, familiar ou sexual). Para verificar horários disponíveis e valores, o caminho mais rápido e seguro é falar no WhatsApp oficial!';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Consultar valores e horários no WhatsApp',
            payload: 'Olá Dra. Tatiane, gostaria de consultar os valores e horários disponíveis para consulta.',
          },
          {
            type: 'instagram',
            label: '🟣 Visitar o perfil @dra.tatianevilelapsi',
          },
        ];
      } else if (query.includes('instagram') || query.includes('insta') || query.includes('post') || query.includes('conteudo')) {
        reply =
          'A Dra. Tatiane compartilha diariamente no Instagram reflexões profundas sobre saúde emocional, dicas de relacionamento, desmistificação da sexualidade e bastidores do consultório. Siga @dra.tatianevilelapsi!';
        actions = [
          {
            type: 'instagram',
            label: '🟣 Acessar o Instagram @dra.tatianevilelapsi',
          },
          {
            type: 'whatsapp',
            label: '🟢 Falar diretamente no WhatsApp',
            payload: 'Olá Dra. Tatiane, vim pelo seu perfil do Instagram e gostaria de agendar uma consulta.',
          },
        ];
      } else if (query.includes('crp') || query.includes('quem é') || query.includes('tatiane') || query.includes('formação')) {
        reply =
          'A Dra. Tatiane Vilela é psicóloga clínica credenciada no CRP (CRP 06/98605-SP) e especialista em Sexologia Clínica, com mais de 14 anos de experiência e mais de 1.500 pacientes acolhidos. Sua abordagem combina rigor técnico, escuta empática e zero julgamento.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Falar com a Dra. Tatiane no WhatsApp',
            payload: 'Olá Dra. Tatiane, gostaria de tirar algumas dúvidas e agendar uma consulta.',
          },
          {
            type: 'instagram',
            label: '🟣 Seguir @dra.tatianevilelapsi',
          },
        ];
      } else {
        reply =
          'Compreendo perfeitamente. A Dra. Tatiane Vilela está à disposição para acolher sua história com todo carinho, sigilo e atenção. Gostaria de enviar sua dúvida diretamente pelo WhatsApp ou dar uma olhada nos conteúdos do Instagram?';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Enviar mensagem no WhatsApp',
            payload: `Olá Dra. Tatiane, gostaria de tirar uma dúvida sobre: ${userInput}`,
          },
          {
            type: 'instagram',
            label: '🟣 Ver o Instagram da Tatiane',
          },
        ];
      }
    } else {
      // English responses
      if (query.includes('usa') || query.includes('united states') || query.includes('online') || query.includes('timezone') || query.includes('dollar') || query.includes('zelle')) {
        reply =
          'Dr. Tatiane provides 100% ONLINE therapy in Portuguese across all 50 US states (Florida, Massachusetts, California, New York, Texas, etc.) and for Portuguese-speaking Americans. Sessions accommodate US time zones (EST, CST, MST, PST) and payments are seamless via Zelle, Wise, or International Credit Cards.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Schedule US Online Session on WhatsApp',
            payload: 'Hello Dr. Tatiane, I live in the United States and would like to schedule an online consultation.',
          },
          {
            type: 'instagram',
            label: '🟣 Follow Dr. Tatiane on Instagram',
          },
        ];
      } else if (query.includes('sex') || query.includes('desire') || query.includes('erectile') || query.includes('pain') || query.includes('intimacy')) {
        reply =
          'Sexual Therapy with Dr. Tatiane is guided by scientific evidence, absolute discretion, and open-minded care. We address desire discrepancies, performance anxiety, intimacy hurdles, and bodily connection without taboos or judgment.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Speak about Sexual Therapy on WhatsApp',
            payload: 'Hello Dr. Tatiane, I would like confidential information regarding Sexual Therapy.',
          },
          {
            type: 'instagram',
            label: '🟣 Visit Instagram for educational insights',
          },
        ];
      } else if (query.includes('couple') || query.includes('marriage') || query.includes('relationship') || query.includes('divorce')) {
        reply =
          'Couple Therapy fosters compassionate communication, rebuilds mutual trust and affection, and resolves accumulated conflicts without hostility. Available both in-person and online.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Book Couple Therapy on WhatsApp',
            payload: 'Hello Dr. Tatiane, I would like to schedule a Couple Therapy consultation.',
          },
          {
            type: 'instagram',
            label: '🟣 Explore relationship tips on Instagram',
          },
        ];
      } else if (query.includes('cost') || query.includes('price') || query.includes('schedule') || query.includes('book') || query.includes('fee')) {
        reply =
          'In alignment with professional psychological ethics, fees and available appointment slots are provided directly upon first contact. You can quickly reach out on WhatsApp to check availability!';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Check fees & availability on WhatsApp',
            payload: 'Hello Dr. Tatiane, I would like to inquire about fees and available schedule slots.',
          },
          {
            type: 'instagram',
            label: '🟣 Follow @dra.tatianevilelapsi',
          },
        ];
      } else if (query.includes('location') || query.includes('where') || query.includes('office') || query.includes('in person')) {
        reply =
          'The in-person clinic is conveniently located in São Bernardo do Campo – SP (Greater São Paulo, Brazil), in a serene, private, and welcoming setting by prior appointment.';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Inquire about in-person appointments',
            payload: 'Hello Dr. Tatiane, I would like details about in-person sessions in São Bernardo do Campo.',
          },
          {
            type: 'instagram',
            label: '🟣 Check clinic photos on Instagram',
          },
        ];
      } else {
        reply =
          'Thank you for reaching out! Dr. Tatiane Vilela welcomes your story with empathy and strict confidentiality. Would you like to connect directly on WhatsApp or browse her educational videos and insights on Instagram?';
        actions = [
          {
            type: 'whatsapp',
            label: '🟢 Chat on WhatsApp',
            payload: `Hello Dr. Tatiane, I have a question regarding: ${userInput}`,
          },
          {
            type: 'instagram',
            label: '🟣 Visit Instagram Profile',
          },
        ];
      }
    }

    return { reply, actions };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const { reply, actions } = processResponse(text);
      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: 'Agora',
        suggestedActions: actions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action: {
    type: 'whatsapp' | 'instagram' | 'question';
    label: string;
    payload?: string;
  }) => {
    if (action.type === 'whatsapp') {
      const msg =
        action.payload ||
        (lang === 'pt'
          ? 'Olá Dra. Tatiane, vim pela assistente virtual e gostaria de agendar uma consulta.'
          : 'Hello Dr. Tatiane, I came via the virtual assistant and would like to schedule a consultation.');
      window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
    } else if (action.type === 'instagram') {
      window.open(CLINIC_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'question' && action.payload) {
      handleSendMessage(action.payload);
    }
  };

  const handleResetChat = () => {
    setMessages(getInitialMessages(lang));
  };

  return (
    <>
      {/* Floating Assistant Trigger Button on BOTTOM LEFT */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={lang === 'pt' ? 'Falar com a Assistente Virtual' : 'Chat with Virtual Assistant'}
          className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#111417] text-white shadow-2xl hover:shadow-black/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C9A227]/40 group focus:outline-none focus:ring-2 focus:ring-[#C9A227] cursor-pointer"
        >
          {/* Subtle gold glow pulse */}
          <span className="absolute -inset-1 rounded-full bg-[#C9A227]/25 blur-xs animate-pulse pointer-events-none" />

          {/* Assistant Avatar / Icon */}
          <div className="relative">
            <img
              src={ASSETS.avatar}
              alt="Assistente Tatiane Vilela"
              className="w-8 h-8 rounded-full object-cover border border-[#C9A227]"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
          </div>

          <div className="text-left hidden xs:block sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-semibold text-[#FBF9F5] group-hover:text-[#DFC56E] transition-colors">
                {lang === 'pt' ? 'Assistente Virtual' : 'Virtual Assistant'}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            </div>
            <p className="text-[10px] text-emerald-400 font-medium leading-none mt-0.5">
              {lang === 'pt' ? 'Tire suas dúvidas agora' : 'Ask questions now'}
            </p>
          </div>

          {/* Mobile minimal icon fallback */}
          <div className="block xs:hidden sm:hidden">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
          </div>
        </button>
      </div>

      {/* Floating Chat Modal on BOTTOM LEFT */}
      {isOpen && (
        <div className="fixed bottom-22 sm:bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] max-h-[82vh] sm:max-h-[580px] bg-white rounded-2xl shadow-2xl border border-[#EDE6DC] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#111417] text-white p-4 flex items-center justify-between border-b border-[#C9A227]/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={ASSETS.avatar}
                  alt="Dra. Tatiane Vilela"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#C9A227]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-serif font-bold text-white">
                    {lang === 'pt' ? 'Assistente Tatiane Vilela' : 'Tatiane Vilela Assistant'}
                  </h4>
                </div>
                <p className="text-[11px] text-[#DFC56E] font-medium">
                  {lang === 'pt' ? 'Orientação imediata & Encaminhamento' : 'Instant guidance & referral'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title={lang === 'pt' ? 'Reiniciar conversa' : 'Restart chat'}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={lang === 'pt' ? 'Fechar' : 'Close'}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Direct Referral Bar */}
          <div className="bg-[#161B20] px-4 py-2 flex items-center justify-between text-[11px] border-b border-white/10">
            <span className="text-white/60">
              {lang === 'pt' ? 'Canais diretos:' : 'Direct channels:'}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={buildWhatsAppLink(
                  lang === 'pt'
                    ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
                    : 'Hello Dr. Tatiane, I would like to schedule a consultation.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-3 h-3 fill-white" />
                <span>WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all"
              >
                <Instagram className="w-3 h-3" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FBF9F5] text-left text-xs sm:text-sm">
            {messages.map((msg) => {
              const isBot = msg.sender === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-xs ${
                      isBot
                        ? 'bg-white text-[#161B20] rounded-tl-xs border border-[#EDE6DC]'
                        : 'bg-[#111417] text-white rounded-tr-xs border border-[#C9A227]/30'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Render Suggested Actions / CTAs for assistant responses */}
                  {isBot && msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                      {msg.suggestedActions.map((action, idx) => {
                        const isWhatsApp = action.type === 'whatsapp';
                        const isInstagram = action.type === 'instagram';

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleActionClick(action)}
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-xs cursor-pointer ${
                              isWhatsApp
                                ? 'bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold'
                                : isInstagram
                                ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-semibold hover:opacity-95'
                                : 'bg-white hover:bg-[#FBF8EB] text-[#111417] border border-[#EDE6DC] hover:border-[#C9A227]'
                            }`}
                          >
                            {isWhatsApp && <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />}
                            {isInstagram && <Instagram className="w-3.5 h-3.5 shrink-0" />}
                            <span>{action.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl rounded-tl-xs border border-[#EDE6DC] w-20">
                <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-bounce" />
                <span
                  className="w-2 h-2 rounded-full bg-[#C9A227] animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#C9A227] animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#EDE6DC] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                lang === 'pt'
                  ? 'Digite sua pergunta ou assunto...'
                  : 'Type your question or topic...'
              }
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#EDE6DC] bg-[#FCFBF8] text-xs sm:text-sm text-[#111417] focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              aria-label="Enviar mensagem"
              className="p-2.5 rounded-xl bg-[#111417] text-[#DFC56E] hover:bg-[#21272E] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
