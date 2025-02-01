import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Import Space Grotesk from Google Fonts
import { Dock } from "@/components/Dock";
import "./globals.css";
import { Nav } from "@/components/Nav";

// Configure Space Grotesk font with Latin subset
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KintsugiDevStudio",
  description: "Siddhant Bali's Portfolio | IIIT Delhi CSD 2026 Batch",
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
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> */}

      </head>
      <body className={`${spaceGrotesk.className} text-green-400 bg-black/[0.96] antialiased relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5`}>
      <div className="relative w-full h-full flex items-center">
          {/* Responsive Navbar */}
          <div className="w-full px-5 py-3 md:px-10 md:py-5 flex justify-between items-center">
            {/* Add more divbar content here */}
            <Nav />
          </div>
        </div>
          {children}
          <div className="w-full fixed bottom-5 left-0 z-10"><Dock/></div>
          

      </body>
    </html>
  );
}
