import { NextResponse } from 'next/server';

export function middleware(request) {
  // Temporarily disabled all authentication checks
  return NextResponse.next();
}

// Limiting middleware to run only on login page for now
export const config = {
  matcher: ['/login']
}; 