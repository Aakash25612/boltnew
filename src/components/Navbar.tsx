import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'AI Chatbots', href: '/services/ai-chatbots' },
      { name: 'Content Creation', href: '/services/content-creation' },
      { name: 'Social Media Marketing', href: '/services/social-media' },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavigation = () => {
    scrollToTop();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <RouterLink to="/" onClick={handleNavigation} className="-m-1.5 p-1.5 text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            AR Vision
          </RouterLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-2">
                      {item.children.map((child) => (
                        <RouterLink
                          key={child.name}
                          to={child.href}
                          onClick={handleNavigation}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {child.name}
                        </RouterLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <RouterLink
                  to={item.href}
                  onClick={handleNavigation}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                >
                  {item.name}
                </RouterLink>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <RouterLink
            to="/contact"
            onClick={handleNavigation}
            className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get Started
          </RouterLink>
        </div>
      </nav>
    </header>
  );
}