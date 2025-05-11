'use client';
import Image from 'next/image';
import { useState } from 'react';

const candidates = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'Qualified',
    source: 'LinkedIn',
    matchScore: 92,
    resume: '#',
  },
  {
    id: 2,
    name: 'Michael Kim',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'In Progress',
    source: 'HRMS',
    matchScore: 78,
    resume: '#',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    status: 'Rejected',
    source: 'Job Board',
    matchScore: 65,
    resume: '#',
  },
];

const statusStyles = {
  Qualified: 'bg-green-100 text-green-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Rejected: 'bg-red-100 text-red-800',
};

export default function CandidatesPage() {
  const [search, setSearch] = useState('');

  const filteredCandidates = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-6 pt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Candidates</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 mr-2">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 12h12M9 18h6" />
            </svg>
            Filter
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Candidate
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 mb-2">
        <input
          type="text"
          placeholder="Search candidates..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm bg-gray-50"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg fill=\'none\' stroke=\'gray\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Ccircle cx=\'11\' cy=\'11\' r=\'8\'/%3E%3Cpath d=\'M21 21l-2-2\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: '10px center' }}
        />
      </div>

      {/* Table */}
      <div className="px-6">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Source</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Match Score</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Resume</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCandidates.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <Image src={c.avatar} alt={c.name} width={32} height={32} className="rounded-full object-cover" />
                      <span className="font-medium text-gray-900">{c.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md ${statusStyles[c.status]}`}>{c.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <span className="inline-flex px-2 py-1 rounded bg-gray-100">{c.source}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{c.matchScore}</td>
                    <td className="px-6 py-4">
                      <a href={c.resume} className="flex items-center text-blue-600 hover:underline">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2h2z" />
                        </svg>
                        View
                      </a>
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
} 