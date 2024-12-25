import React from 'react';
import { Code, ShoppingCart, Globe, Building2 } from 'lucide-react';

const offerings = [
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online stores with secure payment gateways, inventory management, and seamless user experience.',
    icon: ShoppingCart
  },
  {
    title: 'Corporate Websites',
    description: 'Professional business websites that establish your brand identity and drive customer engagement.',
    icon: Building2
  },
  {
    title: 'Web Applications',
    description: 'Scalable and secure web applications with robust backend infrastructure and modern frontend frameworks.',
    icon: Code
  },
  {
    title: 'Progressive Web Apps',
    description: 'Mobile-first web applications that work offline and provide native app-like experience.',
    icon: Globe
  }
];

export function WebDevelopment() {
  return (
    <div className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Web Development Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your digital presence with our comprehensive web development solutions. We create stunning, scalable, and secure web applications that drive results.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Technology Stack</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We use the latest technologies and frameworks to build robust web solutions:
          </p>
          <ul className="mt-8 text-gray-600">
            <li>React, Vue.js, Angular for frontend development</li>
            <li>Node.js, Python, PHP for backend services</li>
            <li>MongoDB, PostgreSQL, MySQL for databases</li>
            <li>AWS, Google Cloud, Azure for cloud hosting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}