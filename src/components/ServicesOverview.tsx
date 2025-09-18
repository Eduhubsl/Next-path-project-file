'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Briefcase, Building2, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'For Students',
      description: 'Complete academic journey support from O/L to PhD level with expert guidance and career planning.',
      features: ['After O/L & A/L Guidance', 'University Selection', 'Study Abroad Programs', 'Career Assessment'],
      href: '/students',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: Briefcase,
      title: 'For Professionals',
      description: 'Career advancement and skill development programs for working professionals seeking growth.',
      features: ['Career Transition', 'Skill Enhancement', 'Leadership Training', 'International Opportunities'],
      href: '/professionals',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      icon: Building2,
      title: 'Business Consultation',
      description: 'Strategic business consulting services to help organizations optimize their human capital.',
      features: ['Talent Development', 'Training Programs', 'Strategic Planning', 'HR Consultation'],
      href: '/business-consultation',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
            Comprehensive Solutions for Every Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a student planning your career, a professional seeking advancement, or a business looking to develop talent, we have the expertise to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`${service.color} rounded-xl p-8 border-2 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.iconColor} bg-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nextpath-red rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-nextpath-blue font-semibold hover:text-nextpath-red transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-nextpath-blue rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join millions of students and professionals who have transformed their careers with NextPath's expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Book a Consultation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all"
              >
                Explore Free Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
