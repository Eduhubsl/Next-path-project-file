import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Briefcase, TrendingUp, Globe, Target } from 'lucide-react';

const ProfessionalsPage: React.FC = () => {
  const services = [
    {
      title: 'Career Transition',
      href: '/professionals/career-transition',
      icon: Target,
      description: 'Strategic guidance for professionals looking to change career paths or industries.',
      features: ['Career Assessment', 'Industry Analysis', 'Skill Gap Identification', 'Transition Planning']
    },
    {
      title: 'Skill Enhancement',
      href: '/professionals/skill-enhancement',
      icon: TrendingUp,
      description: 'Upgrade your professional skills to stay competitive in your current field.',
      features: ['Skills Assessment', 'Training Programs', 'Certification Guidance', 'Professional Development']
    },
    {
      title: 'Study Abroad',
      href: '/professionals/study-abroad',
      icon: Globe,
      description: 'International professional development and advanced degree opportunities.',
      features: ['Program Selection', 'Application Support', 'Visa Guidance', 'Career Integration']
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
                Professional Development
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Career advancement and skill development programs for working professionals seeking growth and new opportunities.
              </p>
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Advance Your Career
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Professional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're looking to advance in your current role, transition to a new career, or enhance your skills, we have the expertise to guide you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-green-100 rounded-lg p-3 mr-4">
                        <IconComponent className="w-6 h-6 text-green-600" />
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
                      className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-6">
                  Why Professionals Choose NextPath
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-nextpath-red rounded-full p-2 flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                      <p className="text-gray-600">Our counselors have deep industry knowledge across various sectors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-nextpath-red rounded-full p-2 flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                      <p className="text-gray-600">Tailored guidance based on your unique background and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-nextpath-red rounded-full p-2 flex-shrink-0">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                      <p className="text-gray-600">Track record of successful career transitions and advancements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold text-nextpath-blue mb-6">
                  Success Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Successful Transitions</span>
                    <span className="text-2xl font-bold text-nextpath-blue">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Salary Increase</span>
                    <span className="text-2xl font-bold text-nextpath-blue">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-nextpath-blue">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nextpath-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with NextPath's expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Consultation
              </Link>
              <Link
                href="/resources"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all"
              >
                Free Career Assessment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfessionalsPage;
