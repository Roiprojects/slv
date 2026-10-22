import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Calculator, Compass, Droplet, ArrowRight, MessageSquare, CheckCircle2, Radar, Gauge } from 'lucide-react';

interface ZoneData {
  depthRange: string;
  casingAvg: string;
  recommendedPump: string;
  waterDepthAvg: string;
  soilNote: string;
}

const zoneInfo: Record<string, ZoneData> = {
  "Whitefield & East Tech Corridor": {
    depthRange: "900 – 1250 ft",
    casingAvg: "80 – 160 ft (Medium to Deep overburden)",
    recommendedPump: "5.0 – 7.5 HP multi-stage copper",
    waterDepthAvg: "Primary yield fissures at 650 – 1000 ft",
    soilNote: "Hard grey granite below weathered red clay. Heavy DTH air pressure required."
  },
  "Sarjapur, Haralur & Bellandur": {
    depthRange: "800 – 1100 ft",
    casingAvg: "60 – 120 ft",
    recommendedPump: "4.0 – 6.0 HP submersible stage pump",
    waterDepthAvg: "Primary yield fissures at 550 – 850 ft",
    soilNote: "Dense villa gated plots. Autonomous compact Robo rig strongly recommended."
  },
  "Electronic City & Bommasandra": {
    depthRange: "850 – 1150 ft",
    casingAvg: "90 – 140 ft",
    recommendedPump: "5.0 – 7.5 HP high-head stage pump",
    waterDepthAvg: "Fissure yield around 700 – 950 ft",
    soilNote: "Dense crystalline bedrock. Excellent long-term well wall stability."
  },
  "Yelahanka & Hebbal North Zone": {
    depthRange: "750 – 1050 ft",
    casingAvg: "70 – 110 ft",
    recommendedPump: "3.5 – 5.0 HP stage pump",
    waterDepthAvg: "Aquifer veins active at 500 – 800 ft",
    soilNote: "Moderate granite with clay top strata. Fast penetration."
  },
  "Kanakapura Road & South-West": {
    depthRange: "700 – 950 ft",
    casingAvg: "50 – 90 ft",
    recommendedPump: "3.0 – 5.0 HP",
    waterDepthAvg: "Water strike between 450 – 750 ft",
    soilNote: "Exceptional solid granite rock with shallow bedrock seating."
  },
  "Devanahalli & Airport Aerotropolis": {
    depthRange: "950 – 1350 ft",
    casingAvg: "100 – 180 ft",
    recommendedPump: "6.0 – 10.0 HP commercial",
    waterDepthAvg: "Deep fracture zones at 800 – 1150 ft",
    soilNote: "Deep strata, heavy commercial rigs recommended."
  }
};

