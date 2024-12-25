import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';
import { CASE_STUDIES } from '../../utils/constants';

export function CaseStudiesGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.title} {...study} />
        ))}
      </div>
    </div>
  );
}