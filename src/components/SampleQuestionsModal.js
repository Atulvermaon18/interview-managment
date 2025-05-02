import React from 'react';

const SampleQuestionsModal = ({ isOpen, onClose }) => {
  const sampleQuestions = [
    {
      section: 'Java Basics',
      questions: [
        {
          question: 'What is the default value of a boolean in Java?',
          options: ['true', 'false', 'null', '0'],
          correctAnswer: 'false'
        },
        {
          question: 'Which keyword is used to define a constant in Java?',
          options: ['const', 'final', 'static', 'immutable'],
          correctAnswer: 'final'
        },
        {
          question: 'Which data type is used to store a single character in Java?',
          options: ['String', 'char', 'Character', 'byte'],
          correctAnswer: 'char'
        },
        {
          question: 'What will 5/2 return in Java (integer division)?',
          options: ['2.5', '2', '3', '0'],
          correctAnswer: '2'
        },
        {
          question: 'What is the size of an int in Java?',
          options: ['16 bits', '32 bits', '64 bits', 'Depends on OS'],
          correctAnswer: '32 bits'
        }
      ]
    },
    {
      section: 'Object-Oriented Programming (OOP)',
      questions: [
        {
          question: 'Which concept in Java allows multiple methods with the same name but different parameters?',
          options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Overloading'],
          correctAnswer: 'Overloading'
        },
        {
          question: 'What is the super class of all Java classes?',
          options: ['Object', 'Class', 'Super', 'Parent'],
          correctAnswer: 'Object'
        },
        {
          question: 'Which keyword is used to prevent method overriding?',
          options: ['static', 'final', 'abstract', 'super'],
          correctAnswer: 'final'
        },
        {
          question: 'What is the process of hiding implementation details and exposing only necessary parts?',
          options: ['Abstraction', 'Encapsulation', 'Polymorphism', 'Inheritance'],
          correctAnswer: 'Abstraction'
        },
        {
          question: 'What is used to call the parent class constructor?',
          options: ['this()', 'super()', 'parent()', 'base()'],
          correctAnswer: 'super()'
        }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b flex justify-between items-center p-4 z-10">
          <h2 className="text-xl font-semibold text-gray-900">Java MCQs</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {sampleQuestions.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Section {sectionIndex + 1}: {section.section}
              </h3>
              <div className="space-y-6">
                {section.questions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <p className="text-sm text-gray-900 font-medium mb-2">Question</p>
                        <p className="text-sm text-gray-700">{q.question}</p>
                      </div>
                      <div className="col-span-4">
                        <p className="text-sm text-gray-900 font-medium mb-2">Options</p>
                        <div className="space-y-1">
                          {q.options.map((option, optIndex) => (
                            <div key={optIndex} className="text-sm text-gray-700">
                              {String.fromCharCode(97 + optIndex)}) {option}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-900 font-medium mb-2">Correct Answer</p>
                        <p className="text-sm text-gray-700">{q.correctAnswer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleQuestionsModal; 