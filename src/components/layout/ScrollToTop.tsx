import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#123D4A]/90 hover:bg-[#123D4A] text-white border-2 border-[#36B6C5]/50 hover:border-[#36B6C5] shadow-[0_8px_30px_rgba(18,61,74,0.35)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      title="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#36B6C5] group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
    </button>
  );
}
