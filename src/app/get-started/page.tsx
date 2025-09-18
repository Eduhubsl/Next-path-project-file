'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const GetStartedPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    'Free initial consultation (30 minutes)',
    'Personalized career guidance',
    'Expert counselor matching',
    'Flexible scheduling',
    'Follow-up resources'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Start Your Journey Today
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Book your free consultation and take the first step towards achieving your career goals.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-nextpath-blue mb-6">
                  Book Your Free Consultation
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I am a *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="student">Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="business">Business Owner/HR</option>
                      <option value="parent">Parent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                      required
                    >
                      <option value="">Select service</option>
                      <option value="after-ol">After O/L Guidance</option>
                      <option value="after-al">After A/L Guidance</option>
                      <option value="undergraduate">Undergraduate Support</option>
                      <option value="graduate">Graduate & Master's Guidance</option>
                      <option value="phd">PhD Consultations</option>
                      <option value="study-abroad-student">Study Abroad (Students)</option>
                      <option value="career-transition">Career Transition</option>
                      <option value="skill-enhancement">Skill Enhancement</option>
                      <option value="study-abroad-professional">Study Abroad (Professionals)</option>
                      <option value="business-consultation">Business Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your goals (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nextpath-blue"
                      placeholder="Share your career goals, challenges, or specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Book My Free Consultation
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>

              {/* Benefits & Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-heading font-bold text-nextpath-blue mb-6">
                    What You'll Get
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-nextpath-blue text-white rounded-xl p-8">
                  <h3 className="text-xl font-heading font-bold mb-6">
                    Next Steps
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-nextpath-red rounded-full p-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold block w-6 h-6 flex items-center justify-center">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Submit Form</h4>
                        <p className="text-blue-100 text-sm">Fill out the consultation request form above</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-nextpath-red rounded-full p-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold block w-6 h-6 flex items-center justify-center">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Get Matched</h4>
                        <p className="text-blue-100 text-sm">We'll connect you with the right expert counselor</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-nextpath-red rounded-full p-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold block w-6 h-6 flex items-center justify-center">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Schedule Call</h4>
                        <p className="text-blue-100 text-sm">Book your free 30-minute consultation at your convenience</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-nextpath-blue" />
                    <h3 className="text-lg font-heading font-bold text-gray-900">
                      Available Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                    <p><strong>Sunday:</strong> By appointment only</p>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700">
                      <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStartedPage;
