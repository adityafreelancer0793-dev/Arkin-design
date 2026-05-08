'use client';

import { motion } from 'motion/react';
import { Ruler, Palette, Key } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Architecture',
    description: 'Bespoke architectural planning and structural design that redefines modern living markers.',
    image: 'https://picsum.photos/seed/arkin-arch/800/600',
    icon: Ruler,
  },
  {
    title: 'Interior Design',
    description: 'Exquisite interior curation focused on luxury textures, lighting, and sophisticated aesthetics.',
    image: 'https://picsum.photos/seed/arkin-int/800/600',
    icon: Palette,
  },
  {
    title: 'Turnkey Solutions',
    description: 'Hassle-free end-to-end execution, managing every detail from design to final styling.',
    image: 'https://picsum.photos/seed/arkin-turnkey/800/600',
    icon: Key,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Services We Perfect
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Bringing architectural excellence and refined interiors to Gurugram&apos;s 
              most prestigious residential and commercial spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#c5a26a]/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-6 left-6 bg-[#c5a26a] text-black p-3 rounded-xl">
                  <service.icon size={24} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-4 group-hover:text-[#c5a26a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#c5a26a] group/btn">
                  <span>Learn More</span>
                  <span className="w-8 h-[1px] bg-[#c5a26a] group-hover/btn:w-12 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
