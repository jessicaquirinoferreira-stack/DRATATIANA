import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/translations';
import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].testimonials;

  return (
    <section className="py-16 lg:py-24 bg-[#F4EFEA] text-[#161B20] border-t border-[#EDE6DC]">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE6DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A227]">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#ECDDA3]" />
                </div>

                {/* Service Tag */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C631A] bg-[#FBF8EB] px-2.5 py-1 rounded-full border border-[#ECDDA3]">
                  {item.serviceType}
                </span>

                {/* Testimonial text */}
                <p className="text-sm text-[#475467] italic leading-relaxed mt-4">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-5 mt-4 border-t border-[#F2ECE4]">
                <p className="text-sm font-bold text-[#111417]">
                  {item.author}
                </p>
                <p className="text-xs text-[#525E6A]">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
