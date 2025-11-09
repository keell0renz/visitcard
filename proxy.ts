import { NextRequest, NextResponse } from 'next/server';
import { BLOG_CONFIG } from 'src/config/blog';

// Create a hash of the password for cookie verification using Web Crypto API
async function createPasswordHash(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'blog-salt-key');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect blog routes
  if (!pathname.startsWith('/blog')) {
    return NextResponse.next();
  }

  // Check if user has valid auth cookie
  const authCookie = request.cookies.get(BLOG_CONFIG.sessionKey);
  const validHash = await createPasswordHash(BLOG_CONFIG.password);

  if (authCookie?.value === validHash) {
    return NextResponse.next();
  }

  // If no valid cookie, redirect to password form
  if (pathname !== '/blog/auth') {
    const url = request.nextUrl.clone();
    url.pathname = '/blog/auth';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:path*',
};
