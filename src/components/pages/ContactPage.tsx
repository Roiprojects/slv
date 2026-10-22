import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowRight, CheckCircle2, ExternalLink, Zap } from 'lucide-react';

export function ContactPage() {
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formService, setFormService] = useState('Robo Borewell Drilling (Narrow Access)');
  const [formGateWidth, setFormGateWidth] = useState('Narrow gate 6.5 - 8 ft (Requires Robo Rig)');
  const [formNote, setFormNote] = useState('');

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Borewell Project Request - SLV Borewells*%0A%0A*Name:* ${formName || 'Prospective Client'}%0A*Location in Bengaluru:* ${formLocation || 'Bengaluru'}%0A*Service:* ${formService}%0A*Gate Clearance:* ${formGateWidth}%0A*Notes:* ${formNote || 'Please call back with estimate and site inspection schedule.'}`;
    const url = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B]">
      {/* Banner */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[#123D4A]/10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-3">
            <img
              src="/images/logo.png"
              alt="SLV Borewells - Groundwater Solutions"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2 block">
            Direct Technical Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#123D4A] max-w-4xl mx-auto leading-tight">
            Contact SLV Borewells
          </h1>
          <p className="text-[#58717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2.5 leading-relaxed">
            Speak directly with our senior drilling supervisors and hydro-geological survey coordinators across Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#123D4A]">
              Direct Contact Lines
            </h3>

            {/* Click-to-call card */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_4px_16px_rgba(18,61,74,0.03)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3.5 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#DDF5EC] border border-[#36B6C5]/30 flex items-center justify-center text-[#123D4A] group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-5 h-5 text-[#123D4A]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#58717A] block">
                  Click to Call 24/7
                </span>
                <span className="text-base sm:text-lg font-extrabold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors">
                  {siteConfig.phone}
                </span>
              </div>
            </a>

            {/* WhatsApp enquiry card */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 hover:border-[#25D366] shadow-[0_4px_16px_rgba(18,61,74,0.03)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3.5 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#58717A] block">
                  Instant WhatsApp Desk
                </span>
                <span className="text-base sm:text-lg font-extrabold text-[#123D4A] group-hover:text-[#25D366] transition-colors">
                  {siteConfig.whatsapp}
                </span>
              </div>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_4px_16px_rgba(18,61,74,0.03)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3.5 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#DDF5EC] border border-[#36B6C5]/30 flex items-center justify-center text-[#123D4A] group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-5 h-5 text-[#123D4A]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#58717A] block">
                  Email Inquiries
                </span>
                <span className="text-sm sm:text-base font-bold text-[#123D4A] group-hover:text-[#36B6C5] transition-colors">
                  {siteConfig.email}
                </span>
              </div>
            </a>

            {/* Yard & Office Location */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#36B6C5] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#123D4A]">Bengaluru Headquarters & Yard</h4>
                  <p className="text-xs text-[#58717A] leading-relaxed mt-0.5">
                    {siteConfig.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Whitefield+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#36B6C5] hover:underline mt-2"
                  >
                    <span>View Coordinates on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#123D4A]/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#36B6C5] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#123D4A]">Mobilization Hours</h4>
                  <p className="text-xs text-[#58717A] mt-0.5">{siteConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preformatted WhatsApp Dispatch Generator */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-[0_8px_30px_rgba(18,61,74,0.05)]">
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-1.5">
                <Zap className="w-3.5 h-3.5 text-[#36B6C5]" />
                <span>Instant WhatsApp Dispatch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#123D4A]">
                Configure Project & Generate Message
              </h3>
              <p className="text-xs sm:text-sm text-[#58717A] mt-1 leading-relaxed">
                Enter your property details below. Clicking launch will generate a structured inquiry and open WhatsApp directly with our supervisor.
              </p>
            </div>

            <form onSubmit={handleGenerateWhatsApp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suresh Kumar"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#17323B] focus:outline-none focus:border-[#36B6C5] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                  Locality / Landmark in Bengaluru
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarjapur Road near Carmelaram Station"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#17323B] focus:outline-none focus:border-[#36B6C5] shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#17323B] focus:outline-none focus:border-[#36B6C5] shadow-sm cursor-pointer"
                  >
                    <option value="Robo Borewell Drilling (Narrow Access)">Robo Borewell Drilling</option>
                    <option value="Standard Borewell Drilling (Open Site)">Standard Borewell Drilling</option>
                    <option value="Borewell Camera Scanning (CCTV)">Borewell Camera Scanning</option>
                    <option value="High-Pressure Air Flushing / Cleaning">Borewell Flushing / Cleaning</option>
                    <option value="Submersible Pump Installation">Pump & Motor Installation</option>
                    <option value="Groundwater VES Resistivity Survey">Groundwater Survey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                    Gate Entrance Clearance
                  </label>
                  <select
                    value={formGateWidth}
                    onChange={(e) => setFormGateWidth(e.target.value)}
                    className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#17323B] focus:outline-none focus:border-[#36B6C5] shadow-sm cursor-pointer"
                  >
                    <option value="Narrow gate 6.5 - 8 ft (Requires Robo Rig)">Narrow gate 6.5 - 8 ft (Robo Rig)</option>
                    <option value="Wide entrance 10+ ft (Standard Truck Rig)">Wide entrance 10+ ft (Truck Rig)</option>
                    <option value="Basement or Low Clearance Plot">Basement or Low Overhead</option>
                    <option value="Unsure / Need Supervisor Site Check">Unsure / Need Site Inspection</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                  Additional Details or Existing Borewell Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Muddy water in existing well, newly building home, etc."
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                  className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#17323B] focus:outline-none focus:border-[#36B6C5] shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] shadow-md flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Launch WhatsApp Inquiry With Preloaded Data</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#58717A] pt-2">
                Zero third-party trackers. Dispatches directly to official SLV Borewells WhatsApp line.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
