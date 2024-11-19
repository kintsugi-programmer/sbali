import React from "react";
import { FloatingDock } from "./ui/dockbar";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNews,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-green-500" />
      ),
      href: "#",
    },

    {
      title: "About Me",
      icon: (
        <IconTerminal2 className="h-full w-full text-green-500" />
      ),
      href: "https://kintsugi-programmer.github.io/about.html",
    },
    {
      title: "Blogs",
      icon: (
        <IconNews className="h-full w-full text-green-500" />
      ),
      href: "https://kintsugicodes.hashnode.dev/",
    },

    {
      title: "Changelog",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-green-500" />
      ),
      href: "https://www.linkedin.com/in/kintsugi-programmer/",
    },

    {
      title: "Behance",
      icon: (
        <IconBrandBehance className="h-full w-full text-green-500" />
      ),
      href: "https://www.behance.net/balibhai",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-green-500" />
      ),
      href: "https://github.com/kintsugi-programmer",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        
        items={links}
      />
    </div>
  );
}
