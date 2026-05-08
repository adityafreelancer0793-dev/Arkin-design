'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/arkin-about/800/1000"
                alt="Architecture and Design Process"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-[#c5a26a]/30 rounded-full hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                The Arkin Vision
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8">
                Crafting Spaces That <br />
                <span className="italic text-[#c5a26a]">Inspire Living.</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Founded on the principles of architectural integrity and aesthetic precision, 
                Arkin Designs has established itself as Gurugram&apos;s leading interior architect 
                office. We specialize in transforming visions into tangible luxury.
              </p>
              <p>
                From bespoke architectural concepts to complete turnkey executions, our 
                philosophy centers on the harmony between form and function. We believe 
                that every modern space should tell a story of elegance and intentionality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-[#c5a26a] font-playfair text-2xl mb-2">Bespoke</h3>
                <p className="text-sm text-white/50">Tailored architectural concepts for unique lifestyles.</p>
              </div>
              <div>
                <h3 className="text-[#c5a26a] font-playfair text-2xl mb-2">Turnkey</h3>
                <p className="text-sm text-white/50">End-to-end transformation from blueprint to handover.</p>
              </div>
              <div>
                <h3 className="text-[#c5a26a] font-playfair text-2xl mb-2">Luxury</h3>
                <p className="text-sm text-white/50">Premium material selection and high-end finishes.</p>
              </div>
              <div>
                <h3 className="text-[#c5a26a] font-playfair text-2xl mb-2">Functional</h3>
                <p className="text-sm text-white/50">Modern designs that prioritize usability and flow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
