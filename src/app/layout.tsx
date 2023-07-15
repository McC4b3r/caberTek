import React from 'react';
import { Metadata } from 'next'
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'caberTek',
  colorScheme: 'dark',
  description: 'Web Development Solutions',
  icons: {
    icon: 'icon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}