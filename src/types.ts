export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'elderly-care'
  | 'mental-health'
  | 'home-care'
  | 'opd-clinic'
  | 'wellness-50'
  | 'gallery'
  | 'testimonials'
  | 'faqs'
  | 'blog'
  | 'contact'
  | 'estimator';

export interface ServiceItem {
  id: string;
  title: string;
  pageId: PageId;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  imageUrl: string;
  features: string[];
  benefits: string[];
  pricingNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  serviceCategory: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'visits' | 'home-care' | 'mental-health' | 'pricing' | 'medical';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'care-home' | 'rooms' | 'therapy' | 'wellness' | 'community' | 'staff' | 'home-visits';
  imageUrl: string;
  caption: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  patientAge?: string;
  locationPref: 'lavington-campus' | 'home-visit' | 'online-consultation';
}

export interface CareEstimateInput {
  careType: 'elderly-inhouse' | 'mental-health' | 'home-nursing' | 'opd-care' | 'wellness-50';
  duration: 'daily' | 'weekly' | 'monthly' | 'long-term';
  assistanceLevel: 'independent' | 'moderate' | 'full-support' | 'intensive-medical';
  roomPreference?: 'private-suite' | 'semi-private' | 'deluxe-room';
}
