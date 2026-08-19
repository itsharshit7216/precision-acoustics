import React from 'react';
import { 
  Compass 
} from 'lucide-react';

export default function Hero() {
  const cards = [
    {
      title: 'Crystal Clarity',
      description: 'Like being front row at an acoustic concert with zero distortion.'
    },
    {
      title: 'Silent Sanctuary',
      description: 'Turns airplane cabins and busy cafes into a quiet private library.'
    },
    {
      title: 'All-Day Comfort',
      description: 'Italian leather and memory foam that feels weightless on your head.'
    },
    {
      title: '40-Hour Battery',
      description: 'Listen for an entire week of flights and commutes on a single charge.'
    }
  ];

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-aura-950">
      <div className="absolute inset-0 subtle-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-display tracking-tight text-white leading-[1.05]">
            Sound as Real as <br />
            <span className="gold-headline">Standing in the Studio.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-aura-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Every breath, string vibration, and sub-bass pulse delivered with effortless clarity. Built like high-precision sculpture, tuned for absolute musical truth.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#showcase"
              className="px-8 py-4 rounded-full luxury-pill text-white font-medium text-sm transition-all hover:bg-white/10 flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95"
            >
              <Compass className="w-4 h-4 text-aura-gold" />
              <span>Explore 360° Angles</span>
            </a>
          </div>
        </div>

        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden luxury-card border border-white/10 p-3 sm:p-6 shadow-2xl shadow-black group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[2rem] overflow-hidden bg-gradient-to-b from-aura-900 to-aura-950 flex items-center justify-center">
              <img
                src="/assets/headphone_hero.jpg"
                alt="Flagship Planar Headphones"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[#121622] rounded-none p-6 sm:p-7 border border-white/10 shadow-2xl hover:border-white/20 hover:bg-[#181e2e] transition-all"
            >
              <h3 className="text-base sm:text-lg font-black font-display text-white uppercase tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-aura-300 mt-3 leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
