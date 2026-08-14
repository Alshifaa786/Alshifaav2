import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigate,
  onOpenEstimator,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0F2942] via-[#143250] to-[#0F2942] text-white overflow-hidden pt-12 pb-20 md:py-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern-grid pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Lavington, Nairobi, Kenya</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 hidden sm:inline">24/7 Residential Sanctuary</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Compassionate Healthcare <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                That Feels Like Family
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Providing exceptional elderly care, mental health support, home healthcare, and community wellness services with dignity, compassion, and professionalism in peaceful Lavington.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-200">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Licensed Care Facility</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Nursing Supervision</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Family-Centered Care</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-[#0F2942] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#0F2942]" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0F2942]" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Al Shifaa Care team, I would like to inquire about care options for my family.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Talk to Our Team</span>
              </a>
            </div>

            {/* Care Cost Estimator Banner */}
            <div className="pt-2">
              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 font-medium transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Want to estimate care costs for elderly or home care? Try our Quick Care Estimator →</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Image Frame & Quick Booking Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-3 group">
              
              {/* Main Warm Hero Image */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                  alt="Compassionate Caregiver Assisting Elderly Resident at Al Shifaa Care Home Lavington"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/90 via-[#0F2942]/20 to-transparent" />

                {/* Floating Badge top right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0F2942] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Care Campus</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    Al Shifaa Lavington Sanctuary
                  </p>
                  <p className="text-sm font-bold text-white line-clamp-1">
                    Tranquil gardens, 24/7 nursing & mental health recovery
                  </p>
                </div>
              </div>

              {/* Interactive Quick Service Jump Box */}
              <div className="mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-slate-800 border border-slate-100 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    How can we help your family today?
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                    Fast Response
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onNavigate('elderly-care')}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/70 text-left transition-colors group/btn"
                  >
                    <div className="font-bold text-slate-800 group-hover/btn:text-emerald-800">
                      👵 Elderly Care Home
                    </div>
                    <div className="text-[10px] text-slate-500">In-house 24/7</div>
                  </button>

                  <button
                    onClick={() => onNavigate('mental-health')}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/70 text-left transition-colors group/btn"
                  >
                    <div className="font-bold text-slate-800 group-hover/btn:text-emerald-800">
                      🧠 Mental Health
                    </div>
                    <div className="text-[10px] text-slate-500">Psychiatric Rehab</div>
                  </button>

                  <button
                    onClick={() => onNavigate('home-care')}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/70 text-left transition-colors group/btn"
                  >
                    <div className="font-bold text-slate-800 group-hover/btn:text-emerald-800">
                      🏡 Home Nursing
                    </div>
                    <div className="text-[10px] text-slate-500">At-Home Visits</div>
                  </button>

                  <button
                    onClick={() => onNavigate('wellness-50')}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/70 text-left transition-colors group/btn"
                  >
                    <div className="font-bold text-slate-800 group-hover/btn:text-emerald-800">
                      🏃 Active 50+ Club
                    </div>
                    <div className="text-[10px] text-slate-500">Group Wellness</div>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
