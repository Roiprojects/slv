import React from 'react';
import { siteConfig } from '@/data/site';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SLV Borewells on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white/20"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
