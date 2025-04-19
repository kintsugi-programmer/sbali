import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"; // Import Space Grotesk from Google Fonts
import { Dock } from "@/components/Dock";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Loading  from "./loading";
import { RoundedDrawerNav } from "@/components/Nav2";
import { Suspense } from "react";
import FloatingAIButton from "@/components/ui/Chat";
import DelayedLoader from "@/components/DelayedLoader";
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
      <meta name="viewport" content="width=device-width, initial-scale=0.2"/>

        {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> */}

      </head>
      <body className={`${spaceGrotesk.className} text-green-400 bg-black/[0.96] antialiased relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5`}>
      <Suspense fallback={<Loading />}>
      {/* <div className="relative w-full h-full flex items-center">
        
          <div className="w-full px-5 py-3 md:px-10 md:py-5 flex justify-between items-center">
           
            <Nav />
          </div>
        </div> */}
             <div className="bg-neutral-950">
              <DelayedLoader>
        <RoundedDrawerNav
          links={[
           
            {
              title: "Clients",
              sublinks: [
                {
                  title: "C S Bhatiya & Associates",
                  href: "https://csbhatiya.com/",
                },
                {
                  title: "PERSISST Labs",
                  href: "https://persisst.iiitd.edu.in/",
                },
                {
                  title: "1Px DesCon",
                  href: "https://1pxdesignconf.iiitd.edu.in",
                },
                {
                  title: "HCD Dept. of IIIT Delhi",
                  href: "https://hcd.iiitd.ac.in/",
                },
                {
                  title: "DSS",
                  href: "https://dss2025.iiitd.edu.in/",
                },

              ],
            }, {
              title: "Products",
              sublinks: [
                {
                  title: "DigitalDrz",
                  href: "https://digitaldrz.vercel.app/",
                },
                {
                  title: "LifeLore",
                  href: "https://lifelore.vercel.app/",
                },
                {
                  title: "KarmOS",
                  href: "https://karmos.vercel.app/",
                },
              ],
            },
            {
              title: "Documentations",
              sublinks: [
                {
                  title: "Let's do Design Thinking",
                  href: "https://design-thinking-kds.my.canva.site/",
                },
                {
                  title: "Design research & Development of KintsugiDev.Studio",
                  href: "https://design-thinking-kds.my.canva.site/portfolio",
                },
                {
                  title: "LoFi Honeypots for Web Security",
                  href: "https://github.com/kintsugi-programmer/DecoyNet",
                },
                {
                  title: "Comprehensive Guide to Booting Artix on a UEFI-Enabled Virtual Machine",
                  href: "https://www.linkedin.com/pulse/comprehensive-guide-booting-artix-uefi-enabled-virtual-siddhant-bali-u8jcc/?trackingId=FwpuZSUKR9GDj43eGB0KcQ%3D%3D",
                },
                {
                  title: "Compiling and Installing a Custom Kernel on Arch Linux",
                  href: "https://www.linkedin.com/pulse/compiling-installing-custom-kernel-arch-linux-siddhant-bali-mkh5e/?trackingId=TtGCaVWFRVWrtUEGi4aWlA%3D%3D",
                },
                {
                  title: " PC Emg Toolkit MediCat USB Guide",
                  href: "https://www.linkedin.com/pulse/ultimate-pc-emg-toolkit-kit-medicat-usb-siddhant-bali-efumc/?trackingId=f%2F0YnvjrTJuhAXD%2FRItH7Q%3D%3D",
                },
                {
                  title: "Ani-cli Guide",
                  href: "https://www.linkedin.com/pulse/ani-cli-command-line-interface-anime-enthusiasts-siddhant-bali-13bzc/?trackingId=f%2F0YnvjrTJuhAXD%2FRItH7Q%3D%3D",
                },
                {
                  title: "Tldr CLI Manpage Alternate Guide",
                  href: "https://www.linkedin.com/pulse/tldr-say-goodbye-confusing-man-pages-siddhant-bali-8wedc/?trackingId=f%2F0YnvjrTJuhAXD%2FRItH7Q%3D%3D",
                },
                {
                  title: "Yarnsugi",
                  href: "https://github.com/kintsugi-programmer/Yarnsugi",
                },

                {
                  title: "Blogs",
                  href: "https://kintsugicodes.hashnode.dev/",
                },
              ],
            },
            {
              title: "Connect",
              sublinks: [
                {
                  title: "Github",
                  href: "https://github.com/kintsugi-programmer",
                },
                {
                  title: "Blogs",
                  href: "https://kintsugicodes.hashnode.dev/",
                },
                {
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/in/kintsugi-programmer/",
                },
                {
                  title: "Behance",
                  href: "https://www.behance.net/balibhai",
                },
              ],
            },
            {
              title: "Pricing",
              sublinks: [
                {
                  title: "Startup",
                  href: "#contact",
                },
                {
                  title: "Smalls Business",
                  href: "#contact",
                },
                {
                  title: "Enterprise",
                  href: "#contact",
                },
              ],
            },
            {
              title: "Others",
              sublinks: [
                {
                  title: "About Me",
                  href: "/chat",
                },
                {
                  title: "Projects",
                  href: "#work",
                },
                {
                  title: "Eyes Before Lens",
                  href: "#captures",
                },{
                  title: "Design research & Development of KintsugiDev.Studio",
                  href: "https://design-thinking-kds.my.canva.site/portfolio",
                },
              ],
            },
          ]}
          navBackground="bg-neutral-950"
          bodyBackground=""
        >
        {children}
        <FloatingAIButton/>
        </RoundedDrawerNav>
        </DelayedLoader>
        </div>
          <SpeedInsights />
          <Analytics />
          <div className="w-full fixed bottom-5 left-0 z-10"><Dock/></div>
          
          </Suspense>
      </body>
    </html>
  );
}
