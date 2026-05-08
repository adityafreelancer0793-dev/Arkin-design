'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-2xl md:text-3xl font-playfair font-bold tracking-tighter text-[#c5a26a]">
            ARKIN <span className="text-white">DESIGNS</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-[#c5a26a] transition-colors">
            Architecture & Interior Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium hover:text-[#c5a26a] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a26a] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="tel:09818522772"
            className="flex items-center space-x-2 bg-[#c5a26a] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-[#c5a26a] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 px-6 py-12 flex flex-col space-y-8 text-center"
          >
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-playfair hover:text-[#c5a26a]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="tel:09818522772"
                className="flex items-center justify-center space-x-2 bg-[#c5a26a] text-black py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="sms:09818522772"
                className="flex items-center justify-center space-x-2 border border-white/20 py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                <MessageSquare size={18} />
                <span>Text Message</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
