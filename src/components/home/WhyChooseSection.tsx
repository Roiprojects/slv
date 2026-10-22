import React from 'react';
import { Award, Drill, Scale, LifeBuoy, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "14+ Years Field Mastery",
    desc: "Field supervisors who understand the subterranean fractures and hard granite behavior across all 8 zones of Bengaluru."
  },
  {
    icon: Drill,
    title: "Site-Calibrated Fleet",
    desc: "Autonomous rubber crawler Robo Rigs for tight 7-foot villa gates and multi-axle heavy rigs for deep industrial layouts."
  },
  {
    icon: Scale,
    title: "Transparent Meter Billing",
    desc: "Zero ambiguity. Exact meter-by-meter pipe depth verification with certified wall thickness casing inspection on site."
  },
  {
    icon: LifeBuoy,
    title: "Comprehensive Support",
    desc: "End-to-end service including air-compressor desilting, underwater robotic camera scanning, and pump maintenance."
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#36B6C5]" />
            <span>The SLV Engineering Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight leading-[1.12]">
            Why Bengaluru Relies on SLV Borewells.
          </h2>

          <p className="text-sm sm:text-base text-[#58717A] leading-relaxed">
            Drilling a borewell is a critical, long-term capital asset for your property. We don’t indulge in false guarantees of 100% water without testing.
          </p>

          <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
            Instead, we combine advanced electrical geophysical surveys, high-pressure equipment, and certified heavy-duty casing pipes to give your property the highest scientific probability of sustained, clean water.
          </p>

          <div className="bg-[#DDF5EC] p-4 rounded-2xl border border-[#36B6C5]/40 shadow-sm">
            <p className="text-xs font-bold text-[#123D4A] leading-relaxed">
              "We measure every foot in front of you. No hidden charges. No compromised casing."
            </p>
          </div>
        </div>

        {/* Right Column: 4 Benefit Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_6px_24px_rgba(18,61,74,0.03)] hover:shadow-[0_14px_32px_rgba(54,182,197,0.12)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/20 flex items-center justify-center text-[#123D4A] mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-[#123D4A]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#123D4A] mb-1.5 group-hover:text-[#36B6C5] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#58717A] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
