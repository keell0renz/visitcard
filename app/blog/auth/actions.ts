'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BLOG_CONFIG } from 'app/config/blog';

// Create a hash of the password for cookie verification using Web Crypto API
async function createPasswordHash(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'blog-salt-key');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function authenticateBlog(formData: FormData) {
  const password = formData.get('password') as string;
  const redirectTo = (formData.get('redirect') as string) || '/blog';

  if (!password) {
    return { error: 'Password is required' };
  }

  if (password !== BLOG_CONFIG.password) {
    return { error: 'Incorrect password' };
  }

  // Password is correct, set the auth cookie
  const passwordHash = await createPasswordHash(BLOG_CONFIG.password);
  const cookieStore = cookies();

  cookieStore.set(BLOG_CONFIG.sessionKey, passwordHash, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  // Redirect to the intended page
  redirect(redirectTo);
}
