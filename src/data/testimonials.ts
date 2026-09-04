import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Brett McAllister',
    role: 'Founder & Master Roofer',
    company: 'Summit Peak Roofing Co.',
    location: 'Portland, OR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Before PDX SYSTEMS, I lost at least 4 to 6 emergency roof repair calls every weekend while on a ladder. In our first 60 days using the AI Voice Receptionist and Missed Call Text-Back, we captured an extra $114,000 in closed jobs. It paid for itself in the first 48 hours.',
    stats: { label: 'Revenue Surge in 60 Days', value: '+$114,000' },
    rating: 5,
    verified: true
  },
  {
    id: 'test-2',
    name: 'Sarah Chen-Torres',
    role: 'Managing Partner',
    company: 'Pacific Coast HVAC Solutions',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'The automated review booster took us from 19 stagnant reviews to 154 five-star reviews on Google in 4 months. We now dominate the local Google 3-pack for AC repair. The booking conversion is consistently over 65%.',
    stats: { label: 'Google 5-Star Reviews', value: '154 Reviews (4.9★)' },
    rating: 5,
    verified: true
  },
  {
    id: 'test-3',
    name: 'Marcus Brody',
    role: 'Owner & Operator',
    company: 'Brody Brothers Plumbing & Drain',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Our dispatch team used to spend 3 hours every morning playing phone tag with customers. Now the PDX booking hub sends SMS confirmations, takes deposits, and routes calls seamlessly. No-shows dropped to nearly zero.',
    stats: { label: 'No-Show Reduction', value: '-82% No-Shows' },
    rating: 5,
    verified: true
  }
];

export const TRUST_METRICS = [
  { value: '2X–5X', label: 'More Leads Captured', desc: 'Instant <1s pickup & 3s missed-call text-back eliminates lead leaks' },
  { value: '64.8%', label: 'Appointments Booked', desc: 'Direct calendar integration with automated deposit authorization' },
  { value: '25%–40%', label: 'Revenue Expansion', desc: 'Proven bottom-line lift reported across 450+ service businesses' },
  { value: '< 1.2s', label: 'AI Voice Answer Time', desc: 'Zero hold queues, ultra-low latency conversational intelligence' }
];
