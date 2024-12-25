import React from 'react';
import CourseLayout from '../../components/course/CourseLayout';

const features = [
  {
    title: 'Complete NCERT Coverage',
    description: 'In-depth study of Physical Chemistry from both 11th and 12th, with line-by-line NCERT analysis.'
  },
  {
    title: 'Practice MCQs & Past Year Questions',
    description: 'Focus on MCQs and discuss previous NEET questions for exam readiness.'
  },
  {
    title: 'Weekly Tests',
    description: 'Regular mock tests to refine your skills and time management.'
  },
  {
    title: '3-Month Intensive Course',
    description: 'Comprehensive learning program designed to master Physical Chemistry in 3 months.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who simplify complex concepts.'
  }
];

const whyChooseUs = [
  'Experienced faculty with proven track record',
  'Regular doubt-clearing sessions',
  'Comprehensive study material',
  'Focus on conceptual understanding'
];

export default function PhysicalChemistry() {
  return (
    <CourseLayout
      title="Physical Chemistry Batch for"
      subtitle="NEET 2024"
      description="Prepare to ace Physical Chemistry in NEET with our 3-month course that covers the entire 11th and 12th syllabus, including line-by-line coverage of the NCERT textbook."
      features={features}
      whyChooseUs={whyChooseUs}
      ctaTitle="Unlock your potential in Physical Chemistry!"
      showDuration={true}
      duration="3 Month"
    />
  );
}