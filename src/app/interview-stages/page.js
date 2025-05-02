'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const stagesData = [
  {
    id: 1,
    name: 'AI Technical Assessment',
    handledBy: 'AI',
    assessmentType: 'Online Assessment',
    maxScore: 100,
    passingScore: 70,
    job: 'Senior Java Developer',
    sampleQuestions: true
  },
  {
    id: 2,
    name: 'AI Coding Challenge',
    handledBy: 'AI',
    assessmentType: 'Online Coding Test',
    maxScore: 100,
    passingScore: 70,
    job: 'Senior Java Developer',
    sampleQuestions: true
  },
  {
    id: 3,
    name: 'AI Behavioral & Communication',
    handledBy: 'AI',
    assessmentType: 'AI Evaluation',
    maxScore: 100,
    passingScore: 70,
    job: 'Product Manager',
    sampleQuestions: true
  },
  {
    id: 4,
    name: 'Managerial Technical Round',
    handledBy: 'Hiring Manager',
    assessmentType: 'Live Interview',
    maxScore: 100,
    passingScore: 70,
    job: 'Senior Java Developer',
    sampleQuestions: true
  }
];

const InterviewStagesPage = () => {
  const router = useRouter();
  const [showNewStageModal, setShowNewStageModal] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 px-6 pt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Interview Stages</h1>
        <button
          onClick={() => router.push('/interview-stages/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          New
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#A4BE7B]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Stage</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Handled By</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Assessment Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Max Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Passing Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Job</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">Sample Questions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stagesData.map((stage) => (
                  <tr
                    key={stage.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/interview-stages/${stage.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-blue-600">
                        {stage.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{stage.handledBy}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{stage.assessmentType}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{stage.maxScore}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{stage.passingScore}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-blue-600 hover:underline">
                        {stage.job}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm text-blue-600 hover:underline">
                        See Sample
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewStagesPage; 