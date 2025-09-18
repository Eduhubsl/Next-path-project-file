'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduateCapIcon } from './icons/GraduateCapIcon';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const studentsDropdown = [
    { title: 'After O/L Guidance', href: '/students/after-ol', desc: 'Stream selection and subject guidance' },
    { title: 'After A/L Guidance', href: '/students/after-al', desc: 'University and career path planning' },
    { title: 'Undergraduate Support', href: '/students/undergraduate', desc: 'Academic and career development' },
    { title: 'Graduate & Master\'s Guidance', href: '/students/graduate', desc: 'Advanced degree and career planning' },
    { title: 'PhD Consultations', href: '/students/phd', desc: 'Research and doctoral guidance' },
    { title: 'Study Abroad', href: '/students/study-abroad', desc: 'International education opportunities' },
  ];

  const professionalsDropdown = [
    { title: 'Career Transition', href: '/professionals/career-transition', desc: 'Change your career path' },
    { title: 'Skill Enhancement', href: '/professionals/skill-enhancement', desc: 'Upgrade your professional skills' },
    { title: 'Study Abroad', href: '/professionals/study-abroad', desc: 'International professional development' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-nextpath-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduateCapIcon className="text-nextpath-blue" size={32} />
            <span className="text-xl font-heading font-bold text-nextpath-blue">
              NextPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* For Students Dropdown */}
            <div className="relative nav-item group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-nextpath-blue transition-colors">
                <span>For Students</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-nextpath-border p-4">
                <div className="space-y-3">
                  {studentsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* For Professionals Dropdown */}
            <div className="relative nav-item group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-nextpath-blue transition-colors">
                <span>For Professionals</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-nextpath-border p-4">
                <div className="space-y-3">
                  {professionalsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Consultation */}
            <Link
              href="/business-consultation"
              className="text-gray-700 hover:text-nextpath-blue transition-colors"
            >
              Business Consultation
            </Link>

            {/* Resources */}
            <Link
              href="/resources"
              className="text-gray-700 hover:text-nextpath-blue transition-colors"
            >
              Resources
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-nextpath-blue transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/get-started"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-nextpath-border">
            <div className="py-4 space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-2">For Students</div>
                <div className="pl-4 space-y-2">
                  {studentsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-nextpath-blue"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium text-gray-900 mb-2">For Professionals</div>
                <div className="pl-4 space-y-2">
                  {professionalsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-nextpath-blue"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/business-consultation"
                className="block text-gray-700 hover:text-nextpath-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Consultation
              </Link>

              <Link
                href="/resources"
                className="block text-gray-700 hover:text-nextpath-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>

              <div className="pt-4 border-t border-nextpath-border space-y-2">
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-nextpath-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/get-started"
                  className="block btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
