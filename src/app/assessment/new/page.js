'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionQuestionsModal from './../../../components/SectionQuestionsModal';

export default function NewAssessment() {
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Communication',
    maxQuestions: '50',
    maxScore: '100',
    passingScore: '70',
    category: '',
    skills: [],
    skillInput: '',
    status: 'Draft'
  });

  const [sections, setSections] = useState([
    { skill: 'Java', section: 'Java Basics', questions: 5, difficulty: 2 },
    { skill: 'Java', section: 'Object-Oriented Programming (OOP)', questions: 5, difficulty: 3 },
    { skill: 'Java', section: 'Exception Handling', questions: 5, difficulty: 4 },
    { skill: 'Java', section: 'Collections Framework', questions: 5, difficulty: 3 },
    { skill: 'Hibernate', section: 'ORM Basics', questions: 5, difficulty: 2 },
    { skill: 'Hibernate', section: 'Hibernate Annotations', questions: 5, difficulty: 3 },
    { skill: 'Hibernate', section: 'Query Language (HQL)', questions: 5, difficulty: 4 },
    { skill: 'Hibernate', section: 'Caching Mechanisms', questions: 5, difficulty: 3 }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    router.push('/assessment');
  };

  const addSkill = () => {
    if (formData.skillInput && !formData.skills.includes(formData.skillInput)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skillInput],
        skillInput: ''
      });
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const getDifficultyStars = (level) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  const handleViewQuestions = (section) => {
    setSelectedSection(section);
    setShowQuestions(true);
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6 px-6 pt-6">
          <h1 className="text-2xl font-semibold text-gray-900">Assessment</h1>
        </div>

        <div className="px-6">
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max No of Question
                  </label>
                  <input
                    type="number"
                    value={formData.maxQuestions}
                    onChange={(e) => setFormData({ ...formData, maxQuestions: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Communication</option>
                    <option>Technical</option>
                    <option>Aptitude</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Score
                  </label>
                  <input
                    type="number"
                    value={formData.maxScore}
                    onChange={(e) => setFormData({ ...formData, maxScore: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select Category</option>
                    <option value="job">Job</option>
                    <option value="skill">Skill Analysis</option>
                    <option value="candidate">Candidate</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passing Score
                  </label>
                  <input
                    type="number"
                    value={formData.passingScore}
                    onChange={(e) => setFormData({ ...formData, passingScore: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={formData.skillInput}
                      onChange={(e) => setFormData({ ...formData, skillInput: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Add a skill"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Assessment Sections</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Skill</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Number of Questions</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difficulty Level</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sample Questions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sections.map((section, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-900">{section.skill}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{section.section}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{section.questions}</td>
                          <td className="px-6 py-4">
                            <span className="text-yellow-500 text-sm">
                              {getDifficultyStars(section.difficulty)}
                            </span>
                            <span className="text-gray-500 text-sm ml-2">
                              ({section.difficulty}/5)
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => handleViewQuestions(section)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              View Questions
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SectionQuestionsModal
        isOpen={showQuestions}
        onClose={() => setShowQuestions(false)}
        section={selectedSection}
      />
    </>
  );
} 