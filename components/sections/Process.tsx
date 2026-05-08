'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Initial discussion to understand your vision, requirements, and lifestyle objectives.',
  },
  {
    number: '02',
    title: 'Concept Planning',
    description: 'Drafting preliminary design concepts and functional layouts for your approval.',
  },
  {
    number: '03',
    title: 'Architectural Visualization',
    description: 'Creating high-fidelity 3D renders to bring your future space to life before execution.',
  },
  {
    number: '04',
    title: 'Interior Development',
    description: 'Detailed material selection, lighting design, and modular interior planning.',
  },
  {
    number: '05',
    title: 'Turnkey Execution',
    description: 'Full-scale on-site project management, ensuring every detail meets Arkin standards.',
  },
  {
    number: '06',
    title: 'Final Styling & Handover',
    description: 'Curating final touches and handing over your bespoke luxury space.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a26a]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">
              Design Journey
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24'}`}>
                  <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c5a26a]/30 transition-colors group`}>
                    <span className="text-5xl font-playfair font-bold text-[#c5a26a]/20 group-hover:text-[#c5a26a]/40 transition-colors mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c5a26a] border-4 border-[#0a0a0a] z-10 shadow-[0_0_15px_#c5a26a]" />

                {/* Spacer side */}
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
