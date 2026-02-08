import React from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
