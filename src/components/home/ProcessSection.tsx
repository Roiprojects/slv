import React from 'react';
import { PhoneCall, MapPin, Drill, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    stepNum: "01",
    title: "Geological Consultation",
    desc: "Share your GPS coordinates and gate width. We check local Bengaluru geological records to determine Robo Crawler vs Heavy Rig suitability."
  },
  {
    icon: MapPin,
    stepNum: "02",
    title: "VES Resistivity Survey",
    desc: "Our qualified hydro-geologist runs Schlumberger resistivity imaging to map subterranean bedrock fractures and select the optimal drill peg."
  },
  {
    icon: Drill,
    stepNum: "03",
    title: "Calibrated DTH Drilling",
    desc: "Overburden loose soil is secured with heavy-gauge casing into bedrock before high-pressure pneumatic hammers penetrate hard granite."
  },
  {
    icon: CheckCircle,
    stepNum: "04",
    title: "Air Flushing & Handover",
    desc: "High-CFM rotary compressors flush all drill silt clear, sustained water discharge is measured, and the matched pump is commissioned."
  }
];

export function ProcessSection() {
  return (
    <section className="py-10 md:py-14 bg-[#123D4A] text-white relative overflow-hidden">
      {/* Subtle aqua ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#36B6C5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#36B6C5] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Engineered Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight">
            From Ground Assessment to Water Solutions.
          </h2>
          <p className="text-xs sm:text-sm text-[#DDF5EC]/85 mt-2">
            Four disciplined phases designed to prevent dry boreholes, protect surface compound walls, and guarantee 30+ year casing longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-[#36B6C5]/50 hover:bg-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl relative flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#36B6C5]/20 flex items-center justify-center text-[#36B6C5] group-hover:bg-[#36B6C5] group-hover:text-[#123D4A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white/20 group-hover:text-[#36B6C5]/50 transition-colors">
                      {item.stepNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold !text-white mb-1.5 group-hover:!text-[#36B6C5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#DDF5EC]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DDF5EC]/70">
                  <span>Phase {item.stepNum}</span>
                  <span className="text-[#36B6C5] font-bold">Protocol Certified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
