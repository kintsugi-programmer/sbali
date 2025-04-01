
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export const products = [

      {
        title: "Persisst Lab | HCD | IIIT-Delhi",
        link: "https://persisst.iiitd.edu.in/",
        thumbnail:
          "/proj/persisst1.png",
      },
      {
        title: "Top CA Firms in Pune | Chartered Accountants and Association | C.S. Bhatiya & Associates ",
        link: "https://csbhatiya.com/",
        thumbnail:
        "/proj/csb2.png",
    },{
      title: "कर्मOS | Distraction-Free LMS Platform ",
      link: "https://karmos.vercel.app/",
      thumbnail:
        "/proj/karmos1.png",
    },
      {
        title: "LifeLore | A Wisdom Social Network3",
        link: "https://lifelore.vercel.app/",
        thumbnail:
          "/proj/lore1.png",
      },{
        title: "1Px Descon 2025 | HCD | CDNM | IIIT-Delhi",
        link: "https://1pxdesignconf.iiitd.edu.in/",
        thumbnail:
          "/proj/1px1.png",
      },
      {
        title: "SBali | Portfolio v2",
        link: "https://lifelore.vercel.app/",
        thumbnail:
          "/proj/sbali.jpg",
      },
      {
        title: "IIIT Delhi's HCD Dept. Website",
        link: "https://hcd.iiitd.ac.in/",
        thumbnail:
          "/proj/hcd.webp",
      },
      {
        title: "Debian Scripts",
        link: "https://github.com/kintsugi-programmer/LinuxScripts",
        thumbnail:
          "/proj/linuxscript.png",
      },
      {
        title: "Qalakriti's MySQL Advanced Database Management",
        link: "https://github.com/kintsugi-programmer/Qalakriti-Ecommerce-DBMS",
        thumbnail:
          "/proj/Qala3.jpg",
      },
      {
        title: "QalaKriti E-Commerce Platform Backend",
        link: "https://github.com/kintsugi-programmer/Qalakriti-Ecommerce-DBMS",
        thumbnail:
        "/proj/Qala1.png",
    },{
      title: "DecoyNet : Lo-Fi Honeypots",
      link: "https://github.com/kintsugi-programmer/DecoyNet?tab=readme-ov-file#breachbot",
      thumbnail:
        "/proj/breacher.png",
    },  
  {
      title: "Legacy Portfolio - balinux v1",
      link: "https://kintsugi-programmer.github.io/",
      thumbnail:
        "/proj/balinux.png",
    },
    {
      title: "Snake Game",
      link: "https://kintsugi-programmer.github.io/Snake-Game/",
      thumbnail:
        "/proj/snake.png",
    },{
      title: "1Px Descon 2025 | Rough",
      link: "https://1pixel.vercel.app/",
      thumbnail:
        "/proj/1pxold1.png",
    }, {
        title: "Design Summer School 2025 | IIIT Delhi",
        link: "https://dss2025.iiitd.edu.in/",
        thumbnail:
          "/proj/dss1.png",
      },
      {
        title: "DigitalDrz | Exclusive catalog of world-class UI/UX components for Clients",
        link: "https://dss2025.iiitd.edu.in/",
        thumbnail:
          "/proj/drz1.png",
      },
        
];


const MobilePort = () => {
    return (<>
      <div className="max-w-7xl relative mx-auto pt-20 md:pt-40 px-4 w-full  left-0 top-0">
         <Image
                src="/studio/2.png"
                alt="Developer Illustration"
                width={700}
                height={600}
                className=""
              />
      <h1 className="text-2xl md:text-7xl font-bold text-green">
        Kintsugi <br /> development studio
      </h1>
      <p className="max-w-4xl text-base md:text-xl mt-8 dark:text-neutral-200">
      As a passionate web developer with 2+ years of experience, I specialize in creating innovative, scalable, and responsive production-optimized web solutions.
      I thrive on delivering high-quality, user-focused web applications that drive measurable results.
      </p>
    </div>
      <div className="h-auto py-10 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-transparent border border-green-500 text-green-500 rounded-lg overflow-hidden font-bold transform hover:-translate-y-1 transition duration-400"
            >
              <Link href={product.link} className="block group-hover:shadow-2xl">
                <div className="w-full h-56 relative">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Link>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black pointer-events-none"></div>
              <h2 className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 text-green-500">
                {product.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
export default MobilePort;
