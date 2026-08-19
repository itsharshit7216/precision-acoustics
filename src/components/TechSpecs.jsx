import React, { useState } from 'react';
import { 
  Cpu, 
  Radio, 
  Battery, 
  Package 
} from 'lucide-react';

export default function TechSpecs() {
  const [activeTab, setActiveTab] = useState('acoustic');

  const specCategories = [
    {
      id: 'acoustic',
      name: 'Sound & Acoustics',
      icon: Cpu,
      specs: [
        { label: 'Sound Driver', value: '50mm Planar Magnetic with Symmetrical Neodymium Rails' },
        { label: 'Frequency Range', value: '4 Hz – 48,000 Hz (Beyond human hearing range)' },
        { label: 'Total Harmonic Distortion', value: 'Less than 0.018% (Virtually inaudible distortion)' },
        { label: 'Sound Isolation', value: 'Up to -48dB Adaptive Hybrid Active Noise Cancellation' },
        { label: 'Impedance', value: '32 Ohms (Easy to drive from phones or pro amps)' },
        { label: 'Max Sound Pressure', value: '118 dB SPL' }
      ]
    },
    {
      id: 'wireless',
      name: 'Connectivity',
      icon: Radio,
      specs: [
        { label: 'Bluetooth Wireless', value: 'Bluetooth 5.4 with Dual-Device Multipoint' },
        { label: 'High-Res Audio Formats', value: 'LDAC, aptX Adaptive, aptX HD, AAC, SBC' },
        { label: 'Wired Cable Mode', value: 'Dual 3.5mm balanced audio input + 6.35mm gold studio plug' },
        { label: 'Microphone System', value: '8x Studio beamforming microphones for clear calls and noise cancellation' }
      ]
    },
    {
      id: 'battery',
      name: 'Battery & Build',
      icon: Battery,
      specs: [
        { label: 'Battery Life', value: '40 Hours with Noise Cancellation active / 55 Hours passive' },
        { label: 'Quick Charge', value: '15 minutes of charging gives 8 hours of playback' },
        { label: 'Total Weight', value: '345 grams (Engineered for zero cranial fatigue)' },
        { label: 'Materials', value: 'Grade 5 Aerospace Titanium, CNC Aluminum, Perforated Italian Calfskin' }
      ]
    },
    {
      id: 'box',
      name: 'Included In The Box',
      icon: Package,
      specs: [
        { label: 'Headphones', value: 'Planar Magnetic Over-Ear Headphone Unit' },
        { label: 'Travel Case', value: 'Molded Ballistic Velvet Hardcase' },
        { label: 'Portable Cable', value: '1.5m Silver-Plated 3.5mm Braided Audio Cable' },
        { label: 'Studio Cable', value: '3.0m Balanced 3.5mm to 6.35mm Gold Mastering Cable' },
        { label: 'Charging Wire', value: '1.2m USB-C to USB-C Heavy-Duty Braided Wire' },
        { label: 'Adapters', value: 'Gold 6.35mm Studio Adapter & Airline Dual-Pin Plug' }
      ]
    }
  ];

  return (
    <section id="specs" className="py-28 bg-aura-900/30 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/5 border border-white/10 text-aura-300 text-xs font-mono mb-4 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 bg-aura-gold"></span>
            <span className="uppercase tracking-widest">Full Specifications</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight">
            Complete Technical Details.
          </h2>
          <p className="text-aura-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to know about the materials, battery, and acoustic performance.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {specCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-none text-xs font-mono transition-all backdrop-blur-xl border ${
                  activeTab === cat.id
                    ? 'bg-aura-gold text-aura-950 font-bold border-aura-gold shadow-xl shadow-aura-gold/25'
                    : 'luxury-pill text-aura-400 hover:text-white border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto luxury-card rounded-none p-8 sm:p-12 border border-white/10 shadow-2xl">
          {specCategories
            .filter((cat) => cat.id === activeTab)
            .map((cat) => (
              <div key={cat.id} className="divide-y divide-white/5">
                {cat.specs.map((item, idx) => (
                  <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-sm font-mono text-aura-400">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white sm:text-right font-sans">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
