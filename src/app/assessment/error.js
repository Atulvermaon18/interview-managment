'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">{error.message || 'An error occurred while loading the assessments.'}</p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 