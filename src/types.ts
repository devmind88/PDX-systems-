export interface SaasProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge?: string;
  priceMonthly: number;
  description: string;
  highlights: string[];
  keyMetrics: { label: string; value: string }[];
  capabilities: string[];
  interfacePreview: {
    type: 'phone' | 'pipeline' | 'inbox' | 'reviews' | 'calendar';
    title: string;
    subtitle: string;
    metrics?: string;
  };
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  limitations?: string[];
  ctaText: string;
  subAccountLimit: string;
  aiMinutes: string;
  smsLimit: string;
}

export interface IndustryScript {
  id: string;
  name: string;
  icon: string;
  callerName: string;
  callerPrompt: string;
  aiResponse: string;
  followUpText: string;
  bookedResult: string;
  revenuePerJob: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  stats: { label: string; value: string };
  rating: number;
  verified: boolean;
}

export interface CartCheckout {
  planId: string;
  billingCycle: 'monthly' | 'annual';
  businessName: string;
  fullName: string;
  email: string;
  phone: string;
  industry: string;
  addons: string[];
}