export function DepthEstimator() {
  const [selectedZone, setSelectedZone] = useState<string>("Whitefield & East Tech Corridor");
  const [projectType, setProjectType] = useState<string>("Residential Villa / House");
  const [rigType, setRigType] = useState<string>("Robo Crawler Rig (Narrow gate < 8ft)");

  const currentZone = zoneInfo[selectedZone] || zoneInfo["Whitefield & East Tech Corridor"];

  const buildWhatsAppLink = () => {
    const text = `*Borewell Estimation Request - SLV Borewells*%0A%0A*Locality:* ${selectedZone}%0A*Project:* ${projectType}%0A*Access:* ${rigType}%0A*Estimated Depth:* ${currentZone.depthRange}%0A*Pump Match:* ${currentZone.recommendedPump}%0A%0APlease schedule a site visit and provide a formal price quote.`;
    return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="w-full bg-white rounded-3xl p-5 sm:p-7 border border-[#123D4A]/10 shadow-[0_16px_40px_rgba(18,61,74,0.05)] relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="p-2 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A]">
            <Radar className="w-4 h-4 text-[#36B6C5]" />
          </div>
          <span className="text-xs uppercase tracking-wider font-bold text-[#123D4A]">
            Bengaluru Groundwater Radar & Yield Advisor
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#123D4A] mb-2">
          AI Geological Estimator for Bengaluru Plots
        </h3>
        <p className="text-[#58717A] text-xs sm:text-sm mb-6 max-w-3xl leading-relaxed">
          Groundwater dynamics and rock hardness vary drastically between East, South, and North Bengaluru. Select your area to reveal calibrated drilling depth, casing pipe depth, and matched submersible pump ratings.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                1. Select Bengaluru Locality
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-[#FFF9EF] border border-[#123D4A]/15 rounded-2xl px-4 py-3 text-[#17323B] text-xs sm:text-sm focus:outline-none focus:border-[#36B6C5] transition-colors cursor-pointer shadow-sm"
              >
                {Object.keys(zoneInfo).map((zone) => (
                  <option key={zone} value={zone} className="bg-white text-[#17323B]">
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                2. Property Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Residential Villa / House", "Apartment Community", "Commercial Property", "Agricultural Farmland"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`text-xs p-2.5 sm:p-3 rounded-2xl text-left border transition-all ${
                      projectType === type
                        ? 'bg-[#123D4A] text-white font-bold border-[#123D4A] shadow-sm'
                        : 'bg-[#FFF9EF] text-[#58717A] border-[#123D4A]/10 hover:border-[#36B6C5] hover:text-[#123D4A]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#123D4A] mb-1.5">
                3. Gate Clearance
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Robo Crawler Rig (Narrow gate < 8ft)",
                  "Heavy Truck Rig (Open site > 10ft)"
                ].map((rig) => (
                  <button
                    key={rig}
                    type="button"
                    onClick={() => setRigType(rig)}
                    className={`text-xs p-2.5 sm:p-3 rounded-2xl text-left border transition-all ${
                      rigType === rig
                        ? 'bg-[#123D4A] text-white font-bold border-[#123D4A] shadow-sm'
                        : 'bg-[#FFF9EF] text-[#58717A] border-[#123D4A]/10 hover:border-[#36B6C5] hover:text-[#123D4A]'
                    }`}
                  >
                    {rig}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Diagnostic Display Card */}
          <div className="lg:col-span-6 bg-[#FFF9EF] border border-[#123D4A]/15 rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#123D4A]/10 mb-3.5">
                <div>
                  <span className="text-xs text-[#36B6C5] font-bold uppercase tracking-wider block">
                    Calculated Geological Profile
                  </span>
                  <span className="text-xl font-extrabold text-[#123D4A]">{selectedZone}</span>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDF5EC] border border-[#36B6C5]/30 flex items-center justify-center text-[#123D4A]">
                  <Gauge className="w-5 h-5 text-[#36B6C5]" />
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#58717A]">Target Drill Depth</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#123D4A]">{currentZone.depthRange}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#58717A]">Casing Seating Depth</span>
                  <span className="text-xs font-bold text-[#17323B] text-right max-w-[220px]">{currentZone.casingAvg}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#58717A]">Recommended Submersible Motor</span>
                  <span className="text-xs font-bold text-[#17323B]">{currentZone.recommendedPump}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#58717A]">Aquifer Strike Expectation</span>
                  <span className="text-xs font-bold text-[#123D4A] text-right max-w-[220px]">{currentZone.waterDepthAvg}</span>
                </div>

                <div className="bg-white rounded-2xl p-3 sm:p-3.5 text-xs text-[#58717A] border border-[#123D4A]/10 mt-1.5">
                  <span className="font-bold text-[#123D4A] block mb-0.5">Local Strata Characteristic:</span>
                  {currentZone.soilNote}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#123D4A]/10">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.01] shadow-md group"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Get Exact WhatsApp Quote For This Location</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-center text-[#58717A] mt-2">
                Direct engineer feedback • Free site access evaluation • Zero spam guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
