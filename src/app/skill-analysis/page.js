'use client';
import { useRouter } from 'next/navigation';

const skillsData = [
  {
    id: 1,
    name: 'Java Development',
    category: 'Technical',
    totalCandidates: 45,
    avgScore: 72,
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    name: 'React.js',
    category: 'Frontend',
    totalCandidates: 38,
    avgScore: 68,
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    name: 'System Design',
    category: 'Architecture',
    totalCandidates: 25,
    avgScore: 75,
    lastUpdated: '2024-03-13'
  },
  {
    id: 4,
    name: 'Spring Boot',
    category: 'Backend',
    totalCandidates: 42,
    avgScore: 70,
    lastUpdated: '2024-03-12'
  },
  {
    id: 5,
    name: 'Communication Skills',
    category: 'Soft Skills',
    totalCandidates: 56,
    avgScore: 82,
    lastUpdated: '2024-03-11'
  }
];

const SkillAnalysisPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 px-6 pt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Skill Analysis</h1>
        <button 
          onClick={() => router.push('/skill-analysis/new')}
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
          New Analysis
        </button>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#A4BE7B]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Skill Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Total Candidates
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Avg Score
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {skillsData.map((skill) => (
                  <tr
                    key={skill.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/skill-analysis/${skill.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-blue-600">
                        {skill.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {skill.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {skill.totalCandidates}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          skill.avgScore >= 75 ? 'text-green-600' :
                          skill.avgScore >= 60 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {skill.avgScore}%
                        </span>
                        <div className="ml-2 w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-full rounded-full ${
                              skill.avgScore >= 75 ? 'bg-green-500' :
                              skill.avgScore >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${skill.avgScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(skill.lastUpdated).toLocaleDateString()}
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

export default SkillAnalysisPage; 