import Navbar from '@/components/Navbar';
import { FaUserTie, FaHandshake, FaChartLine, FaClock } from 'react-icons/fa';

export default function DoneForYouPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Done For You Hiring
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Let our experts handle the entire hiring process while you focus on growing your business
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Service Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Hiring Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Done For You service takes care of every aspect of the hiring process,
              from candidate sourcing to onboarding, ensuring you get the perfect match
              for your team.
            </p>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUserTie className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Matching</h3>
              <p className="text-gray-600">
                Our team of hiring experts will find the perfect candidates based on your specific requirements and company culture.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaHandshake className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                We handle everything from initial screening to contract negotiation and onboarding.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We guarantee the quality of our placements with a 90-day replacement policy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaClock className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Save valuable time and resources by letting us handle the entire hiring process.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We'll discuss your hiring needs, company culture, and specific requirements to understand exactly what you're looking for.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Candidate Sourcing</h3>
                  <p className="text-gray-600">
                    Our team will source and screen candidates, conducting initial interviews and skill assessments.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Selection</h3>
                  <p className="text-gray-600">
                    We'll present you with the best candidates and help you make the final selection.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding Support</h3>
                  <p className="text-gray-600">
                    We'll handle all the paperwork and ensure a smooth onboarding process for your new hire.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Simplify Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts handle the hiring while you focus on what matters most
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 