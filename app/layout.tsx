// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/store/provider';
import { ThemeProvider } from "@/components/sections/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

// Add metadata for SEO
export const metadata = {
  title: 'Sawariya Pizza',
  description: 'Order delicious pizza and food online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ReduxProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}