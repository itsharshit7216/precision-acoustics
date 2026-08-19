import React, { useState } from 'react';
import { 
  CheckCircle2 
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      tag: 'Planar Transduction',
      title: 'Sound as Open and Natural as Life',
      metaphor: 'Like standing right beside the instrument instead of hearing it through a speaker cone.',
      desc: 'Standard headphones use a single center piston that bends soundwaves. Our planar drivers move an entire microscopic sheet evenly at once. The result is crystal clear sound where every instrument has its own place in the room.',
      specs: [
        '50mm ultra-thin vibrating diaphragm',
        'Balanced magnetic rails push sound evenly',
        'Zero distortion even at high volumes'
      ]
    },
    {
      num: '02',
      tag: 'Smart Noise Cancellation',
      title: 'Silence Like Stepping into an Empty Room',
      metaphor: 'Like shutting the heavy glass door of a luxury car on a noisy highway.',
      desc: 'Sensitive microphones listen to ambient city traffic and plane engine hums, creating an exact opposite silent soundwave in milliseconds. You hear only your music, without feeling pressure in your ears.',
      specs: [
        'Multi-microphone ambient listening',
        'Neutralizes rumble and cafe noise',
        'Preserves delicate vocal details'
      ]
    },
    {
      num: '03',
      tag: 'Dual Listening Modes',
      title: 'Seamless Wireless or Pure Analog Studio',
      metaphor: 'Wireless freedom for travel, or plug directly into studio gear with no loss in quality.',
      desc: 'Stream effortlessly in 24-bit high definition from your phone or tablet, or plug in the included braided studio cables for zero-latency mastering and pure analogue warmth.',
      specs: [
        '24-bit high-definition wireless streaming',
        'Direct passive studio cable mode',
        'Includes silver-plated braided cables'
      ]
    }
  ];

  return (
    <section id="engineering" className="py-28 bg-aura-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/5 border border-white/10 text-aura-300 text-xs font-mono mb-4 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 bg-aura-gold"></span>
            <span className="uppercase tracking-widest">The Experience</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
            How Great Sound Feels.
          </h2>
          <p className="text-aura-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Complex acoustic engineering translated into pure, effortless musical joy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-7 rounded-none border transition-all relative overflow-hidden ${
                  activeStep === idx 
                    ? 'luxury-card-glow border-aura-gold/50 shadow-2xl' 
                    : 'luxury-card border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold tracking-widest ${activeStep === idx ? 'text-aura-gold' : 'text-aura-500'}`}>
                    STEP {s.num}
                  </span>
                  <span className="text-[10px] font-mono text-aura-300 bg-white/5 px-3 py-1 rounded-none border border-white/5">
                    {s.tag}
                  </span>
                </div>
                <h3 className={`text-xl font-bold font-display ${activeStep === idx ? 'text-white' : 'text-aura-300'}`}>
                  {s.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 luxury-card p-8 sm:p-12 rounded-none border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-aura-gold block mb-1">
                    {steps[activeStep].tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-none bg-aura-gold/10 border border-aura-gold/20 text-aura-gold-light text-sm italic">
                "{steps[activeStep].metaphor}"
              </div>

              <p className="text-base text-aura-200 mt-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-aura-400 mb-4">
                  What This Means For You:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].specs.map((spec, i) => (
                    <div key={i} className="p-4 rounded-none bg-white/5 border border-white/5 flex flex-col justify-between shadow-inner">
                      <CheckCircle2 className="w-4 h-4 text-aura-gold mb-2" />
                      <span className="text-xs text-aura-300 leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-aura-400">Step 0{activeStep + 1} of 0{steps.length}</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-4 py-2 rounded-none luxury-pill text-xs font-mono disabled:opacity-30 text-aura-300 hover:text-white"
                >
                  Previous
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-4 py-2 rounded-none bg-aura-gold/20 border border-aura-gold/40 text-xs font-mono disabled:opacity-30 text-aura-gold hover:bg-aura-gold/30"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
