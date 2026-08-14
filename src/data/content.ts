import { ServiceItem, Testimonial, FAQItem, BlogPost, GalleryItem } from '../types';

export const CLINIC_INFO = {
  name: 'Al Shifaa Care Home Limited',
  tagline: 'A peaceful space for compassionate mental health & dignity-centered care',
  address: '233 Owashika Road, Lavington, Nairobi, Kenya',
  locationDetails: 'P.O. Box 45281 - 00100, Lavington, Nairobi',
  phonePrimary: '+254 718 937 074',
  phoneSecondary: '+254 718 937 074',
  emergencyPhone: '+254 718 937 074',
  whatsappNumber: '254718937074',
  email: 'info@alshifa.co.ke',
  emailAdmissions: 'admissions@alshifa.co.ke',
  website: 'www.alshifa.co.ke',
  operatingHours: '24 Hours / 7 Days a Week (Residential & Emergency Care)',
  opdHours: 'Mon - Sat: 8:00 AM - 6:00 PM (By Appointment)',
  visitingHours: 'Daily: 10:00 AM - 12:00 PM & 3:00 PM - 6:00 PM',
  mapCoordinates: {
    lat: -1.2783,
    lng: 36.7681,
    locationName: '233 Owashika Road, Lavington, Nairobi',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'elderly-care',
    title: 'Geriatric (Elderly) Inpatient Care',
    pageId: 'elderly-care',
    shortDesc: 'Comprehensive 24-hour residential care for elderly individuals in a safe, peaceful, and comfortable Lavington environment.',
    fullDesc: 'We provide comprehensive 24-hour residential care for elderly individuals who require medical, nursing, rehabilitative, or supportive care in a safe and comfortable environment at 233 Owashika Road, Lavington. Our multidisciplinary team is committed to holistic, patient-centered dignity.',
    iconName: 'HeartHandshake',
    badge: 'Inpatient Care',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    features: [
      '24-hour professional nursing care & trained caregivers',
      'Medical doctor reviews and consultations',
      'Psychiatrist reviews (where indicated)',
      'Daily physiotherapy sessions',
      'Nutritionist review and dietary planning',
      'Medication administration and monitoring',
      'Regular vital signs monitoring',
      'Assistance with activities of daily living (bathing, dressing, feeding, mobility)',
      'Comfortable accommodation, daily housekeeping & laundry',
      '5 Nutritious meals provided daily: Breakfast, Brunch, Lunch, Evening tea, Dinner',
      'A safe, peaceful, and supportive environment for recovery & long-term care'
    ],
    benefits: [
      'All-inclusive monthly care covering medical, nursing, and 5 daily meals',
      'Reduces senior isolation through vibrant peer companionship',
      'Enhances physical health and preserves functional independence',
      'Relieves family caregiver burnout with 24/7 clinical support'
    ],
    pricingNote: 'Packages start from KSh 160,000 per month (all-inclusive).'
  },
  {
    id: 'mental-health',
    title: 'Mental Health Inpatient Care',
    pageId: 'mental-health',
    shortDesc: 'Specialized inpatient mental health services for individuals requiring professional psychiatric care and support.',
    fullDesc: 'We offer specialized inpatient mental health services for individuals requiring professional psychiatric care, psychotherapy, and continuous medical supervision in a structured and therapeutic environment at our Lavington facility.',
    iconName: 'Brain',
    badge: 'Inpatient Care',
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Psychiatrist consultations and treatment',
      'Medical doctor reviews',
      'Psychological assessment and psychotherapy',
      '24-hour nursing care & trained caregivers',
      'Daily physiotherapy (where indicated)',
      'Nutritionist review and dietary support',
      'Medication management and monitoring',
      'Structured and therapeutic environment',
      'Comfortable accommodation, housekeeping & laundry',
      '5 Nutritious meals provided daily: Breakfast, Brunch, Lunch, Evening tea, Dinner',
      'Individualized treatment and recovery plans'
    ],
    benefits: [
      'Safe, stigma-free space conducive to psychiatric healing',
      'Holistic approach combining clinical psychiatry with physical & emotional support',
      'Empowers individuals with long-term recovery strategies',
      'Active family inclusion throughout treatment'
    ],
    pricingNote: 'Packages start from KSh 160,000 per month (all-inclusive).'
  },
  {
    id: 'home-care',
    title: 'Homecare Services',
    pageId: 'home-care',
    shortDesc: 'Quality healthcare services brought directly to the comfort and familiarity of your home.',
    fullDesc: 'We bring quality healthcare services directly to the comfort of your home across Nairobi. From professional nursing and trained caregivers to home psychiatrist consultations and post-hospitalization recovery.',
    iconName: 'Home',
    badge: 'Homecare Services',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Professional nursing services',
      'Trained caregivers and patient attendants',
      'Psychiatrist HOME consultations',
      'Psychology and counselling services',
      'Physiotherapy services at home',
      'Elderly care at home',
      'Post-hospitalization care',
      'Palliative and supportive care',
      'Medication administration and monitoring',
      'Assistance with daily activities',
      'Long-term and short-term care arrangements'
    ],
    benefits: [
      'Comfort and peace of staying in familiar home surroundings',
      'Tailored visits or round-the-clock live-in attendants',
      'Direct supervision by Al Shifaa clinical leads'
    ],
    pricingNote: 'Homecare packages start from KSh 25,000 per month.'
  },
  {
    id: 'opd-clinic',
    title: 'Outpatient (OPD) Services',
    pageId: 'opd-clinic',
    shortDesc: 'Outpatient consultations by appointment for individuals who do not require inpatient admission.',
    fullDesc: 'We offer outpatient medical and psychiatric consultations by appointment at 233 Owashika Road, Lavington, for individuals seeking specialized evaluations, therapy, and routine health reviews.',
    iconName: 'Stethoscope',
    badge: 'OPD Services',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Psychiatric consultations',
      'General medical consultations',
      'Psychological assessment and therapy',
      'Mental health reviews and follow-up appointments',
      'Geriatric assessments'
    ],
    benefits: [
      'Short wait times with dedicated appointment scheduling',
      'Unhurried, compassionate consultations with expert medical leads',
      'Convenient Lavington location with serene surroundings'
    ],
    pricingNote: 'Consultation fee starting from KSh 2,500 per session.'
  },
  {
    id: 'wellness-50',
    title: 'Active 50+ Wellness Programme',
    pageId: 'wellness-50',
    shortDesc: 'Vibrant group exercise, balance training, walking clubs, and physiotherapy for healthy, active ageing.',
    fullDesc: 'Empowering adults aged 50 and above to stay strong, mobile, and mentally sharp. Our active wellness club combines gentle group exercise, fall prevention training, joint flexibility, social coffee hours, and physical therapy in a supportive environment.',
    iconName: 'Activity',
    badge: 'Healthy Ageing',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Guided Low-Impact Group Physical Exercises',
      'Fall Prevention & Postural Balance Training',
      'Gentle Yoga, Stretching & Joint Mobility Workshops',
      'Lavington Scenic Walking Club & Nature Strolls',
      'Nutritional Counseling for Healthy Bone & Muscle Mass',
      'Social Gathering Teas, Memory Games & Book Clubs'
    ],
    benefits: [
      'Improves cardiovascular strength, balance, and energy',
      'Prevents dangerous slips, trips, and joint stiffness',
      'Builds lasting friendships and an active social community'
    ],
    pricingNote: 'Monthly membership packages with flexible morning & afternoon sessions.'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: '24/7 Dedicated Care',
    desc: 'Round-the-clock medical supervision by compassionate nurses, caregivers, and on-call physicians.',
  },
  {
    icon: 'UserCheck',
    title: 'Qualified Professionals',
    desc: 'Vetted, licensed nurses, psychiatrists, physiotherapists, and geriatric specialists.',
  },
  {
    icon: 'Heart',
    title: 'Compassion First',
    desc: 'Every interaction is anchored in empathy, honoring the dignity and personal history of every individual.',
  },
  {
    icon: 'Sparkles',
    title: 'Safe & Peaceful Environment',
    desc: 'Tranquil garden compound in Lavington equipped with security, emergency call systems, and accessibility ramps.',
  },
  {
    icon: 'Users',
    title: 'Family-Centered Care',
    desc: 'Open visitation, regular progress reports, and inclusive family counseling for total peace of mind.',
  },
  {
    icon: 'FileText',
    title: 'Personalized Care Plans',
    desc: 'Individualized medical, nutritional, and emotional care plans tailored specifically to each resident.',
  },
  {
    icon: 'Coins',
    title: 'Transparent Pricing',
    desc: 'Clear, honest pricing structures with no hidden fees, helping families plan with total clarity.',
  },
  {
    icon: 'Award',
    title: 'Trusted Healthcare Provider',
    desc: 'Fully registered healthcare facility adhering to the highest Kenyan Ministry of Health & global standards.',
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: '01',
    title: 'Book Consultation',
    desc: 'Contact us via phone, WhatsApp, or our online form to speak with an intake specialist about your needs.',
    icon: 'Calendar',
  },
  {
    step: '02',
    title: 'Comprehensive Assessment',
    desc: 'Our clinical team conducts an in-depth medical, physical, and psychological evaluation in-person or at home.',
    icon: 'ClipboardCheck',
  },
  {
    step: '03',
    title: 'Personalized Care Plan',
    desc: 'We craft a customized care roadmap covering medical supervision, nutrition, therapy, and family involvement.',
    icon: 'HeartPulse',
  },
  {
    step: '04',
    title: 'Continuous Care & Support',
    desc: 'Welcome to the Al Shifaa family with 24/7 care, regular family updates, and continuous care adjustments.',
    icon: 'Smile',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Amina Omondi',
    relation: 'Daughter of Resident',
    location: 'Lavington, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'When my father was diagnosed with mild dementia, finding a facility that treated him with absolute dignity was my highest priority. Al Shifaa in Lavington exceeded every expectation. The green gardens, gentle caregivers, and medical attention gave us immense relief.',
    serviceCategory: 'Elderly Care Home',
    date: 'June 2026',
  },
  {
    id: '2',
    name: 'Joseph K. Maina',
    relation: 'Son of Home Care Patient',
    location: 'Kileleshwa, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'After my mother’s stroke, Al Shifaa provided an incredible home nurse, Nurse Grace. Her professionalism, patience with physio exercises, and warm smile accelerated my mother’s recovery. They are truly family to us now.',
    serviceCategory: 'Home Care Services',
    date: 'May 2026',
  },
  {
    id: '3',
    name: 'Wanjiru & Family',
    relation: 'Sister of Mental Health Resident',
    location: 'Karen, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Mental health in Kenya still carries unnecessary stigma. Al Shifaa offered my brother a peaceful, safe, and deeply respectful environment to heal from acute burnout and depression. The therapy sessions restored his spirit.',
    serviceCategory: 'Mental Health Care',
    date: 'April 2026',
  },
  {
    id: '4',
    name: 'Francis Nderitu',
    relation: 'Active 50+ Club Member',
    location: 'Kilimani, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Joining the Active 50+ Wellness Programme at Al Shifaa transformed my morning routine. The balance training and walking club alleviated my knee joint stiffness, and the social coffee hours are fantastic!',
    serviceCategory: 'Active 50+ Wellness',
    date: 'July 2026',
  },
];

