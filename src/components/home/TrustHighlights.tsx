import React from 'react';
import { Users, Truck, HeartHandshake, Droplets, CheckCircle2, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: "Bengaluru Strata Veterans",
    stat: "14+ Years",
    desc: "Rig foremen and hydro-geologists specialized in peninsular gneiss and granite fault line mapping."
  },
  {
    icon: Truck,
    title: "Dual Fleet Deployment",
    stat: "Robo + Heavy Rig",
    desc: "Autonomous mini crawler rigs for 7ft gates & multi-axle carrier units for heavy commercial depths."
  },
  {
    icon: ShieldCheck,
    title: "100% Certified Casing",
    stat: "Zero Cave-in",
    desc: "Heavy-duty BIS Class-5 PVC and MS steel casing seated firmly into hard solid rock bed."
  },
  {
    icon: Droplets,
    title: "Deep Aquifer Delivery",
    stat: "1,500+ Wells",
    desc: "Precision down-the-hole air percussion yielding crystal-clean sustained water flow."
  }
];

export function TrustHighlights() {
  return (
    <section className="py-7 md:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-[0_6px_24px_rgba(18,61,74,0.03)] hover:shadow-[0_12px_30px_rgba(54,182,197,0.12)] hover:border-[#36B6C5]/50 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/20 flex items-center justify-center text-[#123D4A] group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-[#123D4A]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#123D4A] bg-[#DDF5EC] px-2.5 py-0.5 rounded-full border border-[#36B6C5]/30">
                  {item.stat}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#123D4A] mb-1.5 group-hover:text-[#36B6C5] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#58717A] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
