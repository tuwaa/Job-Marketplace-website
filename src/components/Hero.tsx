'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              FIND TALENTS TODAY
            </h1>
            <p className="text-xl text-gray-600">
              Looking for the best employees in Davao City? You'll find them here!
            </p>
            <div>
              <Link
                href="/hire"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start Hiring
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/Meeting.jpg"
              alt="Team meeting"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 