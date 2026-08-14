import React from 'react';
import { HOW_WE_WORK_STEPS } from '../data/content';
import { IconHelper } from './IconHelper';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HowWeWorkProps {
  onOpenBooking: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Seamless Admission Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            From your very first conversation to ongoing 24/7 care updates, our 4-step intake journey ensures a smooth, stress-free transition for your family.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {HOW_WE_WORK_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Number Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-[#0F2942] to-emerald-700 bg-clip-text text-transparent">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <IconHelper name={stepItem.icon} className="w-5 h-5 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F2942] mb-3 group-hover:text-emerald-700 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0F2942]">
                <span>Step {idx + 1} of 4</span>
                {idx < 3 && <ArrowRight className="w-4 h-4 text-emerald-600 hidden lg:block" />}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-extrabold rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Start Step 1: Book Consultation Now
          </button>
        </div>

      </div>
    </section>
  );
};
