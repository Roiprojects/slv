import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { ContactCTA } from '@/components/home/ContactCTA';
import { X, MapPin, Camera } from 'lucide-react';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = [
    'All Projects',
    'Drilling Machinery',
    'Borewell Operations',
    'Pumps & Installation',
    'Completed Work'
  ];

  const filteredItems = selectedCategory === 'All Projects'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#17323B]">
      {/* Banner */}
      <section className="relative py-10 sm:py-14 overflow-hidden border-b border-[#123D4A]/10 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5] mb-2 block">
            Real Bengaluru Field Photography
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#123D4A] max-w-4xl mx-auto leading-tight">
            Machinery & Project Gallery
          </h1>
          <p className="text-[#58717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2.5 leading-relaxed">
            Authentic photographic records of our Robo crawler units, heavy DTH hammer trucks, and submersible pump lowerings across Bengaluru.
          </p>
        </div>
      </section>

      {/* Filter controls */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#123D4A] text-white shadow-md scale-105'
                  : 'bg-white text-[#17323B] hover:text-[#123D4A] hover:bg-[#DDF5EC] border border-[#123D4A]/10 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-56 sm:h-64 rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#123D4A]/10 hover:border-[#36B6C5] shadow-[0_6px_24px_rgba(18,61,74,0.04)] hover:shadow-[0_16px_36px_rgba(54,182,197,0.14)] transition-all duration-500 hover:-translate-y-0.5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#123D4A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#123D4A] transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 sm:p-6 bg-white space-y-1.5 border-t border-[#123D4A]/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#36B6C5]">
                  {activePhoto.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#58717A]">
                  <MapPin className="w-3.5 h-3.5 text-[#36B6C5]" />
                  <span>{activePhoto.location}</span>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-[#123D4A]">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#58717A] leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <ContactCTA />
    </div>
  );
}
