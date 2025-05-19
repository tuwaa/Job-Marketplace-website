import Navbar from '@/components/Navbar';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
             {`By accessing and using Hirely's services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.`}
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Hirely provides a platform connecting professionals in Davao City with potential employers.
              We facilitate the connection but are not party to any agreements between users.
            </p>

            <h2>3. User Obligations</h2>
            <p>
              Users must provide accurate information, maintain confidentiality of their account,
              and use the service in compliance with local laws and regulations.
            </p>

            <h2>4. Professional Conduct</h2>
            <p>
              All users must maintain professional conduct in their interactions.
              Any form of harassment, discrimination, or unprofessional behavior is prohibited.
            </p>

            <h2>5. Service Modifications</h2>
            <p>
              Hirely reserves the right to modify or discontinue services at any time.
              Users will be notified of significant changes to these terms.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Hirely is not liable for any indirect, incidental, or consequential damages
              arising from the use of our services.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@hirely.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 