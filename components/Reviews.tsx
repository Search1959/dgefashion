'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Fashion Influencer",
    content: "The Royal Emerald Choker is absolutely stunning. The craftsmanship is comparable to high-end luxury brands but at a fraction of the cost. Truly impressed!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Bride-to-be",
    content: "I bought my bridal set from DGE and it was the best decision. It looked so regal on my wedding day. The customer service was also exceptional.",
    rating: 5
  },
  {
    name: "Meera Reddy",
    role: "Corporate Professional",
    content: "Elegant and subtle. I wear their pearl drops to work and always get compliments. Perfect for the modern woman who loves understated luxury.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-widest text-xs mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-luxury-black p-10 border border-luxury-gold/10 relative"
            >
              <Quote className="absolute top-6 right-6 text-luxury-gold/10" size={48} />
              
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              <p className="text-luxury-cream/80 italic mb-8 leading-relaxed">
                &quot;{review.content}&quot;
              </p>

              <div>
                <h4 className="font-serif text-lg text-luxury-gold">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-luxury-cream/40">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
