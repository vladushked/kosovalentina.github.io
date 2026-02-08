import React from 'react';
import { PortfolioItem } from './PortfolioItem';

const projects = [
  {
    id: 1,
    title: 'Мобильное приложение для фитнеса',
    category: 'Mobile App',
    description: 'Разработка UX/UI для iOS и Android приложения с фокусом на персонализацию тренировок',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNDg2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Research', 'UI Design', 'Prototyping']
  },
  {
    id: 2,
    title: 'Веб-платформа для образования',
    category: 'Web Design',
    description: 'Редизайн онлайн-платформы для улучшения вовлеченности студентов',
    image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MDUxNzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UX Research', 'Web Design', 'Testing']
  },
  {
    id: 3,
    title: 'Dashboard для аналитики',
    category: 'Dashboard',
    description: 'Дизайн информативной панели управления для B2B SaaS продукта',
    image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA1NjcwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Data Visualization', 'UI Design']
  },
  {
    id: 4,
    title: 'E-commerce платформа',
    category: 'Mobile & Web',
    description: 'Комплексный редизайн пользовательского опыта для онлайн-магазина',
    image: 'https://images.unsplash.com/photo-1579642984094-5be053d579b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNTY3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UX Strategy', 'Conversion Optimization']
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Избранные проекты
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Портфолио</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <PortfolioItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
