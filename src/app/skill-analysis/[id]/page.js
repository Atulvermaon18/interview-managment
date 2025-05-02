'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

// Mock data for the skill details
const skillDetails = {
  id: 1,
  name: 'Java Development',
  category: 'Technical',
  description: 'Assessment of Java programming skills including core concepts, frameworks, and best practices.',
  totalCandidates: 45,
  avgScore: 72,
  lastUpdated: '2024-03-15',
  scoreDistribution: {
    excellent: 15,
    good: 20,
    average: 7,
    poor: 3
  },
  keyMetrics: [
    { name: 'Core Java', score: 78 },
    { name: 'Spring Framework', score: 75 },
    { name: 'JPA & Hibernate', score: 70 },
    { name: 'Unit Testing', score: 65 },
    { name: 'Design Patterns', score: 72 }
  ],
  recentAssessments: [
    { candidateName: 'John Doe', score: 85, date: '2024-03-15' },
    { candidateName: 'Jane Smith', score: 78, date: '2024-03-14' },
    { candidateName: 'Mike Johnson', score: 65, date: '2024-03-13' },
    { candidateName: 'Sarah Williams', score: 72, date: '2024-03-12' },
    { candidateName: 'Tom Brown', score: 68, date: '2024-03-11' }
  ]
};

const SkillDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const getScoreColor = (score) => {
    if (score >= 75) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (score) => {
    if (score >= 75) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <button
              onClick={() => router.back()}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">{skillDetails.name}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="inline-flex px-2 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-800">
              {skillDetails.category}
            </span>
            <span className="text-gray-500">
              {skillDetails.totalCandidates} Candidates Assessed
            </span>
            <span className="text-gray-500">
              Last Updated: {new Date(skillDetails.lastUpdated).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <nav className="flex space-x-4">
            {['Overview', 'Metrics', 'Recent Assessments'].map((tab) => (
              <button
                key={tab.toLowerCase()}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-3 py-2 text-sm font-medium ${
                  activeTab === tab.toLowerCase()
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overall Score Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Overall Performance</h3>
              <div className="flex items-center mb-4">
                <span className={`text-3xl font-bold ${getScoreColor(skillDetails.avgScore)}`}>
                  {skillDetails.avgScore}%
                </span>
                <div className="ml-4 flex-1">
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div
                      className={`h-full rounded-full ${getProgressBarColor(skillDetails.avgScore)}`}
                      style={{ width: `${skillDetails.avgScore}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Average score across all assessments</p>
            </div>

            {/* Score Distribution Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Score Distribution</h3>
              <div className="space-y-3">
                {Object.entries(skillDetails.scoreDistribution).map(([level, count]) => (
                  <div key={level} className="flex items-center">
                    <span className="w-24 text-sm text-gray-600 capitalize">{level}</span>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full ml-2">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{
                          width: `${(count / skillDetails.totalCandidates) * 100}%`
                        }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
            <div className="space-y-4">
              {skillDetails.keyMetrics.map((metric) => (
                <div key={metric.name} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{metric.name}</span>
                    <span className={`text-sm font-medium ${getScoreColor(metric.score)}`}>
                      {metric.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-full rounded-full ${getProgressBarColor(metric.score)}`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'recent assessments' && (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {skillDetails.recentAssessments.map((assessment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {assessment.candidateName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${getScoreColor(assessment.score)}`}>
                          {assessment.score}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(assessment.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillDetailsPage; 