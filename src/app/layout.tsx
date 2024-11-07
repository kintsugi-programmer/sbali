import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Import Space Grotesk from Google Fonts

import "./globals.css";
import { Nav } from "@/components/Nav";

// Configure Space Grotesk font with Latin subset
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kintsugi-programmer",
  description: "Siddhant Bali's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
      </head>
      <body className={`${spaceGrotesk.className} text-green-400 min-h-screen bg-black/[0.96] antialiased relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5`}>
      <div className="relative w-full h-full flex items-center">
          {/* Responsive Navbar */}
          <div className="w-full px-5 py-3 md:px-10 md:py-5 flex justify-between items-center">
            {/* Add more divbar content here */}
            <Nav />
          </div>
        </div>
          {children}

      </body>
    </html>
  );
}
