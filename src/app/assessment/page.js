'use client';
import { useState } from 'react';
import Link from 'next/link';

const assessmentData = [
  {
    id: 1,
    name: 'Java Technical Test',
    category: 'Skill Analysis',
    associatedWith: 'Java',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Spring Boot Coding Challenge',
    category: 'Job',
    associatedWith: 'Senior Java Developer',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Database Knowledge Test',
    category: 'Skill Analysis',
    associatedWith: 'MYSQL',
    status: 'In Progress'
  },
  {
    id: 4,
    name: 'Employee Leadership Survey',
    category: 'Employee Group',
    associatedWith: 'Team Leads',
    status: 'Completed'
  },
  {
    id: 5,
    name: 'Candidate Aptitude Test',
    category: 'Candidate Group',
    associatedWith: 'Software Engineer Batch',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Cloud Computing Proficiency',
    category: 'Employee',
    associatedWith: 'John Doe',
    status: 'In Progress'
  }
];

export default function AssessmentPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAssessments = assessmentData.filter(assessment =>
    assessment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assessment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assessment.associatedWith.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 px-6 pt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Assessment</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute left-3 top-2.5">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <Link
            href="/assessment/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            New Assessment
          </Link>
        </div>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#A4BE7B]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Assessment Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Associated With</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAssessments.map((assessment) => (
                <tr
                  key={assessment.id}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-blue-600">
                      {assessment.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{assessment.category}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-blue-600 hover:underline">
                      {assessment.associatedWith}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                      {assessment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-3">
                      <Link
                        href={`/assessment/${assessment.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                        onClick={() => {
                          // Handle delete
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 