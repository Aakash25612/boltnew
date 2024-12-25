import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  results: string[];
  imageUrl: string;
  industry: string;
}

export function CaseStudyCard(props: CaseStudyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={props.imageUrl} alt={props.title} />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-600">{props.industry}</p>
            <div className="mt-2">
              <h3 className="text-xl font-semibold text-gray-900">{props.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{props.client}</p>
              <p className="mt-3 text-base text-gray-500">{props.description}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900">Key Results:</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-500">
                {props.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        study={props}
      />
    </>
  );
}