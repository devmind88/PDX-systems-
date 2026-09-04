import { IndustryScript } from '../types';

export const INDUSTRIES: IndustryScript[] = [
  {
    id: 'roofing',
    name: 'Roofing & Restoration',
    icon: 'Home',
    callerName: 'Marcus Vance (Homeowner)',
    callerPrompt: 'Hi, a branch hit our roof during the storm and I need someone to come do a roof inspection as soon as possible.',
    aiResponse: 'I can certainly help with that right away, Marcus! Storm damage is an urgent priority for our team. What is the address of the home so I can dispatch our nearest certified inspector?',
    followUpText: 'Thanks Marcus! Inspector Dave is scheduled for tomorrow at 10:00 AM at 1422 NW Kearney St. Here is your tracking link: pdx.to/insp-491. See you then!',
    bookedResult: 'Roof Storm Damage Inspection Booked for Tomorrow 10:00 AM • Insurance Claim Flagged',
    revenuePerJob: '$12,500'
  },
  {
    id: 'hvac',
    name: 'HVAC & Plumbing',
    icon: 'Wrench',
    callerName: 'Elena Rostova (Property Mgr)',
    callerPrompt: 'Our central air conditioner completely stopped blowing cold air this morning and our tenants are complaining. Do you have any emergency slots today?',
    aiResponse: 'I understand how critical that is in this heat, Elena. We have an emergency diagnostic technician available in your area between 2:00 PM and 4:00 PM today. Does that window work for you?',
    followUpText: 'Elena, you are locked in for 2:00 PM - 4:00 PM today! Tech Tyler will text you when 15 minutes away. No-cooling emergency fee waived.',
    bookedResult: 'Same-Day Emergency AC Diagnostic Confirmed (2:00 PM - 4:00 PM)',
    revenuePerJob: '$4,200'
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Tree Service',
    icon: 'Trees',
    callerName: 'Robert Sterling',
    callerPrompt: 'Looking to get an estimate for removing two large oak trees in our backyard and stump grinding.',
    aiResponse: 'We specialize in safe large tree removals and stump grinding, Robert. Our estimator can swing by on Thursday morning to measure the clearance and give you a guaranteed fixed quote. Would 9:30 AM work?',
    followUpText: 'Confirmed! Estimator Chris will arrive Thursday at 9:30 AM. Feel free to text photos of the trees to this number if you would like preliminary feedback sooner.',
    bookedResult: 'On-Site Tree Removal & Stump Grinding Estimate Booked for Thursday 9:30 AM',
    revenuePerJob: '$3,800'
  },
  {
    id: 'solar',
    name: 'Solar Energy & Electrical',
    icon: 'Sun',
    callerName: 'Danielle Miller',
    callerPrompt: 'Hi, our electric bill jumped $300 last month and we want to know if our roof qualifies for the 30% solar tax credit.',
    aiResponse: 'Great timing, Danielle! Most roofs in our county qualify for the full 30% federal credit. Let me get your average electric bill and address, and I can run a satellite irradiance check on our system right now.',
    followUpText: 'Satellite check complete! Your roof has 92% peak sun exposure with estimated savings of $1,850/yr. Senior Solar Advisor Greg is scheduled for a virtual zoom review Wednesday at 6 PM.',
    bookedResult: 'Solar Feasibility & Federal Credit Analysis Scheduled for Wednesday 6:00 PM',
    revenuePerJob: '$26,000'
  }
];
