'use client';

import React from 'react';

const SectionQuestionsModal = ({ isOpen, onClose, section }) => {
  // Sample questions data - in a real app, this would come from an API
  const sampleQuestions = {
    'Java Basics': [
      {
        question: 'What is the default value of a boolean in Java?',
        options: ['true', 'false', 'null', '0'],
        correctAnswer: 'false'
      },
      {
        question: 'Which keyword is used to define a constant in Java?',
        options: ['const', 'final', 'static', 'constant'],
        correctAnswer: 'final'
      },
      {
        question: 'Which data type is used to store a single character in Java?',
        options: ['String', 'char', 'byte-char', 'byte'],
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
    ],
    'Object-Oriented Programming (OOP)': [
      {
        question: 'Which concept in Java allows multiple methods with the same name but different parameters?',
        options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Overloading'],
        correctAnswer: 'Overloading'
      },
      {
        question: 'What is the super class of all Java classes?',
        options: ['Class', 'Object', 'Super', 'Parent'],
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
        options: ['parent()', 'super()', 'extend()', 'this()'],
        correctAnswer: 'super()'
      }
    ],
    'Exception Handling': [
      {
        question: 'Which keyword is used to handle exceptions in Java?',
        options: ['throw', 'throws', 'try', 'catch'],
        correctAnswer: 'try'
      },
      {
        question: 'What is the superclass of all exceptions?',
        options: ['Error', 'Exception', 'Throwable', 'RuntimeException'],
        correctAnswer: 'Throwable'
      },
      {
        question: 'Which block is always executed in exception handling?',
        options: ['try', 'catch', 'finally', 'throw'],
        correctAnswer: 'finally'
      },
      {
        question: 'What happens if an exception is not caught?',
        options: ['Program continues normally', 'Compilation fails', 'Program terminates', 'JVM ignores it'],
        correctAnswer: 'Program terminates'
      },
      {
        question: 'How do you create a custom exception?',
        options: ['Extending Exception', 'Implementing Throwable', 'Extending Error', 'Extending RuntimeException'],
        correctAnswer: 'Extending Exception'
      }
    ]
  };

  if (!isOpen || !section) return null;

  const questions = sampleQuestions[section.section] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{section.skill} MCQs</h2>
            <p className="text-sm text-gray-500">Section: {section.section}</p>
          </div>
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
          <div className="space-y-8">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900">Question {qIndex + 1}</h3>
                  <p className="mt-1 text-gray-700">{q.question}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Options</h4>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-start">
                          <span className="text-gray-500 mr-2">{String.fromCharCode(97 + optIndex)})</span>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Correct Answer</h4>
                    <p className="text-gray-700">{q.correctAnswer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionQuestionsModal; 