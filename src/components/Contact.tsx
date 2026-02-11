import React from 'react';
import { Mail, Linkedin, Github, Dribbble } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anna.sokolova@example.com',
    href: 'mailto:anna.sokolova@example.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/annasokolova',
    href: 'https://linkedin.com'
  },
  {
    icon: Dribbble,
    label: 'Dribbble',
    value: 'dribbble.com/annasokolova',
    href: 'https://dribbble.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/annasokolova',
    href: 'https://github.com'
  }
];

export function Contact() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Давайте работать вместе
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Всегда открыта для обсуждения новых проектов, креативных идей и возможностей сотрудничества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-start gap-4 p-6 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{link.label}</p>
                <p className="text-lg group-hover:underline">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Валентина Косова. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
}
