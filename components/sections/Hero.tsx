'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Star, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized scale for mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/arkin-luxury-villa/1920/1080"
          alt="Luxury Architecture Gurugram"
          fill
          className="object-cover scale-110 md:scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 md:pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <span className="h-[1px] w-8 md:w-12 bg-[#c5a26a]" />
              <span className="text-[#c5a26a] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold">
                Gurugram&apos;s Premier Design Studio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Designing Timeless <br className="hidden sm:block" />
              <span className="text-[#c5a26a]">Architecture</span> & <br className="hidden sm:block" />
              Luxury Interiors
            </h1>
            
            <p className="text-base md:text-xl text-white/70 max-w-2xl mb-10 md:mb-12 leading-relaxed font-light">
              Arkin Designs brings bespoke turnkey solutions to Gurgaon, merging 
              sophisticated architecture with functional modern luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#c5a26a] text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-full transition-all hover:shadow-[0_0_30px_rgba(197,162,106,0.5)] active:scale-95"
              >
                Book Consultation
              </motion.button>
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-white/20 backdrop-blur-md transition-all hover:bg-white/10 font-bold uppercase tracking-widest text-xs md:text-sm rounded-full active:scale-95"
              >
                Explore Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats - Optimized for different screens */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 hidden sm:block"
        >
          <div className="flex space-x-8 md:space-x-12 bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl">
            <div className="text-center">
              <div className="flex items-center justify-center text-[#c5a26a] mb-1">
                <Star size={14} fill="currentColor" className="md:w-4 md:h-4" />
                <span className="ml-2 font-bold text-lg md:text-xl text-white">4.8</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50">119+ Reviews</p>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div className="text-center">
              <div className="flex items-center justify-center text-[#c5a26a] mb-1">
                <MapPin size={14} className="md:w-4 md:h-4" />
                <span className="ml-2 font-bold text-lg md:text-xl text-white">HR12</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50">Gurgaon Based</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Parallax effect on scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <ChevronDown size={24} className="md:w-8 md:h-8" />
        </div>
      </motion.div>
    </section>
  );
}
