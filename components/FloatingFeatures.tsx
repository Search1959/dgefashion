'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function FloatingFeatures() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-black text-xs font-semibold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp
        </span>
      </a>

      {/* Newsletter Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-luxury-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-luxury-black border border-luxury-gold/30 max-w-2xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Side */}
              <div className="hidden md:block w-1/2 relative min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
                  alt="Special Offer" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-maroon/20" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-10 flex flex-col justify-center text-center md:text-left">
                <button 
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-luxury-gold hover:text-luxury-cream transition-colors"
                >
                  <X size={24} />
                </button>

                <span className="text-luxury-gold uppercase tracking-widest text-xs mb-2 block">Exclusive Offer</span>
                <h3 className="text-3xl font-serif mb-4">Join the Elite</h3>
                <p className="text-luxury-cream/70 text-sm mb-8">
                  Subscribe to our newsletter and receive <span className="text-luxury-gold font-bold">20% OFF</span> on your first order.
                </p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gold/50" size={18} />
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      className="w-full bg-luxury-black border border-luxury-gold/30 py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>
                  <button className="w-full bg-luxury-gold text-luxury-black font-bold uppercase tracking-widest py-3 hover:bg-luxury-cream transition-colors">
                    Claim My Discount
                  </button>
                </form>

                <p className="mt-6 text-[10px] text-luxury-cream/40 uppercase tracking-widest">
                  *By subscribing you agree to our privacy policy.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
