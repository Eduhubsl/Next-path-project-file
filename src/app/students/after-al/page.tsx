import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, GraduationCap, Target, Globe } from 'lucide-react';

const AfterALPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'University Selection',
      description: 'Expert guidance to choose the right university and degree program based on your A/L results and career goals.'
    },
    {
      icon: GraduationCap,
      title: 'Course Planning',
      description: 'Comprehensive course selection advice to maximize your university admission chances.'
    },
    {
      icon: Globe,
      title: 'Application Support',
      description: 'End-to-end support for university applications, both local and international.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  After A/L Guidance
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  University and career path planning for A/L students preparing for higher education and professional careers.
                </p>
                <Link
                  href="/get-started"
                  className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                >
                  Get University Guidance
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Our A/L Guidance Includes:</h3>
                <ul className="space-y-3">
                  {['University Selection Strategy', 'Application Assistance', 'Scholarship Guidance', 'Career Path Planning', 'Interview Preparation'].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Complete A/L Support Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate your transition from A/L to university with confidence through our comprehensive guidance programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="bg-nextpath-blue rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
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
              Ready for University Success?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance to make the right university choices and set yourself up for academic and career success.
            </p>
            <Link
              href="/get-started"
              className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Book Your A/L Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AfterALPage;
