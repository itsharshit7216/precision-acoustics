import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: '360° Design', href: '#showcase' },
    { name: 'Experience', href: '#engineering' },
    { name: 'Specifications', href: '#specs' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <header className="relative w-full z-40 bg-aura-950 border-b border-white/10 py-4 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-aura-gold animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-aura-300 font-semibold">
                Planar Magnetic
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-wider text-aura-300 hover:text-aura-gold transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-aura-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-none bg-white/5 hover:bg-white/10 text-aura-200 hover:text-white transition-all border border-white/10 flex items-center justify-center group"
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-4 h-4 text-aura-gold group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-none bg-aura-gold text-aura-950 text-[9px] font-bold flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-none bg-white/5 text-aura-200 hover:text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-aura-950/98 backdrop-blur-3xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-end pb-2">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-none bg-white/5 text-aura-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-aura-100 hover:text-aura-gold py-3 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-aura-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-4 rounded-none bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-center text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-aura-gold" />
              <span>Open Cart ({cartCount})</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-aura-400">
              <ShieldCheck className="w-4 h-4 text-aura-gold" />
              <span>3-Year Warranty · Free Insured Delivery</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
