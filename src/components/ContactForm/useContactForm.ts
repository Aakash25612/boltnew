import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gmail', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        {
          to_email: 'aakashgoel2070@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData(INITIAL_STATE);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}