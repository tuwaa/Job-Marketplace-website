"use client";

import Navbar from '@/components/Navbar';
import { FaUserPlus, FaFileAlt, FaHandshake, FaBriefcase, FaRocket, FaChartLine, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowToFindWorkPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Launch Your Remote Career
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-blue-100">
                {`Join the future of work with Hirely's premium remote job platform`}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaUserPlus className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Create Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your professional profile with our AI-powered tools. Showcase your skills, experience, and portfolio in a way that stands out to employers.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaFileAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Get Vetted</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete our comprehensive verification process to earn your trusted badge and increase your visibility to top employers.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaHandshake className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Connect & Interview</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with leading companies through our secure platform. Showcase your expertise in virtual interviews with our integrated tools.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaBriefcase className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Start Working</h3>
              <p className="text-gray-600 leading-relaxed">
                Begin your remote journey with our full support. Access tools, resources, and a community of professionals to help you succeed.
              </p>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 mb-20 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hirely?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Growth</h3>
                <p className="text-blue-100">Accelerate your career with premium opportunities</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Higher Earnings</h3>
                <p className="text-blue-100">Access competitive rates and better compensation</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-blue-100">Connect with employers worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-blue-100">Work with confidence on our protected platform</p>
              </div>
            </div>
          </div>

          {/* Success Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Success</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span className="text-gray-600">Keep your profile updated with latest skills and achievements</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span className="text-gray-600">Build a compelling portfolio showcasing your best work</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span className="text-gray-600">Be proactive in responding to employer messages</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <span className="text-gray-600">Maintain professional communication and meet deadlines</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-600">AI-powered job matching</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Secure payment system</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Professional development resources</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-600">24/7 support and community access</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful professionals on Hirely
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/get-vetted"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/talent-faqs"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 