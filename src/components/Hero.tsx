import React from 'react';
import { ArrowRight } from 'lucide-react';
import EnrollButton from './EnrollButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Journey to Academic Excellence Starts Here
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Expert guidance for NEET & JEE preparation with personalized learning paths
          and comprehensive study materials.
        </p>
        <EnrollButton />
      </div>
    </div>
  );
}