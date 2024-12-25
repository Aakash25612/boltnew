import React from 'react';
import { CaseStudiesHero } from '../components/CaseStudies/CaseStudiesHero';
import { CaseStudiesGrid } from '../components/CaseStudies/CaseStudiesGrid';

export function CaseStudiesPage() {
  return (
    <div className="bg-white pt-16">
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </div>
  );
}