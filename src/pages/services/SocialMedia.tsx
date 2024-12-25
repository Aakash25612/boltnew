import React from 'react';
import { Share2, Target, BarChart2, Users2 } from 'lucide-react';

const offerings = [
  {
    title: 'Social Media Strategy',
    description: 'Data-driven social media strategies that align with your business objectives and target audience.',
    icon: Target
  },
  {
    title: 'Content Management',
    description: 'Regular posting, community engagement, and content calendar management across all platforms.',
    icon: Share2
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed reporting and analytics to track growth, engagement, and ROI of social media campaigns.',
    icon: BarChart2
  },
  {
    title: 'Community Building',
    description: 'Building and nurturing engaged communities around your brand on social platforms.',
    icon: Users2
  }
];

export function SocialMedia() {
  return (
    <div className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Social Media Marketing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Build a strong social media presence that engages your audience and drives business growth.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Platforms We Manage</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive social media management across all major platforms:
          </p>
          <ul className="mt-8 text-gray-600">
            <li>Instagram & Facebook</li>
            <li>Twitter & LinkedIn</li>
            <li>TikTok & YouTube</li>
            <li>Pinterest & Snapchat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}