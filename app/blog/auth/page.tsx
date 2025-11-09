import { Suspense } from 'react';
import { FaLock } from 'react-icons/fa';
import { authenticateBlog } from './actions';
import BlogAuthForm from './form';

export default function BlogAuthPage() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-full mb-4">
            <FaLock className="w-6 h-6 text-neutral-400" />
          </div>
          <h1 className="text-2xl fading-text mb-2">Protected Content</h1>
          <p className="text-neutral-400">
            This blog is password protected. Please enter the password to
            continue.
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <BlogAuthForm action={authenticateBlog} />
        </Suspense>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-neutral-400 hover:text-neutral-200 transition-colors text-sm underline underline-offset-4"
          >
            Back to main page
          </a>
        </div>
      </div>
    </section>
  );
}
