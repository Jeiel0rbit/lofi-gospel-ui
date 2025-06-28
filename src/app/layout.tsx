import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import LegalModalHandler from '@/components/legal-modal-handler';

export const metadata: Metadata = {
  title: 'LoFi Gospel',
  description: 'Sua rádio gospel 24/7 no Discord. Mergulhe em um ambiente de paz com louvores e pregações que tocam a alma.',
  keywords: ['LoFi Gospel', 'rádio gospel', 'música gospel', 'bot discord', 'louvores', 'pregações', 'música relaxante'],
  openGraph: {
    title: 'LoFi Gospel - Sua Rádio Gospel 24/7 no Discord',
    description: 'Mergulhe em um ambiente de paz com louvores e pregações que tocam a alma. A qualquer hora, em qualquer lugar.',
    siteName: 'LoFi Gospel',
    images: [
      {
        url: 'https://i.imgur.com/mzAuGU2.png',
        width: 680,
        height: 240,
        alt: 'Banner LoFi Gospel',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoFi Gospel - Sua Rádio Gospel 24/7 no Discord',
    description: 'Mergulhe em um ambiente de paz com louvores e pregações que tocam a alma.',
    images: ['https://i.imgur.com/mzAuGU2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <LegalModalHandler />
      </body>
    </html>
  );
}
