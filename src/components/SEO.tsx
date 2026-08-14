import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../data/content';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

const DEFAULT_TITLE = 'Al Shifaa Care Home Limited | Geriatric & Mental Health Care Lavington, Nairobi';
const DEFAULT_DESCRIPTION = 'Al Shifaa Care Home in Lavington, Nairobi offers compassionate geriatric inpatient care, residential mental health rehabilitation, homecare services, and OPD psychiatric consultations at 233 Owashika Road. Packages starting from KSh 160,000/month.';
const DEFAULT_KEYWORDS = 'Al Shifaa Care Home Limited, Al Shifaa Lavington, 233 Owashika Road, nursing home in Lavington Nairobi, elderly care home Nairobi Kenya, geriatric inpatient care Nairobi, mental health hospital Nairobi, psychiatric rehabilitation center Kenya, 24/7 homecare nursing Nairobi, dementia care home Kenya, Alzheimer care Nairobi, assisted living Lavington, psychiatrist consultation Lavington, affordable care home Nairobi starting from 160000 Ksh, senior living Kenya, respite care Nairobi';
const SITE_URL = 'https://alshifaa.co.ke';
const DEFAULT_OG_IMAGE = 'https://alshifaa.co.ke/al-shifaa-logo.png';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
}) => {
  const fullTitle = title ? `${title} | Al Shifaa Care Home Lavington` : DEFAULT_TITLE;
  const canonical = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;

  // Schema.org JSON-LD Structured Data: MedicalBusiness / NursingHome / MedicalClinic
  const mainEntitySchema = {
    '@type': ['NursingHome', 'MedicalClinic', 'LocalBusiness', 'MedicalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Al Shifaa Care Home Limited',
    alternateName: [
      'Al Shifaa Care Home',
      'Al Shifaa Lavington',
      'Al Shifaa Hospital Lavington',
      'Al Shifaa Mental Health & Geriatric Care'
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/al-shifaa-logo.png`,
    image: [
      `${SITE_URL}/al-shifaa-logo.png`,
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: description,
    telephone: '+254718937074',
    email: 'info@alshifa.co.ke',
    sameAs: [
      'https://facebook.com/alshifaacare',
      'https://instagram.com/alshifaacare',
      'https://wa.me/254718937074'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '233 Owashika Road, Lavington',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2783,
      longitude: 36.7681,
    },
    hasMap: 'https://maps.google.com/?q=233+Owashika+Road,+Lavington,+Nairobi',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: 'KES 2,500 - KES 160,000',
    currenciesAccepted: 'KES, USD',
    paymentAccepted: 'Cash, M-Pesa, Bank Transfer, Insurance',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '134',
      bestRating: '5',
      worstRating: '1',
    },
    medicalSpecialty: [
      'Geriatric',
      'Psychiatric',
      'Nursing',
      'PhysicalTherapy',
      'Dementia Care',
      'Assisted Living',
      'Palliative Care'
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Geriatric (Elderly) Inpatient Care',
        description: 'Comprehensive 24-hour residential care for elderly individuals in Lavington. All-inclusive starting from KSh 160,000/month with 5 meals daily and physiotherapy.',
        offers: {
          '@type': 'Offer',
          price: '160000',
          priceCurrency: 'KES',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '160000',
            priceCurrency: 'KES',
            unitText: 'MONTH'
          }
        }
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Mental Health Inpatient Care',
        description: 'Specialized inpatient psychiatric care and rehabilitation in Lavington. Packages starting from KSh 160,000/month including psychiatrist reviews and psychotherapy.',
        offers: {
          '@type': 'Offer',
          price: '160000',
          priceCurrency: 'KES',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '160000',
            priceCurrency: 'KES',
            unitText: 'MONTH'
          }
        }
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Homecare Nursing Services',
        description: 'Professional nursing and caregiver services delivered directly to homes across Nairobi. Starting from KSh 25,000/month.',
        offers: {
          '@type': 'Offer',
          price: '25000',
          priceCurrency: 'KES',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '25000',
            priceCurrency: 'KES',
            unitText: 'MONTH'
          }
        }
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Outpatient (OPD) Consultations',
        description: 'Psychiatric, medical, and geriatric assessments by appointment in Lavington. Starting from KSh 2,500 per session.',
        offers: {
          '@type': 'Offer',
          price: '2500',
          priceCurrency: 'KES',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '2500',
            priceCurrency: 'KES',
            unitText: 'SESSION'
          }
        }
      },
    ],
  };

  // Google FAQ Schema for rich snippet listings
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: FAQS.slice(0, 10).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...(canonicalUrl && canonicalUrl !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: fullTitle.split('|')[0].trim(),
              item: `${SITE_URL}${canonicalUrl}`,
            },
          ]
        : []),
    ],
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [mainEntitySchema, faqSchema, breadcrumbSchema],
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Al Shifaa Care Home Limited" />
      <link rel="canonical" href={canonical} />

      {/* Local SEO Geo Tags */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Lavington, Nairobi, Kenya" />
      <meta name="geo.position" content="-1.2783;36.7681" />
      <meta name="ICBM" content="-1.2783, 36.7681" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Al Shifaa Care Home Limited" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Google SEO JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaGraph)}
      </script>
    </Helmet>
  );
};
