import React from 'react';
import { 
  Globe 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-aura-950 text-aura-300 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-bold text-lg tracking-widest uppercase text-white">
              PRECISION ACOUSTICS
            </span>
            <p className="text-xs text-aura-400 mt-1 font-sans">
              Transparent planar magnetic sound reproduction. Hand-assembled for audio purists.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-aura-400">
            <Globe className="w-4 h-4 text-aura-gold" />
            <span>India · INR (₹)</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-aura-500">
          <div>
            © 2026 Precision Acoustics. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-aura-300 transition-colors">High-Resolution Audio</span>
            <span className="hover:text-aura-300 transition-colors">Certified Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
