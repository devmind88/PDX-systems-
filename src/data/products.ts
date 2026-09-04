import { SaasProduct } from '../types';

export const SAAS_PRODUCTS: SaasProduct[] = [
  {
    id: 'pdx-ai-voice',
    name: 'PDX VoiceAI Receptionist™',
    tagline: 'Never miss another lead. Answers calls 24/7 in <1 second.',
    category: 'AI Voice & Telephony',
    badge: 'Flagship Innovation',
    priceMonthly: 149,
    description: 'Human-grade AI voice agent trained specifically for service contractors and local businesses. Answers inquiries, qualifies project scope, quotes ballpark estimates, and books real-time calendar appointments without ever putting a lead on hold.',
    highlights: [
      'Zero hold time, sub-second latency with conversational voice models',
      'Direct sync with Google Calendar, Outlook, and CRM dispatch boards',
      'Intelligent emergency escalation & live call transfer to owner',
      'Automatic instant SMS confirmation sent while caller is still on the line'
    ],
    keyMetrics: [
      { label: 'Avg Call Answer Time', value: '< 1.2s' },
      { label: 'Booking Conversion', value: '64.8%' },
      { label: 'Missed Call Recovery', value: '99.4%' }
    ],
    capabilities: [
      '24/7/365 After-Hours & Weekend Coverage',
      'Custom Voice Tuning & Local Accent Match',
      'Multi-Language Support (English & Spanish)',
      'Call Recording & Instant AI Transcription',
      'Automatic Caller ID Tagging & Address Geocoding'
    ],
    interfacePreview: {
      type: 'phone',
      title: 'PDX AI Receptionist Active Call',
      subtitle: 'Incoming Call (503) 891-2300 • Connected',
      metrics: 'Roof Inspection • Qualified • Booked Tomorrow 10:00 AM'
    },
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pdx-crm-pipeline',
    name: 'PDX Growth CRM & Sales Pipeline™',
    tagline: 'All-in-one revenue dashboard: Capture, Track, and Close.',
    category: 'CRM & Pipeline Automation',
    badge: 'Core Engine',
    priceMonthly: 129,
    description: 'A visual, automated sales pipeline engineered for speed. View every lead, estimate, pending contract, and closed deal in real time. Track $92,000+ pipeline values with zero manual data entry.',
    highlights: [
      'Visual drag-and-drop opportunity kanban with live deal value tallies',
      'Smart 360° contact profiles with recorded calls, texts, and invoices',
      'Automated stage triggers (e.g. move to "Follow Up" if quote unopened for 24h)',
      'Integrated Stripe invoicing & mobile tap-to-pay terminal'
    ],
    keyMetrics: [
      { label: 'Pipeline Visibility', value: '100%' },
      { label: 'Deal Velocity', value: '+42%' },
      { label: 'Monthly Deals Closed', value: '25+ Avg' }
    ],
    capabilities: [
      'Unlimited Contacts & Deal Stages',
      'Custom Form & Funnel Builder',
      'Real-time Team Activity Leaderboard',
      'Stripe & QuickBooks Dual Synchronization',
      'Automated Task Reminders for Field Reps'
    ],
    interfacePreview: {
      type: 'pipeline',
      title: 'Active Sales Pipeline ($92,300)',
      subtitle: '25 Closed Deals (+20%) • 47 Active Opportunities',
      metrics: 'Stage: Estimate Sent -> Auto-Follow-Up Active'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pdx-omnichannel-hub',
    name: 'PDX Multi-Channel Automation Hub™',
    tagline: 'Instant Missed-Call Text Back & 2-Way Unified Inbox.',
    category: 'Messaging & Omnichannel',
    badge: 'High Conversion',
    priceMonthly: 99,
    description: 'When you can’t pick up, PDX automatically texts the caller in 3 seconds: "Hey, saw we just missed your call! How can we help you right now?". Keeps hot leads from calling your competitor.',
    highlights: [
      'Under 3-second Missed-Call Text-Back guarantees zero competitor leakage',
      'Unified single inbox for SMS, MMS, WhatsApp, Google Chat, and Facebook',
      'Pre-built automated nurture sequences for cold leads and past customers',
      'AI suggested reply assist for field technicians on mobile'
    ],
    keyMetrics: [
      { label: 'Text-Back Response', value: '2.8 sec' },
      { label: 'Customer Reply Rate', value: '82%' },
      { label: 'Leads Saved / Month', value: '35+ Avg' }
    ],
    capabilities: [
      'A2P 10DLC Verified High-Speed SMS Delivery',
      'Two-Way Picture/MMS Support for job photos',
      'Automated Appointment Countdown Reminders',
      'Smart Blast Broadcasts to Past Customer Lists',
      'Out-of-Office & Vacation Guard Scheduling'
    ],
    interfacePreview: {
      type: 'inbox',
      title: 'Unified Communication Hub',
      subtitle: 'SMS • Phone • Google Business • WhatsApp',
      metrics: 'Missed Call Auto-Text: Sent in 1.9s • Customer Replied'
    },
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pdx-review-booster',
    name: 'PDX 5-Star Reputation & Review Booster™',
    tagline: 'Dominate Google Local Map Pack on complete autopilot.',
    category: 'Reputation Management',
    badge: 'SEO Growth',
    priceMonthly: 89,
    description: 'Automatically text happy customers review links right as their job wraps up. Filters negative experiences privately while sending raving fans straight to your Google and Yelp pages.',
    highlights: [
      'Boost Google 5-star reviews by 300% in the first 30 days',
      'Negative review protection shield: unhappy clients routed to management first',
      'Custom QR code review stands and truck decals included',
      'AI response generator for all incoming Google reviews'
    ],
    keyMetrics: [
      { label: 'Avg Rating Boost', value: '4.9 ★' },
      { label: 'Monthly New Reviews', value: '+28' },
      { label: 'Local SEO Rank', value: 'Top 3' }
    ],
    capabilities: [
      'Google Maps & Yelp Direct API Sync',
      'Automated Review Request SMS on invoice payment',
      'Review Widget for your main website with schema markup',
      'Automated AI Review Responses within 15 minutes',
      'Dispute & Policy Violation Alert System'
    ],
    interfacePreview: {
      type: 'reviews',
      title: 'Google Business Profile Autopilot',
      subtitle: '148 Total Reviews (4.9 ★ Rating) • 32 New This Month',
      metrics: 'Review Request SMS Delivered: 94% 5-Star Conversion'
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pdx-dispatch-hub',
    name: 'PDX Smart Booking & Dispatch Hub™',
    tagline: 'Cut no-shows by 78%. Collect job deposits upfront.',
    category: 'Scheduling & Dispatch',
    badge: 'Operations',
    priceMonthly: 119,
    description: 'Empower your crew with interactive live route calendars, dynamic service time-slot booking, SMS reminders with Google Maps directions, and automated credit card deposit pre-authorization.',
    highlights: [
      'Slash customer no-shows from 28% down to under 3%',
      'Multi-technician territory zoning and GPS dispatch matching',
      'Customer self-service reschedule portal with 24-hour lock rule',
      'Stripe deposit hold authorization prior to truck roll'
    ],
    keyMetrics: [
      { label: 'No-Show Reduction', value: '-78%' },
      { label: 'Deposit Capture', value: '98%' },
      { label: 'Time Saved / Week', value: '14 hrs' }
    ],
    capabilities: [
      'Google, Apple & Outlook Calendar 2-Way Sync',
      'Automated 24h & 2h SMS appointment alerts',
      'Credit card authorization hold on booking',
      'Crew dispatch route optimization',
      'Instant job completion signature capture'
    ],
    interfacePreview: {
      type: 'calendar',
      title: 'Field Service Dispatch Board',
      subtitle: '4 Crews Scheduled • 12 Jobs Today • 0 No-Shows',
      metrics: 'Inspection Deposit: $75 Authorized & Secured'
    },
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'
  }
];
