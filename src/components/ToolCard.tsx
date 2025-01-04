import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  category: string;
}

export function ToolCard({ title, description, icon, url, category }: ToolCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-indigo-600 w-8 h-8">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </a>
  );
}