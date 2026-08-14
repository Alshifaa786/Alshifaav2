import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeLanding } from './components/HomeLanding';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetailView } from './components/ServiceDetailView';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowWeWork } from './components/HowWeWork';
import { Testimonials } from './components/Testimonials';
import { ImpactCounters } from './components/ImpactCounters';
import { Active50Wellness } from './components/Active50Wellness';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { CareEstimatorModal } from './components/CareEstimatorModal';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentServiceId, setCurrentServiceId] = useState<string>('elderly-care');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, currentServiceId]);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    if (serviceId) {
      setCurrentServiceId(serviceId);
    } else if (page === 'elderly-care') {
      setCurrentServiceId('elderly-care');
    } else if (page === 'mental-health') {
      setCurrentServiceId('mental-health');
    } else if (page === 'home-care') {
      setCurrentServiceId('home-care');
    } else if (page === 'opd-clinic') {
      setCurrentServiceId('opd-clinic');
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setPrefilledService(serviceName || '');
    setPrefilledNotes('');
    setIsBookingOpen(true);
  };

  const handleOpenEstimator = () => {
    setIsEstimatorOpen(true);
  };

  const handleEstimatorProceed = (summary: string) => {
    setIsEstimatorOpen(false);
    setPrefilledNotes(summary);
    setIsBookingOpen(true);
  };

  // Helper to resolve page SEO metadata
  const getSEOMetadata = () => {
    switch (currentPage) {
      case 'home':
        return {
          title: 'Geriatric & Mental Health Inpatient Care in Lavington | Al Shifaa Care Home',
          description: 'Al Shifaa Care Home Limited at 233 Owashika Road, Lavington provides 24/7 geriatric inpatient care (starting from KSh 160,000/mo), mental health inpatient care, homecare services (starting from KSh 25,000/mo), and OPD consultations (starting from KSh 2,500). Contact +254 718 937 074.',
          canonicalUrl: '/',
        };
      case 'about':
        return {
          title: 'About Us | Premier Elderly Care & Mental Health Hospital in Lavington, Nairobi',
          description: 'Learn about Al Shifaa Care Home Limited in Lavington, Nairobi. Our multidisciplinary team provides holistic geriatric care and mental health recovery at 233 Owashika Road.',
          canonicalUrl: '/about',
        };
      case 'services':
        return {
          title: 'Healthcare Services & Care Packages | Al Shifaa Care Home Nairobi',
          description: 'Explore Al Shifaa Care Home services: Geriatric Inpatient Care (from KSh 160,000/mo), Mental Health Inpatient Care, Homecare Services (from KSh 25,000/mo), and Outpatient OPD Consultations in Lavington.',
          canonicalUrl: '/services',
        };
      case 'elderly-care':
        return {
          title: 'Geriatric (Elderly) Inpatient Care | 24/7 Nursing Lavington Nairobi',
          description: 'Comprehensive 24-hour residential care for elderly individuals at 233 Owashika Road, Lavington. All-inclusive packages starting from KSh 160,000/month including 5 daily meals and physio.',
          canonicalUrl: '/services/elderly-care',
        };
      case 'mental-health':
        return {
          title: 'Mental Health Inpatient Care | Psychiatric Recovery Lavington Nairobi',
          description: 'Specialized inpatient mental health services in Lavington, Nairobi. Psychiatrist reviews, psychotherapy, 24/7 nursing, and 5 meals daily. Packages starting from KSh 160,000/month.',
          canonicalUrl: '/services/mental-health',
        };
      case 'home-care':
        return {
          title: 'Homecare Services | Professional Nursing & Caregivers Nairobi',
          description: 'Quality homecare services brought to your home in Nairobi. Professional nursing, trained caregivers, and psychiatrist home consultations starting from KSh 25,000/month.',
          canonicalUrl: '/services/home-care',
        };
      case 'opd-clinic':
        return {
          title: 'Outpatient (OPD) Services | Psychiatric & Medical Consultations Lavington',
          description: 'Outpatient consultations by appointment at 233 Owashika Road, Lavington. Psychiatric reviews, general medical consultations, and geriatric assessments starting from KSh 2,500 per session.',
          canonicalUrl: '/services/opd-clinic',
        };
      case 'wellness-50':
        return {
          title: 'Active 50+ Senior Wellness Programme | Lavington Nairobi',
          description: 'Active 50+ Senior Wellness Club at Al Shifaa Care Home Lavington. Group exercise, walking club, joint flexibility, and coffee social hour.',
          canonicalUrl: '/wellness-50',
        };
      case 'gallery':
        return {
          title: 'Photo Gallery | Tour Al Shifaa Care Home Lavington Campus',
          description: 'Explore photos of Al Shifaa Care Home at 233 Owashika Road, Lavington. See our serene gardens, comfortable suites, and active senior activities.',
          canonicalUrl: '/gallery',
        };
      case 'testimonials':
        return {
          title: 'Family Testimonials & Reviews | Al Shifaa Care Home Nairobi',
          description: 'Read real reviews and family stories from those who trusted Al Shifaa Care Home for geriatric care, mental health recovery, and home nursing in Nairobi.',
          canonicalUrl: '/testimonials',
        };
      case 'faqs':
        return {
          title: 'Frequently Asked Questions | Admissions, Pricing & Care Packages',
          description: 'Find answers to common questions regarding admissions, visiting hours, package inclusions (starting from KSh 160,000/mo), and homecare services at Al Shifaa.',
          canonicalUrl: '/faqs',
        };
      case 'blog':
        return {
          title: 'Health Journal & Wellness Blog | Geriatric & Mental Health Care',
          description: 'Articles and medical insights on geriatric care, dementia support, mental health recovery, and healthy aging in Kenya by Al Shifaa clinical team.',
          canonicalUrl: '/blog',
        };
      case 'contact':
        return {
          title: 'Contact Us & Visit Us in Lavington | 233 Owashika Road',
          description: 'Contact Al Shifaa Care Home at 233 Owashika Road, Lavington, Nairobi. Call +254 718 937 074 or visit us for a guided facility walkthrough.',
          canonicalUrl: '/contact',
        };
      default:
        return {
          title: 'Geriatric & Mental Health Inpatient Care in Lavington',
          description: 'Al Shifaa Care Home Limited at 233 Owashika Road, Lavington offers 24/7 elderly inpatient care, mental health inpatient care, homecare services, and OPD consultations.',
          canonicalUrl: '/',
        };
    }
  };

  const seoMeta = getSEOMetadata();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-800 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900 pb-16 md:pb-0">
      {/* Dynamic SEO Meta Tags via React Helmet */}
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        canonicalUrl={seoMeta.canonicalUrl}
      />
      
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeLanding
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenEstimator={handleOpenEstimator}
          />
        )}

        {currentPage === 'about' && (
          <div className="pt-4">
            <AboutSection onOpenBooking={() => handleOpenBooking()} />
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
            <ImpactCounters />
            <ContactSection />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="pt-4">
            <ServicesOverview
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
            <FAQSection />
          </div>
        )}

        {[
          'elderly-care',
          'mental-health',
          'home-care',
          'opd-clinic',
        ].includes(currentPage) && (
          <ServiceDetailView
            serviceId={currentServiceId}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenEstimator={handleOpenEstimator}
          />
        )}

        {currentPage === 'wellness-50' && <Active50Wellness />}

        {currentPage === 'gallery' && <GallerySection />}

        {currentPage === 'testimonials' && <Testimonials />}

        {currentPage === 'faqs' && <FAQSection />}

        {currentPage === 'blog' && <BlogSection />}

        {currentPage === 'contact' && <ContactSection />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />

      {/* Sticky Mobile Quick Action Bar (Call, WhatsApp, Estimator, Book Tour) */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledService={prefilledService}
        prefilledNotes={prefilledNotes}
      />

      <CareEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToBooking={handleEstimatorProceed}
      />

    </div>
  );
}

