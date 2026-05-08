'use client';

import { motion } from 'motion/react';
import { MessageSquare, Phone } from 'lucide-react';
import Image from 'next/image';

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/arkin-cta/1920/1080"
          alt="Luxury Architecture"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
            Transforming Vision Into <br /> 
            <span className="text-[#c5a26a]">Luxurious Reality</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Ready to elevate your space? Let&apos;s discuss your next architectural 
            and interior masterpiece in Gurgaon.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#c5a26a] text-black font-bold uppercase tracking-widest text-sm rounded-full"
            >
              Schedule Consultation
            </motion.a>
            <motion.a
              href="sms:09818522772"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-white/20 backdrop-blur-sm transition-colors hover:bg-white/10 font-bold uppercase tracking-widest text-sm rounded-full flex items-center space-x-3"
            >
              <MessageSquare size={18} />
              <span>Send Text Message</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
