import React from 'react';
import { X } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: {
    title: string;
    client: string;
    description: string;
    results: string[];
    imageUrl: string;
    industry: string;
  };
}

export function CaseStudyModal({ isOpen, onClose, study }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div>
            <img
              src={study.imageUrl}
              alt={study.title}
              className="h-64 w-full object-cover rounded-lg"
            />
            <div className="mt-6">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                {study.industry}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">{study.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{study.client}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900">Challenge & Solution</h4>
                <p className="mt-2 text-gray-600">{study.description}</p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Key Results</h4>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="text-gray-600">{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}