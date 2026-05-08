'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ruler, Palette, Key, Check, ArrowRight, ArrowLeft, Send } from 'lucide-react';

const steps = [
  {
    title: 'Your Details',
    subtitle: 'Who are we designing for?',
  },
  {
    title: 'Service of Interest',
    subtitle: 'What expertise do you require?',
  },
  {
    title: 'Project Context',
    subtitle: 'Tell us more about your space.',
  },
];

const serviceOptions = [
  { id: 'architecture', title: 'Architecture', icon: Ruler },
  { id: 'interior', title: 'Interior Design', icon: Palette },
  { id: 'turnkey', title: 'Turnkey Solutions', icon: Key },
];

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
    setTimeout(nextStep, 400);
  };

  const isStepValid = () => {
    if (currentStep === 0) return formData.name && (formData.email || formData.phone);
    if (currentStep === 1) return formData.service;
    return true;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-[2px] bg-[#c5a26a] -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((_, index) => (
          <div 
            key={index}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500 ${
              index <= currentStep ? 'bg-[#c5a26a] border-[#c5a26a] text-black' : 'bg-[#0a0a0a] border-white/10 text-white/30'
            }`}
          >
            {index < currentStep ? <Check size={14} /> : <span className="text-xs font-bold">{index + 1}</span>}
          </div>
        ))}
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-playfair font-bold mb-2">{steps[currentStep].title}</h3>
              <p className="text-white/50 text-sm">{steps[currentStep].subtitle}</p>
            </div>

            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-[#c5a26a] outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-[#c5a26a] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXX XXX XXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-[#c5a26a] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleServiceSelect(option.id)}
                    className={`p-8 rounded-3xl border-2 flex flex-col items-center text-center transition-all group ${
                      formData.service === option.id 
                      ? 'bg-[#c5a26a] border-[#c5a26a] text-black' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:border-[#c5a26a]/50'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      formData.service === option.id ? 'bg-black/10' : 'bg-white/5 group-hover:bg-[#c5a26a]/10'
                    }`}>
                      <option.icon size={28} />
                    </div>
                    <span className="font-playfair font-bold text-lg">{option.title}</span>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Tell us more</label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project details, location, preferences..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-[#c5a26a] outline-none transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-[#c5a26a] text-black font-bold uppercase tracking-widest rounded-3xl flex items-center justify-center space-x-3 shadow-[0_10px_30px_rgba(197,162,106,0.2)]"
                >
                  <span>Send Inquiry</span>
                  <Send size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-12 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-bold transition-all ${
            currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-white/50 hover:text-[#c5a26a]'
          }`}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        
        {currentStep < 2 && (
          <button
            onClick={nextStep}
            disabled={!isStepValid()}
            className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-bold transition-all ${
              !isStepValid() ? 'opacity-30 cursor-not-allowed' : 'text-[#c5a26a] hover:mr-2'
            }`}
          >
            <span>Next Step</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
