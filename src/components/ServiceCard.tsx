import React from 'react';
import { Clock } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <div className="bg-dark-secondary rounded-lg p-6 flex flex-col border border-gray-800 hover:border-blue-500/50 transition-colors">
      <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-blue-500" />
        <span className="text-sm text-gray-400">{service.turnaround}</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-2 mb-4">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              <span className="text-gray-400 text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="text-2xl font-bold mb-4 text-white">₹{service.price}</div>
        <button
          onClick={() => onSelect(service)}
          className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105"
        >
          Select Package
        </button>
      </div>
    </div>
  );
}