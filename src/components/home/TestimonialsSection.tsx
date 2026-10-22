import React from 'react';
import { testimonialsData } from '@/data/testimonials';
import { Quote, MapPin, Star, ShieldCheck } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4 text-[#36B6C5]" />
          <span>Verified Field Deliveries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight">
          Client Outcomes in Bengaluru
        </h2>
        <p className="text-xs sm:text-sm text-[#58717A] mt-2">
          Real property owner experiences with our Robo Rigs, camera diagnostics, and pump installations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonialsData.map((t) => (
          <div
            key={t.id}
            className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-[0_6px_24px_rgba(18,61,74,0.04)] hover:shadow-[0_14px_32px_rgba(54,182,197,0.12)] hover:border-[#36B6C5] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Quote className="w-7 h-7 text-[#36B6C5]/40" />
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#17323B] leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#123D4A]/10">
              <h4 className="text-xs sm:text-sm font-bold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors">
                {t.clientType}
              </h4>
              <p className="text-xs text-[#36B6C5] font-medium mt-0.5">
                {t.projectScope}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#58717A] mt-1.5">
                <MapPin className="w-3 h-3 text-[#36B6C5]" />
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
