import React from 'react';
import { Send } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { ContactFormInput } from './ContactFormInput';
import { useContactForm } from './useContactForm';
import { CONTACT_INFO } from '../../utils/constants';

export function ContactForm() {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <div id="contact" className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ready to transform your digital presence? Let's talk about your project.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Phone: {CONTACT_INFO.phone}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <ContactFormInput
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ContactFormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ContactFormInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <ContactFormInput
            label="Message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            required
          />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-gradient-to-r from-blue-600 to-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 -mr-1 h-4 w-4 inline-block" />
          </button>
        </div>
      </form>
    </div>
  );
}