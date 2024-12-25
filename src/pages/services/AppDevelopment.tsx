import React from 'react';
import { Smartphone, TabletSmartphone, Gauge, Shield } from 'lucide-react';

const offerings = [
  {
    title: 'iOS Development',
    description: 'Native iOS applications built with Swift and SwiftUI for iPhones and iPads.',
    icon: Smartphone
  },
  {
    title: 'Android Development',
    description: 'Native Android applications using Kotlin and Jetpack Compose.',
    icon: TabletSmartphone
  },
  {
    title: 'Cross-Platform Apps',
    description: 'Cost-effective solutions using React Native and Flutter for both iOS and Android.',
    icon: Gauge
  },
  {
    title: 'Enterprise Solutions',
    description: 'Secure and scalable enterprise mobile applications with robust backend integration.',
    icon: Shield
  }
];

export function AppDevelopment() {
  return (
    <div className="pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Mobile App Development
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create powerful, user-friendly mobile applications that engage your audience and drive business growth.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Development Process</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive app development process ensures quality and success:
          </p>
          <ul className="mt-8 text-gray-600">
            <li>Requirements Analysis and Planning</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Development and Testing</li>
            <li>Deployment and Maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}