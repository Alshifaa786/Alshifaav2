import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, SERVICES } from '../data/content';
import { AlShifaaLogo } from './AlShifaaLogo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  MessageCircle, 
  Calculator,
  ShieldAlert,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenEstimator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, serviceId?: string) => {
    onNavigate(page, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Spacious, Elegant Dusty Blue Navbar */}
      <nav
        className={`w-full transition-all duration-300 bg-[#48627A] text-white shadow-md border-b border-[#3A5064] ${
          isScrolled 
            ? 'py-2.5 sm:py-3 bg-[#3E556B]/98 backdrop-blur-md shadow-lg' 
            : 'py-4 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo - "AL SHIFAA" with hideSubtitle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none py-0.5"
            >
              <AlShifaaLogo variant="light" size="md" hideSubtitle={true} />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-100">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'about'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                  [
                    'services',
                    'elderly-care',
                    'mental-health',
                    'home-care',
                    'opd-clinic',
                    'wellness-50',
                  ].includes(currentPage)
                    ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                    : 'hover:text-white hover:bg-white/15'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 opacity-80" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#384E63] rounded-2xl shadow-2xl border border-[#526B82] py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-white">
                  <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <p className="text-xs font-extrabold text-emerald-300 uppercase tracking-wider">
                      Care Packages & Programs
                    </p>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-700/50">
                      Lavington
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick(s.pageId, s.id)}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-start gap-3 transition-colors group"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                            {s.title}
                          </div>
                          <div className="text-[11px] text-slate-300 line-clamp-1">
                            {s.shortDesc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 pt-2 border-t border-white/10">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-center py-2 text-xs font-bold text-emerald-200 hover:text-white bg-emerald-950/60 rounded-xl flex items-center justify-center gap-1.5 border border-emerald-700/40"
                    >
                      <span>Explore All Care Options</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'gallery'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick('testimonials')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'testimonials'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => handleNavClick('faqs')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'faqs'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                currentPage === 'contact'
                  ? 'bg-white text-[#2B4154] font-extrabold shadow-sm'
                  : 'hover:text-white hover:bg-white/15'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* WhatsApp Pill */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-bold rounded-xl border border-emerald-400/40 flex items-center gap-1.5 transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" />
              <span>WhatsApp</span>
            </a>

            {/* Care Estimator */}
            <button
              onClick={onOpenEstimator}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl flex items-center gap-1.5 transition-all border border-white/20 shadow-sm"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Estimator</span>
            </button>

            {/* Book Consultation Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 rounded-xl shadow-md hover:shadow-emerald-900/30 flex items-center gap-2 transition-all active:scale-95 cursor-pointer border border-emerald-300/40"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Header Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-500/20 text-emerald-300 rounded-xl font-bold text-xs flex items-center border border-emerald-400/40"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            </a>

            <button
              onClick={onOpenEstimator}
              className="p-2 text-white bg-white/10 rounded-xl text-xs font-medium flex items-center border border-white/20"
              aria-label="Care Estimator"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white focus:outline-none bg-white/10 rounded-xl border border-white/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-300" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#384E63] border-b border-[#2C3F50] px-4 pt-3 pb-6 space-y-4 shadow-2xl text-white">
            
            {/* Mobile Contact Bar */}
            <div className="bg-[#2A3C4D] text-white p-3 rounded-xl flex items-center justify-between text-xs border border-white/10 shadow-inner">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span className="font-bold">24/7 Line: {CLINIC_INFO.phonePrimary}</span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="px-2.5 py-1 bg-amber-400 text-slate-950 font-extrabold rounded-lg text-[11px]"
              >
                Call
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3.5 py-2 rounded-xl text-xs font-bold ${
                  currentPage === 'home'
                    ? 'bg-white text-[#2B4154]'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left px-3.5 py-2 rounded-xl text-xs font-bold ${
                  currentPage === 'about'
                    ? 'bg-white text-[#2B4154]'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                About Us
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-2">
                <p className="text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider">
                  Care Services
                </p>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-[11px] text-emerald-200 font-bold"
                >
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavClick(s.pageId, s.id)}
                    className="text-left px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/10 flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded-md border border-emerald-700/50">
                      {s.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10 text-xs text-slate-200">
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-left px-3.5 py-2 hover:bg-white/10 rounded-xl"
              >
                Gallery
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-left px-3.5 py-2 hover:bg-white/10 rounded-xl"
              >
                Reviews
              </button>
              <button
                onClick={() => handleNavClick('faqs')}
                className="text-left px-3.5 py-2 hover:bg-white/10 rounded-xl"
              >
                FAQs
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left px-3.5 py-2 hover:bg-white/10 rounded-xl font-bold text-emerald-300"
              >
                Contact
              </button>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>Book Consultation</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold text-emerald-200 bg-emerald-950/70 rounded-xl flex items-center justify-center gap-2 border border-emerald-600/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" />
                <span>Chat on Official WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
