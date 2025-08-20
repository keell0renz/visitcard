'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-3 bg-white text-black rounded-lg font-medium
        hover:bg-neutral-200 transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          Verifying...
        </>
      ) : (
        'Access Blog'
      )}
    </button>
  );
}

interface BlogAuthFormProps {
  action: (formData: FormData) => Promise<{ error?: string } | void>;
}

export default function BlogAuthForm({ action }: BlogAuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/blog';

  const handleAction = async (formData: FormData) => {
    setError('');
    const result = await action(formData);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <form action={handleAction} className="space-y-4">
      <input type="hidden" name="redirect" value={redirectTo} />
      
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg
            focus:ring-2 focus:ring-white focus:border-transparent
            transition-all duration-200 text-white placeholder-neutral-500"
          autoFocus
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2
            text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
        </button>
      </div>

      {error && (
        <div className="text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
