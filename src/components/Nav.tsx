"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Nav() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);  // State to control the hamburger menu

  const toggleMenu = () => setMenuOpen(!menuOpen);  // Function to toggle menu visibility

  return (
    <div className={cn("fixed top-10 py-5 inset-x-4 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="w-full flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex-shrink-0">
            <p className="font-bold">&gt;kintsugi-programmer</p>        
          </Link>

          {/* Hamburger Icon for small screens */}
          <div className="lg:hidden">
          <MenuItem setActive={setActive} active={active} item="☰">
              <div className="flex flex-col space-y-4 text-sm">
                
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
          </div>

          {/* Menu items grouped on the right */}
          <div className={`flex items-center gap-6 ${menuOpen ? 'flex-col absolute bg-white top-16 left-4 right-4 p-6' : 'hidden lg:flex'}`}>
            <MenuItem setActive={setActive} active={active} item="Services">
            
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="/proj/balinux.png"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="/proj/balinux.png"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="/proj/balinux.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="/proj/balinux.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="More">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
