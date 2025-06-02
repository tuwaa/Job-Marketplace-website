"use client";

import Link from 'next/link';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Hirely</h3>
            </Link>
            <p className="text-gray-500 mb-4 max-w-md">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
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