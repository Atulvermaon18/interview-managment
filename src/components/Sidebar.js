'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [ 
    { name: 'Home', path: '/home' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Skill Analysis', path: '/skill-analysis' },
    { name: 'Interview Stages', path: '/interview-stages' },
    { name: 'Assessment', path: '/assessment' },
    { name: 'Candidates', path: '/candidates' },
    { name: 'Employess', path: '/employees' },
  ];

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                pathname === item.path
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 