'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Calendar, User, FileText } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const quickActions = [
    { icon: Calendar, title: 'Schedule Consultation', desc: 'Book your next session' },
    { icon: FileText, title: 'Career Assessment', desc: 'Take our comprehensive test' },
    { icon: BookOpen, title: 'Resources', desc: 'Access learning materials' },
    { icon: User, title: 'Profile', desc: 'Update your information' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-nextpath-blue mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600">
            Track your progress and access your NextPath services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-nextpath-blue rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-nextpath-blue pl-4">
                <p className="font-medium">Career Assessment Completed</p>
                <p className="text-gray-600 text-sm">2 days ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium">Consultation Scheduled</p>
                <p className="text-gray-600 text-sm">1 week ago</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
              Next Steps
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-nextpath-red rounded-full"></div>
                <span>Complete university application</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Prepare for interview</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Review study abroad options</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;
