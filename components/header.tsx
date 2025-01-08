"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", name: "HOME" },
  { href: "/skills", name: "SKILLS" },
  { href: "/projects", name: "PROJECTS" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar sticky top-0 z-40 mb-8 bg-base-200 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/favicon.ico"
              alt="Portfolio"
              className=" h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold text-primary">PORTFOLIO</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`btn btn-ghost text-sm ${
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-base-content"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex ml-10">
          <Link href="/contact">
            <button className="btn btn-primary">CONTACT</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="btn btn-ghost btn-square"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu bg-base-200 absolute top-full left-0 w-full shadow-md md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 text-sm ${
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-base-content"
              }`}
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
