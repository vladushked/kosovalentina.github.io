import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    id: 1,
    position: 'Senior UX/UI Designer',
    company: 'Digital Agency',
    period: '2023 — Настоящее время',
    description: 'Руководство дизайном цифровых продуктов для международных клиентов. Проведение UX-исследований, создание дизайн-систем и менторство младших дизайнеров.'
  },
  {
    id: 2,
    position: 'UX/UI Designer',
    company: 'TechStartup Inc.',
    period: '2021 — 2023',
    description: 'Разработка пользовательских интерфейсов для SaaS продуктов. Тесное сотрудничество с разработчиками и продакт-менеджерами для создания интуитивных решений.'
  },
  {
    id: 3,
    position: 'Junior UI Designer',
    company: 'Creative Studio',
    period: '2019 — 2021',
    description: 'Создание визуальных концепций для веб и мобильных приложений. Участие в A/B тестировании и оптимизации пользовательского опыта.'
  }
];

export function Experience() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Профессиональный путь
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Опыт работы</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} {...experience} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
