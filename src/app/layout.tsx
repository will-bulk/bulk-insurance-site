import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bulk Insurance Group | #1 Trucking Insurance for Bulk Haulers',
    template: '%s | Bulk Insurance Group',
  },
  description: 'Bulk Insurance Group is the industry leader in bulk trucking insurance. Serving 10,000+ haulers of grain, feed, fertilizer, aggregate & more. Get a free quote today.',
  keywords: ['trucking insurance', 'bulk hauling insurance', 'hopper bottom insurance', 'commercial trucking insurance', 'cargo insurance', 'fleet insurance'],
  icons: {
    icon: '/big-icon.png',
    apple: '/big-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bulkinsurancegroup.com',
    siteName: 'Bulk Insurance Group',
    title: 'Bulk Insurance Group | #1 Trucking Insurance for Bulk Haulers',
    description: 'Industry leader in bulk trucking insurance. Over 20 years of experience. Trusted by 10,000+ bulk haulers nationwide.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
