import "./globals.css";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-zinc-800 text-white scrollbar-hide">
        <Navbar />
        <main className="mx-auto mt-4 w-full rounded-md bg-zinc-300 p-4 text-black shadow-md shadow-zinc-600 md:max-w-[80%]">
          {children}
        </main>
      </body>
    </html>
  );
}
