import React from 'react';
import { siteConfig } from '@/data/site';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface ServiceAreasSectionProps {
  setActiveTab: (tab: string) => void;
}

export function ServiceAreasSection({ setActiveTab }: ServiceAreasSectionProps) {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#36B6C5]" />
            <span>Bengaluru Metro & Taluk Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight leading-[1.12]">
            Drilling Rigs Mobilized Across 8 Bengaluru Zones.
          </h2>

          <p className="text-sm sm:text-base text-[#58717A] leading-relaxed">
            Our autonomous Robo crawler rigs and high-CFM compressor setups are strategically stationed in East, South, and North yards to deploy within 24 hours.
          </p>

          <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
            Whether in tight ITPL tech corridor villas or vast agricultural farmland plots near Kanakapura and Devanahalli, our crews arrive with site-specific tools.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-pill-primary group"
            >
              <span>Check Your Site Access</span>
              <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Service Areas Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {siteConfig.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-4.5 rounded-2xl border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_4px_16px_rgba(18,61,74,0.03)] hover:shadow-[0_10px_24px_rgba(54,182,197,0.12)] transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 flex items-center justify-center text-[#123D4A] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4 text-[#36B6C5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors">
                  {area.name}
                </h4>
                <p className="text-xs text-[#58717A] mt-0.5 leading-snug">
                  {area.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
