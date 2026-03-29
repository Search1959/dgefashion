import type {Metadata} from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'DGE Fashion Jewellery | Where Tradition Meets Elegance',
  description: 'Premium fashion jewellery for the modern woman. Shop our exclusive collection of necklaces, earrings, and bridal sets.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#0B0B0B] text-[#F5F5DC]">
        {children}
      </body>
    </html>
  );
}
