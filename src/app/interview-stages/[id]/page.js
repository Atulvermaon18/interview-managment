'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SampleQuestionsModal from './../../../components/SampleQuestionsModal';

const InterviewStageDetails = ({ params }) => {
  const router = useRouter();
  const [showSampleQuestions, setShowSampleQuestions] = useState(false);
  const [formData, setFormData] = useState({
    name: 'AI Technical Assessment',
    handledBy: 'AI',
    assessmentType: 'Online Assessment',
    maxScore: '100',
    passingScore: '70',
    skills: ['Java', 'MYSQL', 'Spring', 'Hibernate'],
    skillInput: ''
  });

  // In a real application, you would fetch the stage data using the params.id
  useEffect(() => {
    // TODO: Fetch stage data
    console.log('Stage ID:', params.id);
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement update logic
    router.push('/interview-stages');
  };

  const addSkill = () => {
    if (formData.skillInput.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, formData.skillInput.trim()],
        skillInput: ''
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6 px-6 pt-6">
          <button
            onClick={() => router.back()}
            className="mr-4 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Interview Stage Details</h1>
        </div>

        <div className="px-6">
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Handled By</label>
                <input
                  type="text"
                  value={formData.handledBy}
                  onChange={(e) => setFormData(prev => ({ ...prev, handledBy: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Assessment Type</label>
                <input
                  type="text"
                  value={formData.assessmentType}
                  onChange={(e) => setFormData(prev => ({ ...prev, assessmentType: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Max Score</label>
                  <input
                    type="number"
                    value={formData.maxScore}
                    onChange={(e) => setFormData(prev => ({ ...prev, maxScore: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">Passing Score</label>
                  <input
                    type="number"
                    value={formData.passingScore}
                    onChange={(e) => setFormData(prev => ({ ...prev, passingScore: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Skills</label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    value={formData.skillInput}
                    onChange={(e) => setFormData(prev => ({ ...prev, skillInput: e.target.value }))}
                    className="block w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Add a skill"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700"
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setShowSampleQuestions(true)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Sample Questions
                </button>
              </div>

              <div className="flex justify-end space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SampleQuestionsModal
        isOpen={showSampleQuestions}
        onClose={() => setShowSampleQuestions(false)}
      />
    </>
  );
};

export default InterviewStageDetails; 