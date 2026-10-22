import React from 'react';
import { siteConfig } from '@/data/site';
import { Shield } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl border border-[#123D4A]/10 shadow-[0_10px_35px_rgba(18,61,74,0.05)] space-y-6">
          <div className="flex items-center gap-3 text-[#36B6C5]">
            <Shield className="w-8 h-8 text-[#123D4A]" />
            <h1 className="text-3xl font-extrabold text-[#123D4A]">
              Privacy Policy & Data Transparency
            </h1>
          </div>
          <p className="text-xs font-semibold text-[#58717A]">
            Last Updated: January 2026
          </p>

          <div className="space-y-4 text-sm text-[#58717A] leading-relaxed">
            <h2 className="text-lg font-bold text-[#123D4A] pt-2">
              1. Static Architecture & Data Protection
            </h2>
            <p>
              SLV Borewells operates this informational website to provide clients in Bengaluru and Karnataka with authentic technical information regarding borewell drilling, casing pipe standards, camera diagnostics, and pump installations. This website does not employ user accounts, backend databases, or commercial marketing trackers.
            </p>

            <h2 className="text-lg font-bold text-[#123D4A] pt-2">
              2. Direct WhatsApp and Telecommunication Contact
            </h2>
            <p>
              When initiating communication via telephone or WhatsApp links, your interactions occur directly with our engineering personnel via standard telecommunications or WhatsApp end-to-end encryption. Data shared is strictly utilized to evaluate site feasibility and schedule drill consultations.
            </p>

            <h2 className="text-lg font-bold text-[#123D4A] pt-2">
              3. Contact Information
            </h2>
            <p>
              For privacy-related inquiries, contact our management directly at {siteConfig.email} or call {siteConfig.phone}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
