import Navbar from '@/components/Navbar';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including personal
              information such as your name, email address, professional experience,
              and other details relevant to your profile.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services,
              facilitate connections between professionals and employers, and ensure
              platform security.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We share your information only
              with your consent or as necessary to provide our services.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information.
              You may also request a copy of your data or withdraw consent at any time.
            </p>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience and
              collect usage information to improve our services.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions about our Privacy Policy, please contact us at
              privacy@hirely.com
            </p>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any significant changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 