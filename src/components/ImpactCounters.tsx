import React, { useState, useEffect } from 'react';
import { IMPACT_STATS } from '../data/content';
import { IconHelper } from './IconHelper';

export const ImpactCounters: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(IMPACT_STATS.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let stepCount = 0;
    const timer = setInterval(() => {
      stepCount++;
      setCounts(
        IMPACT_STATS.map((stat) => {
          const progress = stepCount / steps;
          const current = Math.floor(stat.value * Math.min(progress, 1));
          return current;
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#0F2942] via-[#143250] to-[#0F2942] text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-300 text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Our Measurable Social Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Dignified Healthcare in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-300 mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <IconHelper name={stat.icon} className="w-5 h-5" />
              </div>

              <div className="text-2xl sm:text-4xl font-black text-amber-300 tracking-tight">
                {counts[idx].toLocaleString()}
                <span>{stat.suffix}</span>
              </div>

              <div className="text-xs font-semibold text-slate-300 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
