import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Solo Contractors',
    priceMonthly: 97,
    priceAnnual: 79,
    description: 'Basic features, perfect for starters, solo operators, and new trade businesses ready to automate.',
    ctaText: 'Start 14-Day Free Trial',
    subAccountLimit: '1 Dedicated Location',
    aiMinutes: '500 AI Voice Mins/mo',
    smsLimit: '1,500 High-Speed SMS',
    features: [
      'PDX VoiceAI Receptionist (500 mins/mo)',
      'Under 3s Missed-Call Auto-Text Back',
      'Core CRM & Customer Contacts Database',
      '1 Dedicated Local Business Phone Line',
      'Real-Time Google/Outlook Calendar Booking',
      'Basic Email & SMS Appointment Reminders',
      'Mobile iOS & Android App Access',
      'Email & Community Help Desk Support'
    ],
    limitations: [
      'Single user sub-account',
      'Standard voice model latency (1.8s)',
      'Basic review requests (No dispute shield)'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular • High Growth',
    isPopular: true,
    priceMonthly: 297,
    priceAnnual: 239,
    description: 'Complete power suite for established service companies ready to 2X–5X their lead conversion.',
    ctaText: 'Start 14-Day Free Trial',
    subAccountLimit: 'Up to 3 Sub-Locations',
    aiMinutes: '2,500 AI Voice Mins/mo',
    smsLimit: '10,000 High-Speed SMS',
    features: [
      '24/7 PDX VoiceAI Receptionist (2,500 mins/mo)',
      'Full Drag-and-Drop Opportunity Pipeline ($92k+ tracking)',
      'PDX 5-Star Google & Yelp Review Booster Autopilot',
      '2-Way Omnichannel Inbox (SMS, Phone, Email, Google)',
      'Unlimited Automated Workflows & Nurture Sequences',
      '5 Dedicated Phone Numbers Included',
      'Live Call Transfers to Field Technicians',
      'Stripe Deposit Invoicing & Payment Processing',
      'Priority Phone & Live Chat Support (Under 15 min SLA)'
    ]
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    badge: 'White-Label & Enterprise',
    priceMonthly: 497,
    priceAnnual: 399,
    description: 'Everything in Pro + unlimited sub-accounts, white-label branding, and dedicated engineering onboarding.',
    ctaText: 'Start 14-Day Free Trial',
    subAccountLimit: 'Unlimited Sub-Accounts',
    aiMinutes: 'Unlimited AI Voice Scaling',
    smsLimit: 'Unlimited High-Volume SMS',
    features: [
      'Everything in Pro Plan with Zero Caps',
      'Unlimited Client Sub-Accounts (Reseller Ready)',
      'Custom Branded Domain & White-Label Dashboard',
      'Custom Branded iOS & Android Mobile Apps',
      'Dedicated 1-on-1 Account Manager & Setup Architect',
      'VIP Priority Phone SLA & Private Slack Channel',
      'Full REST API & Custom Webhooks Access',
      'Multi-Location Territory Routing & Crew Dispatch',
      'Quarterly Funnel & Conversion Strategy Review'
    ]
  }
];

export const ADDONS = [
  {
    id: 'addon-managed-setup',
    name: 'Done-For-You VIP Setup & Scripting',
    price: 497,
    isOneTime: true,
    description: 'Our engineers configure your custom AI receptionist voice script, train your price sheet, and test live calls within 48 hours.'
  },
  {
    id: 'addon-extra-phone',
    name: 'Additional Dedicated Toll-Free or Local Number',
    price: 15,
    isOneTime: false,
    description: 'Add a new trackable phone line with instant SMS & voice routing capabilities.'
  },
  {
    id: 'addon-extra-voice',
    name: '1,000 Extra AI Voice Minutes Pack',
    price: 49,
    isOneTime: false,
    description: 'Rollover minutes for high call-volume peak seasons.'
  }
];
