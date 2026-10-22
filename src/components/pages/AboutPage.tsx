import React from 'react';
import { siteConfig } from '@/data/site';
import { ContactCTA } from '@/components/home/ContactCTA';
import { ShieldCheck, Target, Award, Wrench, Droplet, ArrowRight, Cpu, Layers } from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
}

export function AboutPage({ setActiveTab }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B]">
      {/* Banner */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[#123D4A]/10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-3">
            <img
              src="/images/logo-icon.png"
              alt="SLV Borewells Emblem"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2 block">
            The SLV Engineering Standard
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#123D4A] max-w-4xl mx-auto leading-tight">
            Grounded in Geological Discipline. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123D4A] via-[#36B6C5] to-[#0284C7]">
              Driven by Advanced Telemetry.
            </span>
          </h1>
          <p className="text-[#58717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2.5 leading-relaxed">
            Founded in {siteConfig.establishedYear}, SLV Borewells has drilled over 1,500 successful deep rock wells across Bengaluru, bringing scientific rigor and certified casing to urban and rural properties.
          </p>
        </div>
      </section>

      {/* Philosophy & Machinery Overview */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5]">
              Our Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123D4A] tracking-tight leading-tight">
              A Decidedly Technical Approach to Groundwater Exploration.
            </h2>
            <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
              Bengaluru sits on hard granite bedrock interlaced with complex underground fracture veins. Without proper geological alignment, holes are often drilled dry. We bridge traditional rig craftsmanship with modern scientific testing — combining electrical resistivity imaging, calibrated rotary percussion, and heavy-duty casing pipes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 border-t border-[#123D4A]/10">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#123D4A]/10 shadow-sm">
                <Target className="w-5 h-5 text-[#36B6C5] mb-1.5" />
                <h4 className="text-sm font-bold text-[#123D4A]">Our Mission</h4>
                <p className="text-xs text-[#58717A] mt-0.5">
                  Deliver long-lasting groundwater access with zero hidden costs and exact pipe verification.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#123D4A]/10 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#123D4A] mb-1.5" />
                <h4 className="text-sm font-bold text-[#123D4A]">Our Standard</h4>
                <p className="text-xs text-[#58717A] mt-0.5">
                  Strict adherence to BIS casing specifications and post-drilling air-compressor cleaning.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="/images/casing_pipe_installation.jpg"
                alt="SLV Drilling Site Casing Pipe Setup Bengaluru"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="bg-[#DDF5EC] p-4 sm:p-5 rounded-3xl border border-[#36B6C5]/40 shadow-sm">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#123D4A] mb-1">
                Zero Compromise on Casing Quality
              </h4>
              <p className="text-xs text-[#58717A] leading-relaxed">
                The casing pipe is the spine of any borewell. If the top soil collapses, the whole well is lost. We seat verified Class-5 PVC or heavy MS pipes securely into solid rock before deep hammering begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-8 md:py-12 border-t border-[#123D4A]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5]">
              Machinery & Diagnostics
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123D4A] tracking-tight mt-1">
              Engineered Fleet for Any Plot Size
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#FFF9EF] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-sm">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5 text-[#123D4A]" />
              </div>
              <h3 className="text-base font-bold text-[#123D4A] mb-1.5">Robo Crawler Rigs</h3>
              <p className="text-xs text-[#58717A] leading-relaxed">
                Compact rubber-track crawler chassis capable of entering through narrow 7-foot villa gates and basements without wall or driveway damage.
              </p>
            </div>

            <div className="bg-[#FFF9EF] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-sm">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5 text-[#123D4A]" />
              </div>
              <h3 className="text-base font-bold text-[#123D4A] mb-1.5">High-CFM Screw Compressors</h3>
              <p className="text-xs text-[#58717A] leading-relaxed">
                Dual-stage screw compressors delivering 1200+ CFM at 350+ PSI for rapid hard rock penetration and comprehensive bottom desilting.
              </p>
            </div>

            <div className="bg-[#FFF9EF] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#123D4A]/10 shadow-sm">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 text-[#123D4A]" />
              </div>
              <h3 className="text-base font-bold text-[#123D4A] mb-1.5">360° Robotic Dual Cameras</h3>
              <p className="text-xs text-[#58717A] leading-relaxed">
                Dual-lens pan-tilt color inspection down to 1,500 ft with depth counter to diagnose stuck pumps, silt choke, and casing integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
