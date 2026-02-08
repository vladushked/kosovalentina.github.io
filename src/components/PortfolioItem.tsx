import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export function PortfolioItem({ title, category, description, image, tags }: PortfolioItemProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-200 mb-6 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-500 uppercase tracking-widest">{category}</p>
        <h3 className="text-2xl md:text-3xl">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
