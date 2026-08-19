import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShieldCheck, 
  Lock, 
  UserPlus, 
  LogIn, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Sparkles, 
  CreditCard 
} from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQty, 
  onRemoveItem 
}) {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [particles, setParticles] = useState([]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const triggerEasterEgg = () => {
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      tx: `${(Math.random() - 0.5) * 480}px`,
      ty: `${(Math.random() - 0.9) * 550}px`,
      rot: `${(Math.random() - 0.5) * 360}deg`,
      bg: i % 2 === 0 ? 'bg-aura-gold/20 border-aura-gold text-aura-gold' : 'bg-white/10 border-white/20 text-white',
      scale: 0.8 + Math.random() * 0.5
    }));

    setParticles(newParticles);
    setEasterEggActive(true);

    setTimeout(() => {
      setEasterEggActive(false);
      setParticles([]);
    }, 4500);
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}`}>
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div className={`fixed inset-y-0 right-0 max-w-full flex pl-10 transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-screen max-w-md bg-aura-950 border-l border-white/10 flex flex-col shadow-2xl rounded-none relative overflow-hidden">
          
          {easterEggActive && (
            <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden flex items-center justify-center">
              {particles.map((p) => (
                <div
                  key={p.id}
                  className={`absolute p-2.5 rounded-none border shadow-2xl backdrop-blur-xl animate-burst-card flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold ${p.bg}`}
                  style={{
                    '--tx': p.tx,
                    '--ty': p.ty,
                    '--rot': p.rot,
                  }}
                >
                  <CreditCard className="w-3 h-3" />
                  <span>₹9,599 PAID</span>
                </div>
              ))}
            </div>
          )}

          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-none bg-aura-gold/10 text-aura-gold border border-aura-gold/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold font-display text-white">Your Order</h2>
                <p className="text-[11px] font-mono text-aura-400">Direct Fulfillment</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-none bg-aura-900 text-aura-400 hover:text-white border border-white/5 transition-colors"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {easterEggActive && (
            <div className="mx-6 mt-4 p-3 bg-gradient-to-r from-aura-gold/20 via-aura-gold/30 to-aura-gold/20 border border-aura-gold text-white text-xs font-mono font-bold text-center flex items-center justify-center gap-2 shadow-2xl animate-bounce">
              <Sparkles className="w-4 h-4 text-aura-gold" />
              <span>🎧 Okay… you REALLY want these.</span>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-none bg-aura-900 flex items-center justify-center text-aura-500 mb-4 border border-white/5">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                <p className="text-xs text-aura-400 mt-1 max-w-xs">
                  Select your headphones to proceed.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-none luxury-card border border-white/10 flex gap-4 relative group"
                >
                  <img
                    src="/assets/headphone_hero.jpg"
                    alt={item.name}
                    className="w-20 h-20 rounded-none object-cover bg-aura-950 border border-white/5"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white font-display leading-snug">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-aura-500 hover:text-rose-400 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] font-mono text-aura-gold uppercase tracking-wider block mt-0.5">
                        Matte Obsidian Edition
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-aura-950 rounded-none border border-white/10 p-1">
                        <button
                          onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 text-aura-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="p-1 text-aura-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold font-mono text-white">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-aura-950 space-y-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-aura-400">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-aura-400">
                  <span>Insured Express Shipping</span>
                  <span className="text-emerald-400">FREE</span>
                </div>
                <div className="flex justify-between text-aura-400">
                  <span>GST (18% Included)</span>
                  <span className="text-aura-300">₹{Math.round((subtotal * 0.18) / 1.18).toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between text-base font-bold font-display text-white">
                  <span>Total Amount</span>
                  <span className="text-aura-gold font-mono text-lg">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {easterEggActive ? (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={triggerEasterEgg}
                    className="w-full py-4 rounded-none bg-gradient-to-r from-aura-gold via-aura-gold-light to-aura-gold text-aura-950 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-aura-gold/40 flex items-center justify-center gap-2"
                  >
                    <span>FINE. TAKE MY MONEY →</span>
                  </button>
                  <p className="text-[11px] font-mono text-center text-aura-gold-light font-bold animate-pulse">
                    Your bank account has entered the chat. 💸
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={triggerEasterEgg}
                    className="w-full py-3.5 rounded-none bg-gradient-to-r from-aura-gold via-aura-gold-light to-aura-gold text-aura-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-aura-gold/20 flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </button>

                  <button
                    onClick={triggerEasterEgg}
                    className="w-full py-3.5 rounded-none luxury-pill hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Log In</span>
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-aura-400 pt-2">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-aura-gold" />
                  <span>3-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-aura-gold" />
                  <span>256-Bit Secure</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
