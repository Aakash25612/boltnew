import React from 'react';
import CourseLayout from '../../components/course/CourseLayout';

const features = [
  {
    title: 'Complete NCERT Coverage',
    description: 'Detailed study of Organic Chemistry from both 11th and 12th, with line-by-line analysis of the NCERT textbook.'
  },
  {
    title: 'Practice MCQs & Previous Year Questions',
    description: 'Focus on MCQs and discuss past NEET questions for better understanding and exam preparation.'
  },
  {
    title: 'Weekly Tests',
    description: 'Track progress and improve performance with regular assessments throughout the course.'
  },
  {
    title: '3-Month Intensive Course',
    description: 'Focused and intensive learning program designed to master Organic Chemistry in 3 months.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who provide simplified explanations of complex concepts.'
  }
];

const whyChooseUs = [
  'Expert faculty with structured syllabus coverage',
  'Personalized attention and regular feedback',
  'Comprehensive study material and resources',
  'Focus on NEET exam pattern and requirements',
  'Proven track record of student success'
];

export default function OrganicChemistry() {
  return (
    <CourseLayout
      title="Organic Chemistry Batch for"
      subtitle="NEET 2024"
      description="Master Organic Chemistry for NEET with our 3-month course, covering the entire 11th and 12th syllabus and providing line-by-line NCERT coverage."
      features={features}
      whyChooseUs={whyChooseUs}
      ctaTitle="Enroll today and excel in Organic Chemistry!"
      showDuration={true}
      duration="3 Month"
    />
  );
}