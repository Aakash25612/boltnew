import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { AIChatbots } from './pages/services/AIChatbots';
import { ContentCreation } from './pages/services/ContentCreation';
import { SocialMedia } from './pages/services/SocialMedia';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/ai-chatbots" element={<AIChatbots />} />
            <Route path="/services/content-creation" element={<ContentCreation />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}