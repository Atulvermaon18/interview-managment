'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    skills: [],
    experience: '',
    jobDescription: ''
  });
  const [skillInput, setSkillInput] = useState('');

  const handleSkillAdd = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleNext = () => {
    // Here you would typically save the job data
    // For now, we'll just navigate to the stages page
    router.push('/jobs/new/stages');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <div className="flex-1 flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
            1
          </div>
          <div className="h-1 flex-1 bg-gray-300">
            <div className="w-0 h-full bg-blue-600"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center ml-2">
            2
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Full Stack Software developer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillAdd}
              placeholder="Press Enter to add skills"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                >
                  {skill}
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description<span className="text-red-500">*</span>
            </label>
            <div className="border border-gray-300 rounded-lg">
              <div className="border-b border-gray-300 px-3 py-2 flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12l3-3 3 3m0 0l3-3 3 3" />
                  </svg>
                </button>
              </div>
              <textarea
                value={formData.jobDescription}
                onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                rows={6}
                className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter job description..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => router.push('/jobs')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 