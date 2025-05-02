'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewInterviewStagePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    jobName: '',
    maxScore: '100',
    passingCriteria: '70',
    skills: [],
    skillInput: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement stage creation logic
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
    <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full m-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">New Stage</h2>
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="AI Assisted"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Job Name</label>
            <div className="relative">
              <input
                type="text"
                value={formData.jobName}
                onChange={(e) => setFormData(prev => ({ ...prev, jobName: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search for a job..."
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Score</label>
              <input
                type="number"
                value={formData.maxScore}
                onChange={(e) => setFormData(prev => ({ ...prev, maxScore: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Passing Criteria</label>
              <input
                type="number"
                value={formData.passingCriteria}
                onChange={(e) => setFormData(prev => ({ ...prev, passingCriteria: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            <div className="flex mt-1">
              <input
                type="text"
                value={formData.skillInput}
                onChange={(e) => setFormData(prev => ({ ...prev, skillInput: e.target.value }))}
                className="block w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Add required skills"
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
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewInterviewStagePage; 