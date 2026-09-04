import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveSimulator } from './components/LiveSimulator';
import { ProductLineSection } from './components/ProductLineSection';
import { AutomationFlowSection } from './components/AutomationFlowSection';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrialModal } from './components/TrialModal';
import { DemoModal } from './components/DemoModal';
import { LoginModal } from './components/LoginModal';
import { FloatingChat } from './components/FloatingChat';
import { Footer } from './components/Footer';

export default function App() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [demoOpen, setDemoOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleOpenTrial = (planId: string = 'pro') => {
    setSelectedPlan(planId);
    setTrialOpen(true);
  };

  const handleOpenDemo = () => {
    setDemoOpen(true);
  };

  const handleOpenLogin = () => {
    setLoginOpen(true);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Fixed Header */}
      <Navbar
        onOpenTrial={handleOpenTrial}
        onOpenDemo={handleOpenDemo}
        onOpenLogin={handleOpenLogin}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* Interactive Live AI Voice Receptionist Simulator */}
        <LiveSimulator
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />

        {/* Integrated SaaS Products Line For Sale */}
        <ProductLineSection
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />

        {/* 4-Step Autonomous Revenue Engine */}
        <AutomationFlowSection
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />

        {/* Interactive ROI & Revenue Calculator */}
        <RoiCalculator
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />

        {/* Transparent SaaS Pricing Tiers */}
        <PricingSection
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />

        {/* Testimonials & Verified Case Studies */}
        <TestimonialsSection
          onOpenTrial={handleOpenTrial}
          onOpenDemo={handleOpenDemo}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrial={handleOpenTrial}
        onOpenDemo={handleOpenDemo}
        onOpenLogin={handleOpenLogin}
      />

      {/* Floating Bottom-Right AI Lead Assistant */}
      <FloatingChat
        onOpenTrial={handleOpenTrial}
        onOpenDemo={handleOpenDemo}
      />

      {/* Interactive Modals */}
      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        defaultPlanId={selectedPlan}
      />

      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOpenTrial={handleOpenTrial}
      />
    </div>
  );
}
