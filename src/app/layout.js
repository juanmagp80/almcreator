// src/app/layout.js
import { Caveat, Chewy } from 'next/font/google';
import Head from 'next/head';
import './globals.css';


const chewy = Chewy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-chewy',
});
const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caveat',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chewy.variable} ${caveat.variable}`}>

      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className=" font-chewy bg-gray-50 text-gray-800">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}