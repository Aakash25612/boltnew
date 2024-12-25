import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <a 
        href={`mailto:${CONTACT_INFO.email}`}
        className="flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors"
      >
        <Mail className="h-5 w-5 text-gray-400" />
        <span className="text-sm">{CONTACT_INFO.email}</span>
      </a>
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors"
      >
        <Phone className="h-5 w-5 text-gray-400" />
        <span className="text-sm">{CONTACT_INFO.phone}</span>
      </a>
      <div className="flex items-center gap-x-2">
        <MapPin className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-300">{CONTACT_INFO.address}</span>
      </div>
    </div>
  );
}