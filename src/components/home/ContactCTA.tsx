import React from 'react';
import { siteConfig } from '@/data/site';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function ContactCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#123D4A] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl text-center">
        {/* Glow Spheres */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#36B6C5]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#36B6C5]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#36B6C5] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Direct Technical Dispatch • 24/7 Response</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
            Planning a Borewell in Bengaluru? Let's Talk Groundwork.
          </h2>

          <p className="text-xs sm:text-base text-[#DDF5EC]/85 leading-relaxed max-w-2xl mx-auto">
            Tell us your area and gate access dimensions. Our senior drilling supervisor will provide exact feasibility, casing recommendations, and a formal cost sheet.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-[#DDF5EC] text-[#123D4A] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#36B6C5]" />
              <span>Call Technical Line: {siteConfig.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Chat with Drill Supervisor</span>
            </a>
          </div>

          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#DDF5EC]/75">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#36B6C5]" />
              <span>Free Site Clearance Verification</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#36B6C5]" />
              <span>Transparent Per-Foot Meter Logs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#36B6C5]" />
              <span>BIS-Standard Casing Integrity</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
