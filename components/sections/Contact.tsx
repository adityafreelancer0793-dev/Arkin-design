'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MultiStepContactForm from '../MultiStepContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-[#c5a26a] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8">
              Let&apos;s Start Your <br /> Design Journey
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#c5a26a]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Our Location</h4>
                  <p className="text-sm text-white/80 leading-relaxed">Block N, South City I, Sector 40, Gurugram, Haryana 122003</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#c5a26a]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Phone Number</h4>
                  <a href="tel:09818522772" className="text-base font-bold hover:text-[#c5a26a] transition-colors">098185 22772</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#c5a26a]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Email Address</h4>
                  <a href="mailto:Buisnessacc.arkindesigns@gmail.com" className="text-sm hover:text-[#c5a26a] transition-colors underline break-all">Buisnessacc.arkindesigns@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-[#c5a26a]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Business Hours</h4>
                  <p className="text-sm text-white/80">Open – Closes 9:30 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden h-[300px] border border-white/10 grayscale group relative">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3023447959955!2d77.0628383!3d28.4553641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19999a9bc49b%3A0xc3bddd979313ea59!2sSouth%20City%20I%2C%20Sector%2041%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 min-h-[600px] flex items-center justify-center"
          >
            <MultiStepContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
