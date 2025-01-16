"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/", name: "HOME" },
  { href: "/skills", name: "SKILLS" },
  { href: "/projects", name: "PROJECTS" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar sticky top-0 z-40 mb-8 bg-base-200 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Portfolio"
              className="rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <em className="text-xl font-bold">PORTFOLIO</em>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="btn btn-ghost text-sm "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link href="/contact" className="hidden md:flex ml-10">
          <button className="btn btn-primary">CONTACT</button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div onClick={handleMenuToggle} className="btn btn-ghost btn-square">
            <em className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </em>
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu bg-base-200 absolute top-full left-0 w-full shadow-md md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm "
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="btn btn-primary w-full mt-2">CONTACT</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
