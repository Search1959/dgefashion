'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-luxury-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full border border-luxury-gold z-0" />
              <div className="relative z-10 w-full h-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-luxury-maroon p-8 hidden md:block z-20">
                <p className="text-3xl font-serif italic text-white">Since 1995</p>
                <p className="text-[10px] uppercase tracking-widest text-white/70">Legacy of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-widest text-xs mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Crafting Emotions, <br /> <span className="italic gold-gradient">One Piece at a Time</span></h2>
            
            <div className="space-y-6 text-luxury-cream/80 font-light leading-relaxed">
              <p>
                DGE Fashion Jewellery was born from a passion for blending traditional Indian artistry with contemporary global trends. We believe that jewellery is more than just an accessory; it&apos;s a reflection of a woman&apos;s soul and her journey.
              </p>
              <p>
                Every piece in our collection is meticulously handcrafted by master artisans who have inherited their skills through generations. We use only the finest materials to ensure that each creation is a masterpiece of quality and elegance.
              </p>
              <p>
                Our mission is to make luxury accessible, allowing every woman to feel confident, beautiful, and empowered, whether she&apos;s celebrating a milestone or simply embracing her daily style.
              </p>
            </div>

            <button className="mt-10 px-8 py-3 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
              Read Our Full Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
