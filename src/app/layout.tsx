import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Black-NextJS',
  description: 'Black-NextJS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <h1 className="bg-zinc-400">Navegação</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
