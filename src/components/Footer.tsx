'use client';

import React from 'react';
import Link from 'next/link';
import { GraduateCapIcon } from './icons/GraduateCapIcon';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nextpath-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <GraduateCapIcon className="text-white" size={32} />
              <span className="text-xl font-heading font-bold">NextPath</span>
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Expert guidance for students, professionals, and businesses. Your journey to success starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">For Students</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/students/after-ol" className="text-blue-200 hover:text-white transition-colors">
                  After O/L Guidance
                </Link>
              </li>
              <li>
                <Link href="/students/after-al" className="text-blue-200 hover:text-white transition-colors">
                  After A/L Guidance
                </Link>
              </li>
              <li>
                <Link href="/students/undergraduate" className="text-blue-200 hover:text-white transition-colors">
                  Undergraduate Support
                </Link>
              </li>
              <li>
                <Link href="/students/graduate" className="text-blue-200 hover:text-white transition-colors">
                  Graduate & Master's
                </Link>
              </li>
              <li>
                <Link href="/students/phd" className="text-blue-200 hover:text-white transition-colors">
                  PhD Consultations
                </Link>
              </li>
              <li>
                <Link href="/students/study-abroad" className="text-blue-200 hover:text-white transition-colors">
                  Study Abroad
                </Link>
              </li>
            </ul>
          </div>

          {/* For Professionals & Business */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/professionals/career-transition" className="text-blue-200 hover:text-white transition-colors">
                  Career Transition
                </Link>
              </li>
              <li>
                <Link href="/professionals/skill-enhancement" className="text-blue-200 hover:text-white transition-colors">
                  Skill Enhancement
                </Link>
              </li>
              <li>
                <Link href="/professionals/study-abroad" className="text-blue-200 hover:text-white transition-colors">
                  Professional Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/business-consultation" className="text-blue-200 hover:text-white transition-colors">
                  Business Consultation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-blue-200 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">+94 11 234 5678</div>
                  <div className="text-blue-200 text-sm">Mon-Fri 9AM-6PM</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">info@nextpath.lk</div>
                  <div className="text-blue-200 text-sm">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Colombo, Sri Lanka</div>
                  <div className="text-blue-200 text-sm">Global Services</div>
                </div>
              </div>
            </div>

            <Link
              href="/get-started"
              className="inline-block mt-6 bg-nextpath-red hover:bg-nextpath-red text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © 2025 NextPath. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="text-blue-200 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
