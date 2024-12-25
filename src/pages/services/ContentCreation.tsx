import React from 'react';
import { PenTool, Video, Camera, FileText } from 'lucide-react';

const offerings = [
  {
    title: 'Copywriting & Content Strategy',
    description: 'Compelling copy and strategic content planning that aligns with your brand voice and business goals.',
    icon: PenTool
  },
  {
    title: 'Video Production',
    description: 'High-quality video content for marketing, training, and brand storytelling.',
    icon: Video
  },
  {
    title: 'Visual Content',
    description: 'Professional photography, graphics, and animations that capture attention and convey your message.',
    icon: Camera
  },
  {
    title: 'Technical Writing',
    description: 'Clear and concise documentation, guides, and technical content for your products and services.',
    icon: FileText
  }
];

export function ContentCreation() {
  return (
    <div className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Content Creation Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create engaging, purpose-driven content that resonates with your audience and drives meaningful results.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {offerings.map((offering) => (
              <div key={offering.title} className="flex flex-col bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <offering.icon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
                  {offering.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{offering.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Content Process</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We follow a proven content creation process:
          </p>
          <ul className="mt-8 text-gray-600">
            <li>Research and Strategy Development</li>
            <li>Content Planning and Creation</li>
            <li>Quality Assurance and Optimization</li>
            <li>Performance Tracking and Iteration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}