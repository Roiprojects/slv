import React, { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/data/site';
import { WaterRippleImage } from '@/components/ui/water-ripple-image';
import { 
  Phone, 
  ArrowRight, 
  Droplets, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Layers, 
  Activity, 
  Gauge, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  ChevronRight,
  ChevronLeft,
  Zap, 
  Sliders
} from 'lucide-react';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedServiceSlug?: (slug: string) => void;
}

const heroSlides = [
  {
    id: 'heavy-rig',
    image: '/images/hero_drilling_rig.jpg',
    tag: 'Bengaluru Deep Rock Fleet',
    title: 'High-Pressure DTH Hammer Drilling',
    metric: '350 PSI Feed',
    metricType: 'Pressure Feed',
    geology: 'Peninsular Gneiss Bedrock',
    badge: 'Heavy Carrier Rig'
  },
  {
    id: 'water-strike',
    image: '/images/borewell_water_strike.jpg',
    tag: 'Aquifer Breakthrough',
    title: 'Sustained High-Yield Water Strikes',
    metric: '650–950 FT',
    metricType: 'Strike Depth',
    geology: 'Natural Subterranean Vein',
    badge: 'Water Discharged'
  },
  {
    id: 'robo-crawler',
    image: '/images/robo_crawler_rig.jpg',
    tag: 'Urban Villa & Narrow Gate Access',
    title: 'Autonomous Robo Crawler Rigs',
    metric: '6.5 FT Gate',
    metricType: 'Clearance Width',
    geology: 'Tight Residential Plots',
    badge: 'Zero Wall Damage'
  },
  {
    id: 'camera-scan',
    image: '/images/camera_scanning_inspection.jpg',
    tag: 'Robotic Hydro Telemetry',
    title: '360° Dual Underwater Camera Scanning',
    metric: '1,500 FT Depth',
    metricType: 'Optical Range',
    geology: 'Dual 360° 4K Telemetry',
    badge: 'Video Certified'
  },
  {
    id: 'casing-pipe',
    image: '/images/casing_pipe_installation.jpg',
    tag: 'Structural Well Integrity',
    title: 'BIS Class-5 Certified Casing Seating',
    metric: 'Class-5 BIS',
    metricType: 'Casing Standard',
    geology: 'Bedrock Anchored',
    badge: '30+ Yr Longevity'
  }
];

