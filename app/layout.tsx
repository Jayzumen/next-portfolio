import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AnalyticsWrapper } from "./components/analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-gradient-to-b from-sky-900 to-sky-500 text-white min-h-screen'>
        <Navbar />
        <main className='flex max-w-[80%] min-h-[80vh] mx-auto justify-center'>
          {children}
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

