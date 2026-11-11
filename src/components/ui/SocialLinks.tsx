import React from 'react';
import { siteConfig } from '@/data/site';

interface SocialLinksProps {
  showLabel?: boolean;
  label?: string;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
}

export function SocialLinks({
  showLabel = false,
  label = "FOLLOW US",
  className = "",
  iconSize = 'md'
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 rounded-2xl'
  };

  const svgSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const socialItems = [
    {
      name: "YouTube",
      href: siteConfig.social?.youtube || "https://www.youtube.com/@SLVBorewells-Banglore",
      bgClass: "bg-[#FF0000] shadow-[0_4px_14px_rgba(255,0,0,0.35)]",
      icon: (
        <svg className={svgSizeClasses[iconSize]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="5.5" width="20" height="13" rx="3.8" fill="white" />
          <polygon points="10,9 15.5,12 10,15" fill="#FF0000" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: siteConfig.social?.facebook || "#",
      bgClass: "bg-[#1877F2] shadow-[0_4px_14px_rgba(24,119,242,0.35)]",
      icon: (
        <svg className={svgSizeClasses[iconSize]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" fill="white" />
          <path
            d="M13.5 13.5H15.5L16 11H13.5V9.5C13.5 8.8 13.7 8.3 14.8 8.3H16V6.1C15.4 6 14.7 5.9 13.9 5.9C11.8 5.9 10.5 7.2 10.5 9.5V11H8.5V13.5H10.5V20H13.5V13.5Z"
            fill="#1877F2"
          />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: siteConfig.social?.instagram || "#",
      bgStyle: {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
        boxShadow: '0 4px 14px rgba(214, 36, 159, 0.35)'
      },
      icon: (
        <svg className={`${svgSizeClasses[iconSize]} text-white`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    }
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && (
        <span className="text-[11px] font-black uppercase tracking-widest text-[#36B6C5] block">
          {label}
        </span>
      )}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow SLV Borewells on ${item.name}`}
            aria-label={`Follow SLV Borewells on ${item.name}`}
            style={item.bgStyle}
            className={`${sizeClasses[iconSize]} ${item.bgClass || ''} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 cursor-pointer`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

