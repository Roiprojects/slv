import React from 'react';
import { siteConfig } from '@/data/site';
import { Phone } from 'lucide-react';

function WhatsAppIcon({ className = 'w-7 h-7 fill-white' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <path d="M16.002 0.003C7.164 0.003 0 7.167 0 16.004c0 2.825 0.738 5.58 2.14 8.012L0.065 31.935l8.113-2.128c2.35 1.282 5.01 1.958 7.824 1.958h0.007c8.835 0 16-7.164 16-16.002 0-4.279-1.666-8.303-4.693-11.33A15.908 15.908 0 0 0 16.002 0.003zm0 29.324h-0.006c-2.454 0-4.862-0.66-6.966-1.908l-0.5-0.297-5.176 1.358 1.382-5.045-0.326-0.518c-1.373-2.184-2.097-4.708-2.097-7.214 0-7.354 5.984-13.338 13.344-13.338 3.563 0 6.913 1.388 9.432 3.908 2.52 2.52 3.906 5.87 3.906 9.434 0 7.356-5.986 13.34-13.343 13.34zm7.322-9.996c-0.401-0.2-2.375-1.172-2.742-1.306-0.368-0.134-0.635-0.2-0.903 0.2-0.268 0.402-1.037 1.306-1.272 1.573-0.234 0.268-0.468 0.301-0.87 0.1-0.401-0.2-1.696-0.625-3.23-1.993-1.194-1.064-2-2.379-2.234-2.781-0.234-0.401-0.025-0.619 0.176-0.818 0.181-0.18 0.401-0.468 0.602-0.702 0.2-0.234 0.268-0.401 0.401-0.669 0.134-0.268 0.067-0.502-0.033-0.702s-0.903-2.176-1.238-2.98c-0.326-0.783-0.658-0.677-0.903-0.689-0.234-0.012-0.502-0.015-0.769-0.015s-0.702 0.1-1.07 0.502c-0.368 0.401-1.405 1.372-1.405 3.347 0 1.975 1.439 3.882 1.639 4.15 0.2 0.268 2.832 4.324 6.86 6.064 0.958 0.414 1.706 0.661 2.289 0.846 0.963 0.306 1.84 0.263 2.532 0.16 0.772-0.116 2.375-0.97 2.709-1.908 0.335-0.937 0.335-1.74 0.234-1.908-0.1-0.167-0.368-0.268-0.769-0.468z" />
    </svg>
  );
}

export function FloatingContactActions() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  const telUrl = `tel:${siteConfig.phone.replace(/\s+/g, '')}`;

  return (
    <aside
      aria-label="Quick contact floating actions"
      className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col gap-3 items-center select-none"
    >
      {/* Top Button: Circular Purple-Blue-to-Teal Gradient Call Button */}
      <div className="relative group">
        <a
          href={telUrl}
          aria-label={`Call SLV Borewells: ${siteConfig.phone}`}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#805ad5] via-[#5b63d3] to-[#2cb5a8] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(99,102,241,0.45)] hover:shadow-[0_12px_28px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        >
          <Phone className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white stroke-[2.2] fill-none group-hover:rotate-12 transition-transform duration-300" />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#123D4A] text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0 hidden sm:block">
          <span>Call: {siteConfig.phone}</span>
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#123D4A]" />
        </div>
      </div>

      {/* Bottom Button: Circular WhatsApp Green Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SLV Borewells on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-white group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#123D4A] text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0 hidden sm:block">
          <span>Chat on WhatsApp</span>
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#123D4A]" />
        </div>
      </div>
    </aside>
  );
}
