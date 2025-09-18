import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const CareerTransitionPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Career Assessment',
      description: 'Comprehensive evaluation of your skills, interests, and values to identify ideal career paths.'
    },
    {
      icon: TrendingUp,
      title: 'Industry Analysis',
      description: 'In-depth analysis of target industries, market trends, and growth opportunities.'
    },
    {
      icon: Users,
      title: 'Transition Planning',
      description: 'Strategic roadmap with timeline, milestones, and action steps for your career change.'
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
                  Career Transition
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Strategic guidance for professionals looking to change career paths or industries with confidence and success.
                </p>
                <Link
                  href="/get-started"
                  className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                >
                  Start Your Transition
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Career Transition Support:</h3>
                <ul className="space-y-3">
                  {['Skills Assessment', 'Industry Research', 'Network Building', 'Resume Optimization', 'Interview Coaching'].map((item) => (
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
                Strategic Career Transition Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven methodology helps professionals successfully navigate career changes and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-green-600" />
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
              Ready to Change Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your new career with expert guidance and strategic planning.
            </p>
            <Link
              href="/get-started"
              className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Book Career Transition Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerTransitionPage;
