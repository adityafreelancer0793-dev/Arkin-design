'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '119+', label: 'Client Reviews' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '4.8', label: 'Star Rating' },
  { value: '12+', label: 'Design Experts' },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-[#c5a26a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-black mb-2">
                {stat.value}
              </h3>
              <p className="text-black/60 uppercase tracking-widest text-[10px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
