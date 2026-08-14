import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/content';
import { openWhatsAppWithMessage } from '../utils/whatsapp';
import { 
  Activity, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Users, 
  HeartPulse, 
  Footprints, 
  Flame, 
  Check, 
  X 
} from 'lucide-react';

export const Active50Wellness: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const [regData, setRegData] = useState({
    fullName: '',
    phone: '',
    age: '55',
    preferredSession: 'Morning Walking & Stretching (8:30 AM)',
    goals: 'Joint flexibility & balance',
  });

  const SCHEDULE = [
    { day: 'Monday', activity: 'Low-Impact Cardio & Posture Balance', time: '8:30 AM - 9:30 AM', instructor: 'Coach Peter (RPT)' },
    { day: 'Tuesday', activity: 'Lavington Scenic Nature Walk & Tea', time: '9:00 AM - 10:30 AM', instructor: 'Wellness Lead Grace' },
    { day: 'Wednesday', activity: 'Joint Mobility & Gentle Yoga', time: '8:30 AM - 9:30 AM', instructor: 'Physio Sarah' },
    { day: 'Thursday', activity: 'Fall Prevention & Core Stability', time: '10:00 AM - 11:00 AM', instructor: 'Coach Peter (RPT)' },
    { day: 'Friday', activity: 'Memory Games & Nutrition Social Hour', time: '10:00 AM - 12:00 PM', instructor: 'Dietitian Dr. Amina' },
    { day: 'Saturday', activity: 'Family Intergenerational Stroll & BBQ', time: '9:30 AM - 11:30 AM', instructor: 'Al Shifaa Team' },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    
    const waMsg = `👟 *ACTIVE 50+ WELLNESS CLUB REGISTRATION*
----------------------------------------
👤 *Full Name:* ${regData.fullName}
📞 *Phone Number:* ${regData.phone}
🎂 *Age:* ${regData.age}
⏰ *Preferred Session:* ${regData.preferredSession}
🎯 *Wellness Goals:* ${regData.goals}
----------------------------------------
_Registered via Al Shifaa Website (alshifaa.co.ke)_`;

    openWhatsAppWithMessage(waMsg);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0F2942] via-[#143250] to-[#0F2942] rounded-3xl text-white p-8 sm:p-12 shadow-2xl mb-16 relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold border border-amber-400/30">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>Dedicated Healthy Ageing Club</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Active 50+ Wellness Programme
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Stay vibrant, mobile, and socially connected! Designed specifically for adults 50 and above, combining expert physio guidance, group exercise, balance training, and community warmth in Lavington.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 text-[#0F2942] font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <Footprints className="w-4 h-4 text-[#0F2942]" />
                  <span>Join the 50+ Programme Today</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                  alt="Active 50+ Seniors exercising at Al Shifaa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programme Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft">
            <Footprints className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-[#0F2942] text-base mb-1">Walking Club</h3>
            <p className="text-xs text-slate-500">Guided gentle strolls through peaceful leafy Lavington avenues.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft">
            <HeartPulse className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-[#0F2942] text-base mb-1">Balance & Posture</h3>
            <p className="text-xs text-slate-500">Targeted fall prevention drills and leg muscle strengthening.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft">
            <Flame className="w-8 h-8 text-rose-500 mb-3" />
            <h3 className="font-bold text-[#0F2942] text-base mb-1">Joint Flexibility</h3>
            <p className="text-xs text-slate-500">Gentle stretching routines tailored for arthritis relief.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-[#0F2942] text-base mb-1">Social Coffee Hour</h3>
            <p className="text-xs text-slate-500">Connect with peers over healthy herbal teas, books, and laughter.</p>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0F2942]">Weekly Activity Schedule</h2>
              <p className="text-xs text-slate-500">Morning and mid-day sessions hosted at our Lavington Campus.</p>
            </div>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow hover:bg-emerald-700"
            >
              Book Free Trial Session
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-[#0F2942] uppercase text-[10px] font-bold tracking-wider">
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Activity Routine</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Instructor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {SCHEDULE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0F2942]">{row.day}</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-semibold">{row.activity}</td>
                    <td className="py-3.5 px-4 text-slate-500">{row.time}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {registeredSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2942]">Welcome to Active 50+!</h3>
                <p className="text-xs text-slate-600">
                  Our wellness coordinator will call you to confirm your free trial session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2942]">Register for Active 50+</h3>
                  <p className="text-xs text-slate-500">Join our vibrant morning wellness community.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={regData.fullName}
                    onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                    placeholder="e.g. John K. Njoroge"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={regData.phone}
                      onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                      placeholder="0712 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                    <input
                      type="number"
                      required
                      value={regData.age}
                      onChange={(e) => setRegData({ ...regData, age: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Routine</label>
                  <select
                    value={regData.preferredSession}
                    onChange={(e) => setRegData({ ...regData, preferredSession: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    {SCHEDULE.map((s, i) => (
                      <option key={i}>{s.day} - {s.activity}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow"
                >
                  Confirm Free Trial Session
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
