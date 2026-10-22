import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { ArrowRight, Eye, X, MapPin, Camera } from 'lucide-react';

interface GalleryPreviewProps {
  setActiveTab: (tab: string) => void;
}

export function GalleryPreview({ setActiveTab }: GalleryPreviewProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EC] border border-[#36B6C5]/30 text-[#123D4A] text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-4 h-4 text-[#36B6C5]" />
            <span>Real Field Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#123D4A] tracking-tight">
            Recent Bengaluru Projects & Fleet
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setActiveTab('/gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-pill-secondary group"
          >
            <span>Explore Complete Field Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#36B6C5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Grid of 6 High-Res Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {previewItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative h-52 sm:h-60 rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_6px_24px_rgba(18,61,74,0.04)] hover:shadow-[0_16px_36px_rgba(54,182,197,0.14)] transition-all duration-500 hover:-translate-y-0.5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#36B6C5] mb-0.5">
                {item.category}
              </span>
              <h4 className="text-sm sm:text-base font-bold leading-snug group-hover:text-[#36B6C5] transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#36B6C5]" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#123D4A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#123D4A] transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white space-y-1.5 border-t border-[#123D4A]/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5]">
                  {selectedImage.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#58717A]">
                  <MapPin className="w-3.5 h-3.5 text-[#36B6C5]" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-[#123D4A]">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
