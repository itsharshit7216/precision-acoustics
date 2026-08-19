import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function ProductShowcaseSlider({ onAddToCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenModal, setFullscreenModal] = useState(false);

  const slides = [
    {
      id: 'hero',
      title: 'Sculpted For Acoustic Precision',
      subtitle: 'Open-chamber acoustic cups',
      image: '/assets/headphone_hero.jpg',
      badge: 'Front Profile',
      highlights: [
        'Soundwaves move freely through micro-mesh grilles, creating a wide natural room feel.',
        'Balanced dual-cable ports allow pure stereo separation directly to each ear.',
        'Designed to let music breathe with zero boxy resonance.'
      ]
    },
    {
      id: 'side',
      title: 'Solid Aluminum Control Dial',
      subtitle: 'Tactile rotary wheel with stepped detents',
      image: '/assets/headphone_side.jpg',
      badge: 'Side Profile',
      highlights: [
        'Machined like a luxury watch crown for satisfying, precise volume adjustments.',
        'Concealed noise-cancelling microphones seamlessly blended into the metal frame.',
        'Zero accidental touch triggers—pure physical tactile confidence.'
      ]
    },
    {
      id: 'overhead',
      title: 'Featherlight Headband Arch',
      subtitle: 'Perforated Italian leather & flexible spring steel',
      image: '/assets/headphone_overhead.jpg',
      badge: 'Overhead View',
      highlights: [
        'Distributes weight like a soft cloud across the top of your head.',
        'Micro-perforations let heat escape so your head stays cool for hours.',
        'Aerospace spring steel flexes effortlessly to fit any head size perfectly.'
      ]
    },
    {
      id: 'driver',
      title: '50mm Planar Sound Engine',
      subtitle: 'Ultra-thin membrane with gold circuits',
      image: '/assets/headphone_driver.jpg',
      badge: 'Internal Driver',
      highlights: [
        'The vibrating film is thinner than a strand of hair, reacting instantly to every musical note.',
        'Dual magnetic rails push sound uniformly, eliminating harsh distortion.',
        'Delivers bass that punches deep and vocals that sound like a live singer in the room.'
      ]
    },
    {
      id: 'case',
      title: 'Travel Hardcase & Cables',
      subtitle: 'Custom velvet shell and studio wires',
      image: '/assets/headphone_case.jpg',
      badge: 'Included Case',
      highlights: [
        'A molded protective case that shields your headphones from drops and travel bumps.',
        'Includes high-grade silver-plated cables and airline gold adapters.',
        'Magnetic quick-stash pocket for your adapters and charging wires.'
      ]
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="showcase" className="py-28 bg-aura-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-aura-300 text-xs font-mono mb-4 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-aura-gold"></span>
              <span className="uppercase tracking-widest">360° Visual Gallery</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
              Obsession in Every Detail.
            </h2>
            <p className="text-aura-300 text-base sm:text-lg mt-3 max-w-xl">
              Inspect the materials, craftsmanship, and internal acoustics from every perspective.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full luxury-pill text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-aura-400 px-2">
              0{currentIndex + 1} / 0{slides.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full luxury-pill text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="luxury-card p-3 sm:p-5 rounded-[2.5rem] border border-white/10 shadow-2xl relative group overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[2rem] overflow-hidden bg-aura-900">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-4 py-2 rounded-full luxury-pill text-xs font-mono text-aura-gold font-bold shadow-lg">
                    {currentSlide.badge}
                  </span>
                </div>

                <button
                  onClick={() => setFullscreenModal(true)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full luxury-pill text-white hover:text-aura-gold transition-colors shadow-lg"
                  aria-label="Inspect Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-28 h-18 rounded-2xl overflow-hidden border-2 transition-all relative ${
                    currentIndex === idx 
                      ? 'border-aura-gold scale-105 shadow-xl shadow-aura-gold/25' 
                      : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="luxury-card p-8 rounded-none border border-white/10 shadow-2xl">
              <span className="text-xs font-mono text-aura-gold uppercase tracking-widest block mb-2">
                Angle 0{currentIndex + 1} of 0{slides.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
                {currentSlide.title}
              </h3>
              <p className="text-sm text-aura-300 mt-2 font-sans">
                {currentSlide.subtitle}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                {currentSlide.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-none bg-aura-gold/15 border border-aura-gold/30 flex items-center justify-center text-aura-gold flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-aura-200 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => onAddToCart && onAddToCart({ id: 'flagship', name: 'Planar Magnetic Headphone Package', price: 9599 })}
                  className="w-full py-4 rounded-none bg-gradient-to-r from-aura-gold to-aura-gold-light text-aura-950 font-bold text-center text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-aura-gold/20 flex items-center justify-center gap-2"
                >
                  <span>Add to Cart</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {fullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl p-4 sm:p-10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-aura-gold">{currentSlide.badge}</span>
              <span className="text-white font-bold text-lg">{currentSlide.title}</span>
            </div>
            <button
              onClick={() => setFullscreenModal(false)}
              className="px-5 py-2.5 rounded-full luxury-pill text-white font-mono text-xs hover:bg-white/10 transition-colors"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="max-h-[80vh] max-w-full object-contain rounded-3xl shadow-2xl border border-white/10"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="px-6 py-3 rounded-full luxury-pill text-white font-mono text-xs hover:bg-white/10"
            >
              Previous
            </button>
            <span className="text-xs font-mono text-aura-400">
              0{currentIndex + 1} of 0{slides.length}
            </span>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-full luxury-pill text-white font-mono text-xs hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
