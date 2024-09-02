import NowPlaying from '@/components/NowPlaying';
import Link from 'next/link';

const ExternalLink = ({ href, children }: {href: string, children: any}) => (
  <a
    className="text-gray-400 hover:text-gray-700 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full my-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            About
          </Link>
          {/* <Link
            href="/dashboard"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Dashboard
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/mayurbaravkar07">GitHub</ExternalLink>
        
         <Link
            href="/dashboard"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          {/* <Link
            href="/guestbook"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Snippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-400 hover:text-gray-700 transition"
          >
            Tweets
          </Link> */}
        </div>
      </div>
      <p>Made with ❤️ by Mayur Baravkar</p>
    </footer>
  );
}
