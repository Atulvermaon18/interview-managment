'use client';
import { useRouter } from 'next/navigation';

const stagesData = [
  {
    id: 1,
    name: 'Initial Screening',
    status: 'Active',
    createdOn: '2024-03-15',
    candidates: 12,
    completed: 8,
    avgScore: 85
  },
  {
    id: 2,
    name: 'Technical Assessment',
    status: 'Active',
    createdOn: '2024-03-15',
    candidates: 8,
    completed: 5,
    avgScore: 78
  },
  {
    id: 3,
    name: 'HR Interview',
    status: 'Active',
    createdOn: '2024-03-15',
    candidates: 5,
    completed: 3,
    avgScore: 92
  }
];

export default function InterviewStagesPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
          <ol className="list-reset flex">
            <li>
              <span className="hover:underline cursor-pointer text-gray-500">Dashboard</span>
            </li>
            <li>
              <span className="mx-2">&gt;</span>
            </li>
            <li className="text-gray-900 font-medium">Interview Stages</li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-900">Interview Stages</h1>
        <button 
          onClick={() => router.push('/interview-stages/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center font-medium"
        >
          <span className="mr-2 text-lg">+</span> New Stage
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 px-6 mb-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search stages..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm bg-gray-50"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21l-2-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 12h12M9 18h6" />
          </svg>
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="px-6">
        <div className="bg-white rounded-lg border border-blue-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created On</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Candidates</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Completed</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Avg Score</th>
                  <th className="px-3 py-3 text-right text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stagesData.map((stage) => (
                  <tr key={stage.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/interview-stages/${stage.id}`)}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{stage.name}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md ${stage.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{stage.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{stage.createdOn}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stage.candidates}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stage.completed}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stage.avgScore}%</td>
                    <td className="px-3 py-4 text-right">
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="6" r="1.5" />
                          <circle cx="12" cy="12" r="1.5" />
                          <circle cx="12" cy="18" r="1.5" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination and Summary */}
      <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500">
        <div>Showing 1 – {stagesData.length} of {stagesData.length}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-gray-100 text-gray-400" disabled>Prev</button>
          <button className="px-3 py-1 rounded bg-gray-100 text-gray-400" disabled>Next</button>
        </div>
      </div>
    </div>
  );
} 