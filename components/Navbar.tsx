'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 border-b border-luxury-gold/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-luxury-gold"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-sm uppercase tracking-widest">
          <Link href="#collections" className="hover:text-luxury-gold transition-colors">Collections</Link>
          <Link href="#necklaces" className="hover:text-luxury-gold transition-colors">Necklaces</Link>
          <Link href="#earrings" className="hover:text-luxury-gold transition-colors">Earrings</Link>
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-serif tracking-tighter text-center">
          <span className="gold-gradient font-bold">DGE</span>
          <span className="block text-[10px] uppercase tracking-[0.3em] mt-[-4px] text-luxury-gold/80">Fashion Jewellery</span>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-luxury-gold">
          <button className="hidden md:block hover:scale-110 transition-transform"><Search size={20} /></button>
          <button className="hidden md:block hover:scale-110 transition-transform"><User size={20} /></button>
          <button className="relative hover:scale-110 transition-transform">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-luxury-maroon text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-gold">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12 text-2xl font-serif">
              <Link href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold">Collections</Link>
              <Link href="#necklaces" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold">Necklaces</Link>
              <Link href="#earrings" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold">Earrings</Link>
              <Link href="#bridal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold">Bridal Sets</Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold">Our Story</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
