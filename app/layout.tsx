import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "J-N Reinhardt",
  description: "J-N Reinhardt's personal website",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "TypeScript",
    "Portfolio",
    "Personal Website",
  ],
  authors: [
    {
      name: "Jayzumen",
      url: "https://github.com/Jayzumen",
    },
  ],
  creator: "Jayzumen",
};

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-zinc-800 text-white scrollbar-hide`}
      >
        <Navbar />
        <main className="mx-auto mt-4 w-full rounded-md bg-zinc-300 p-4 text-black shadow-md shadow-zinc-600 md:max-w-[80%]">
          {children}
        </main>
      </body>
    </html>
  );
}