export function HeroSection({ setActiveTab, setSelectedServiceSlug }: HeroSectionProps) {
  const [selectedLocality, setSelectedLocality] = useState('Whitefield & East Zone');
  const [selectedGate, setSelectedGate] = useState('Narrow Gate (< 7.5 ft)');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isWaterRipple, setIsWaterRipple] = useState(false);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance carousel every 4.5 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNextSlide]);

  const handleHeroWhatsApp = () => {
    const text = `*New Borewell Consultation Request*%0A%0A*Area:* ${selectedLocality}%0A*Gate Access:* ${selectedGate}%0A%0APlease check site feasibility and provide an immediate drilling estimate.`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-6 lg:pb-14 bg-[#FFF9EF]">
      {/* Dynamic Full-Bleed Background Images Synchronized with Active Carousel Slide */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={`hero-bg-${slide.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-40 sm:opacity-45 lg:opacity-50' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className={`w-full h-full object-cover filter transition-transform duration-[5000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Studio gradient scrims for text readability and harmonious brand blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9EF] via-[#FFF9EF]/85 to-[#FFF9EF]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9EF] via-transparent to-[#FFF9EF]/80" />
        
        {/* Ambient accent light */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-[#36B6C5]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Bar */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#123D4A]/10 shadow-[0_4px_20px_rgba(18,61,74,0.06)] hover:border-[#36B6C5] transition-all">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36B6C5] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#36B6C5]" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#123D4A]">
              Next-Gen Autonomous Robo Rigs
            </span>
            <span className="hidden sm:inline text-xs text-[#58717A]">•</span>
            <span className="hidden sm:inline text-xs font-semibold text-[#58717A]">
              Entering gates as narrow as 6.5 ft across Bengaluru
            </span>
            <ChevronRight className="w-4 h-4 text-[#36B6C5]" />
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 sm:mb-10">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#123D4A] tracking-[-0.035em] leading-[1.06]">
                Water Starts with the <br className="hidden sm:block" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#123D4A] via-[#0284C7] to-[#36B6C5]">
                  Right Groundwork.
                  {/* Subtle decorative curved water underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#36B6C5]/40" viewBox="0 0 300 12" fill="none">
                    <path d="M1 9C50 3 100 11 150 5C200 -1 250 11 299 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#58717A] max-w-2xl font-normal leading-relaxed pt-2">
                Bengaluru’s premier groundwater engineering firm. We combine specialized <span className="font-bold text-[#123D4A]">Robo crawler rigs</span> for tight urban gates with high-torque hydraulic hammer carriers — verified by <span className="font-bold text-[#123D4A]">360° robotic camera scanning</span> and zero guess billing.
              </p>
            </div>

            {/* Quick Hero Feasibility Calculator Bar */}
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-[#123D4A]/10 shadow-[0_12px_36px_rgba(18,61,74,0.08)] max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Locality select */}
                <div className="sm:col-span-5 px-3 py-2 bg-[#FFF9EF] rounded-2xl border border-[#123D4A]/10">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#58717A]">
                    Locality / Area
                  </span>
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#123D4A] focus:outline-none cursor-pointer pt-0.5"
                  >
                    <option value="Whitefield & East Zone">Whitefield & ITPL</option>
                    <option value="Sarjapur & Haralur">Sarjapur & Haralur</option>
                    <option value="Electronic City">Electronic City</option>
                    <option value="Yelahanka & North">Yelahanka & Hebbal</option>
                    <option value="Kanakapura & South">Kanakapura Road</option>
                    <option value="Devanahalli Area">Devanahalli Corridor</option>
                  </select>
                </div>

                {/* Gate access select */}
                <div className="sm:col-span-4 px-3 py-2 bg-[#FFF9EF] rounded-2xl border border-[#123D4A]/10">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#58717A]">
                    Gate Width
                  </span>
                  <select
                    value={selectedGate}
                    onChange={(e) => setSelectedGate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#123D4A] focus:outline-none cursor-pointer pt-0.5"
                  >
                    <option value="Narrow Gate (< 7.5 ft)">Narrow (&lt; 7.5 ft) - Robo</option>
                    <option value="Wide Entrance (> 10 ft)">Wide (&gt; 10 ft) - Truck</option>
                    <option value="Low Ceiling / Basement">Basement / Low Height</option>
                  </select>
                </div>

                {/* Action button */}
                <div className="sm:col-span-3">
                  <button
                    onClick={handleHeroWhatsApp}
                    className="w-full py-3.5 px-4 bg-[#123D4A] hover:bg-[#0E2F3A] text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                  >
                    <span>Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#36B6C5]" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs and Verified Phone */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => {
                  setActiveTab('/services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-pill-primary group text-sm"
              >
                <span>Explore Precision Services</span>
                <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="btn-pill-secondary group text-sm"
              >
                <div className="w-7 h-7 rounded-full bg-[#DDF5EC] flex items-center justify-center text-[#123D4A]">
                  <Phone className="w-3.5 h-3.5 fill-[#123D4A]" />
                </div>
                <span>Call Drill Desk: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-[#123D4A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#36B6C5]" />
                <span>Zero Compound Wall Damage</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#36B6C5]" />
                <span>Class-5 Lead-Free Casing Pipes</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#36B6C5]" />
                <span>Transparent Per-Foot Meter Logs</span>
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Multi-Slide Machinery & Aquifer Carousel */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative group/carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Media Showcase Window */}
              <div className="relative rounded-3xl overflow-hidden bg-[#123D4A] border-4 border-white shadow-[0_25px_60px_rgba(18,61,74,0.18)] aspect-[4/4.2] sm:aspect-[16/11] lg:aspect-[4/4.2] select-none">
                
                {/* Background Carousel Slides with Smooth Transition */}
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive 
                          ? 'opacity-100 scale-100 z-10' 
                          : 'opacity-0 scale-105 pointer-events-none z-0'
                      }`}
                    >
                      {isActive && slide.id === 'water-strike' && isWaterRipple ? (
                        <WaterRippleImage
                          blueish={0.35}
                          scale={7.5}
                          illumination={0.25}
                          surfaceDistortion={0.05}
                          waterDistortion={0.03}
                          src={slide.image}
                          className="w-full h-full"
                        />
                      ) : (
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover brightness-[0.92] transition-transform duration-1000 ease-out"
                        />
                      )}
                      
                      {/* Atmospheric gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
                    </div>
                  );
                })}

                {/* Top Navigation & Status Bar */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2">
                  <div className="bg-[#123D4A]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38EF7D] animate-pulse" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                      {heroSlides[currentSlide].badge}
                    </span>
                  </div>

                  {/* Water Ripple Interactive Toggle (for water-strike slide) or Auto-Play Indicator */}
                  {heroSlides[currentSlide].id === 'water-strike' ? (
                    <button
                      onClick={() => setIsWaterRipple(!isWaterRipple)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-sm ${
                        isWaterRipple 
                          ? 'bg-[#36B6C5] text-[#123D4A] font-extrabold' 
                          : 'bg-white/85 text-[#123D4A] hover:bg-white'
                      }`}
                      title="Toggle interactive water ripple physics"
                    >
                      <Droplets className="w-3 h-3 text-current" />
                      <span>{isWaterRipple ? 'Interactive Ripple: ON' : 'Try Ripple Effect'}</span>
                    </button>
                  ) : (
                    <div className="hidden sm:flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/90 border border-white/10">
                      <span>Slide {currentSlide + 1} of {heroSlides.length}</span>
                    </div>
                  )}
                </div>

                {/* Left & Right Prev/Next Glass Arrow Controls */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-white/90 text-white hover:text-[#123D4A] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-white/90 text-white hover:text-[#123D4A] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Overlay Card: Dynamic Telemetry & Machinery Specs */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 border border-[#123D4A]/10 shadow-[0_12px_32px_rgba(0,0,0,0.2)] z-20 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36B6C5] animate-ping" />
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#36B6C5]">
                        {heroSlides[currentSlide].tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#123D4A] bg-[#DDF5EC] px-2.5 py-0.5 rounded-full border border-[#36B6C5]/30">
                      {heroSlides[currentSlide].metric}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-[#123D4A] leading-tight line-clamp-1 mb-1">
                    {heroSlides[currentSlide].title}
                  </h3>

                  <div className="flex items-center justify-between text-[11px] text-[#58717A] pt-1 border-t border-[#123D4A]/5">
                    <span className="truncate max-w-[200px] sm:max-w-[240px]">
                      {heroSlides[currentSlide].geology}
                    </span>
                    <span className="font-bold text-[#123D4A] shrink-0">
                      {heroSlides[currentSlide].metricType}
                    </span>
                  </div>

                  {/* Slide Progress / Thumbnail Indicator Strip */}
                  <div className="flex items-center gap-1.5 pt-2.5 mt-2 border-t border-[#123D4A]/10">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                          idx === currentSlide
                            ? 'w-8 bg-[#36B6C5]'
                            : 'w-2 bg-[#123D4A]/20 hover:bg-[#123D4A]/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                      />
                    ))}
                    <span className="ml-auto text-[9px] font-bold text-[#58717A]/70 uppercase tracking-widest">
                      {isPaused ? 'Paused' : 'Auto-Playing'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Floating Badge 1: Top-Left Access Pill */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-[#123D4A]/10 flex items-center gap-2.5 z-30 max-w-[210px] hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-[#DDF5EC] flex items-center justify-center text-[#123D4A] shrink-0">
                  <Truck className="w-4 h-4 text-[#36B6C5]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#123D4A] block leading-tight">
                    6.5 FT Gate Access
                  </span>
                  <span className="text-[10px] text-[#58717A] leading-none">
                    Rubber-track Robo rig
                  </span>
                </div>
              </div>

              {/* Dynamic Floating Badge 2: Right-Center Certification Seal */}
              <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 bg-[#123D4A] text-white p-2.5 sm:p-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 z-30 hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-[#36B6C5]" />
                <div>
                  <span className="text-xs font-bold block leading-none">100% Certified</span>
                  <span className="text-[10px] text-[#DDF5EC]/80">Seated in Solid Rock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Stats Ribbon */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#123D4A]/10 shadow-[0_8px_30px_rgba(18,61,74,0.04)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#123D4A]/10">
            <div className="pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#123D4A] tracking-tight block">
                1,500+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#58717A] block mt-1">
                Borewells Drilled
              </span>
              <span className="text-[11px] text-[#58717A]/80 mt-0.5 block">
                Across 8 Bengaluru zones
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#36B6C5] tracking-tight block">
                98.4%
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#58717A] block mt-1">
                Aquifer Success Rate
              </span>
              <span className="text-[11px] text-[#58717A]/80 mt-0.5 block">
                Via scientific VES resistivity
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#123D4A] tracking-tight block">
                6.5 ft
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#58717A] block mt-1">
                Robo Gate Clearance
              </span>
              <span className="text-[11px] text-[#58717A]/80 mt-0.5 block">
                Ultra-compact crawler footprint
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#123D4A] tracking-tight block">
                30+ Yrs
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#58717A] block mt-1">
                Casing Durability
              </span>
              <span className="text-[11px] text-[#58717A]/80 mt-0.5 block">
                Heavy Class-5 PVC / Steel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
