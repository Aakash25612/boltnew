import React from 'react';
import { Bot, MessageSquare, Brain, BarChart } from 'lucide-react';

const offerings = [
  {
    title: 'Customer Support Bots',
    description: 'AI-powered chatbots that provide 24/7 customer support, handle inquiries, and resolve common issues automatically.',
    icon: MessageSquare
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP capabilities for understanding and responding to user queries in a natural, conversational manner.',
    icon: Brain
  },
  {
    title: 'Multi-Platform Integration',
    description: 'Seamless integration with websites, mobile apps, and popular messaging platforms like WhatsApp and Facebook Messenger.',
    icon: Bot
  },
  {
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics dashboard to track bot performance, user interactions, and derive actionable insights.',
    icon: BarChart
  }
];

export function AIChatbots() {
  return (
    <div className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI Chatbot Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your customer engagement with intelligent conversational AI solutions that provide instant, personalized support 24/7.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Features</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI chatbots come equipped with powerful features:
          </p>
          <ul className="mt-8 text-gray-600">
            <li>Multi-language support</li>
            <li>Machine learning capabilities for continuous improvement</li>
            <li>Custom workflow automation</li>
            <li>Seamless handoff to human agents when needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}