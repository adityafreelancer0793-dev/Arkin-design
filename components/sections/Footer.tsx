'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="lg:col-span-1">
             <Link href="/" className="flex flex-col items-start group mb-8">
              <span className="text-3xl font-playfair font-bold tracking-tighter text-[#c5a26a]">
                ARKIN <span className="text-white">DESIGNS</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Architecture & Interior Studio
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 pr-4">
              Premium interior architecture and turnkey design studio specialized in 
              delivering bespoke luxury solutions in Gurgaon.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#c5a26a] hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About Studio', 'Our Services', 'Project Portfolio', 'Design Process', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white/50 hover:text-[#c5a26a] text-sm transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-8">Specialties</h4>
            <ul className="space-y-4">
              {['Residential Architecture', 'Modern Apartments', 'Luxury Interiors', 'Turnkey Solutions', 'Office Design'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-white/50 hover:text-[#c5a26a] text-sm transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-8">Reach Out</h4>
            <ul className="space-y-6">
              <li className="text-sm text-white/50 leading-relaxed">
                Block N, South City I, Sector 40, <br /> Gurugram, Haryana 122003
              </li>
              <li>
                <a href="tel:09818522772" className="text-white font-bold hover:text-[#c5a26a] transition-colors block">
                  098185 22772
                </a>
              </li>
              <li>
                <a href="mailto:Buisnessacc.arkindesigns@gmail.com" className="text-white/50 hover:text-[#c5a26a] text-xs transition-colors block break-all">
                  Buisnessacc.arkindesigns@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © 2024 Arkin Designs. All Rights Reserved. | <span className="hover:text-[#c5a26a] cursor-pointer">Privacy Policy</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 text-white/40 hover:text-[#c5a26a] transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c5a26a]">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
