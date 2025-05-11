'use client';
import Link from 'next/link'; 
import { useAuth } from '../contexts/AuthContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-blue-600">Interview Management</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="text-gray-600 hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
                >
                  <span>Features</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isFeaturesOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link href="/features/job-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Job Management</Link>
                      <Link href="/features/skill-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Skill Analysis</Link>
                      <Link href="/features/interview-stages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Interview Stages</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Features</Link>
              <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5">
                  <Link
                    href="/login"
                    className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Transform Your</span>
                    <span className="block text-blue-600">Hiring Process</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Streamline your entire recruitment workflow with our comprehensive interview management platform. From job postings to candidate assessments, we've got you covered.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/login"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/demo"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                      >
                        Watch Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              width={1920}
              height={1080}
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to hire better
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Job Management"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Job Management</h3>
                  <p className="mt-2 text-gray-500">
                    Create and manage job postings with detailed requirements and stages.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Skill Analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Skill Analysis</h3>
                  <p className="mt-2 text-gray-500">
                    Evaluate candidate skills and match them with job requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Interview Stages"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Interview Stages</h3>
                  <p className="mt-2 text-gray-500">
                    Track candidates through multiple interview stages with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by leading companies
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">JD</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">John Doe</h4>
                    <p className="text-gray-500">HR Director, Tech Corp</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "This platform has revolutionized our hiring process. We've reduced our time-to-hire by 40%."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">AS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Alice Smith</h4>
                    <p className="text-gray-500">Talent Acquisition Lead</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The skill analysis feature helps us make better hiring decisions. Highly recommended!"
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">RJ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Robert Johnson</h4>
                    <p className="text-gray-500">CTO, StartupX</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The interview stage management is seamless. It's exactly what we needed."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-200">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/features" className="text-base text-gray-500 hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/security" className="text-base text-gray-500 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
                <li><Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/documentation" className="text-base text-gray-500 hover:text-gray-900">Documentation</Link></li>
                <li><Link href="/guides" className="text-base text-gray-500 hover:text-gray-900">Guides</Link></li>
                <li><Link href="/support" className="text-base text-gray-500 hover:text-gray-900">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Interview Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 