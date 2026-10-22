import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ContactCTA } from '@/components/home/ContactCTA';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-2"]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqsData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B]">
      {/* Banner */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[#123D4A]/10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2 block">
            Technical Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#123D4A] max-w-4xl mx-auto leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#58717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2.5 leading-relaxed">
            Verified technical advice on site clearance, casing pipe standards, drilling duration, and groundwater realities in Bengaluru.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mt-5 relative">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#36B6C5] absolute left-4 sm:left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g., casing, cost, robo rig)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFF9EF] text-[#17323B] pl-11 sm:pl-13 pr-4 sm:pr-5 py-3 rounded-full text-xs sm:text-sm placeholder:text-[#58717A]/60 focus:outline-none focus:border-[#36B6C5] border border-[#123D4A]/15 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-8 md:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2.5 sm:space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 border ${
                  isOpen ? 'border-[#36B6C5] shadow-[0_6px_20px_rgba(54,182,197,0.1)]' : 'border-[#123D4A]/10 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 sm:px-6 py-3.5 sm:py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#123D4A] hover:text-[#36B6C5] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#36B6C5] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#58717A] leading-relaxed border-t border-[#123D4A]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
