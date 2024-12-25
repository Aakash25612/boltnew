import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
      <div>
        <div className="flex items-center gap-x-1 text-blue-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <div className="mt-6 text-lg leading-7 text-gray-600">"{content}"</div>
      </div>
      <div className="mt-6">
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm leading-6 text-gray-600">{role}</div>
      </div>
    </div>
  );
}