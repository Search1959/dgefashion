'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const categories = [
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop',
    link: '#necklaces',
    size: 'large'
  },
  {
    title: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop',
    link: '#earrings',
    size: 'small'
  },
  {
    title: 'Bridal Sets',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=2006&auto=format&fit=crop',
    link: '#bridal',
    size: 'small'
  },
  {
    title: 'Festive Collection',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop',
    link: '#festive',
    size: 'medium'
  }
];

export default function Categories() {
  return (
    <section id="collections" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Collections</h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[800px] md:h-[600px]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden cursor-pointer ${
                cat.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-luxury-black/50 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.title}
                </h3>
                <div className="w-0 group-hover:w-16 h-[1px] bg-luxury-gold transition-all duration-500 mb-6" />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest text-xs border border-luxury-gold px-4 py-2">
                  Explore
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
