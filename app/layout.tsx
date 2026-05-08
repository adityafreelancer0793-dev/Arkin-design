import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arkin Designs | Luxury Interior Designer in Gurgaon',
  description: 'Premium architecture and interior design studio in Gurgaon offering bespoke turnkey solutions.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
       <body className="bg-[#0a0a0a] text-[#ffffff] selection:bg-[#c5a26a] selection:text-[#000000]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
