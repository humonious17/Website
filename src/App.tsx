import React, { useState } from 'react';
import { Instagram, Twitter, Mail, Send, ArrowDown } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { BookingModal } from './components/BookingModal';
import { essayReviewServices, consultationServices } from './data/services';
import { Service } from './types';
import { supabase } from './lib/supabase';
import { Toaster, toast } from 'sonner';

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([contactForm]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-dark text-gray-300">
      <Toaster theme="dark" />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Suryansh"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover ring-2 ring-blue-500/50"
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Suryansh Kushwaha
          </h1>
          <div className="flex flex-col items-center gap-8">
            <a
              href="#services"
              className="group inline-flex flex-col items-center gap-4 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-lg font-medium">Explore Services</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="gradient-text">
              College Application Essay Review
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {essayReviewServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="gradient-text">
              General Consultation & Q&A
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Get in Touch</h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a
              href="https://www.instagram.com/sillysurry/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@sillysurry</span>
            </a>
            <a
              href="https://x.com/suryanshkush10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
              <span>@suryanshkush10</span>
            </a>
            <a
              href="mailto:suryanshkush10@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>suryanshkush10@gmail.com</span>
            </a>
          </div>

          <form onSubmit={handleContactSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-2 rounded-lg bg-dark border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-2 rounded-lg bg-dark border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                required
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full p-2 rounded-lg bg-dark border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors h-32"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default App