import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, SERVICES } from '../data/content';
import { Hero } from './Hero';
import { IconHelper } from './IconHelper';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Quote, 
  Calculator, 
  Award,
  Users
} from 'lucide-react';

interface HomeLandingProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenEstimator: () => void;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenEstimator,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Concise Hero Section */}
      <Hero
        onOpenBooking={onOpenBooking}
        onNavigate={onNavigate}
        onOpenEstimator={onOpenEstimator}
      />

      {/* 2. Core Healthcare Services Portal */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Specialized Care Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              Our Core Care Programs
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Providing holistic geriatric nursing, mental health recovery, and homecare in Lavington.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0F2942] text-[10px] font-bold px-2.5 py-1 rounded-full border border-white">
                      {service.badge}
                    </span>
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white text-[#0F2942] shadow flex items-center justify-center">
                      <IconHelper name={service.iconName} className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2942] mb-2 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-5 border-t border-slate-200/60 pt-3">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate(service.pageId, service.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0F2942] hover:text-emerald-700 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors"
            >
              <span>Explore All Healthcare Services & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Lavington Campus & Identity Highlight */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image Block */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                  alt="Al Shifaa Care Home Lavington Campus"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    233 Owashika Road, Lavington
                  </p>
                  <p className="text-sm font-bold text-white">
                    Peaceful residential sanctuary for recovery & senior care
                  </p>
                </div>
              </div>
            </div>

            {/* Story & Pillars Summary */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-emerald-600" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] tracking-tight">
                Healthcare Crafted Around Dignity & Peace
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Al Shifaa Care Home Limited combines 24/7 skilled nursing, psychiatrist reviews, daily physical therapy, and nutritionist dietary planning with 5 wholesome daily meals in a warm residential atmosphere.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <Award className="w-5 h-5 text-emerald-600 mb-1.5" />
                  <h4 className="text-xs font-bold text-[#0F2942]">24/7 Medical Nursing</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">NCK-certified staff on site continuously</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <Users className="w-5 h-5 text-amber-600 mb-1.5" />
                  <h4 className="text-xs font-bold text-[#0F2942]">5 Daily Meals</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Breakfast, Brunch, Lunch, Tea, Dinner</p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <span>Learn About Our Campus & Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking('Campus Walkthrough')}
                  className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-200 transition-colors"
                >
                  Schedule Campus Walkthrough
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Care Cost Estimator Callout */}
      <section className="py-12 bg-gradient-to-r from-[#0F2942] to-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                <span>Transparent Pricing</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Calculate Care Costs for Your Loved One
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                Get instant estimates for Inpatient Care (starting from KSh 160,000/mo), Homecare Services (starting from KSh 25,000/mo), or Outpatient Consultations (starting from KSh 2,500).
              </p>
            </div>

            <button
              onClick={onOpenEstimator}
              className="shrink-0 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#0F2942] text-xs sm:text-sm font-extrabold rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#0F2942]" />
              <span>Launch Care Cost Estimator</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Spotlight Family Testimonial */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
              <Quote className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Family Feedback</span>
            </div>

            <blockquote className="text-base sm:text-lg font-medium text-[#0F2942] italic leading-relaxed">
              "Finding Al Shifaa Care Home for our mother was the greatest blessing. The 24/7 nursing team in Lavington treats her like their own grandmother. She enjoys the serene gardens and delicious meals every day."
            </blockquote>

            <div>
              <p className="text-xs font-bold text-[#0F2942]">— Dr. Amina K. & Family</p>
              <p className="text-[11px] text-slate-500">Elderly Inpatient Care Resident Family, Nairobi</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('testimonials')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>Read All Family Stories & Reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Contact & Visit Callout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Visit Us in Lavington</span>
              </div>
              <h4 className="text-lg font-bold text-[#0F2942]">233 Owashika Road</h4>
              <p className="text-xs text-slate-500">Lavington, Nairobi, Kenya</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Direct Admissions Line</span>
              </div>
              <h4 className="text-lg font-bold text-[#0F2942]">{CLINIC_INFO.phonePrimary}</h4>
              <p className="text-xs text-slate-500">24 Hours / 7 Days a Week</p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenBooking()}
                className="w-full px-5 py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow transition-colors"
              >
                Book Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
              >
                View Map & Contact Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
