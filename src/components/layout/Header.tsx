import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Phone, Menu, X, Droplet, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setActiveTab(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-full px-5 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#123D4A]/10 transition-all">
          {/* Official Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group focus:outline-none py-0.5"
            aria-label="SLV Borewells Home"
          >
            <img
              src="/images/logo.png"
              alt="SLV Borewells - Groundwater Solutions"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#123D4A] shadow-md'
                      : 'text-[#17323B] hover:text-[#123D4A] hover:bg-[#DDF5EC]/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Live Status & Call Now */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[11px] text-[#123D4A] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#36B6C5] animate-pulse" />
              <span>4 Rigs Mobilized Today</span>
            </div>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#123D4A] hover:bg-[#0E2F3A] text-white text-xs font-extrabold uppercase tracking-wider transition-all hover:scale-105 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 fill-[#36B6C5] text-[#36B6C5]" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#123D4A] hover:bg-[#DDF5EC] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#123D4A]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-5 border border-[#123D4A]/10 shadow-2xl space-y-2">
          {siteConfig.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold tracking-wide transition-colors ${
                activeTab === link.href
                  ? 'bg-[#123D4A] text-white'
                  : 'text-[#17323B] hover:bg-[#DDF5EC]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#123D4A] text-white text-xs font-black uppercase tracking-wider rounded-2xl"
            >
              <Phone className="w-4 h-4 text-[#36B6C5]" />
              <span>Call Technical Line: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
