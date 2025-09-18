import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, GraduationCap, Users, Globe } from 'lucide-react';

const StudentsPage: React.FC = () => {
  const services = [
    {
      title: 'After O/L Guidance',
      href: '/students/after-ol',
      icon: BookOpen,
      description: 'Stream selection and subject guidance for students completing their O/L examinations.',
      features: ['Stream Selection', 'Subject Combinations', 'Career Mapping', 'Academic Planning']
    },
    {
      title: 'After A/L Guidance',
      href: '/students/after-al',
      icon: GraduationCap,
      description: 'University and career path planning for A/L students preparing for higher education.',
      features: ['University Selection', 'Course Planning', 'Application Support', 'Scholarship Guidance']
    },
    {
      title: 'Undergraduate Support',
      href: '/students/undergraduate',
      icon: Users,
      description: 'Academic and career development support for current university students.',
      features: ['Academic Excellence', 'Internship Guidance', 'Research Opportunities', 'Skill Development']
    },
    {
      title: 'Graduate & Master\'s Guidance',
      href: '/students/graduate',
      icon: GraduationCap,
      description: 'Advanced degree planning and career guidance for postgraduate students.',
      features: ['Program Selection', 'Research Guidance', 'Thesis Support', 'Career Transition']
    },
    {
      title: 'PhD Consultations',
      href: '/students/phd',
      icon: BookOpen,
      description: 'Comprehensive research and doctoral guidance for PhD candidates.',
      features: ['Research Planning', 'Supervisor Matching', 'Funding Opportunities', 'Publication Support']
    },
    {
      title: 'Study Abroad',
      href: '/students/study-abroad',
      icon: Globe,
      description: 'International education opportunities and application support.',
      features: ['Country Selection', 'University Applications', 'Visa Guidance', 'Scholarship Hunt']
    }
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
                Student Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Complete academic journey support from O/L to PhD level with expert guidance and career planning.
              </p>
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Comprehensive Student Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From choosing the right stream to pursuing international education, we guide you at every step of your academic journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-nextpath-blue rounded-lg p-3 mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-nextpath-red rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center w-full bg-nextpath-blue hover:bg-nextpath-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nextpath-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors and take the first step towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all"
              >
                Free Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentsPage;
