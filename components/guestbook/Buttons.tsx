'use client';

import { signIn, signOut } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export function SignOut() {
  return (
    <button
      className="text-xs text-red-700 dark:text-red-400 mt-2 mb-6"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('github')}
    >
      <FaGithub/>
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}