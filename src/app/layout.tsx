import React from 'react';
import { Metadata } from 'next'
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'caberTek',
  colorScheme: 'dark',
  description: 'Web Development Solutions',
  icons: {
    icon: 'icon.svg'
  },
  openGraph: {
    title: 'caberTek',
    description: 'Modern Web Solutions',
    url: 'https://cabertek.com',
    siteName: 'caberTek.com',
    images: [
      {
        url: 'https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/30f8fa03-3c6e-4269-7dae-201aad69d400/public',
        width: 800,
        height: 450,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
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