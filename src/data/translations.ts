import { ServiceItem, TestimonialItem, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'Dra. Tatiane Vilela',
  titlePt: 'Psicóloga | Sexóloga',
  titleEn: 'Psychologist | Sexologist',
  crp: 'CRP 06/98605-SP',
  sloganPt: 'Saúde emocional para uma vida mais plena.',
  sloganEn: 'Emotional health for a fuller life.',
  phoneDisplay: '+55 11 97644-0090',
  phoneRaw: '5511976440090',
  whatsappBaseUrl: 'https://wa.me/5511976440090',
  email: 'Dra.tatianevilela@uol.com.br',
  instagram: '@dra.tatianevilelapsi',
  instagramUrl: 'https://instagram.com/dra.tatianevilelapsi',
  city: 'São Bernardo do Campo – SP (Brasil)',
  onlineNotePt: 'Atendimento 100% ONLINE para brasileiros que moram nos Estados Unidos e americanos que falam português. Terapia em português em todos os estados dos EUA.',
  onlineNoteEn: '100% ONLINE therapy for Brazilians living in the United States and Portuguese-speaking Americans. Therapy in Portuguese across all US states.',
};

export function buildWhatsAppLink(message: string): string {
  return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const CONTENT = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Quem sou eu',
      services: 'Serviços',
      usa: 'Terapia Online EUA',
      contact: 'Contato',
      ctaHeader: 'Agendar no WhatsApp',
    },
    hero: {
      badge: 'Atendimento Presencial em SP & 100% Online no Brasil e EUA',
      headline: 'Mais conexão com a sua história para uma vida mais plena.',
      subheadline:
        'Um espaço acolhedor, seguro e confidencial para cuidar da sua saúde mental, dos seus relacionamentos e da sua intimidade sexual.',
      ctaPrimary: 'Agendar consulta no WhatsApp',
      ctaSecondary: 'Conhecer os serviços',
      highlightBadge: 'CRP 06/98605-SP',
      onlineBadge: '100% Online nos EUA & Brasil',
      stats: [
        { label: 'Anos de experiência clínica', value: '+14' },
        { label: 'Pacientes acolhidos', value: '+1.500' },
        { label: 'Atendimento global', value: 'Brasil & EUA' },
      ],
    },
    about: {
      tagline: 'Quem sou eu',
      title: 'Um espaço de escuta sensível, respeito e transformação',
      p1: 'Olá! Sou a Dra. Tatiane Vilela (CRP 06/98605-SP), psicóloga clínica e sexóloga com mais de uma década dedicada ao cuidado da saúde emocional, do autoconhecimento e da qualidade dos vínculos humanos.',
      p2: 'Acredito profundamente que a terapia é um caminho de reencontro com sua própria história. Em meu consultório — seja no ambiente presencial em São Bernardo do Campo ou nas sessões online para pacientes no Brasil e nos Estados Unidos —, você encontra um ambiente totalmente livre de julgamentos, pautado pelo rigor ético, acolhimento genuíno e escuta sensível.',
      p3: 'Minha prática integra a compreensão das complexidades individuais, a dinâmica dos casais e famílias, e a naturalidade da sexualidade humana como pilar fundamental de vitalidade e bem-estar.',
      valuesTitle: 'Pilares do meu atendimento:',
      values: [
        {
          title: 'Escuta Ativa & Humanizada',
          desc: 'Atenção plena às suas dores, histórias e expectativas, sem rótulos.',
        },
        {
          title: 'Respeito Irrestrito',
          desc: 'Valorização da sua individualidade, orientação e ritmo pessoal.',
        },
        {
          title: 'Acolhimento Afetuoso',
          desc: 'Um porto seguro para expressar angústias e vulnerabilidades.',
        },
        {
          title: 'Livre de Julgamentos',
          desc: 'Espaço aberto para falar sobre sexualidade e sentimentos com total liberdade.',
        },
      ],
      ctaAbout: 'Conversar com a Dra. Tatiane',
    },
    services: {
      tagline: 'Serviços Especializados',
      title: 'Áreas de Atuação e Cuidado Terapêutico',
      subtitle:
        'Abordagens pensadas para atender as diferentes fases e necessidades da sua jornada emocional e afetiva.',
      cardCta: 'Quero saber mais',
      whatsappBtn: 'Falar no WhatsApp',
      items: [
        {
          id: 'individual',
          title: 'Terapia Individual',
          subtitle: 'Autoconhecimento, emoções e qualidade de vida.',
          shortDesc:
            'Um processo profundo de autodescoberta para lidar com ansiedade, inseguranças, luto, transições de vida e fortalecimento da autoestima.',
          fullDesc: [
            'A psicoterapia individual oferece um refúgio acolhedor e seguro para você organizar seus pensamentos, compreender a raiz de padrões repetitivos e ressignificar feridas emocionais.',
            'Trabalhamos questões como ansiedade, estresse, autocrítica severa, depressão, tomada de decisões difíceis e a busca por um propósito alinhado aos seus valores essenciais.',
          ],
          benefits: [
            'Redução significativa da ansiedade e da sobrecarga mental',
            'Desenvolvimento de inteligência emocional e limites saudáveis',
            'Aumento da autocompaixão e segurança interior',
            'Clareza para escolhas de vida e carreira',
          ],
          forWhom: [
            'Quem sente constante cobrança interna ou esgotamento',
            'Pessoas enfrentando términos, perdas ou mudanças bruscas',
            'Quem deseja viver com maior equilíbrio e leveza',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de saber mais e agendar uma sessão de Terapia Individual.',
          iconName: 'user',
        },
        {
          id: 'casal',
          title: 'Terapia de Casal',
          subtitle: 'Diálogo, conexão e fortalecimento da relação.',
          shortDesc:
            'Restaure a cumplicidade, a comunicação assertiva e a intimidade do casal, superando desgastes da rotina ou momentos de crise.',
          fullDesc: [
            'Mesmo relacionamentos construídos com muito amor podem enfrentar ruídos na comunicação, distanciamento afetivo, divergências sobre planos futuros ou quebras de confiança.',
            'Na terapia de casal, atuo como mediadora empática para ajudar ambos a expressarem suas necessidades sem acusações, reconstruindo pontes de afeto e intimidade genuína.',
          ],
          benefits: [
            'Comunicação não violenta e conversas produtivas',
            'Reconexão emocional e reativação da cumplicidade',
            'Alinhamento de expectativas e projetos a dois',
            'Resolução madura de mágoas e conflitos acumulados',
          ],
          forWhom: [
            'Casais que sentem que só discutem pelos mesmos motivos',
            'Relações com desgaste na rotina ou distanciamento sexual',
            'Parceiros que desejam fortalecer a relação antes de tomar decisões drásticas',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de informações sobre a Terapia de Casal.',
          iconName: 'heart',
        },
        {
          id: 'familiar',
          title: 'Terapia Familiar',
          subtitle: 'Relações mais saudáveis e equilibradas.',
          shortDesc:
            'Harmonização da dinâmica familiar, mediação de conflitos entre gerações e fortalecimento dos laços afetivos do lar.',
          fullDesc: [
            'A família é um sistema vivo. Quando um membro passa por sofrimento, toda a estrutura sente o reflexo.',
            'A terapia familiar proporciona um espaço neutro onde pais, filhos e familiares podem ser ouvidos, compreendidos e encontrar formas construtivas de cooperação e afeto mútuo.',
          ],
          benefits: [
            'Compreensão mútua entre diferentes gerações',
            'Estabelecimento de limites claros e respeitosos',
            'Suporte durante divórcios, lutos ou novas composições familiares',
            'Criação de um ambiente doméstico de paz e segurança',
          ],
          forWhom: [
            'Famílias com dificuldades de diálogo frequentes',
            'Desafios com filhos em fase de transição (infância/adolescência/juventude)',
            'Famílias vivenciando mudanças estruturais significativas',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar uma consulta de Terapia Familiar.',
          iconName: 'users',
        },
        {
          id: 'sexual',
          title: 'Terapia Sexual',
          subtitle: 'Informação, liberdade e bem-estar sexual.',
          shortDesc:
            'Acolhimento especializado para queixas sexuais individuais ou de parceiros, desmistificando tabus com rigor técnico e leveza.',
          fullDesc: [
            'A sexualidade é parte integrante da saúde humana e do equilíbrio emocional. No entanto, mitos, tabus, culpas e traumas frequentemente causam sofrimento silencioso.',
            'Como sexóloga certificada, ofereço um olhar científico, sensível e sem preconceitos para questões como falta de desejo, dor na relação, disfunções eréteis, ejaculação precoce, anorgasmia ou dificuldades na intimidade.',
          ],
          benefits: [
            'Desmistificação de tabus e alívio de culpas',
            'Tratamento acolhedor para queixas sexuais femininas e masculinas',
            'Redescoberta do prazer e conexão com o próprio corpo',
            'Melhora substancial na qualidade da intimidade com o parceiro',
          ],
          forWhom: [
            'Pessoas ou casais insatisfeitos com a frequência ou prazer na vida sexual',
            'Dificuldades com desejo, dor ou ansiedade de desempenho',
            'Quem deseja viver sua sexualidade de forma saudável, segura e sem vergonha',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar uma consulta sobre Terapia Sexual com total sigilo.',
          iconName: 'sparkles',
        },
      ] as ServiceItem[],
    },
    whyChoose: {
      tagline: 'Diferenciais',
      title: 'Por que escolher este acompanhamento?',
      subtitle:
        'Cuidado ético, suporte de alto nível e a comodidade do atendimento onde você estiver.',
      reasons: [
        {
          title: 'Formação & Credenciamento Ativo',
          desc: 'Registro oficial CRP 06/98605-SP com especialização sólida em psicologia clínica e sexologia humana.',
        },
        {
          title: 'Sigilo Absoluto & Segurança',
          desc: 'Sessões conduzidas segundo as mais rigorosas diretrizes do Código de Ética Profissional dos Psicólogos.',
        },
        {
          title: 'Atendimento sem Fronteiras',
          desc: 'Tecnologia em plataformas criptografadas com estabilidade para quem mora no Brasil ou nos Estados Unidos.',
        },
        {
          title: 'Olhar Integral para a Sexualidade',
          desc: 'Poucos terapeutas unem a profundidade analítica da psicologia à especialidade científica da sexologia.',
        },
        {
          title: 'Flexibilidade de Horários',
          desc: 'Janelas de atendimento planejadas para compatibilidade com os fusos horários americanos (EST, CST, MST, PST).',
        },
        {
          title: 'Acolhimento Empático Genuíno',
          desc: 'Você nunca será julgado. Aqui, suas dores e sentimentos são recebidos com respeito e carinho.',
        },
      ],
    },
    usaSection: {
      tagline: 'Especial para a Comunidade nos EUA',
      title: 'Terapia 100% Online para Brasileiros nos Estados Unidos',
      highlightBadge: 'Atendimento em Português em Todos os 50 Estados dos EUA',
      p1: 'Viver fora do Brasil é uma experiência transformadora, mas que também traz desafios emocionais únicos: a saudade da família e das raízes, a solidão, a pressão no trabalho, a adaptação cultural e o desafio de expressar sentimentos mais íntimos em outro idioma.',
      p2: 'Fazer psicoterapia na sua língua materna faz toda a diferença. As nuances dos seus sentimentos, as metáforas do seu dia a dia e o seu contexto cultural são compreendidos sem necessidade de explicações ou filtros.',
      benefits: [
        {
          title: 'Conforto da Língua Materna',
          desc: 'Sentimentos complexos são mais facilmente elaborados e curados quando expressos em português.',
        },
        {
          title: 'Acolhimento à Realidade do Imigrante',
          desc: 'Compreensão profunda das fases da imigração: adaptação, saudade, choque cultural e relacionamentos binacionais.',
        },
        {
          title: 'Fusos Horários Flexíveis',
          desc: 'Agendamentos compatíveis com os horários de trabalho nos Estados Unidos (Eastern, Central, Mountain e Pacific).',
        },
        {
          title: 'Pagamentos Internacionais Simplificados',
          desc: 'Opções acessíveis e práticas para pagamentos em Dólares ou Reais via Zelle, Wise, Cartão de Crédito ou PIX.',
        },
      ],
      note: 'Atendimento também disponível para cidadãos americanos ou estrangeiros falantes de português.',
      cta: 'Agendar Consulta dos EUA via WhatsApp',
      whatsappMessage: 'Olá Dra. Tatiane, moro nos Estados Unidos e gostaria de agendar uma sessão de terapia online em português.',
    },
    testimonials: {
      tagline: 'Depoimentos',
      title: 'O que dizem os pacientes',
      subtitle: 'Histórias reais de superação, autoconhecimento e transformação afetiva.',
      items: [
        {
          id: '1',
          author: 'Mariana S.',
          location: 'São Paulo, SP',
          serviceType: 'Terapia Individual',
          text: 'A Dra. Tatiane tem uma escuta tão generosa e precisa que desde a primeira sessão me senti verdadeiramente acolhida. Consegui entender e superar crises de ansiedade que me travavam há anos. Recomendo de olhos fechados.',
          stars: 5,
        },
        {
          id: '2',
          author: 'Carlos & Patrícia R.',
          location: 'São Bernardo do Campo, SP',
          serviceType: 'Terapia de Casal',
          text: 'Estávamos à beira de um divórcio após 12 anos juntos. O processo com a Dra. Tatiane nos ensinou a nos comunicar de verdade, sem ataques. Redescobrimos a cumplicidade e o carinho que tínhamos esquecido.',
          stars: 5,
        },
        {
          id: '3',
          author: 'Beatriz M.',
          location: 'Boston, Massachusetts (EUA)',
          serviceType: 'Terapia Online EUA',
          text: 'Morando há 4 anos nos EUA, sentia um vazio imenso e muita dificuldade de lidar com a distância da família. Fazer terapia em português com a Tatiane foi a melhor decisão que tomei. Uma profissional extraordinária!',
          stars: 5,
        },
        {
          id: '4',
          author: 'Lucas F.',
          location: 'Atendimento Online',
          serviceType: 'Terapia Sexual',
          text: 'Eu tinha muita vergonha de falar sobre minhas inseguranças sexuais. A naturalidade e o profissionalismo com que a Dra. Tatiane tratou o tema tiraram um peso gigantesco das minhas costas. Minha qualidade de vida mudou por completo.',
          stars: 5,
        },
      ] as TestimonialItem[],
    },
    faq: {
      tagline: 'Tire suas Dúvidas',
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber sobre o início do seu processo terapêutico.',
      items: [
        {
          question: 'Como funciona o atendimento online?',
          answer:
            'As sessões são realizadas por videochamada através de plataformas seguras e criptografadas (Google Meet ou Zoom). Você só precisa de uma conexão estável à internet e um local privado e confortável onde possa falar com total privacidade.',
        },
        {
          question: 'Qual a duração e frequência das sessões?',
          answer:
            'Cada sessão tem duração média de 50 minutos. A frequência usual é semanal, especialmente no início do processo, para que o vínculo e a evolução terapêutica ganhem consistência.',
        },
        {
          question: 'Como funciona para quem mora nos Estados Unidos?',
          answer:
            'O atendimento é 100% online, adaptado ao seu fuso horário nos EUA (EST, CST, MST, PST). Os pagamentos podem ser efetuados com facilidade em dólar (Zelle, Wise, cartão internacional) ou em reais.',
        },
        {
          question: 'O sigilo das consultas é garantido?',
          answer:
            'Sim, com total rigor. O sigilo profissional é um dever ético inegociável previsto no Código de Ética do Psicólogo e no CFP. Tudo o que for falado em sessão permanece estritamente confidencial.',
        },
        {
          question: 'Como agendar minha primeira sessão?',
          answer:
            'Basta clicar nos botões de WhatsApp do site ou preencher o formulário de contato. Responderei pessoalmente ou através de minha equipe para combinarmos o melhor dia e horário para o seu atendimento.',
        },
      ] as FaqItem[],
    },
    ctaSection: {
      title: 'Pronta(o) para cuidar de você e da sua história?',
      subtitle:
        'Dar o primeiro passo para a terapia é um ato de coragem e amor próprio. Estou aqui para caminhar ao seu lado nessa jornada.',
      whatsappBtn: 'Agendar consulta no WhatsApp',
      phoneText: 'Ou ligue / envie mensagem para:',
      note: 'Atendimento humanizado, ético e sigiloso.',
      whatsappMessage: 'Olá Dra. Tatiane, tomei a decisão de iniciar minha terapia e gostaria de agendar uma consulta.',
    },
    contact: {
      tagline: 'Vamos Conversar',
      title: 'Fale Conosco',
      subtitle:
        'Envie uma mensagem direta pelo WhatsApp ou preencha o formulário abaixo. Retornaremos com todo carinho no menor tempo possível.',
      formName: 'Seu Nome Completo',
      formEmail: 'Seu E-mail',
      formPhone: 'Seu WhatsApp / Telefone com DDD',
      formService: 'Serviço de Interesse',
      formServicePlaceholder: 'Selecione uma opção',
      formLocation: 'Onde você mora atualmente?',
      formLocationOptions: [
        'São Bernardo do Campo ou ABC Paulista',
        'Outra cidade no Brasil',
        'Estados Unidos (EUA)',
        'Outro país',
      ],
      formMessage: 'Como posso te ajudar? (Opcional)',
      formSubmit: 'Enviar pelo WhatsApp',
      formSubmitEmail: 'Enviar por E-mail',
      directContactTitle: 'Informações de Contato Direto',
      addressLabel: 'Consultório Presencial',
      addressValue: 'São Bernardo do Campo – SP (Atendimento com agendamento prévio)',
      whatsappLabel: 'WhatsApp Oficial',
      emailLabel: 'E-mail Profissional',
      instagramLabel: 'Instagram',
      hoursLabel: 'Horários de Atendimento',
      hoursValue: 'Segunda a Sexta, das 08h às 21h | Sábados, das 08h às 14h (Horário de Brasília e compatível com EUA)',
    },
    footer: {
      clinicName: 'Dra. Tatiane Vilela',
      crp: 'CRP 06/98605-SP',
      slogan: 'Saúde emocional para uma vida mais plena.',
      navigationTitle: 'Navegação',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato & Localização',
      confidentialityNotice:
        'Este site segue todas as diretrizes do Código de Ética Profissional do Psicólogo e a Resolução CFP nº 011/2018 para atendimento psicológico online.',
      copyright: '© 2026 Dra. Tatiane Vilela. Todos os direitos reservados.',
      emergencyNote:
        'Em caso de crise ou emergência psicológica imediata no Brasil, ligue para o CVV no número 188 ou dirija-se ao pronto-socorro mais próximo. Nos EUA, ligue ou envie SMS para 988 (Suicide & Crisis Lifeline).',
    },
    floatingWidget: {
      greeting: 'Olá! Como posso ajudar você hoje?',
      onlineStatus: 'Online agora para informações',
      option1: 'Agendar consulta agora',
      option2: 'Atendimento para quem mora nos EUA',
      option3: 'Dúvidas sobre Terapia de Casal / Sexual',
      typeMessage: 'Escreva sua mensagem...',
      sendBtn: 'Abrir WhatsApp',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      services: 'Services',
      usa: 'Online Therapy USA',
      contact: 'Contact',
      ctaHeader: 'Book on WhatsApp',
    },
    hero: {
      badge: 'In-Person in SP (Brazil) & 100% Online in Brazil & USA',
      headline: 'More connection with your story for a fuller life.',
      subheadline:
        'A warm, safe, and confidential space to care for your mental health, your relationships, and your sexual intimacy.',
      ctaPrimary: 'Book consultation on WhatsApp',
      ctaSecondary: 'Explore services',
      highlightBadge: 'CRP 06/98605-SP',
      onlineBadge: '100% Online in the USA & Brazil',
      stats: [
        { label: 'Years of clinical experience', value: '+14' },
        { label: 'Patients welcomed', value: '+1,500' },
        { label: 'Global care', value: 'Brazil & USA' },
      ],
    },
    about: {
      tagline: 'About Me',
      title: 'A space of sensitive listening, respect, and transformation',
      p1: 'Hello! I am Dr. Tatiane Vilela (CRP 06/98605-SP), clinical psychologist and sexologist with over a decade dedicated to supporting emotional health, self-discovery, and the quality of human bonds.',
      p2: 'I deeply believe that therapy is a journey to reconnect with your own story. In my practice — whether in-person in São Bernardo do Campo or through online video sessions for clients across Brazil and throughout the United States —, you will find a strictly non-judgmental environment founded on ethical rigor, genuine warmth, and sensitive listening.',
      p3: 'My practice integrates an understanding of individual complexities, the dynamics of couples and families, and the natural reality of human sexuality as an essential pillar of vitality and wellness.',
      valuesTitle: 'Core pillars of my practice:',
      values: [
        {
          title: 'Active & Humanized Listening',
          desc: 'Undivided attention to your personal story and pain, without labels.',
        },
        {
          title: 'Unrestricted Respect',
          desc: 'Honoring your individuality, background, and personal pace.',
        },
        {
          title: 'Warm Welcoming',
          desc: 'A safe haven to express doubts, grief, and vulnerabilities.',
        },
        {
          title: 'Zero Judgment',
          desc: 'An open space to speak about sexuality and emotions with total freedom.',
        },
      ],
      ctaAbout: 'Speak with Dr. Tatiane',
    },
    services: {
      tagline: 'Specialized Services',
      title: 'Therapeutic Practice Areas',
      subtitle:
        'Approaches tailored to meet the different seasons and needs of your emotional and relational journey.',
      cardCta: 'Learn more',
      whatsappBtn: 'Speak on WhatsApp',
      items: [
        {
          id: 'individual',
          title: 'Individual Therapy',
          subtitle: 'Self-knowledge, emotions, and quality of life.',
          shortDesc:
            'A deep journey of self-discovery to cope with anxiety, insecurity, grief, major life transitions, and self-esteem building.',
          fullDesc: [
            'Individual psychotherapy offers a welcoming and confidential refuge to organize your thoughts, understand the roots of recurring patterns, and reframe emotional wounds.',
            'We work on challenges like anxiety, chronic stress, severe self-criticism, depression, difficult decision-making, and discovering a sense of purpose aligned with your core values.',
          ],
          benefits: [
            'Significant reduction in anxiety and mental overload',
            'Development of emotional intelligence and healthy boundaries',
            'Cultivating self-compassion and inner confidence',
            'Clarity for pivotal life and career decisions',
          ],
          forWhom: [
            'Anyone feeling constant inner pressure, burnout, or exhaustion',
            'People navigating breakups, losses, or sudden life changes',
            'Those longing for emotional balance and lightness',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to learn more and schedule an Individual Therapy session.',
          iconName: 'user',
        },
        {
          id: 'casal',
          title: 'Couple Therapy',
          subtitle: 'Dialogue, connection, and relationship strengthening.',
          shortDesc:
            'Restore complicity, assertive communication, and intimacy in your couple, overcoming daily friction or crises.',
          fullDesc: [
            'Even relationships built on deep love can encounter communication noise, emotional drift, conflicting plans, or broken trust.',
            'In couples therapy, I act as an empathetic mediator to help both partners express their needs without blame, rebuilding bridges of affection and genuine intimacy.',
          ],
          benefits: [
            'Nonviolent communication and fruitful conversations',
            'Emotional reconnection and reviving intimacy',
            'Aligning mutual expectations and life goals',
            'Mature resolution of accumulated resentments',
          ],
          forWhom: [
            'Couples caught in repetitive cycles of the same arguments',
            'Partners experiencing routine exhaustion or sexual disconnection',
            'Couples wishing to strengthen their bond before making drastic choices',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like information regarding Couple Therapy.',
          iconName: 'heart',
        },
        {
          id: 'familiar',
          title: 'Family Therapy',
          subtitle: 'Healthier and more balanced relationships.',
          shortDesc:
            'Harmonizing family dynamics, mediating intergenerational conflicts, and reinforcing emotional ties at home.',
          fullDesc: [
            'The family is a living system. When one family member undergoes suffering, the entire structure feels the impact.',
            'Family therapy provides a neutral, compassionate ground where parents, children, and relatives can be heard, understood, and discover constructive ways to cooperate and love.',
          ],
          benefits: [
            'Mutual understanding across generations',
            'Setting clear, affectionate, and respectful boundaries',
            'Support during divorce, grief, or blended family adjustments',
            'Creating a home atmosphere of safety and peace',
          ],
          forWhom: [
            'Families experiencing persistent communication breakdowns',
            'Challenges with children and adolescents during transitional stages',
            'Families undergoing major structural changes',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule a Family Therapy consultation.',
          iconName: 'users',
        },
        {
          id: 'sexual',
          title: 'Sexual Therapy',
          subtitle: 'Information, freedom, and sexual well-being.',
          shortDesc:
            'Specialized care for individual or couples sexual concerns, demystifying taboos with scientific rigor and natural ease.',
          fullDesc: [
            'Sexuality is an integral part of human health and emotional well-being. However, myths, taboos, guilt, and past wounds frequently produce silent suffering.',
            'As a certified sexologist, I offer a scientific, sensitive, and open-minded space to address issues like lack of desire, painful intercourse, erectile difficulties, rapid ejaculation, anorgasmia, or intimacy hurdles.',
          ],
          benefits: [
            'Demystification of sexual taboos and relief from guilt',
            'Welcoming evidence-based treatment for female and male concerns',
            'Rediscovery of pleasure and bodily connection',
            'Substantial enhancement in intimacy and mutual connection',
          ],
          forWhom: [
            'Individuals or partners dissatisfied with sexual frequency or satisfaction',
            'Struggles with desire, pain, or performance anxiety',
            'Anyone wishing to experience their sexuality in a safe, healthy, shame-free way',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule a confidential Sexual Therapy consultation.',
          iconName: 'sparkles',
        },
      ] as ServiceItem[],
    },
    whyChoose: {
      tagline: 'Why Choose Me',
      title: 'Why choose this therapeutic care?',
      subtitle:
        'Ethical care, top-tier clinical insight, and the comfort of meeting wherever you are located.',
      reasons: [
        {
          title: 'Active Professional Credentials',
          desc: 'Official licensing with CRP 06/98605-SP and specialized training in clinical psychology and human sexology.',
        },
        {
          title: 'Strict Confidentiality & Privacy',
          desc: 'Sessions conducted in full adherence to the highest international ethical standards for psychology.',
        },
        {
          title: 'Care Without Borders',
          desc: 'Encrypted, high-performance video consultations whether you reside in Brazil or in the USA.',
        },
        {
          title: 'Integral Approach to Sexuality',
          desc: 'Rare dual expertise bridging the emotional depths of psychology with the scientific expertise of sexology.',
        },
        {
          title: 'Time Zone Flexibility',
          desc: 'Appointment slots specifically arranged to accommodate US working hours (EST, CST, MST, PST).',
        },
        {
          title: 'Genuine Warmth & Empathy',
          desc: 'You will never be judged. Here, your struggles and emotions are met with respect, dignity, and warmth.',
        },
      ],
    },
    usaSection: {
      tagline: 'Specialized for the US Community',
      title: '100% Online Therapy for Brazilians in the United States',
      highlightBadge: 'Therapy in Portuguese Across All 50 US States',
      p1: 'Living outside Brazil is a transformative experience, but it also carries unique emotional hurdles: homesickness, loneliness, career pressure, cultural adaptation, and the challenge of expressing deep vulnerabilities in a second language.',
      p2: 'Doing psychotherapy in your native Portuguese makes all the difference. The subtleties of your emotions, the cultural metaphors of your upbringing, and your personal history are understood effortlessly without translation.',
      benefits: [
        {
          title: 'Comfort of Your Native Language',
          desc: 'Complex emotional landscapes are more naturally expressed and healed in your mother tongue.',
        },
        {
          title: 'Deep Empathy for Immigrant Realities',
          desc: 'Expert understanding of acculturation phases: longing for home, cultural dissonance, and binational relationships.',
        },
        {
          title: 'Flexible US Time Zones',
          desc: 'Scheduling that comfortably aligns with US work routines (Eastern, Central, Mountain, and Pacific).',
        },
        {
          title: 'Simple International Payments',
          desc: 'Convenient payment options in USD or BRL via Zelle, Wise, International Credit Card, or PIX.',
        },
      ],
      note: 'Sessions are also available for Portuguese-speaking Americans or multicultural couples.',
      cta: 'Schedule Consultation from the US via WhatsApp',
      whatsappMessage: 'Hello Dr. Tatiane, I live in the United States and would like to schedule an online therapy session in Portuguese.',
    },
    testimonials: {
      tagline: 'Testimonials',
      title: 'What clients share',
      subtitle: 'Real stories of growth, self-discovery, and relational transformation.',
      items: [
        {
          id: '1',
          author: 'Mariana S.',
          location: 'São Paulo, SP',
          serviceType: 'Individual Therapy',
          text: 'Dr. Tatiane possesses such a generous and precise way of listening that I felt deeply welcomed from day one. I was able to understand and overcome anxiety episodes that had held me back for years. I recommend her with all my heart.',
          stars: 5,
        },
        {
          id: '2',
          author: 'Carlos & Patricia R.',
          location: 'São Bernardo do Campo, SP',
          serviceType: 'Couple Therapy',
          text: 'We were on the verge of divorce after 12 years together. Our work with Dr. Tatiane taught us how to truly communicate without hostility. We rediscovered the tenderness and complicity we had forgotten.',
          stars: 5,
        },
        {
          id: '3',
          author: 'Beatriz M.',
          location: 'Boston, Massachusetts (USA)',
          serviceType: 'Online Therapy USA',
          text: 'Living for 4 years in the US, I felt a deep emptiness and struggled with the distance from home. Doing therapy in Portuguese with Tatiane was the single best decision I made. An extraordinary professional!',
          stars: 5,
        },
        {
          id: '4',
          author: 'Lucas F.',
          location: 'Online Sessions',
          serviceType: 'Sexual Therapy',
          text: 'I was very embarrassed to open up about my sexual insecurities. The professionalism and natural comfort with which Dr. Tatiane approached the topic lifted a huge weight off my shoulders. It completely changed my life.',
          stars: 5,
        },
      ] as TestimonialItem[],
    },
    faq: {
      tagline: 'Frequently Asked Questions',
      title: 'Questions & Answers',
      subtitle: 'Everything you need to know about starting your therapy journey.',
      items: [
        {
          question: 'How do online therapy sessions work?',
          answer:
            'Sessions take place via secure, encrypted video calls (Google Meet or Zoom). All you need is a reliable internet connection and a private, quiet space where you can speak in total confidentiality.',
        },
        {
          question: 'What is the duration and frequency of sessions?',
          answer:
            'Each session lasts approximately 50 minutes. The standard frequency is weekly, especially in the beginning, to establish momentum and therapeutic consistency.',
        },
        {
          question: 'How does it work for clients living in the USA?',
          answer:
            'Care is 100% online, scheduled in your local US time zone (EST, CST, MST, PST). Payments can easily be made in US Dollars (Zelle, Wise, international credit cards) or Brazilian Reais.',
        },
        {
          question: 'Is session confidentiality guaranteed?',
          answer:
            'Yes, unconditionally. Professional confidentiality is a strict ethical obligation mandated by psychology licensing codes. Everything shared in session remains strictly private and protected.',
        },
        {
          question: 'How do I book my first session?',
          answer:
            'Simply click on any WhatsApp button across the site or submit the contact form. I will personally respond to coordinate the most convenient time slot for you.',
        },
      ] as FaqItem[],
    },
    ctaSection: {
      title: 'Ready to care for yourself and your story?',
      subtitle:
        'Taking the first step into therapy is an act of bravery and self-respect. I am here to walk alongside you on this journey.',
      whatsappBtn: 'Book consultation on WhatsApp',
      phoneText: 'Or call / text via WhatsApp at:',
      note: 'Humanized, ethical, and strictly confidential care.',
      whatsappMessage: 'Hello Dr. Tatiane, I have decided to start therapy and would like to schedule a consultation.',
    },
    contact: {
      tagline: 'Let\'s Connect',
      title: 'Get in Touch',
      subtitle:
        'Send a direct message via WhatsApp or submit the form below. We will get back to you warmly as soon as possible.',
      formName: 'Your Full Name',
      formEmail: 'Your Email Address',
      formPhone: 'Your WhatsApp / Phone with country code',
      formService: 'Service of Interest',
      formServicePlaceholder: 'Select an option',
      formLocation: 'Where do you currently reside?',
      formLocationOptions: [
        'São Bernardo do Campo or Greater São Paulo',
        'Other state in Brazil',
        'United States (USA)',
        'Other country',
      ],
      formMessage: 'How can I assist you? (Optional)',
      formSubmit: 'Send via WhatsApp',
      formSubmitEmail: 'Send via Email',
      directContactTitle: 'Direct Contact Details',
      addressLabel: 'In-Person Practice',
      addressValue: 'São Bernardo do Campo – SP, Brazil (By advance appointment)',
      whatsappLabel: 'Official WhatsApp',
      emailLabel: 'Professional Email',
      instagramLabel: 'Instagram',
      hoursLabel: 'Office Hours',
      hoursValue: 'Monday to Friday, 8am to 9pm | Saturdays, 8am to 2pm (BRT / compatible with US timezones)',
    },
    footer: {
      clinicName: 'Dra. Tatiane Vilela',
      crp: 'CRP 06/98605-SP',
      slogan: 'Emotional health for a fuller life.',
      navigationTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact & Location',
      confidentialityNotice:
        'This website complies with the Professional Psychology Code of Ethics and relevant regulations for online psychological consultation.',
      copyright: '© 2026 Dra. Tatiane Vilela. All rights reserved.',
      emergencyNote:
        'In case of an immediate psychological crisis in Brazil, call 188 (CVV) or visit the nearest emergency room. In the USA, call or text 988 (Suicide & Crisis Lifeline).',
    },
    floatingWidget: {
      greeting: 'Hello! How can I assist you today?',
      onlineStatus: 'Online now for inquiries',
      option1: 'Schedule a session now',
      option2: 'Inquiries for US residents',
      option3: 'Questions about Couple / Sex Therapy',
      typeMessage: 'Type your message...',
      sendBtn: 'Open WhatsApp',
    },
  },
};
