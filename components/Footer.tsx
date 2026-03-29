'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-serif tracking-tighter">
              <span className="gold-gradient font-bold">DGE</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] mt-[-4px] text-luxury-gold/80">Fashion Jewellery</span>
            </Link>
            <p className="text-luxury-cream/60 text-sm leading-relaxed">
              Elevating your style with timeless elegance and traditional craftsmanship. Luxury jewellery for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-luxury-cream/70">
              <li><Link href="#collections" className="hover:text-luxury-gold transition-colors">Collections</Link></li>
              <li><Link href="#necklaces" className="hover:text-luxury-gold transition-colors">Necklaces</Link></li>
              <li><Link href="#earrings" className="hover:text-luxury-gold transition-colors">Earrings</Link></li>
              <li><Link href="#bridal" className="hover:text-luxury-gold transition-colors">Bridal Sets</Link></li>
              <li><Link href="#festive" className="hover:text-luxury-gold transition-colors">Festive Collection</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-luxury-cream/70">
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Track Your Order</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-luxury-cream/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-luxury-gold shrink-0" />
                <span>123 Jewellery Lane, Diamond District, Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-luxury-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-luxury-gold shrink-0" />
                <span>support@dgejewellery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-luxury-cream/40">
          <p>© 2026 DGE Fashion Jewellery. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-luxury-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-luxury-gold">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
