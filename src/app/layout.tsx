import React from 'react';
import { Metadata } from 'next'
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'caberTek',
  colorScheme: 'dark',
  description: 'Web Development Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#1A202C" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}