import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, SERVICES } from '../data/content';
import { AlShifaaLogo } from './AlShifaaLogo';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  ArrowUp 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1E31] text-white pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="flex items-center text-left group"
            >
              <AlShifaaLogo variant="light" size="lg" />
            </button>

            <p className="text-xs text-slate-300 leading-relaxed">
              A peaceful space for compassionate mental health care, dignified elderly care, home nursing, and active senior wellness in Lavington, Nairobi.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Emergency: {CLINIC_INFO.emergencyPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Specialized Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Specialized Care Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate(s.pageId, s.id);
                      scrollToTop();
                    }}
                    className="hover:text-emerald-400 transition-colors text-left py-0.5 line-clamp-1"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Quick Links & Admissions
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-emerald-400">
                  About Al Shifaa
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('gallery'); scrollToTop(); }} className="hover:text-emerald-400">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('testimonials'); scrollToTop(); }} className="hover:text-emerald-400">
                  Family Stories
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('faqs'); scrollToTop(); }} className="hover:text-emerald-400">
                  Care FAQs
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('blog'); scrollToTop(); }} className="hover:text-emerald-400">
                  Health Journal
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); scrollToTop(); }} className="hover:text-emerald-400">
                  Contact & Map
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                Book In-Person Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Al Shifaa Care Home Limited. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400 font-semibold">Registered Healthcare Facility in Nairobi, Kenya</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 text-xs font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
