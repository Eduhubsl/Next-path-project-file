'use client';

import React from 'react';
import { Users, GraduationCap, Building, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '2.5 Million',
      label: 'Students Impacted',
      description: 'Guided towards successful careers'
    },
    {
      icon: GraduationCap,
      number: '60,000',
      label: 'Educators Certified',
      description: 'Professional development programs'
    },
    {
      icon: Building,
      number: '250+',
      label: 'Partner Schools',
      description: 'Educational institutions worldwide'
    },
    {
      icon: Award,
      number: '50+',
      label: 'University Partners',
      description: 'Global academic collaborations'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to education and career development has helped millions of individuals and organizations achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nextpath-blue rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards and Recognition */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-heading font-bold text-nextpath-blue mb-8">
            Awards and Recognition
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white px-6 py-4 rounded-lg shadow">
              <span className="text-gray-600 font-medium">Department of Science & Technology</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow">
              <span className="text-gray-600 font-medium">Education Excellence Award</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow">
              <span className="text-gray-600 font-medium">Innovation in EdTech</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow">
              <span className="text-gray-600 font-medium">Global Impact Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
