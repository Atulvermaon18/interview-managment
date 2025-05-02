'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import { AuthProvider } from './../contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <AuthProvider>
          {isLoginPage || isHomePage ? (
            <main>{children}</main>
          ) : (
            <div className="flex h-screen">
              {/* Mobile Sidebar Overlay */}
              {isSidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
              )}
              
              {/* Sidebar */}
              <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              }`}>
                <Sidebar />
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col w-full">
                <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <main className="flex-1 overflow-auto p-4 lg:p-6">
                  {children}
                </main>
              </div>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
