import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { IconHelper } from './IconHelper';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The Al Shifaa Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Why Families Trust Al Shifaa Care Home
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Combining rigorous clinical standards with genuine warmth to create a sanctuary where every resident feels safe, valued, and genuinely cared for.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F2942] to-[#1E3A8A] text-amber-400 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <IconHelper name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2942] mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Standards</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0F2942] via-[#143250] to-[#0F2942] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Ready to give your loved one the dignified care they deserve?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Visit our serene Lavington campus, meet our nursing staff, and discuss a personalized care plan with zero obligation.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-[#0F2942] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shrink-0 transition-all transform active:scale-95"
          >
            Book Free Campus Visit
          </button>
        </div>

      </div>
    </section>
  );
};
