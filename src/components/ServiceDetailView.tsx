import React from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES, CLINIC_INFO } from '../data/content';
import { IconHelper } from './IconHelper';
import { 
  ArrowLeft, 
  Calendar, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ServiceDetailViewProps {
  serviceId: string;
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenEstimator: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onNavigate,
  onOpenBooking,
  onOpenEstimator,
}) => {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0F2942] bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {service.badge}
          </span>
        </div>

        {/* Service Hero Header */}
        <div className="relative bg-[#0F2942] rounded-3xl text-white overflow-hidden p-8 sm:p-12 mb-12 shadow-2xl border border-slate-800">
          <div className="absolute inset-0 opacity-20 bg-pattern-grid pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 rounded-full text-xs font-semibold">
                <IconHelper name={service.iconName} className="w-4 h-4 text-amber-400" />
                <span>Al Shifaa Lavington Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {service.title}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 text-[#0F2942] font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for {service.title}</span>
                </button>

                <button
                  onClick={onOpenEstimator}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-colors"
                >
                  Calculate Care Estimate
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl h-72 sm:h-80 w-full">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl text-[#0F2942] text-xs font-bold flex items-center gap-2 shadow">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Available at Lavington Campus & Home Visits Across Nairobi</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Features & Inclusions */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft">
              <h2 className="text-2xl font-bold text-[#0F2942] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <span>What’s Included in This Service</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft">
              <h2 className="text-2xl font-bold text-[#0F2942] mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <span>Key Benefits for Patients & Families</span>
              </h2>

              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-[#0F2942] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {service.pricingNote && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
                  💡 <span className="font-bold">Pricing Transparency:</span> {service.pricingNote}
                </div>
              )}
            </div>

            {/* How to Enroll / Get Started */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft">
              <h2 className="text-2xl font-bold text-[#0F2942] mb-6">
                Simple Admission & Setup Process
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-[#0F2942] text-white flex items-center justify-center font-extrabold text-xs">
                    1
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0F2942]">Inquire & Consult</h3>
                  <p className="text-xs text-slate-500">Reach out via phone, WhatsApp, or form to share medical history.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xs">
                    2
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0F2942]">Clinical Evaluation</h3>
                  <p className="text-xs text-slate-500">In-person assessment at Lavington or home visit by senior nurse.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-xs">
                    3
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0F2942]">Commence Care</h3>
                  <p className="text-xs text-slate-500">Welcome to Al Shifaa care with 24/7 dedicated medical support.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar CTA Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Inquiry Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 sticky top-28">
              <h3 className="text-xl font-bold text-[#0F2942] border-b border-slate-100 pb-3">
                Inquire About {service.title}
              </h3>

              <p className="text-xs text-slate-600">
                Speak directly with an Al Shifaa intake coordinator today. We respond within 30 minutes during working hours.
              </p>

              <button
                onClick={() => onOpenBooking(service.title)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello, I would like to inquire specifically about ${service.title} at Al Shifaa Lavington.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Intake Team</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0F2942] font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Call {CLINIC_INFO.phonePrimary}</span>
              </a>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <p>📍 Campus: {CLINIC_INFO.address}</p>
                <p>🕒 Admissions: Open 24 Hours / 7 Days</p>
              </div>
            </div>

            {/* Other Services Switcher */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft">
              <h4 className="text-sm font-bold text-[#0F2942] uppercase tracking-wider mb-3">
                Other Care Services
              </h4>
              <div className="space-y-2">
                {SERVICES.filter((s) => s.id !== service.id).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onNavigate(s.pageId, s.id)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700 transition-colors"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      View
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
