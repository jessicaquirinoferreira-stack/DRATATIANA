import React, { useState } from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { MessageCircle, Mail, MapPin, Instagram, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  });

  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const servicesOptions =
    lang === 'pt'
      ? ['Terapia Individual', 'Terapia de Casal', 'Terapia Familiar', 'Terapia Sexual', 'Terapia Online EUA']
      : ['Individual Therapy', 'Couple Therapy', 'Family Therapy', 'Sexual Therapy', 'Online Therapy USA'];

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      alert(lang === 'pt' ? 'Por favor, informe seu nome.' : 'Please enter your name.');
      return;
    }

    const compiledText =
      lang === 'pt'
        ? `Olá Dra. Tatiane!\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email || 'Não informado'}\n*Telefone:* ${formData.phone || 'Não informado'}\n*Interesse:* ${formData.service || 'Geral'}\n*Localização:* ${formData.location || 'Não informada'}\n*Mensagem:* ${formData.message || 'Gostaria de informações sobre agendamento.'}`
        : `Hello Dr. Tatiane!\n*Name:* ${formData.name}\n*Email:* ${formData.email || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Service:* ${formData.service || 'General'}\n*Location:* ${formData.location || 'Not provided'}\n*Message:* ${formData.message || 'I would like information about booking.'}`;

    const url = buildWhatsAppLink(compiledText);
    setSubmittedStatus('whatsapp');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert(lang === 'pt' ? 'Por favor, informe seu nome.' : 'Please enter your name.');
      return;
    }

    const subject = encodeURIComponent(`Consulta - ${formData.name} (${formData.service || 'Atendimento'})`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nLocalização: ${formData.location}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:${CLINIC_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedStatus('email');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-[#FBF9F5] text-[#161B20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#EDE6DC] shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#111417] mb-6">
              {lang === 'pt' ? 'Formulário de Contato & Agendamento' : 'Contact & Booking Inquiry'}
            </h3>

            {submittedStatus && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'pt'
                    ? 'Mensagem preparada com sucesso! Entraremos em contato em breve.'
                    : 'Message prepared successfully! We will get in touch shortly.'}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'pt' ? 'Ex: Ana Maria Silva' : 'E.g., Sarah Jenkins'}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                    {t.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+55 11 99999-9999 / +1 (...)"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                    {t.formService}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                  >
                    <option value="">{t.formServicePlaceholder}</option>
                    {servicesOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                  {t.formLocation}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                >
                  <option value="">{t.formServicePlaceholder}</option>
                  {t.formLocationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111417] mb-1.5">
                  {t.formMessage}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'pt'
                      ? 'Compartilhe brevemente o que busca ou sua preferência de dia/horário...'
                      : 'Briefly share what you are looking for or preferred schedule...'
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-[#EDE6DC] bg-[#FCFBF8] text-sm text-[#111417] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.formSubmit}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-medium border border-[#EDE6DC] hover:border-[#C9A227] hover:bg-[#FBF8EB] text-[#111417] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#8C631A]" />
                  <span>{t.formSubmitEmail}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Direct Details */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE6DC] shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#111417]">
                {t.directContactTitle}
              </h3>

              {/* WhatsApp Item */}
              <a
                href={buildWhatsAppLink('Olá Dra. Tatiane, gostaria de agendar uma consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FBF8EB] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-[#525E6A] font-medium">{t.whatsappLabel}</p>
                  <p className="text-sm font-bold text-[#111417] group-hover:text-[#25D366] transition-colors">
                    {CLINIC_INFO.phoneDisplay}
                  </p>
                  <p className="text-[11px] text-[#25D366] font-medium mt-0.5">
                    {lang === 'pt' ? 'Toque para conversar agora' : 'Tap to chat now'}
                  </p>
                </div>
              </a>

              {/* Email Item */}
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FBF8EB] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A227]/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#525E6A] font-medium">{t.emailLabel}</p>
                  <p className="text-sm font-bold text-[#111417] group-hover:text-[#8C631A] transition-colors break-all">
                    {CLINIC_INFO.email}
                  </p>
                </div>
              </a>

              {/* Instagram Item */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FBF8EB] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-[#525E6A] font-medium">{t.instagramLabel}</p>
                  <p className="text-sm font-bold text-[#111417] group-hover:text-pink-600 transition-colors">
                    {CLINIC_INFO.instagram}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#F4EFEA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#734F1B]" />
                </div>
                <div>
                  <p className="text-xs text-[#525E6A] font-medium">{t.addressLabel}</p>
                  <p className="text-sm font-semibold text-[#111417]">
                    {t.addressValue}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#F4EFEA] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#734F1B]" />
                </div>
                <div>
                  <p className="text-xs text-[#525E6A] font-medium">{t.hoursLabel}</p>
                  <p className="text-xs text-[#525E6A] mt-0.5 leading-relaxed">
                    {t.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
