import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ChevronRight,
  Info
} from 'lucide-react';

interface CareEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (estimatedSummary: string) => void;
}

export const CareEstimatorModal: React.FC<CareEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking,
}) => {
  const [careType, setCareType] = useState<'elderly' | 'mental' | 'home' | 'wellness'>('elderly');
  const [assistanceLevel, setAssistanceLevel] = useState<'independent' | 'moderate' | 'full'>('moderate');
  const [roomType, setRoomType] = useState<'shared' | 'deluxe-private' | 'suite'>('deluxe-private');
  const [shiftHours, setShiftHours] = useState<'12-hr' | '24-hr'>('24-hr');

  if (!isOpen) return null;

  // Estimate calculation logic in KES (Kenyan Shilling)
  let monthlyKes = 0;
  let breakdownText = '';

  if (careType === 'elderly') {
    let base = 160000;
    if (assistanceLevel === 'full') base += 25000;
    if (roomType === 'deluxe-private') base += 20000;
    if (roomType === 'suite') base += 40000;
    monthlyKes = base;
    breakdownText = `All-inclusive residential care package: starting from KSh 160,000/mo. Covers 24/7 nursing, doctor reviews, daily physio, nutritionist dietary planning, and 5 meals daily (Breakfast, Brunch, Lunch, Evening tea, Dinner).`;
  } else if (careType === 'mental') {
    let base = 160000;
    if (assistanceLevel === 'full') base += 25000;
    if (roomType === 'deluxe-private') base += 20000;
    monthlyKes = base;
    breakdownText = `All-inclusive mental health inpatient care: starting from KSh 160,000/mo. Covers psychiatrist consultations, medical doctor reviews, psychotherapy, 24/7 nursing supervision, daily physio, and 5 meals daily.`;
  } else if (careType === 'home') {
    let base = shiftHours === '12-hr' ? 25000 : 65000;
    if (assistanceLevel === 'full') base += 15000;
    monthlyKes = base;
    breakdownText = `Homecare services package: starting from KSh 25,000/mo. Covers professional nursing, trained caregivers, psychiatrist home consultations, and daily activity support at your home.`;
  } else if (careType === 'wellness') {
    monthlyKes = 10000;
    breakdownText = `Active 50+ Senior Wellness Club membership: starting from KSh 10,000/mo. Structured exercises, socialization, mental stimulation, and nutritional guidance.`;
  }

  const estimatedUsd = Math.round(monthlyKes / 130);

  const handleRequestQuote = () => {
    const summary = `Estimated Plan: ${
      careType === 'elderly' ? 'Elderly Care Home' : careType === 'mental' ? 'Mental Health Rehab' : careType === 'home' ? 'Home Care' : 'Active 50+'
    } (${assistanceLevel} support) ~ KES ${monthlyKes.toLocaleString()}/month`;
    onProceedToBooking(summary);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-100">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0F2942]">Care Cost & Needs Estimator</h2>
              <p className="text-[11px] text-slate-500">Transparent guidance for Al Shifaa Care Home Lavington</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Care Type */}
          <div>
            <label className="block text-xs font-bold text-[#0F2942] uppercase tracking-wider mb-2">
              1. Select Primary Care Model
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'elderly', label: '👵 Elderly Care', desc: 'In-house 24/7' },
                { id: 'mental', label: '🧠 Mental Health', desc: 'Residential Rehab' },
                { id: 'home', label: '🏡 Home Nursing', desc: 'At-home Nurse' },
                { id: 'wellness', label: '🏃 Active 50+', desc: 'Wellness Club' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCareType(item.id as any)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    careType === item.id
                      ? 'bg-[#0F2942] text-white border-[#0F2942] shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className={`text-[10px] ${careType === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Level of Support */}
          {careType !== 'wellness' && (
            <div>
              <label className="block text-xs font-bold text-[#0F2942] uppercase tracking-wider mb-2">
                2. Level of Daily Assistance Required
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'independent', label: 'Independent / Light', desc: 'Minimal assistance' },
                  { id: 'moderate', label: 'Moderate Support', desc: 'Bathing & vitals help' },
                  { id: 'full', label: 'Full 24/7 Nursing', desc: 'Bedside & high care' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAssistanceLevel(item.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      assistanceLevel === item.id
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] ${assistanceLevel === item.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Room Choice if Residential */}
          {(careType === 'elderly' || careType === 'mental') && (
            <div>
              <label className="block text-xs font-bold text-[#0F2942] uppercase tracking-wider mb-2">
                3. Accommodation Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'shared', label: 'Semi-Private Room', desc: 'Companionship suite' },
                  { id: 'deluxe-private', label: 'Deluxe Private Suite', desc: 'Private bath & view' },
                  { id: 'suite', label: 'Executive Garden Suite', desc: 'Spacious lounge space' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRoomType(item.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      roomType === item.id
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] ${roomType === item.id ? 'text-amber-100' : 'text-slate-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Shift Hours if Home Care */}
          {careType === 'home' && (
            <div>
              <label className="block text-xs font-bold text-[#0F2942] uppercase tracking-wider mb-2">
                3. Home Shift Schedule
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShiftHours('12-hr')}
                  className={`p-3 rounded-2xl border text-left ${
                    shiftHours === '12-hr' ? 'bg-emerald-700 text-white' : 'bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">12-Hour Day or Night Shift</div>
                  <div className="text-[10px] opacity-80">Daily home nurse visit</div>
                </button>
                <button
                  onClick={() => setShiftHours('24-hr')}
                  className={`p-3 rounded-2xl border text-left ${
                    shiftHours === '24-hr' ? 'bg-emerald-700 text-white' : 'bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">24-Hour Live-in Care</div>
                  <div className="text-[10px] opacity-80">Round-the-clock home presence</div>
                </button>
              </div>
            </div>
          )}

          {/* ESTIMATE OUTPUT BOX */}
          <div className="bg-gradient-to-br from-[#0F2942] to-[#143250] text-white p-6 rounded-3xl shadow-xl space-y-3 border border-slate-700">
            <div className="flex items-center justify-between text-xs text-amber-300 font-bold uppercase tracking-wider">
              <span>Estimated Monthly Investment</span>
              <span className="bg-amber-400/20 px-2 py-0.5 rounded text-amber-200">
                Transparent Pricing
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                KES {monthlyKes.toLocaleString()}
              </span>
              <span className="text-xs text-slate-300">
                (~ ${estimatedUsd.toLocaleString()} USD / month)
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed pt-2 border-t border-white/10">
              💡 {breakdownText}
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-300">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>Final quote is confirmed following our complimentary clinical assessment in Lavington or home visit.</span>
            </div>
          </div>

          <button
            onClick={handleRequestQuote}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 text-[#0F2942] font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#0F2942]" />
            <span>Request Official Care Proposal & Book Consultation</span>
          </button>

        </div>

      </div>
    </div>
  );
};
