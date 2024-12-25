import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../utils/constants';

interface NavigationSectionProps {
  title: string;
  links: Array<{ name: string; href: string }>;
}

function NavigationSection({ title, links }: NavigationSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-white">{title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavigationLinks() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
      <NavigationSection title="Solutions" links={NAVIGATION_LINKS.solutions} />
      <NavigationSection title="Company" links={NAVIGATION_LINKS.company} />
    </div>
  );
}