'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const instaImages = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=2006&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1630030538573-5dd25e6cd2a6?q=80&w=1974&auto=format&fit=crop'
];

export default function InstagramGallery() {
  return (
    <section className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Instagram className="mx-auto mb-4 text-luxury-gold" size={32} />
          <h2 className="text-3xl md:text-4xl font-serif mb-2">Follow Us @DGEJewellery</h2>
          <p className="text-luxury-cream/60 text-sm uppercase tracking-widest">Share your style with #DGEElegance</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instaImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image 
                src={img} 
                alt={`Instagram ${idx}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
