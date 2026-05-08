'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sanjeev Malhotra',
    role: 'Villa Owner, South City I',
    content: 'Arkin Designs transformed our house into a masterpiece. Their attention to detail in architecture and interiors is unparalleled in Gurgaon.',
    rating: 5,
  },
  {
    name: 'Priyanka Sharma',
    role: 'Modern Apartment Owner',
    content: 'The turnkey solution was exactly what we needed. They managed everything flawlessly, from lighting to furniture. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram Mehta',
    role: 'Corporate Office Lead',
    content: 'Professional, creative, and most importantly, they delivered on time. The design aesthetic is very sophisticated and truly luxury.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
       {/* Background Image Accent */}
       <div className="absolute inset-0 opacity-10 grayscale">
         <Image 
          src="https://picsum.photos/seed/arkin-testi-bg/1920/1080" 
          alt="Interior Background" 
          fill 
          className="object-cover" 
          referrerPolicy="no-referrer"
         />
       </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">
              Trusted Excellence
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative group hover:border-[#c5a26a]/30 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-[#c5a26a]/20 group-hover:text-[#c5a26a]/40 transition-colors" size={40} />
              
              <div className="flex mb-6 text-[#c5a26a]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 mb-8 italic leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div>
                <h4 className="font-playfair text-xl font-bold">{testimonial.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-[#c5a26a] font-bold">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
