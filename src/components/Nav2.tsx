'use client'

import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
  } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
  
  type LinkType = {
    title: string;
    sublinks: { title: string; href: string }[];
  };
  
export  const RoundedDrawerNav = ({
    children,
    navBackground,
    bodyBackground,
    links,
  }: {
    navBackground: string;
    bodyBackground: string;
    children?: ReactNode;
    links: LinkType[];
  }) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
    const activeSublinks = useMemo(() => {
      if (!hovered) return [];
      const link = links.find((l) => l.title === hovered);
  
      return link ? link.sublinks : [];
    }, [hovered]);
  
    return (
      <>
        <nav
          onMouseLeave={() => setHovered(null)}
          className={`${navBackground} p-4`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Logo />
              <DesktopLinks
                links={links}
                setHovered={setHovered}
                hovered={hovered}
                activeSublinks={activeSublinks}
              />
            </div>
            {/* <button className="hidden rounded-md bg-green-500 px-3 py-1.5 text-sm text-green-50 transition-colors hover:bg-green-600 md:block">
              <span className="font-bold">Get started - </span> no CC required
            </button> */}
<Link href="/contact" scroll={true}>
  <button
    className="md:block hidden
               shadow-[0_0_0_3px_#000000_inset]
               px-6 py-2 bg-transparent
               border border-green-500
               text-green-500
               rounded-lg font-bold
               transform hover:-translate-y-1
               transition duration-400"
  >
    <span className="font-bold">&gt;</span> Reach Out
  </button>
</Link>
            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="mt-0.5 block text-2xl text-green-50 md:hidden"
            >
              <FiMenu />
            </button>
          </div>
          <MobileLinks links={links} open={mobileNavOpen} />
        </nav>
        <motion.main layout className={`${navBackground}   px-4 pb-4`}>
          <div className={`${bodyBackground} rounded-2xl border-2 border-dashed `}>{children}</div>
        </motion.main>
      </>
    );
  };
  
  const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
    <Link href='/'><Image alt='logo' height='42' width='42' src='/studio/2.png'></Image></Link>
    );
  };
  
  const DesktopLinks = ({
    links,
    setHovered,
    hovered,
    activeSublinks,
  }: {
    links: LinkType[];
    setHovered: Dispatch<SetStateAction<string | null>>;
    hovered: string | null;
    activeSublinks: LinkType["sublinks"];
  }) => {
    return (
      <div className="ml-9 mt-0.5 hidden md:block">
        <div className="flex gap-6">
          {links.map((l) => (
            <TopLink key={l.title} setHovered={setHovered} title={l.title}>
              {l.title}
            </TopLink>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="space-y-4 py-6"
            >
              {activeSublinks.map((l) => (
                <a
                  className="block text-2xl font-semibold text-green-50 transition-colors hover:text-green-400"
                  href={l.href}
                  key={l.title}
                >
                  {l.title}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const MobileLinks = ({ links, open }: { links: LinkType[]; open: boolean }) => {
    return (
      <AnimatePresence mode="popLayout">
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="grid grid-cols-2 gap-6 py-6 md:hidden"
          >
            {links.map((l) => {
              return (
                <div key={l.title} className="space-y-1.5">
                  <span className="text-md block font-semibold text-green-50">
                    {l.title}
                  </span>
                  {l.sublinks.map((sl) => (
                    <a
                      className="text-md block text-green-300"
                      href={sl.href}
                      key={sl.title}
                    >
                      {sl.title}
                    </a>
                  ))}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  const TopLink = ({
    children,
    setHovered,
    title,
  }: {
    children: string;
    setHovered: Dispatch<SetStateAction<null | string>>;
    title: string;
  }) => (
    <span
      onMouseEnter={() => setHovered(title)}
      className="cursor-pointer text-green-50 transition-colors hover:text-green-400"
    >
      {children}
    </span>
  );