export type Language = 'pt' | 'en';

export type PageId = 'home' | 'sobre' | 'servicos' | 'eua' | 'contato';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string[];
  benefits: string[];
  forWhom: string[];
  whatsappMessage: string;
  iconName: 'user' | 'heart' | 'users' | 'sparkles';
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  text: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
