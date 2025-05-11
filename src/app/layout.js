'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import { AuthProvider } from './../contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isHomePage = pathname === '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 h-full`}
      >
        <AuthProvider>
          {isLoginPage || isHomePage ? (
            <main>{children}</main>
          ) : (
            <div className="flex h-screen bg-gray-50">
              {/* Mobile Sidebar Overlay */}
              {isSidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                  onClick={() => setIsSidebarOpen(false)}
                />
              )}
              
              {/* Sidebar */}
              <div 
                className={`fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-all duration-300 ease-in-out ${
                  isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
              >
                <div className="h-full bg-white border-r border-gray-200 shadow-lg">
                  <Sidebar />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col w-full">
                {/* Header with glass effect */}
                <div 
                  className={`sticky top-0 z-30 transition-all duration-300 ${
                    isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
                  }`}
                >
                  <Header 
                    onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                    isScrolled={isScrolled}
                  />
                </div>

                {/* Main Content Area */}
                <main className="flex-1 overflow-auto">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {children}
                  </div>
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 py-4">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Interview Management. All rights reserved.
                      </p>
                      <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
