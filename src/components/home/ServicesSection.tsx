import React from 'react';
import { servicesData } from '@/data/services';
import { ArrowRight, Droplet, Sparkles, Drill } from 'lucide-react';

interface ServicesSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedServiceSlug?: (slug: string) => void;
}

export function ServicesSection({ setActiveTab, setSelectedServiceSlug }: ServicesSectionProps) {
  const featured = servicesData.slice(0, 6);

  const handleLearnMore = (slug: string) => {
    if (setSelectedServiceSlug) {
      setSelectedServiceSlug(slug);
    }
    setActiveTab('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-2">
            <Drill className="w-4 h-4 text-[#36B6C5]" />
            <span>Turnkey Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight">
            Specialized Borewell Services
          </h2>
          <p className="text-xs sm:text-sm text-[#58717A] mt-2 max-w-xl">
            Custom engineered rigs for residential gated plots, apartment complexes, commercial layouts, and deep agricultural borewells.
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              setActiveTab('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-pill-secondary group"
          >
            <span>View All 9 Specialized Services</span>
            <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3-Column Light Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {featured.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_6px_24px_rgba(18,61,74,0.04)] hover:shadow-[0_16px_36px_rgba(54,182,197,0.14)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col group relative"
          >
            {/* Visual Header */}
            <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

              <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[#123D4A] text-[10px] font-bold uppercase tracking-wider border border-[#123D4A]/10 shadow-sm">
                {service.category}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs text-[#58717A] line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#123D4A]/10 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#58717A]">
                  {service.diameter ? `Diameter: ${service.diameter}` : 'Turnkey Setup'}
                </span>
                <button
                  onClick={() => handleLearnMore(service.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#123D4A] group-hover:text-[#36B6C5] transition-colors"
                >
                  <span>Specs & Process</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
