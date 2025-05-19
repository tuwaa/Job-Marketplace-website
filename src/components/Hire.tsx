'use client';

import { professionals } from '@/data/professionals';
import ProfessionalCard from './ProfessionalCard';
import { useState } from 'react';

const Hire = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');

  const professions = Array.from(
    new Set(professionals.map((p) => p.profession))
  );

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesProfession = !selectedProfession || professional.profession === selectedProfession;
    
    return matchesSearch && matchesProfession;
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Find Your Perfect Hire
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Browse through our curated list of talented professionals in Davao City
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="search" className="block text-gray-900 font-medium mb-2">
                    Search Professionals
                  </label>
                  <input
                    id="search"
                    type="text"
                    placeholder="Search by name, profession, or skills..."
                    className="w-full p-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="md:w-64">
                  <label htmlFor="profession" className="block text-gray-900 font-medium mb-2">
                    Filter by Profession
                  </label>
                  <select
                    id="profession"
                    className="w-full p-3 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectedProfession}
                    onChange={(e) => setSelectedProfession(e.target.value)}
                  >
                    <option value="">All Professions</option>
                    {professions.map((profession) => (
                      <option key={profession} value={profession}>
                        {profession}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professionals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>
        
        {filteredProfessionals.length === 0 && (
          <div className="text-center text-gray-600 py-16">
            <p className="text-xl">No professionals found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hire; 