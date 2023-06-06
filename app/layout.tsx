import './globals.css';
import { Roboto } from 'next/font/google';
import Footer from './components/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
