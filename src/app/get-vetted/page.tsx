import Navbar from '@/components/Navbar';
import { FaUserCheck, FaFileAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

export default function GetVettedPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Get Vetted with Hirely
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Stand out to employers with our comprehensive verification process
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Process Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Get Vetted?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our verification process helps you build trust with employers and increases your chances of landing your dream job.
              Get verified to showcase your professionalism and expertise.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUserCheck className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Identity</h3>
              <p className="text-gray-600">
                Build trust with employers through our thorough identity verification process.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skill Validation</h3>
              <p className="text-gray-600">
                Get your skills and experience verified by our expert team.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Badge</h3>
              <p className="text-gray-600">
                Display our verification badge to stand out from other candidates.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaCheckCircle className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priority Access</h3>
              <p className="text-gray-600">
                Get priority access to new job opportunities and employer connections.
              </p>
            </div>
          </div>

          {/* Verification Process */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              The Verification Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Documents</h3>
                  <p className="text-gray-600">
                    Provide your identification documents, resume, and portfolio for review.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Assessment</h3>
                  <p className="text-gray-600">
                    Complete our skill assessment tests to validate your expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reference Check</h3>
                  <p className="text-gray-600">
                    {`We'll verify your work history and check your professional references.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Review</h3>
                  <p className="text-gray-600">
                    Our team conducts a final review and issues your verification badge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Verification Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Valid government-issued ID</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Updated resume/CV</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Portfolio or work samples</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Professional references</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Document submission: 30 minutes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Skill assessment: 1-2 hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Reference checks: 1-2 days</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">Total process: 2-3 business days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Verified?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start the verification process and boost your profile today
            </p>
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Verification
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 