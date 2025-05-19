'use client';

import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Hirely
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connecting talented professionals with outstanding opportunities in Davao City
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Hirely, our mission is to bridge the gap between exceptional talent and 
              growing businesses in Davao City. We strive to create meaningful connections 
              that drive both professional growth and business success.
            </p>
            <p className="text-lg text-gray-600">
              We believe in empowering local businesses with the right talent while 
              providing professionals with opportunities to advance their careers.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/Meeting.jpg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To be the leading talent marketplace in Davao City, known for connecting 
            the right talent with the right opportunities, fostering economic growth, 
            and building stronger communities through meaningful employment.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  We are committed to maintaining the highest standards in our service, 
                  ensuring quality matches between employers and talent.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Integrity
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  We operate with transparency and honesty, building trust with both 
                  businesses and professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  We continuously improve our platform and services to better serve 
                  the evolving needs of our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 