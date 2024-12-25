import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationLinks } from './NavigationLinks';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="text-2xl font-bold text-white">
              AR Vision
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transforming businesses through innovative digital solutions.
            </p>
            <ContactInfo />
          </div>
          <NavigationLinks />
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} AR Vision Technology. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}