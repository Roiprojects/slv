import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Compass, Sparkles, Cpu } from 'lucide-react';

interface AboutSectionProps {
  setActiveTab: (tab: string) => void;
}

export function AboutSection({ setActiveTab }: AboutSectionProps) {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Visual Composition with White Glass Badges */}
        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative group">
              <img
                src="/images/casing_pipe_installation.jpg"
                alt="SLV Borewell Industrial Casing Installation Bengaluru"
                className="w-full h-[320px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

              {/* Inset Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#123D4A]/10 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-[#36B6C5]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#123D4A]">
                    Calibrated Hydro-Pneumatics
                  </span>
                </div>
                <p className="text-xs text-[#58717A]">
                  Precision penetration through 800+ feet of Precambrian granite without structural foundation vibration.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-4 -right-3 sm:-right-5 bg-white p-3.5 rounded-2xl shadow-xl border border-[#123D4A]/10 max-w-[210px]">
              <div className="flex items-center gap-2 mb-1.5">
                <img
                  src="/images/logo-icon.png"
                  alt="SLV Certified"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-bold uppercase text-[#123D4A]">Zero Guesswork</span>
              </div>
              <p className="text-[11px] text-[#58717A] leading-snug">
                Meter-by-meter depth logs and certified casing insertion recorded on video.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Story & Philosophy */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#36B6C5]" />
            <span>Bengaluru Groundwater Masters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight leading-[1.12]">
            Engineering Deep Water Access for Bengaluru’s Future.
          </h2>

          <p className="text-sm sm:text-base text-[#58717A] leading-relaxed">
            Bengaluru’s water table is complex and demanding. Traditional contractors often rely on unscientific claims, resulting in dry holes and damaged driveways.
          </p>

          <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
            At SLV Borewells, we revolutionized this with technology. From deploying agile rubber-crawler Robo Rigs through narrow 7-foot residential gates to sending 360-degree dual robotic cameras 1,500 feet underground, our focus is lifetime reliability.
          </p>

          <div className="space-y-2 pt-1">
            {[
              "Autonomous Robo Rigs with zero compound wall damage",
              "Dual-lens 360° underwater robotic camera inspection down to 1500 ft",
              "High-pressure air flushing eliminating sand and sludge chokes",
              "Precision submersible pump pairing for guaranteed energy savings"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#36B6C5] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#17323B]">{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-pill-primary group"
            >
              <span>Learn Our Company History & Fleet</span>
              <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
