import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2,
  Sparkles,
  Camera
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {

  const PILLARS = [
    {
      title: 'Compassion First',
      desc: 'We treat every resident and patient with warmth, listening deeply to their emotional and physical needs.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      title: 'Respect & Dignity',
      desc: 'Honoring independence, personal histories, and privacy in a peaceful, non-institutional setting.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      title: 'Qualified Medical Team',
      desc: 'NCK-registered nurses, psychiatrists, geriatric specialists, and certified caregivers on duty 24/7.',
      icon: Award,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      title: 'Family & Community Inclusion',
      desc: 'Keeping families connected through open visits, continuous updates, and structured support sessions.',
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>About Al Shifaa Care Home</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            A Peaceful Space Dedicated to <br className="hidden sm:inline" />
            <span className="text-emerald-700">Compassionate Healthcare & Dignity</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Located in the serene green suburbs of Lavington, Nairobi, Al Shifaa Care Home Limited was founded on a singular principle: that healthcare should restore peace, rebuild dignity, and make every individual feel like cherished family.
          </p>
        </div>

        {/* Grid Section: Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column - Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                alt="Al Shifaa Care Home Lavington Compound & Green Gardens"
                className="w-full h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    233 Owashika Road Sanctuary
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Lavington Residential Care
                  </h3>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl transition-colors shadow-md"
                >
                  Book In-Person Tour
                </button>
              </div>
            </div>

            {/* Floating Location Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F2942]">Lavington, Nairobi</p>
                <p className="text-[11px] text-slate-500">233 Owashika Road Compound</p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Core Values */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-[#0F2942]">
              Reimagining Senior & Mental Healthcare in Kenya
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Hospital wards can feel sterile and intimidating. At Al Shifaa, we created an architectural and clinical haven where residents enjoy high-standard medical supervision while feeling completely at ease in residential comfort.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                '24/7 NCK-certified nurses and trained geriatric caregivers on site',
                'Tailored mental health rehabilitation with zero stigma',
                'Direct step-down hospital discharge coordination in Nairobi',
                '5 gourmet meals daily supervised by clinical dietitians',
                'Open visitation and transparent communication with family',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors"
              >
                Schedule Campus Tour
              </button>

              <a
                href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold rounded-xl border border-emerald-200 transition-colors"
              >
                Call {CLINIC_INFO.phonePrimary}
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-card-hover transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#0F2942] mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
