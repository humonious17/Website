import React, { useState } from 'react';
import { Service } from '../types';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

interface BookingModalProps {
  service: Service;
  onClose: () => void;
}

export function BookingModal({ service, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshot) {
      toast.error('Please upload a payment screenshot');
      return;
    }

    setLoading(true);
    try {
      // Upload screenshot
      const fileExt = screenshot.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('payment-screenshots')
        .upload(fileName, screenshot);

      if (uploadError) throw uploadError;

      // Create booking
      const { error: bookingError } = await supabase.from('bookings').insert({
        name,
        email,
        service: service.id,
        amount: service.price,
        payment_screenshot_url: fileData.path
      });

      if (bookingError) throw bookingError;

      toast.success('Booking submitted successfully!');
      onClose();
      
      // Open Calendly
      window.open('https://calendly.com/suryanshkushwaha', '_blank');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-dark-secondary rounded-lg max-w-md w-full p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
        <p className="mb-4 text-gray-400">Please pay ₹{service.price} to UPI: suryansh@yespop</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-lg bg-dark border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-lg bg-dark border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              className="w-full text-gray-400"
            />
          </div>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}