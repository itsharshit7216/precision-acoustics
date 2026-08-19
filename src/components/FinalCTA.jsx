import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw 
} from 'lucide-react';

export default function FinalCTA({ onOpenCart }) {
  return (
    <section className="py-32 bg-aura-950 relative overflow-hidden">
      <div className="absolute inset-0 subtle-glow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="luxury-card-glow p-10 sm:p-20 rounded-none border border-aura-gold/35 border-t-4 border-t-aura-gold text-center relative overflow-hidden shadow-2xl backdrop-blur-2xl">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-none">
            <img
              src="/assets/headphone_side.jpg"
              alt="Headphone Architecture"
              className="w-full h-full object-cover object-center opacity-60 scale-105 filter contrast-125 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-aura-950/80 via-aura-950/35 to-aura-950/85"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-aura-950/85 border border-white/15 text-aura-300 text-xs font-mono mb-8 backdrop-blur-xl shadow-lg">
              <span className="w-1.5 h-1.5 bg-aura-gold"></span>
              <span>EXPERIENCE REAL FIDELITY</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08] drop-shadow-2xl">
              Your Music, Exactly as <br />
              <span className="gold-headline">It Was Recorded.</span>
            </h2>

            <p className="text-aura-200 text-base sm:text-xl mt-6 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
              Every pair is individually acoustic-calibrated, packaged in a molded velvet hardcase, and delivered with free insured air shipping.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCart}
                className="w-full sm:w-auto px-10 py-5 rounded-none bg-gradient-to-r from-aura-gold via-aura-gold-light to-aura-gold text-aura-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-aura-gold/30 flex items-center justify-center gap-2"
              >
                <span>Add to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#specs"
                className="w-full sm:w-auto px-8 py-5 rounded-none luxury-pill text-white font-medium text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center shadow-lg border border-white/15"
              >
                <span>View Full Specifications</span>
              </a>
            </div>

            <div className="mt-14 pt-10 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-mono text-aura-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-aura-gold" />
                <span>3-Year Hardware Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-aura-gold" />
                <span>Complimentary Insured Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-aura-gold" />
                <span>30-Day Risk-Free Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
