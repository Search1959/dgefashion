'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandStory from '@/components/BrandStory';
import Reviews from '@/components/Reviews';
import InstagramGallery from '@/components/InstagramGallery';
import Footer from '@/components/Footer';
import FloatingFeatures from '@/components/FloatingFeatures';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <Hero />
      
      <Categories />
      
      <FeaturedProducts />
      
      <BrandStory />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-luxury-maroon/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Unlock Your Elegance</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-light">
              Get an exclusive <span className="text-luxury-gold font-bold">20% OFF</span> on your first purchase. Limited time festive offer.
            </p>
            <button className="px-12 py-4 bg-white text-luxury-maroon font-bold uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 luxury-shadow">
              Shop Now & Save
            </button>
          </motion.div>
        </div>
      </section>

      <Reviews />
      
      <InstagramGallery />
      
      <Footer />
      
      <FloatingFeatures />
    </main>
  );
}
