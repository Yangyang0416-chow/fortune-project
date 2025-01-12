'use client';

import Hero from './home/components/Hero';
import Features from './home/components/Features';
import Footer from './home/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
