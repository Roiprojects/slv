import React, { useState } from 'react';
import { servicesData, ServiceItem } from '@/data/services';
import { ContactCTA } from '@/components/home/ContactCTA';
import { ArrowRight, CheckCircle2, ChevronRight, X, Phone, MessageSquare, Wrench, Drill } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface ServicesPageProps {
  selectedServiceSlug?: string;
  setSelectedServiceSlug?: (slug: string) => void;
  setActiveTab: (tab: string) => void;
}

export function ServicesPage({ selectedServiceSlug, setSelectedServiceSlug, setActiveTab }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(() => {
    if (selectedServiceSlug) {
      return servicesData.find(s => s.slug === selectedServiceSlug) || null;
    }
    return null;
  });

  const categories = ['All Services', 'Drilling', 'Pumps & Installation', 'Maintenance', 'Survey & Inspection'];

  const filteredServices = selectedCategory === 'All Services'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  const handleOpenDetail = (service: ServiceItem) => {
    setActiveModalService(service);
    if (setSelectedServiceSlug) {
      setSelectedServiceSlug(service.slug);
    }
  };

  const handleCloseDetail = () => {
    setActiveModalService(null);
    if (setSelectedServiceSlug) {
      setSelectedServiceSlug('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B]">
      {/* Banner */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[#123D4A]/10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2 block">
            Bengaluru Groundwater Engineering Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#123D4A] max-w-4xl mx-auto leading-tight">
            Comprehensive Precision Services
          </h1>
          <p className="text-[#58717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2.5 leading-relaxed">
            From compact urban Robo crawler drilling to geophysical VES resistivity imaging, high-pressure flushing, and branded submersible pump installations.
          </p>
        </div>
      </section>

      {/* Main Catalog with Category Filter */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#123D4A] text-white shadow-md scale-105'
                  : 'bg-white text-[#17323B] hover:text-[#123D4A] hover:bg-[#DDF5EC] border border-[#123D4A]/10 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_6px_24px_rgba(18,61,74,0.04)] hover:shadow-[0_16px_36px_rgba(54,182,197,0.14)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col group relative"
            >
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

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#58717A] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2.5 border-t border-[#123D4A]/10">
                  <div className="text-[11px] text-[#58717A] flex items-center justify-between">
                    <span>Suitable For:</span>
                    <span className="font-bold text-[#123D4A] truncate max-w-[190px]">{service.suitableFor}</span>
                  </div>

                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="w-full py-2.5 rounded-full bg-[#FFF9EF] group-hover:bg-[#123D4A] group-hover:text-white text-[#123D4A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#123D4A]/10 group-hover:border-[#123D4A] shadow-sm"
                  >
                    <span>View Specifications & Process</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal / Drawer */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 bg-[#123D4A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={handleCloseDetail}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full my-6 overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col border border-[#123D4A]/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-slate-900">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              <button
                onClick={handleCloseDetail}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#123D4A] transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#36B6C5] bg-[#123D4A]/90 px-2.5 py-0.5 rounded-full border border-white/10">
                  {activeModalService.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                  {activeModalService.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-1.5">
                  Service Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
                  {activeModalService.fullDesc}
                </p>
              </div>

              {/* Technical specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FFF9EF] p-4 rounded-2xl border border-[#123D4A]/10 text-xs">
                <div>
                  <span className="text-[#58717A] block mb-0.5">Machinery / Setup:</span>
                  <span className="font-bold text-[#123D4A]">{activeModalService.equipmentUsed}</span>
                </div>
                <div>
                  <span className="text-[#58717A] block mb-0.5">Ideal Application:</span>
                  <span className="font-bold text-[#123D4A]">{activeModalService.suitableFor}</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2">
                  Key Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#17323B]">
                      <CheckCircle2 className="w-4 h-4 text-[#36B6C5] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2">
                  Execution Protocol
                </h4>
                <div className="space-y-2">
                  {activeModalService.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#FFF9EF] p-3 rounded-2xl border border-[#123D4A]/5">
                      <span className="w-5 h-5 rounded-full bg-[#123D4A] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-[#123D4A]">{step.title}</h5>
                        <p className="text-[11px] text-[#58717A] mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking action */}
              <div className="pt-4 border-t border-[#123D4A]/10 flex flex-wrap gap-3 items-center justify-between">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="btn-pill-primary"
                >
                  <Phone className="w-4 h-4 text-[#36B6C5]" />
                  <span>Call to Schedule</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi SLV Borewells, I would like to inquire about ${activeModalService.title} for my property.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactCTA />
    </div>
  );
}
