import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Video, FileText, Download, Users, Globe } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const freeResources = [
    {
      icon: BookOpen,
      title: 'Career Library',
      description: 'Comprehensive information about hundreds of careers, including scope, requirements, and opportunities.',
      type: 'Free Access',
      link: '/resources/career-library'
    },
    {
      icon: FileText,
      title: 'Career Assessment',
      description: 'Free online assessment to discover your interests, skills, and suitable career paths.',
      type: 'Free Test',
      link: '/resources/assessment'
    },
    {
      icon: Video,
      title: 'Webinars & Workshops',
      description: 'Regular webinars on career planning, skill development, and industry insights.',
      type: 'Live Events',
      link: '/resources/webinars'
    },
    {
      icon: Download,
      title: 'Study Guides',
      description: 'Downloadable guides for stream selection, university applications, and career planning.',
      type: 'Downloads',
      link: '/resources/guides'
    },
    {
      icon: Users,
      title: 'Success Stories',
      description: 'Inspiring stories from students and professionals who transformed their careers.',
      type: 'Case Studies',
      link: '/resources/success-stories'
    },
    {
      icon: Globe,
      title: 'University Database',
      description: 'Comprehensive database of universities worldwide with admission requirements and programs.',
      type: 'Database',
      link: '/resources/universities'
    }
  ];

  const blogPosts = [
    {
      title: 'Top Career Trends for 2025',
      excerpt: 'Discover the emerging career opportunities and skills that will be in high demand.',
      date: 'January 15, 2025',
      category: 'Career Trends'
    },
    {
      title: 'How to Choose the Right A/L Stream',
      excerpt: 'A comprehensive guide to making informed decisions about your A/L subject selection.',
      date: 'January 10, 2025',
      category: 'Student Guide'
    },
    {
      title: 'Study Abroad: Complete Application Guide',
      excerpt: 'Everything you need to know about applying to international universities.',
      date: 'January 5, 2025',
      category: 'Study Abroad'
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
                Free Resources
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Access our comprehensive collection of free career guidance resources, tools, and educational content.
              </p>
              <Link
                href="/resources/assessment"
                className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Take Free Career Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Free Resources Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Free Career Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our extensive collection of free resources designed to help you make informed career decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-nextpath-blue rounded-lg p-3 mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-gray-900">
                          {resource.title}
                        </h3>
                        <span className="text-sm text-nextpath-red font-medium">
                          {resource.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <Link
                      href={resource.link}
                      className="inline-flex items-center justify-center w-full bg-nextpath-blue hover:bg-nextpath-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Access Resource
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-nextpath-blue mb-4">
                Latest Articles & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest career trends, education insights, and professional development tips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="mb-4">
                    <span className="bg-nextpath-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-nextpath-blue hover:text-nextpath-red font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="btn-secondary px-8 py-3 rounded-lg font-semibold"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-nextpath-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and get the latest career insights, resources, and opportunities delivered to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-nextpath-red"
                />
                <button
                  type="submit"
                  className="btn-primary bg-nextpath-red hover:bg-nextpath-red text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
