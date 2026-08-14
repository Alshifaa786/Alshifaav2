import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/content';
import { IconHelper } from './IconHelper';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Calendar, 
  Filter
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential Care' },
    { id: 'outpatient', label: 'Outpatient & Clinics' },
    { id: 'home', label: 'Home Nursing' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'residential')
      return s.id === 'elderly-care' || s.id === 'mental-health';
    if (activeCategory === 'outpatient')
      return s.id === 'opd-clinic' || s.id === 'wellness-50';
    if (activeCategory === 'home')
      return s.id === 'home-care';
    return true;
  });

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comprehensive Healthcare Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Our Healthcare Services
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Every care model at Al Shifaa is crafted around dignity, medical excellence, and personalized attention to ensure complete peace of mind.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-[#0F2942] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Image Frame */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-[#0F2942]/20 to-transparent" />

                {/* Badge top right */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F2942] text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-white">
                  {service.badge}
                </span>

                {/* Icon top left */}
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-2xl bg-white text-[#0F2942] shadow-md flex items-center justify-center">
                  <IconHelper name={service.iconName} className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2942] mb-2 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate(service.pageId, service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2942] hover:text-emerald-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-3.5 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
