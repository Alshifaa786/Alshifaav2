import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { Phone, MessageCircle, Calendar, Calculator } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onOpenEstimator,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#384E63]/95 backdrop-blur-lg border-t border-[#4A647D] shadow-[0_-8px_25px_rgba(0,0,0,0.25)] md:hidden px-2 py-2 text-white pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto items-center">
        
        {/* 1. Direct Tap-To-Call */}
        <a
          href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-center group min-h-[48px]"
          aria-label="Call Al Shifaa Care Home"
        >
          <div className="w-7 h-7 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300 mb-0.5 group-hover:scale-110 transition-transform">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-amber-200">Call 24/7</span>
        </a>

        {/* 2. WhatsApp Direct */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-400/30 active:scale-95 transition-all text-center group min-h-[48px]"
          aria-label="WhatsApp Intake"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 mb-0.5 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-300" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-emerald-200">WhatsApp</span>
        </a>

        {/* 3. Cost & Needs Estimator */}
        <button
          onClick={onOpenEstimator}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-center group min-h-[48px]"
          aria-label="Care Cost Estimator"
        >
          <div className="w-7 h-7 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-300 mb-0.5 group-hover:scale-110 transition-transform">
            <Calculator className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-cyan-100">Estimator</span>
        </button>

        {/* 4. Book Consultation / Tour */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md active:scale-95 transition-all text-center group min-h-[48px] border border-emerald-300/40"
          aria-label="Book Consultation"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white mb-0.5 group-hover:scale-110 transition-transform">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-extrabold tracking-tight text-white">Book Tour</span>
        </button>

      </div>
    </div>
  );
};
