'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jobsData } from './../../../data/mockData';

export default function JobDetails({ params }) {
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    skills: [],
    experience: '',
    jobDescription: ''
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

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Java Developer</h1>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Update
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Stats Section */}
        <div className="flex space-x-4 md:col-span-3">
          <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-4xl font-bold mb-2">36</div>
            <div className="text-gray-600">Total no Candidates</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-4xl font-bold mb-2">60</div>
            <div className="text-gray-600">Avg Score</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-4xl font-bold mb-2">10</div>
            <div className="text-gray-600">no of Considering Candidates</div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.skills.map((skill, index) => (
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <input
              type="number"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
            <textarea
              value={formData.jobDescription}
              onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Stages Section */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Stages</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handled By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passing Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sample Questions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Technical Assessment</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Online Assessment</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100</td>
                  <td className="px-6 py-4 text-sm text-gray-500">70</td>
                  <td className="px-6 py-4 text-sm text-blue-600">See Sample</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Coding Challenge</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Online Coding Test</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100</td>
                  <td className="px-6 py-4 text-sm text-gray-500">70</td>
                  <td className="px-6 py-4 text-sm text-blue-600">See Sample</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Behavioral & Communication</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI</td>
                  <td className="px-6 py-4 text-sm text-gray-500">AI Evaluation</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100</td>
                  <td className="px-6 py-4 text-sm text-gray-500">70</td>
                  <td className="px-6 py-4 text-sm text-blue-600">See Sample</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Managerial Technical Round</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Hiring Manager</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Live Interview</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100</td>
                  <td className="px-6 py-4 text-sm text-gray-500">70</td>
                  <td className="px-6 py-4 text-sm text-blue-600">See Sample</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Managerial HR Round</td>
                  <td className="px-6 py-4 text-sm text-gray-500">HR Team</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Live Discussion</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100</td>
                  <td className="px-6 py-4 text-sm text-gray-500">70</td>
                  <td className="px-6 py-4 text-sm text-blue-600">See Sample</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Candidates Section */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Candidates</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">John Doe</td>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Technical Assessment</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Considering</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Jane Smith</td>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Coding Challenge</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Selected</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Alice Johnson</td>
                  <td className="px-6 py-4 text-sm text-blue-600">Managerial Technical Round</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Rejected</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Bob Williams</td>
                  <td className="px-6 py-4 text-sm text-blue-600">AI Behavioral & Communication</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Considering</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-blue-600">Charlie Brown</td>
                  <td className="px-6 py-4 text-sm text-blue-600">Managerial HR Round</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Selected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 