import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';

const SOCIAL_ICONS = {
  Facebook,
  Twitter,
  Instagram,
};

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {NAVIGATION_LINKS.social.map((item) => {
        const Icon = SOCIAL_ICONS[item.name as keyof typeof SOCIAL_ICONS];
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label={`Visit our ${item.name} page`}
          >
            <span className="sr-only">{item.name}</span>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}