export const IMPACT_STATS = [
  { label: 'Patients Served', value: 1250, suffix: '+', icon: 'HeartPulse' },
  { label: 'Families Supported', value: 850, suffix: '+', icon: 'Users' },
  { label: 'Home Visits Conducted', value: 3400, suffix: '+', icon: 'Home' },
  { label: 'Qualified Medical Specialists', value: 48, suffix: '', icon: 'Stethoscope' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Serene Garden Lounge',
    category: 'care-home',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Peaceful outdoor seating areas surrounded by lush green foliage in Lavington.',
  },
  {
    id: 'g2',
    title: 'Private Deluxe Resident Suite',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious, sunlit residential room with orthopedic bed, emergency call button, and private bath.',
  },
  {
    id: 'g3',
    title: 'Physiotherapy & Mobility Gym',
    category: 'therapy',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Guided physical therapy sessions to restore balance, muscle tone, and gait flexibility.',
  },
  {
    id: 'g4',
    title: 'Active 50+ Group Exercise Session',
    category: 'wellness',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Morning stretching and low-impact exercise group for vibrant healthy ageing.',
  },
  {
    id: 'g5',
    title: 'Dining & Social Hall',
    category: 'care-home',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Wholesome, chef-prepared meals served 5 times daily in our warm dining lounge.',
  },
  {
    id: 'g6',
    title: 'Nurse Assisting Resident with Smile',
    category: 'staff',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    caption: 'Our licensed nurses provide attentive, empathetic bedside care every single hour.',
  },
  {
    id: 'g7',
    title: 'At-Home Nursing Visit',
    category: 'home-visits',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    caption: 'Professional home nursing delivering medical reviews and vitals monitoring.',
  },
  {
    id: 'g8',
    title: 'Individual Counseling Room',
    category: 'care-home',
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80',
    caption: 'A calm, soundproof environment for individual psychotherapy and family support.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How does the admission process work for the Care Home?',
    answer: 'Admissions begin with an initial consultation and clinical assessment by our doctors and nursing head. We review medical records, discuss daily care requirements, and tailor a personalized resident plan. Once agreed, admission can be arranged within 24 to 48 hours.',
    category: 'admissions',
  },
  {
    id: 'faq2',
    question: 'Can family members visit residents freely?',
    answer: 'Yes! We encourage strong family connections. Standard visiting hours are daily from 10:00 AM - 12:00 PM and 3:00 PM - 6:00 PM. Special arrangements can always be made for working families or out-of-town relatives in our private family lounges.',
    category: 'visits',
  },
  {
    id: 'faq3',
    question: 'Do you provide home nurses and caregivers across Nairobi?',
    answer: 'Absolutely. We deploy certified registered nurses and trained caregivers across Nairobi, including Lavington, Karen, Kileleshwa, Kilimani, Westlands, Runda, Muthaiga, and surrounding areas. Services range from 12-hour day/night shifts to 24-hour live-in care.',
    category: 'home-care',
  },
  {
    id: 'faq4',
    question: 'Do you offer mental health rehabilitation and psychiatric support?',
    answer: 'Yes, Al Shifaa provides dedicated residential mental health care supervised by licensed psychiatrists and clinical psychologists. We treat depression, anxiety, trauma, post-stroke emotional recovery, and mild-to-moderate cognitive impairments in a safe, peaceful environment.',
    category: 'mental-health',
  },
  {
    id: 'faq5',
    question: 'Is medical emergency transport available if needed?',
    answer: 'Yes, we have 24/7 emergency dispatch integration with leading Nairobi ambulance services for rapid transfer to partner tertiary hospitals if acute specialized care is required.',
    category: 'medical',
  },
  {
    id: 'faq6',
    question: 'How much does care cost at Al Shifaa?',
    answer: 'Our transparent care packages start from KSh 160,000 per month (all-inclusive) for residential Geriatric or Mental Health Inpatient Care in Lavington. Homecare nursing packages start from KSh 25,000 per month, and Outpatient (OPD) doctor/psychiatrist consultations start from KSh 2,500 per session. Try our interactive Care Estimator tool or contact our team for a personalized care breakdown.',
    category: 'pricing',
  },
  {
    id: 'faq7',
    question: 'What qualification do your caregivers and nurses hold?',
    answer: 'All our nurses are registered with the Nursing Council of Kenya (NCK). Our caregivers undergo rigorous background checks, geriatric care certification, first aid, and specialized training in dementia empathy and patient dignity.',
    category: 'medical',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: '10 Essential Tips for Healthy & Vibrant Ageing in Kenya',
    slug: 'essential-tips-for-healthy-ageing',
    excerpt: 'Discover practical lifestyle habits, nutrition advice, and physical activities that keep mind and body strong past age 50.',
    content: [
      'Ageing is a natural and beautiful phase of life. In Kenya, our elders are the keepers of wisdom, storytellers, and pillars of our families. Maintaining vitality as we age requires intentional choices regarding nutrition, physical activity, and social connection.',
      '1. Prioritize Hydration & Local Superfoods: Drinking adequate water is crucial. Incorporate nutrient-dense traditional vegetables like Managu, Terere, and leafy greens rich in antioxidants and fiber.',
      '2. Stay Physically Active Daily: Simple 20-minute daily walks, light stretching, or joining a community walking club helps prevent joint stiffness and maintains cardiovascular health.',
      '3. Keep the Mind Engaged: Reading, playing chess or Swahili bao, learning new skills, and engaging in lively conversations keep cognitive pathways active.',
      '4. Regular Health Screenings: Early detection of hypertension, diabetes, and cholesterol levels allows for effective management before complications arise.'
    ],
    author: {
      name: 'Dr. Samuel Njoroge',
      role: 'Chief Medical Officer',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    },
    category: 'Healthy Ageing',
    date: 'July 15, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tags: ['Ageing', 'Nutrition', 'Kenya Wellness', 'Active 50+'],
  },
  {
    id: 'blog2',
    title: 'Understanding Dementia: How Families Can Provide Compassionate Support',
    slug: 'understanding-dementia-family-guide',
    excerpt: 'Recognizing early signs of memory loss, creating a dementia-friendly home, and coping with caregiver emotional stress.',
    content: [
      'Dementia is a progressive condition affecting memory, communication, and daily reasoning. Understanding that behavioral changes stem from neurological shifts rather than intentional stubbornness is the cornerstone of empathetic care.',
      'Key Strategies for Family Caregivers:',
      '• Establish Consistent Routines: Keep meal times, wake-up hours, and bedtime structured to reduce confusion and anxiety.',
      '• Simplify Communication: Speak clearly, maintain gentle eye contact, and ask one simple question at a time.',
      '• Ensure Physical Safety: Remove loose rugs, install bathroom grab bars, and keep spaces well-lit to prevent falls.',
      '• Seek Professional Respite: Caregiver burnout is real. Partnering with residential care or home nurses ensures high quality care for your loved one while preserving your own health.'
    ],
    author: {
      name: 'Catherine Mutua, MSc',
      role: 'Lead Clinical Psychologist',
      avatar: 'https://images.unsplash.com/photo-1594824813566-78a011a62450?auto=format&fit=crop&w=200&q=80',
    },
    category: 'Caregiver Tips',
    date: 'June 28, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    tags: ['Dementia', 'Memory Care', 'Family Support', 'Mental Health'],
  },
  {
    id: 'blog3',
    title: 'Stroke Recovery at Home: The Crucial First 90 Days',
    slug: 'stroke-recovery-at-home-guide',
    excerpt: 'How targeted physiotherapy, speech therapy, and home nursing care dramatically boost stroke rehabilitation outcomes.',
    content: [
      'The initial three months following a stroke—often termed the "golden period"—are critical for neuroplasticity and regaining motor skills.',
      'At Al Shifaa, our multidisciplinary team focuses on combining physical therapy, speech rehabilitation, occupational support, and emotional encouragement. Having a dedicated home nurse prevents pressure sores and ensures medication adherence.',
      'With consistent daily care and encouragement, stroke survivors can make remarkable strides back toward independence.'
    ],
    author: {
      name: 'Peter Wambugu, RPT',
      role: 'Senior Physiotherapist',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
    },
    category: 'Stroke Recovery',
    date: 'June 10, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['Stroke Rehab', 'Physiotherapy', 'Home Nursing', 'Recovery'],
  },
  {
    id: 'blog4',
    title: 'Breaking the Stigma: Prioritizing Mental Wellness in Our Communities',
    slug: 'breaking-mental-health-stigma-kenya',
    excerpt: 'Why mental health is fundamental healthcare and how compassionate residential support fosters lasting recovery.',
    content: [
      'Mental health issues like anxiety, depression, and PTSD are medical conditions that require specialized professional care, empathy, and safe spaces.',
      'At Al Shifaa Care Home, we create a sanctuary in Lavington where patients can heal without judgment. From psychiatric support to group creative therapies, recovery is a collaborative journey.'
    ],
    author: {
      name: 'Dr. Farida Khan',
      role: 'Consultant Psychiatrist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    },
    category: 'Mental Wellness',
    date: 'May 18, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80',
    tags: ['Mental Health', 'Wellness', 'Stigma Free', 'Nairobi'],
  },
];
