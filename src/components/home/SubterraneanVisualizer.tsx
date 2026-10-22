import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Droplet, ArrowRight, ShieldCheck, Gauge, Layers, Sparkles, MessageSquare } from 'lucide-react';

interface StrataLayer {
  min: number;
  max: number;
  name: string;
  formation: string;
  drillMethod: string;
  casingRequirement: string;
  waterYield: string;
  color: string;
  badge: string;
}

const strataData: StrataLayer[] = [
  {
    min: 0,
    max: 120,
    name: "Surface Overburden & Red Clay",
    formation: "Loose alluvial red soil, silt & decomposing soft rock strata.",
    drillMethod: "Slow rotary drag bit / direct overburden auger",
    casingRequirement: "Mandatory Class-5 PVC or Heavy MS Casing seated into solid rock",
    waterYield: "Zero safe yield (Surface seepage must be sealed off)",
    color: "from-amber-600 to-amber-800",
    badge: "Overburden Casing Zone"
  },
  {
    min: 121,
    max: 450,
    name: "Weathered Granite & Boulder Strata",
    formation: "Fractured gneiss boulders, quartzite seams, transitional rock.",
    drillMethod: "Calibrated pneumatic DTH hammer (250 PSI)",
    casingRequirement: "Seated collar pipe preventing gravel collapse",
    waterYield: "Minor seasonal trickle (0.5 inch intermittent)",
    color: "from-stone-600 to-stone-800",
    badge: "Transitional Bedrock"
  },
  {
    min: 451,
    max: 950,
    name: "Hard Crystalline Blue-Grey Granite",
    formation: "Deep crystalline bedrock with primary tectonic fracture aquifers.",
    drillMethod: "High-pressure DTH hammer with tungsten carbide button bits (350+ PSI)",
    casingRequirement: "Borehole stands self-supporting in solid granite",
    waterYield: "Primary Aquifer Strike! (2.0 to 3.0 inches continuous flow)",
    color: "from-teal-800 to-cyan-900",
    badge: "PRIMARY WATER STRIKE ZONE"
  },
  {
    min: 951,
    max: 1400,
    name: "Deep Fault Line & Deep Aquifer Veins",
    formation: "Deep subterranean reservoirs, pressurized ancient fracture channels.",
    drillMethod: "High-CFM dual-stage air lift with multi-point exhaust",
    casingRequirement: "Full bottom air-flushing required to clear pulverized granite",
    waterYield: "Maximum sustained yield for apartments & commercial layouts",
    color: "from-slate-900 to-sky-950",
    badge: "Commercial High-Yield Zone"
  }
];

