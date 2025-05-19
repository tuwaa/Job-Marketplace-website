"use client";

import Navbar from '@/components/Navbar';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Getting Started",
    question: "How do I create a profile on Hirely?",
    answer: "Creating a profile is easy! Simply sign up with your email, fill in your professional details, upload your resume, and add your portfolio. Make sure to highlight your skills, experience, and achievements to attract potential employers."
  },
  {
    category: "Getting Started",
    question: "What is the vetting process?",
    answer: "Our vetting process includes skill assessment, portfolio review, reference checks, and background verification. This helps ensure quality and builds trust with employers. The process typically takes 2-3 business days."
  },
  {
    category: "Working with Clients",
    question: "How do I get paid?",
    answer: "We offer secure payment processing through our platform. Payments are released according to the agreed schedule in your contract. We support various payment methods including bank transfers and digital wallets."
  },
  {
    category: "Working with Clients",
    question: "What if I have issues with a client?",
    answer: "Our support team is here to help resolve any issues that may arise. We mediate disputes and ensure fair treatment for all parties. You can contact our support team through the platform or email."
  },
  {
    category: "Profile & Portfolio",
    question: "How can I improve my profile visibility?",
    answer: "Keep your profile updated with recent projects, skills, and achievements. Add a professional photo, detailed work history, and a compelling bio. Regular activity and positive reviews also help improve visibility."
  },
  {
    category: "Profile & Portfolio",
    question: "What should I include in my portfolio?",
    answer: "Include your best work samples, case studies, and project outcomes. Highlight diverse skills and experiences. Make sure to explain your role in each project and the impact of your work."
  },
  {
    category: "Platform Features",
    question: "What tools are available for communication?",
    answer: "We provide secure messaging, video calls, and file sharing capabilities. You can communicate with clients directly through our platform, ensuring all interactions are tracked and protected."
  },
  {
    category: "Platform Features",
    question: "How do I track my work hours?",
    answer: "Our platform includes a time tracking tool that helps you log hours, track progress, and generate reports. This ensures accurate billing and helps maintain transparency with clients."
  }
];

export default function TalentFaqsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-blue-100">
                Find answers to common questions about working with Hirely
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {categories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-8 py-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Category Questions */}
                <AnimatePresence>
                  {openCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="divide-y divide-gray-200"
                    >
                      {filteredFaqs
                        .filter((faq) => faq.category === category)
                        .map((faq) => (
                          <div key={faq.question} className="px-8 py-6">
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
                            <AnimatePresence>
                              {openQuestions.has(faq.question) && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 text-gray-600 leading-relaxed"
                                >
                                  {faq.answer}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
              <a
                href="/how-to-find-work"
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