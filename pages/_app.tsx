import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { Rubik } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';

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
