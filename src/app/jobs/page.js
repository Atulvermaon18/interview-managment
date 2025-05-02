'use client';
import { useRouter } from 'next/navigation';
import { jobsData } from '@/data/mockData';

const JobsPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 px-6 pt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Jobs</h1>
        <button 
          onClick={() => router.push('/jobs/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New
        </button>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#A4BE7B]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Job
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Created on
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobsData.map((job) => (
                  <tr
                    key={job.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/jobs/${job.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-blue-600">
                        {job.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          job.status === 'Open'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {job.createdOn}
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

export default JobsPage; 