export function SubterraneanVisualizer() {
  const [depth, setDepth] = useState<number>(850);

  const currentLayer = strataData.find(s => depth >= s.min && depth <= s.max) || strataData[2];
  const isWaterStruck = depth >= 650;

  const handleWhatsApp = () => {
    const text = `Hi SLV Borewells, I explored your Subterranean Strata Explorer for a depth of ${depth} ft (${currentLayer.name}). Please provide a quote for drilling and pump installation.`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#123D4A]/10 shadow-[0_16px_40px_rgba(18,61,74,0.05)] relative overflow-hidden">
        {/* Soft mint backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#DDF5EC]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-[#36B6C5]" />
              <span>Interactive Bengaluru Geological Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight">
              Explore Subterranean Earth Strata
            </h2>
            <p className="text-xs sm:text-sm text-[#58717A] mt-2">
              Drag the drill depth slider to simulate how SLV Borewells penetrates soil, seats casing, and strikes deep fractured granite aquifers in Bengaluru.
            </p>
          </div>

          {/* Depth Slider Control Card */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 bg-[#FFF9EF] p-4 sm:p-5 rounded-2xl border border-[#123D4A]/10 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#58717A]">
                Target Drilling Depth
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#123D4A] tracking-tight">
                  {depth}
                </span>
                <span className="text-xs font-bold text-[#36B6C5]">FEET</span>
              </div>
            </div>

            <input
              type="range"
              min={50}
              max={1400}
              step={25}
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full h-2.5 bg-white border border-[#123D4A]/20 rounded-lg appearance-none cursor-pointer accent-[#123D4A]"
            />

            {/* Quick depth preset buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-[#123D4A]/10">
              {[
                { d: 150, label: '150 ft (Casing Test)' },
                { d: 450, label: '450 ft (Shallow Well)' },
                { d: 850, label: '850 ft (Primary Aquifer)' },
                { d: 1200, label: '1,200 ft (Deep Strike)' }
              ].map((p) => (
                <button
                  key={p.d}
                  onClick={() => setDepth(p.d)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                    depth === p.d
                      ? 'bg-[#123D4A] text-white shadow-sm'
                      : 'bg-white text-[#17323B] border border-[#123D4A]/10 hover:border-[#36B6C5]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Strata Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Visual Borewell Tube Animation */}
            <div className="lg:col-span-5 relative h-80 sm:h-88 rounded-2xl overflow-hidden border border-[#123D4A]/10 bg-gradient-to-b from-amber-900/90 via-stone-800 to-[#071A21] p-4 flex flex-col justify-between shadow-inner">
              {/* Surface Level */}
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-200 border-b border-amber-700/40 pb-2">
                <span>0 FT - GROUND LEVEL</span>
                <span>Bengaluru Top Soil</span>
              </div>

              {/* Animated Drill Pipe Representation */}
              <div className="relative flex-1 my-2 flex items-center justify-center">
                <div
                  className="w-4 rounded-full bg-gradient-to-b from-gray-300 via-gray-100 to-[#36B6C5] shadow-[0_0_15px_rgba(54,182,197,0.7)] relative transition-all duration-300"
                  style={{ height: `${Math.min(100, (depth / 1400) * 100)}%` }}
                >
                  <div className="absolute -bottom-2 -left-1.5 w-7 h-7 bg-[#36B6C5] rounded-full animate-ping opacity-75" />
                  <div className="absolute -bottom-2 -left-1.5 w-7 h-7 bg-[#36B6C5] rounded-full flex items-center justify-center text-[#123D4A] text-[9px] font-black shadow-lg">
                    ▼
                  </div>
                </div>

                {/* Water Strike Gush Animation when in deep aquifer */}
                {isWaterStruck && (
                  <div className="absolute inset-x-4 bottom-4 bg-[#123D4A]/90 backdrop-blur-md border border-[#36B6C5]/50 p-3.5 rounded-xl flex items-center gap-3 animate-pulse shadow-lg">
                    <Droplet className="w-6 h-6 text-[#36B6C5] fill-[#36B6C5]" />
                    <div>
                      <span className="text-xs font-bold text-white block">AQUIFER STRIKE DETECTED!</span>
                      <span className="text-[11px] text-[#36B6C5]">Pressurized continuous water strike at {depth} ft</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Depth Ticker */}
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-300 border-t border-white/10 pt-2">
                <span>BEDROCK LEVEL</span>
                <span className="text-[#36B6C5] font-black">{depth} FT DEEP</span>
              </div>
            </div>

            {/* Geological Layer Diagnostic Data */}
            <div className="lg:col-span-7 space-y-3">
              <div className="bg-[#FFF9EF] p-4 sm:p-6 rounded-2xl border border-[#123D4A]/10 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#36B6C5]">
                    Current Strata Encountered
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#DDF5EC] text-[#123D4A] border border-[#36B6C5]/30">
                    {currentLayer.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#123D4A]">
                  {currentLayer.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
                  {currentLayer.formation}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2.5 border-t border-[#123D4A]/10 text-xs">
                  <div>
                    <span className="text-[#58717A] block mb-0.5">Recommended Drilling Tech:</span>
                    <span className="font-bold text-[#123D4A]">{currentLayer.drillMethod}</span>
                  </div>
                  <div>
                    <span className="text-[#58717A] block mb-0.5">Casing Specification:</span>
                    <span className="font-bold text-[#123D4A]">{currentLayer.casingRequirement}</span>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 flex items-center gap-3">
                  <Droplet className="w-4 h-4 text-[#36B6C5] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#123D4A] block">Water Yield Outlook:</span>
                    <span className="text-xs text-[#123D4A] font-semibold">{currentLayer.waterYield}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Estimation Action */}
              <button
                onClick={handleWhatsApp}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Get WhatsApp Quotation For {depth} FT Drilling</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
