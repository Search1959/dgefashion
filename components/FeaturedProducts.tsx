'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Royal Emerald Choker",
    price: "₹12,999",
    oldPrice: "₹15,999",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Golden Pearl Drops",
    price: "₹4,499",
    oldPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop",
    rating: 4,
    tag: "New"
  },
  {
    id: 3,
    name: "Bridal Diamond Set",
    price: "₹45,000",
    oldPrice: "₹55,000",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=2006&auto=format&fit=crop",
    rating: 5,
    tag: "Luxury"
  },
  {
    id: 4,
    name: "Antique Temple Jhumkas",
    price: "₹3,299",
    oldPrice: "₹4,500",
    image: "https://images.unsplash.com/photo-1630030538573-5dd25e6cd2a6?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    tag: "Traditional"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-luxury-gold uppercase tracking-widest text-xs mb-2 block">Our Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif">Featured Bestsellers</h2>
          </div>
          <button className="text-luxury-gold border-b border-luxury-gold pb-1 uppercase tracking-widest text-sm hover:text-luxury-cream hover:border-luxury-cream transition-all">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-luxury-black mb-6">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-luxury-maroon text-white text-[10px] uppercase tracking-widest px-3 py-1">
                    {product.tag}
                  </span>
                )}
                
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 bg-luxury-cream text-luxury-black rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                  <button className="w-12 h-12 bg-luxury-cream text-luxury-black rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < product.rating ? "fill-luxury-gold text-luxury-gold" : "text-luxury-gold/30"} 
                    />
                  ))}
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{product.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-luxury-gold font-semibold">{product.price}</span>
                  <span className="text-luxury-cream/40 line-through text-sm">{product.oldPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
