'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Skill Analysis', path: '/skill-analysis' },
    { name: 'Interview Stages', path: '/interview-stages' },
    { name: 'Assessment', path: '/assessment' },
    { name: 'Candidates', path: '/candidates' },
    { name: 'Employess', path: '/employees' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`block px-4 py-3 text-sm ${
            pathname === item.path
              ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar; 