import { Rubik } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-rubik'
});

export default function App({
  Component, 
  pageProps: { session, ...pageProps } }: AppProps
  ){
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <main className={`${rubik.variable} font-sans`}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  )
}
