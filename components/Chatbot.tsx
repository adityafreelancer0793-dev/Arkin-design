'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the AI assistant for Arkin Designs, a premium interior architecture and turnkey design studio based in Gurgaon, India. 
Your goal is to provide luxury-level customer service, answer questions about Arkin Designs' services (Architecture, Interior Design, Turnkey Solutions), and guide users toward booking a consultation.

Key Information:
- Location: Block N, South City I, Sector 40, Gurugram.
- Specialization: Luxury villas, modern apartments, high-end offices, and bespoke turnkey projects.
- Design Style: Minimal, elegant, sophisticated, modern architecture.
- Tone: Professional, sophisticated, helpful, and premium.
- Contact: Phone (098185 22772), Email (Buisnessacc.arkindesigns@gmail.com).

Guidelines:
- Keep answers concise and elegant.
- If a user expresses interest in a project, encourage them to leave their details in our contact form or call us directly.
- Be polite and knowledgeable about Gurgaon's luxury real estate and design trends if asked.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Arkin Designs. How can I assist you with your luxury space today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "I apologize, I'm having trouble connecting right now. Please reach out to us at 098185 22772.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm currently resting. Please call us for immediate assistance!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#c5a26a] text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,162,106,0.4)] group"
      >
        <MessageSquare size={28} />
        <span className="absolute right-full mr-4 bg-[#0a0a0a] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Design Assistant
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 bg-[#c5a26a] text-black flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-playfair font-bold">Arkin AI</h3>
                  <p className="text-[10px] uppercase font-bold opacity-60 tracking-wider">Online Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-[#c5a26a]/20 text-[#c5a26a]' : 'bg-white/5 text-white/50 border border-white/10'}`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-[#c5a26a] text-black font-medium rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#c5a26a] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#c5a26a] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#c5a26a] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="w-full bg-[#0a0a0a] border border-white/20 rounded-full py-4 pl-6 pr-14 focus:border-[#c5a26a] outline-none transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 w-10 h-10 bg-[#c5a26a] text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-white/30 mt-4 uppercase tracking-widest">
                AI powered by Arkin Designs
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
