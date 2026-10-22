import React from 'react';
import { siteConfig } from '@/data/site';
import { servicesData } from '@/data/services';
import { Phone, Mail, MapPin, Clock, MessageSquare, Droplet, ArrowRight, Shield } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  setSelectedServiceSlug?: (slug: string) => void;
}

export function Footer({ setActiveTab, setSelectedServiceSlug }: FooterProps) {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (slug: string) => {
    if (setSelectedServiceSlug) {
      setSelectedServiceSlug(slug);
    }
    setActiveTab('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123D4A] text-white pt-10 md:pt-14 pb-7 md:pb-9 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#36B6C5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <button
                onClick={() => {
                  setActiveTab('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left inline-block bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20 shadow-md hover:scale-[1.02] transition-transform focus:outline-none"
                aria-label="SLV Borewells Home"
              >
                <img
                  src="/images/logo.png"
                  alt="SLV Borewells - Groundwater Solutions"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </button>

            <p className="text-sm text-[#DDF5EC]/85 leading-relaxed pr-6">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-black uppercase tracking-wider hover:scale-105 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Help</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#36B6C5]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DDF5EC]/80">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('/privacy-policy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#36B6C5]">
              Services Catalog
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#DDF5EC]/80">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service.slug)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Yard & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#36B6C5]">
              Yard & Support
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#DDF5EC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#36B6C5] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#36B6C5] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white font-bold text-white">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#36B6C5] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#36B6C5] shrink-0 mt-0.5" />
                <span className="text-[11px]">{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDF5EC]/60 gap-3">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Certified Groundwater Exploration & Drilling, Bengaluru.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('/privacy-policy')} className="hover:text-white">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('/faq')} className="hover:text-white">
              FAQ
            </button>
            <span>•</span>
            <button onClick={() => handleNav('/contact')} className="hover:text-white">
              Contact Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
