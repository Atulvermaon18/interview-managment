'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jobsData } from './../../../data/mockData';

const summaryData = {
  totalApplications: 156,
  qualifiedCandidates: 48,
  averageScore: 76.4,
  timeToFill: '14d',
  locations: [
    { name: 'San Francisco, CA', count: 75 },
    { name: 'New York, NY', count: 45 },
    { name: 'Austin, TX', count: 36 },
  ],
  recentCandidates: [
    {
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      experience: '5 years experience',
      status: 'Qualified',
      statusColor: 'bg-green-100 text-green-800',
      score: '92%'
    },
    {
      name: 'Michael Kim',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      experience: '3 years experience',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-800',
      score: '78%'
    },
    {
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      experience: '4 years experience',
      status: 'New',
      statusColor: 'bg-gray-100 text-gray-800',
      score: '85%'
    },
  ]
};

const candidatesData = [
  {
    name: 'Sarah Chen',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'Qualified',
    statusColor: 'bg-green-100 text-green-800',
    source: 'LinkedIn',
    matchScore: 92,
    resume: '#',
    resumeIcon: (
      <svg className="w-5 h-5 inline-block mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1v-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h4" /></svg>
    )
  },
  {
    name: 'Michael Kim',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800',
    source: 'HRMS',
    matchScore: 78,
    resume: '#',
    resumeIcon: (
      <svg className="w-5 h-5 inline-block mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1v-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h4" /></svg>
    )
  },
  {
    name: 'Emma Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    status: 'Rejected',
    statusColor: 'bg-red-100 text-red-800',
    source: 'Job Board',
    matchScore: 65,
    resume: '#',
    resumeIcon: (
      <svg className="w-5 h-5 inline-block mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1v-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h4" /></svg>
    )
  },
];

const assessmentsData = [
  {
    name: 'Technical Assessment',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Jest'],
    handledBy: 'AI',
    passingScore: 70,
    maxScore: 100,
  },
  {
    name: 'Design Challenge',
    skills: ['Figma', 'UI Design', 'Prototyping'],
    handledBy: 'Human',
    passingScore: 80,
    maxScore: 100,
  },
  {
    name: 'System Design',
    skills: ['Architecture', 'Scalability', 'Performance', 'Security', 'API Design', 'Database'],
    handledBy: 'AI',
    passingScore: 75,
    maxScore: 100,
  },
];

