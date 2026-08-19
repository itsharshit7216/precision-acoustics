import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ArrowRight 
} from 'lucide-react';

export default function PricingTiers({ onAddToCart }) {
  const price = 9599;

  const inclusions = [
    'Flagship Planar Magnetic Headphones (Matte Obsidian)',
    'Molded Ballistic Velvet Travel Hardcase',
    '1.5m Silver-Plated 3.5mm Portable Audio Cable',
    '3.0m Balanced 6.35mm Gold Studio Cable',
    '1.2m USB-C Fast-Charging Cable',
    'Gold Studio Adapter & Airplane Adapter',
    '3-Year Comprehensive Hardware Warranty',
    'Complimentary Insured Express Delivery Across India'
  ];

  return (
    <section id="pricing" className="py-28 bg-aura-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/5 border border-white/10 text-aura-300 text-xs font-mono mb-4 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 bg-aura-gold"></span>
            <span className="uppercase tracking-widest">Complete Package</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
            One Complete Flagship Package.
          </h2>
          <p className="text-aura-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Everything you need for everyday wireless travel and pro studio mastering included right in the box.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="luxury-card-glow rounded-none p-8 sm:p-14 border border-aura-gold/35 border-t-4 border-t-aura-gold relative shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3.5 py-1.5 rounded-none bg-aura-gold/15 border border-aura-gold/30 text-xs font-mono text-aura-gold uppercase tracking-wider mb-3">
                    Flagship Package
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
                    Planar Magnetic Headphones
                  </h3>
                  <p className="text-sm text-aura-300 mt-2 leading-relaxed">
                    Includes the complete headphone unit with 50mm planar transducers, adaptive noise cancellation, titanium frame, velvet case, and pro audio cables in Matte Obsidian.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-none bg-aura-gold/15 flex items-center justify-center text-aura-gold flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-aura-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-none bg-aura-950/90 border border-white/10 shadow-2xl">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-aura-400 block mb-1">
                    Price (All-Inclusive)
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-white">
                      ₹{price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-mono text-aura-400">INR</span>
                  </div>
                  <p className="text-xs text-aura-400 mt-1 font-mono">
                    Includes GST, free insured air shipping, and full 3-year warranty
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => onAddToCart({ id: 'flagship', name: 'Planar Magnetic Headphone Package', price: 9599 })}
                    className="w-full py-4 rounded-none bg-gradient-to-r from-aura-gold via-aura-gold-light to-aura-gold text-aura-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-aura-gold/25 flex items-center justify-center gap-2"
                  >
                    <span>Add to Cart</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-mono text-aura-400">
                      Dispatched within 24–48 hours
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5 text-xs font-mono text-aura-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-aura-gold" />
                    <span>3-Year Hardware Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-aura-gold" />
                    <span>Free Insured Express Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-aura-gold" />
                    <span>30-Day In-Home Evaluation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
