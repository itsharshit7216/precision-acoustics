import React, { useState, useEffect } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-aura-gold/[0.04] blur-[140px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      />

      <div className="absolute -top-[10%] left-[15%] w-[650px] h-[650px] rounded-full bg-aura-gold/[0.08] blur-[150px] animate-ambient-1"></div>
      
      <div className="absolute top-[35%] -right-[10%] w-[750px] h-[750px] rounded-full bg-slate-800/[0.25] blur-[160px] animate-ambient-2"></div>
      
      <div className="absolute top-[65%] left-[10%] w-[700px] h-[700px] rounded-full bg-aura-gold/[0.06] blur-[160px] animate-ambient-pulse"></div>

      <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-amber-900/[0.1] blur-[150px] animate-ambient-1"></div>

      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
