import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          UX/UI Designer
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
          Анна Соколова
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Создаю интуитивные цифровые продукты, которые решают реальные проблемы пользователей
        </p>
      </div>
      
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-12 animate-bounce"
        aria-label="Scroll to portfolio"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
}
