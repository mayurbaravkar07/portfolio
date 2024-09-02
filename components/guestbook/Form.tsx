'use client';

import { useRef, useState } from 'react';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createGuestbookEntry = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: inputEl.current?.value,
        }),
      });

      if (inputEl.current) {
        inputEl.current.value = '';
      }
      formRef.current?.reset();
    } catch (error) {
      console.error('An unexpected error happened:', error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <form
      className="relative max-w-[500px]"
      ref={formRef}
      onSubmit={createGuestbookEntry}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        name="entry"
        type="text"
        required
        ref={inputEl}
        disabled={isSubmitting}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      {isSubmitting ? (
        <div className='flex'>
          <span className="loader">Loading</span>
          <div className='flex justify-between ml-1 mt-4 w-4'>
            <div className='h-1 w-1 bg-neutral-100 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-1 w-1 bg-neutral-100 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-1 w-1 bg-neutral-100 rounded-full animate-bounce'></div>
          </div>
        </div>
      ) : (
        <SubmitButton />
      )}
    </form>
  );
}

function SubmitButton() {
  return (
    <button
      className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
      type="submit"
    >
      Sign
    </button>
  );
}

