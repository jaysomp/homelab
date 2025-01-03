import React from 'react';
import * as icons from 'lucide-react';
import { Service } from '../types/service';
import { ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = icons[service.icon as keyof typeof icons];

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative p-6 bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-102 dark:shadow-gray-900/30 border border-gray-200/20 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <ServiceIcon icon={IconComponent} category={service.category} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {service.name}
              </h3>
            </div>
            <div className="text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              <icons.ExternalLink className="w-5 h-5" />
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {service.url}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}