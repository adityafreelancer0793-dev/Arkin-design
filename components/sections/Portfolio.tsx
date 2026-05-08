'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const categories = [
  'All',
  'Luxury Residences',
  'Modern Apartments',
  'Architectural Concepts',
  'Turnkey Projects',
];

const projects = [
  {
    title: 'Skyline Villa',
    category: 'Luxury Residences',
    image: 'https://picsum.photos/seed/arkin-p1/800/1000',
    size: 'large',
  },
  {
    title: 'Minimalist Penthouse',
    category: 'Modern Apartments',
    image: 'https://picsum.photos/seed/arkin-p2/800/800',
    size: 'small',
  },
  {
    title: 'The Glass Pavilion',
    category: 'Architectural Concepts',
    image: 'https://picsum.photos/seed/arkin-p3/800/600',
    size: 'small',
  },
  {
    title: 'Corporate HQ Gurugram',
    category: 'Turnkey Projects',
    image: 'https://picsum.photos/seed/arkin-p4/800/1000',
    size: 'large',
  },
  {
    title: 'Eclectic Manor',
    category: 'Luxury Residences',
    image: 'https://picsum.photos/seed/arkin-p5/800/800',
    size: 'small',
  },
  {
    title: 'Metropolis Loft',
    category: 'Modern Apartments',
    image: 'https://picsum.photos/seed/arkin-p6/800/600',
    size: 'small',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">
              Bespoke Creations
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full border transition-all ${
                  activeCategory === category 
                  ? 'border-[#c5a26a] bg-[#c5a26a] text-black' 
                  : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                project.size === 'large' ? 'md:row-span-2' : 'md:row-span-1'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#c5a26a] text-[10px] uppercase tracking-widest font-bold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-4">
                  {project.title}
                </h3>
                <button className="text-xs uppercase tracking-widest font-bold border-b border-[#c5a26a] pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#c5a26a]">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
