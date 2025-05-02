'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobStages() {
  const router = useRouter();
  const [stages, setStages] = useState([
    {
      id: 1,
      name: 'AI Technical Assessment',
      handledBy: 'AI',
      assessmentType: 'Online Assessment',
      maxScore: 100,
      passingScore: 70,
      job: 'Senior Java Developer'
    },
    {
      id: 2,
      name: 'AI Coding Challenge',
      handledBy: 'AI',
      assessmentType: 'Online Coding Test',
      maxScore: 100,
      passingScore: 70,
      job: 'Senior Java Developer'
    }
  ]);

  const [showNewStage, setShowNewStage] = useState(false);
  const [newStage, setNewStage] = useState({
    name: '',
    handledBy: 'AI',
    maxScore: 100,
    passingScore: 70,
    skills: []
  });
  const [skillInput, setSkillInput] = useState('');

  const handleSkillAdd = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      setNewStage(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setNewStage(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSaveStage = () => {
    setStages(prev => [...prev, { ...newStage, id: prev.length + 1 }]);
    setShowNewStage(false);
    setNewStage({
      name: '',
      handledBy: 'AI',
      maxScore: 100,
      passingScore: 70,
      skills: []
    });
  };

  const handleFinish = () => {
    // Here you would typically save all the stages
    router.push('/jobs');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <div className="flex-1 flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
            ✓
          </div>
          <div className="h-1 flex-1 bg-blue-600"></div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ml-2">
            2
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Stages</h2>
          <button
            onClick={() => setShowNewStage(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            New Stage
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Handled By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assessment Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Max Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Passing Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sample Questions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stages.map((stage) => (
                <tr key={stage.id}>
                  <td className="px-6 py-4 text-sm text-blue-600">{stage.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{stage.handledBy}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{stage.assessmentType}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{stage.maxScore}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{stage.passingScore}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{stage.job}</td>
                  <td className="px-6 py-4 text-sm text-blue-600">
                    <button className="hover:underline">See Sample</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleFinish}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Finish
          </button>
        </div>
      </div>

      {/* New Stage Modal */}
      {showNewStage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Stage</h2>
              <button
                onClick={() => setShowNewStage(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newStage.name}
                  onChange={(e) => setNewStage({ ...newStage, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Java Assessment"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Handled by
                </label>
                <select
                  value={newStage.handledBy}
                  onChange={(e) => setNewStage({ ...newStage, handledBy: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="AI">AI</option>
                  <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Score
                </label>
                <input
                  type="number"
                  value={newStage.maxScore}
                  onChange={(e) => setNewStage({ ...newStage, maxScore: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passing Criteria
                </label>
                <input
                  type="number"
                  value={newStage.passingScore}
                  onChange={(e) => setNewStage({ ...newStage, passingScore: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills
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
                  {newStage.skills.map((skill, index) => (
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
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowNewStage(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 