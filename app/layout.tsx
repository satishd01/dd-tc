import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  subsets: ['latin'],
  variable: '--font-poppins', // This will be the CSS variable name
});

export const metadata: Metadata = {
  title: 'Kita',
  description: 'From ‘maybes’ to ‘memories’!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0e3c39]">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
