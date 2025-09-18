import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Building2, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

const BusinessConsultationPage: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Talent Development',
      description: 'Comprehensive talent assessment and development programs to maximize your team\'s potential.'
    },
    {
      icon: TrendingUp,
      title: 'Training Programs',
      description: 'Customized training solutions to enhance skills and productivity across your organization.'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Strategic workforce planning and career development frameworks for sustainable growth.'
    },
    {
      icon: Building2,
      title: 'HR Consultation',
      description: 'Expert HR consulting services to optimize your human capital management strategies.'
    }
  ];

  const benefits = [
    'Improved Employee Retention',
    'Enhanced Productivity',
    'Better Talent Acquisition',
    'Strategic Workforce Planning',
    'Skills Gap Analysis',
    'Leadership Development'
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
                  Business Consultation
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Strategic business consulting services to help organizations optimize their human capital and achieve sustainable growth.
                </p>
                <Link
                  href="/get-started"
                  className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Our Business Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive consulting solutions designed to enhance your organization's human capital effectiveness and strategic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
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
                  Why Businesses Trust NextPath
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Over a decade of experience helping organizations across various industries optimize their human capital strategies.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">Tailored consulting approaches that align with your organization's unique goals, culture, and challenges.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
                    <p className="text-gray-600">Data-driven strategies that deliver quantifiable improvements in productivity, retention, and employee satisfaction.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-heading font-bold text-nextpath-blue mb-6">
                  Client Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">250+</div>
                    <div className="text-gray-600">Partner Organizations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                    <div className="text-gray-600">Avg. Productivity Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                    <div className="text-gray-600">Employee Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to understanding your organization's needs and delivering effective solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Assessment', desc: 'Comprehensive analysis of your current HR practices and organizational needs.' },
                { step: '02', title: 'Strategy', desc: 'Development of customized strategies aligned with your business objectives.' },
                { step: '03', title: 'Implementation', desc: 'Guided implementation of solutions with ongoing support and monitoring.' },
                { step: '04', title: 'Optimization', desc: 'Continuous improvement and optimization based on performance metrics.' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-nextpath-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nextpath-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with NextPath to unlock your organization's full potential and achieve sustainable growth through strategic human capital optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Schedule Business Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessConsultationPage;
