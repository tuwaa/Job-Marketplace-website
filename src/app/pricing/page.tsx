import Navbar from '@/components/Navbar';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Choose the perfect plan for your hiring needs
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic</h2>
                <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₱5,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Access to talent pool</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Basic candidate screening</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Standard support</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaTimes className="mr-2" />
                    <span>Done For You service</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaTimes className="mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white text-center py-2">
                Most Popular
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional</h2>
                <p className="text-gray-600 mb-6">Ideal for growing companies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₱15,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Advanced candidate screening</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Basic Done For You service</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaTimes className="mr-2" />
                    <span>Full Done For You service</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h2>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₱30,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Full Done For You service</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {`What's Included in All Plans`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Access to verified professionals</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Advanced search and filtering</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Secure messaging system</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Contract management tools</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support & Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Data encryption</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Regular security updates</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Knowledge base access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our FAQ page or contact our sales team for more information
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/employer-faqs"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-300 transition-colors"
              >
                View FAQs
              </a>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 