"use client";

import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaArrowRight} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Hirely</h3>
            </Link>
            <p className="text-gray-500 mb-4">
              Connecting vetted employees in the Philippines to remote jobs across the world
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-[#0077b5] hover:opacity-80 transition-opacity">
                <FaLinkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-[#4267B2] hover:opacity-80 transition-opacity">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Employers</h3>
            <div className="space-y-4">
              <Link href="/how-to-hire">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">How to Hire</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Step-by-step guide to finding and hiring the perfect talent for your team</span>
                </div>
              </Link>
              <Link href="/employer-faqs">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Employer FAQs</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Common questions about our hiring process, pricing, and services</span>
                </div>
              </Link>
              <Link href="/done-for-you">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Done For You</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Let our experts handle the entire hiring process for you</span>
                </div>
              </Link>
              <Link href="/pricing">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Pricing</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Transparent pricing for all our services and plans</span>
                </div>
              </Link>
            </div>
          </div>

          {/* For Talent */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Talent</h3>
            <div className="space-y-4">
              <Link href="/how-to-find-work">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">How to Find Work</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Step-by-step guide to landing your next remote job</span>
                </div>
              </Link>
              <Link href="/talent-faqs">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Talent FAQs</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Answers to common questions about finding work and using Hirely</span>
                </div>
              </Link>
              <Link href="/get-vetted">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Get Vetted</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Boost your profile and get noticed by top employers</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <div className="space-y-4">
              <Link href="/about">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">About Us</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Learn more about our mission, vision, and team</span>
                </div>
              </Link>
              <Link href="/affiliates">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Affiliates</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Partner with us and earn by referring clients or talent</span>
                </div>
              </Link>
              <Link href="/changelog">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Changelog</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">See what&lsquo;s new and improved on Hirely</span>
                </div>
              </Link>
              <Link href="/blog">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Our Blog</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Insights, tips, and stories from the Hirely team</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">Contact Us</span>
                    <FaArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-gray-500 text-sm">Get in touch with our support and sales team</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Hirely. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 