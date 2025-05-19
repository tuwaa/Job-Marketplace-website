import Navbar from '@/components/Navbar';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General Questions",
    question: "What is Hirely?",
    answer: "Hirely is a talent marketplace connecting businesses with pre-vetted professionals in Davao City. We specialize in matching companies with skilled professionals across various fields including development, design, and project management."
  },
  {
    category: "General Questions",
    question: "How does the hiring process work?",
    answer: "Our process is simple: browse profiles, review candidates, conduct interviews, and hire. We provide support throughout the entire process, from initial screening to contract finalization."
  },
  {
    category: "Pricing & Payments",
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including project-based, hourly, and monthly rates. Each professional sets their own rates based on their expertise and experience. You can find detailed pricing information on each professional's profile."
  },
  {
    category: "Pricing & Payments",
    question: "Are there any hidden fees?",
    answer: "No, we believe in complete transparency. All fees are clearly stated upfront, and there are no hidden charges. The price you see is the price you pay."
  },
  {
    category: "Vetting Process",
    question: "How do you vet professionals?",
    answer: "Our vetting process includes skill assessment, portfolio review, reference checks, and background verification. We ensure that all professionals on our platform meet our high standards of quality and professionalism."
  },
  {
    category: "Vetting Process",
    question: "What if I'm not satisfied with the hired professional?",
    answer: "We have a satisfaction guarantee policy. If you're not satisfied with the hired professional, we'll help you find a replacement at no additional cost within the first two weeks of engagement."
  },
  {
    category: "Contract & Legal",
    question: "What type of contracts do you offer?",
    answer: "We offer various contract types including fixed-term, project-based, and ongoing contracts. All contracts are legally binding and include clear terms regarding deliverables, timelines, and payment schedules."
  },
  {
    category: "Contract & Legal",
    question: "How do you handle intellectual property rights?",
    answer: "All contracts include clear IP clauses. Typically, the client retains full ownership of the work produced, while the professional maintains the right to include the work in their portfolio."
  }
];

export default function EmployerFaqsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Employer FAQs
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Find answers to common questions about hiring through Hirely
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* FAQ Categories */}
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Category Questions */}
                {openCategory === category && (
                  <div className="divide-y divide-gray-200">
                    {faqs
                      .filter((faq) => faq.category === category)
                      .map((faq) => (
                        <div key={faq.question} className="px-6 py-4">
                          <button
                            onClick={() => toggleQuestion(faq.question)}
                            className="w-full text-left flex justify-between items-center"
                          >
                            <h3 className="text-lg font-medium text-gray-900">
                              {faq.question}
                            </h3>
                            <FaChevronDown
                              className={`transform transition-transform ${
                                openQuestions.has(faq.question) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openQuestions.has(faq.question) && (
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 