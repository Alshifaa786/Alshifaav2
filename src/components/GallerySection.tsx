import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'care-home', label: 'Care Home & Gardens' },
    { id: 'rooms', label: 'Resident Rooms' },
    { id: 'therapy', label: 'Therapy & Physio' },
    { id: 'wellness', label: '50+ Exercise' },
    { id: 'staff', label: 'Medical Staff' },
    { id: 'home-visits', label: 'Home Visits' },
  ];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Campus & Care Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Al Shifaa Photo Gallery
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Take a visual tour of our tranquil Lavington facility, resident suites, physical therapy rooms, and active community wellness sessions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#0F2942] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 h-64 border border-slate-200 shadow-soft cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/90 via-[#0F2942]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl text-white">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] w-full bg-black flex items-center justify-center">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-slate-300">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
