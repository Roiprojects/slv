import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  setActiveTab: (tab: string) => void;
}

export function FAQSection({ setActiveTab }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const previewFaqs = faqsData.slice(0, 5);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-[#36B6C5]" />
          <span>Factual & Transparent Knowledge</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-[#58717A] mt-2">
          Site clearance criteria, casing depth standards, and groundwater science in Bengaluru.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-2.5 sm:space-y-3">
        {previewFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                isOpen ? 'border-[#36B6C5] shadow-[0_6px_20px_rgba(54,182,197,0.1)]' : 'border-[#123D4A]/10 shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-5 py-3.5 sm:py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#123D4A] hover:text-[#36B6C5] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#36B6C5] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#58717A] leading-relaxed border-t border-[#123D4A]/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <button
          onClick={() => {
            setActiveTab('/faq');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-pill-secondary group"
        >
          <span>View All 8 Technical FAQs</span>
          <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
