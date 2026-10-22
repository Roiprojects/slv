import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactActions } from '@/components/layout/FloatingContactActions';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

// Homepage components
import { HeroSection } from '@/components/home/HeroSection';
import { TrustHighlights } from '@/components/home/TrustHighlights';
import { AboutSection } from '@/components/home/AboutSection';
import { SubterraneanVisualizer } from '@/components/home/SubterraneanVisualizer';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { DepthEstimator } from '@/components/home/DepthEstimator';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactCTA } from '@/components/home/ContactCTA';

// Dedicated Pages
import { AboutPage } from '@/components/pages/AboutPage';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { GalleryPage } from '@/components/pages/GalleryPage';
import { FAQPage } from '@/components/pages/FAQPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('/');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#17323B]">
      {/* Sticky Global Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === '/' && (
          <div>
            <HeroSection
              setActiveTab={setActiveTab}
              setSelectedServiceSlug={setSelectedServiceSlug}
            />
            <TrustHighlights />
            <AboutSection setActiveTab={setActiveTab} />

            {/* Interactive Subterranean Strata Explorer */}
            <SubterraneanVisualizer />

            <ServicesSection
              setActiveTab={setActiveTab}
              setSelectedServiceSlug={setSelectedServiceSlug}
            />
            <ProcessSection />
            <WhyChooseSection />

            {/* Interactive Groundwater Radar & Yield Estimator */}
            <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <DepthEstimator />
            </section>

            <GalleryPreview setActiveTab={setActiveTab} />
            <TestimonialsSection />
            <ServiceAreasSection setActiveTab={setActiveTab} />
            <FAQSection setActiveTab={setActiveTab} />
            <ContactCTA />
          </div>
        )}

        {activeTab === '/about' && <AboutPage setActiveTab={setActiveTab} />}

        {activeTab === '/services' && (
          <ServicesPage
            selectedServiceSlug={selectedServiceSlug}
            setSelectedServiceSlug={setSelectedServiceSlug}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === '/gallery' && <GalleryPage />}

        {activeTab === '/faq' && <FAQPage />}

        {activeTab === '/contact' && <ContactPage />}

        {activeTab === '/privacy-policy' && <PrivacyPolicyPage />}
      </main>

      {/* Floating Action Elements */}
      <FloatingContactActions />
      <ScrollToTop />

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedServiceSlug={setSelectedServiceSlug}
      />
    </div>
  );
}

export default App;
