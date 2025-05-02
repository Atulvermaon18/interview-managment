export default function Loading() {
  return (
    <div className="flex flex-col h-full animate-pulse">
      <div className="flex justify-between items-center mb-6 px-6 pt-6">
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
        <div className="flex items-center space-x-4">
          <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="min-w-full">
            <div className="bg-gray-200 h-12"></div>
            <div className="divide-y divide-gray-200">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex">
                  <div className="w-1/4 py-4 px-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="w-1/4 py-4 px-6">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="w-1/4 py-4 px-6">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="w-1/4 py-4 px-6">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 