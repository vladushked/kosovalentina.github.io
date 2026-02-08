import React from 'react';

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export function ExperienceItem({ position, company, period, description, isLast }: ExperienceItemProps) {
  return (
    <div className={`relative pl-8 ${!isLast ? 'pb-12' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full" />
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[3px] top-4 w-[2px] h-full bg-gray-200" />
      )}

      <div className="space-y-3">
        <p className="text-sm text-gray-500 uppercase tracking-widest">{period}</p>
        <h3 className="text-2xl md:text-3xl">{position}</h3>
        <p className="text-xl text-gray-600">{company}</p>
        <p className="text-gray-600 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
