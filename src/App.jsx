import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcaseSlider from './components/ProductShowcaseSlider';
import HowItWorks from './components/HowItWorks';
import TechSpecs from './components/TechSpecs';
import PricingTiers from './components/PricingTiers';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AmbientBackground from './components/AmbientBackground';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'flagship',
      name: 'Planar Magnetic Headphone Package',
      price: 9599,
      quantity: 1
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (tier) => {
    const itemToAdd = tier || { id: 'flagship', name: 'Planar Magnetic Headphone Package', price: 9599 };
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemToAdd.id);
      if (existing) {
        return prev.map((item) =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: itemToAdd.id, name: itemToAdd.name, price: itemToAdd.price, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQty = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-aura-950 text-aura-100 flex flex-col relative selection:bg-aura-gold/30 selection:text-aura-gold-light">
      <AmbientBackground />

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setCartOpen(true)}
        />

        <main className="flex-grow">
          <Hero />

          <ProductShowcaseSlider onAddToCart={handleAddToCart} />

          <HowItWorks />

          <TechSpecs />

          <PricingTiers
            onAddToCart={handleAddToCart}
          />

          <FinalCTA onOpenCart={() => handleAddToCart()} />
        </main>

        <Footer />
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