export default function JobDetails({ params }) {
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    skills: [],
    experience: '',
    jobDescription: ''
  });
  const [activeTab, setActiveTab] = useState('Summary');
  // Details tab state
  const [detailsForm, setDetailsForm] = useState({
    title: 'Senior Product Designer at Tech Innovations Inc.',
    skills: ['UI Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems'],
    skillInput: '',
    experience: '5-7 years of product design experience',
    description:
      'We are seeking a talented Senior Product Designer to join our innovative team. The ideal candidate will have a strong background in creating user-centered design solutions, collaborating with cross-functional teams, and driving product strategy through exceptional design thinking.'
  });

  useEffect(() => {
    const jobDetails = jobsData.find(j => j.id === parseInt(params.id));
    if (jobDetails) {
      setJob(jobDetails);
      setFormData({
        name: jobDetails.title || '',
        skills: ['Java', 'Spring boot', 'Hibernate', 'React JS', 'Type Script', 'Salesforce'],
        experience: '8',
        jobDescription: `Develop and maintain scalable full-stack applications using Java, focusing on Java 8+ features such as Streams API, CompletableFuture, and functional programming paradigms.
Design and implement robust backend services using Spring Boot, Spring MVC, Spring Security, and Spring Data JPA.
Work with Hibernate for efficient ORM (Object-Relational Mapping) and performance tuning.`
      });
    }
  }, [params.id]);

  const handleSkillRemove = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log('Updated data:', formData);
    router.push('/jobs');
  };

  const handleAddSkill = () => {
    const skill = detailsForm.skillInput.trim();
    if (skill && !detailsForm.skills.includes(skill)) {
      setDetailsForm((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
        skillInput: ''
      }));
    }
  };

  const handleRemoveSkill = (skill) => {
    setDetailsForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill)
    }));
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <span className="hover:underline cursor-pointer text-gray-500" onClick={() => window.history.back()}>Jobs</span>
          </li>
          <li>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="text-gray-900 font-medium">{job.title}</li>
        </ol>
      </nav>

      {/* Job Title */}
      <h1 className="text-3xl font-semibold border-b border-blue-200 pb-2 mb-4">{job.title}</h1>

      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 mb-6">
        {['Summary', 'Candidates', 'Assessments', 'Details'].map(tab => (
          <button
            key={tab}
            className={`pb-2 px-1 text-sm font-medium ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'Summary' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 text-center border">
              <div className="text-3xl font-bold mb-1">{summaryData.totalApplications}</div>
              <div className="text-gray-600 text-sm">Total Applications</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border">
              <div className="text-3xl font-bold mb-1">{summaryData.qualifiedCandidates}</div>
              <div className="text-gray-600 text-sm">Qualified Candidates</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border">
              <div className="text-3xl font-bold mb-1">{summaryData.averageScore}</div>
              <div className="text-gray-600 text-sm">Average Score</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border">
              <div className="text-3xl font-bold mb-1">{summaryData.timeToFill}</div>
              <div className="text-gray-600 text-sm">Time to Fill</div>
            </div>
          </div>

          {/* Top Applicant Locations */}
          <div className="bg-white rounded-lg p-6 border mb-6">
            <div className="font-medium mb-4">Top Applicant Locations</div>
            {summaryData.locations.map((loc, idx) => {
              const max = summaryData.locations[0].count;
              return (
                <div key={loc.name} className="flex items-center mb-3 last:mb-0">
                  <div className="w-40 text-sm font-semibold text-gray-700">{loc.name}</div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 rounded bg-gray-200">
                      <div
                        className="h-2 rounded bg-blue-600"
                        style={{ width: `${(loc.count / max) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm text-gray-500">{loc.count}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Candidates */}
          <div className="bg-white rounded-lg p-6 border">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium">Recent Candidates</div>
              <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
            </div>
            <div className="space-y-4">
              {summaryData.recentCandidates.map((c, idx) => (
                <div key={c.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.experience}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${c.statusColor}`}>{c.status}</span>
                    <span className="text-sm font-semibold text-gray-700">{c.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'Candidates' && (
        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="flex-1 flex items-center">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm bg-gray-50"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21l-2-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 12h12M9 18h6" />
                </svg>
                Filter
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Candidate
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg border overflow-x-auto">
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
                {candidatesData.map((c) => (
                  <tr key={c.name}>
                    <td className="px-6 py-4 flex items-center gap-3 font-medium text-gray-900">
                      <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                      {c.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${c.statusColor}`}>{c.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">{c.source}</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">{c.matchScore}</td>
                    <td className="px-6 py-4">
                      <a href={c.resume} className="text-blue-600 flex items-center hover:underline">
                        {c.resumeIcon}
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'Assessments' && (
        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="flex-1 flex items-center">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search assessments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm bg-gray-50"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21l-2-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 12h12M9 18h6" />
                </svg>
                Filter
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Assessment
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg border overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Skills</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Handled By</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Passing Score</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Max Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assessmentsData.map((a) => {
                  const maxSkills = 3;
                  const showMore = a.skills.length > maxSkills;
                  return (
                    <tr key={a.name}>
                      <td className="px-6 py-4 font-medium text-gray-900">{a.name}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {a.skills.slice(0, maxSkills).map((skill) => (
                            <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">{skill}</span>
                          ))}
                          {showMore && (
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">+{a.skills.length - maxSkills} more</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium`}>{a.handledBy}</span>
                      </td>
                      <td className="px-6 py-4">{a.passingScore}</td>
                      <td className="px-6 py-4">{a.maxScore}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'Details' && (
        <div className="mt-6 ">
          <div className="bg-white rounded-lg border p-8   mx-auto relative">
          <div className="flex flex-row justify-end  mb-4 gap-2">
                <button className=" right-8 top-8 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700">Update Job Details</button>

            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                value={detailsForm.title}
                readOnly
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Add skill"
                  value={detailsForm.skillInput}
                  onChange={e => setDetailsForm(prev => ({ ...prev, skillInput: e.target.value }))}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                />
                <button type="button" onClick={handleAddSkill} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">+ Add</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {detailsForm.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium flex items-center">
                    {skill}
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-gray-400 hover:text-red-500">&times;</button>
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required</label>
              <input
                type="text"
                value={detailsForm.experience}
                onChange={e => setDetailsForm(prev => ({ ...prev, experience: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
              <textarea
                value={detailsForm.description}
                onChange={e => setDetailsForm(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 