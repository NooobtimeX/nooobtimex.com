"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation"; // For App Router
import Link from "next/link";

const navigation = [
  { href: "/", name: "ABOUT ME" },
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
    <nav className="bg-background/75 sticky top-0 z-40 mb-1 rounded-b-2xl bg-neutral-900 shadow-xl backdrop-blur">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper for 3 sections: start, center, end */}
        <div className="relative flex h-16 items-center">
          {/* Start Section */}
          <div className="flex flex-1 items-center justify-start">
            {/* Mobile menu button (only visible on small screens) */}
            <div className="mr-2 flex items-center sm:hidden">
              <button
                onClick={handleMenuToggle}
                className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset"
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

            {/* Logo / Brand */}
            <Link href="/" className="flex items-center">
              <img
                src="/favicon.ico"
                alt="HoYoSmash"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="ml-3 text-lg font-bold text-red-600">
                PORTFOLIO
              </span>
            </Link>
          </div>

          {/* Center Section */}
          <div className="hidden flex-1 items-center justify-center space-x-4 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-300 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* End Section */}
          <div className="hidden flex-1 items-center justify-end sm:flex">
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-red-600"
            >
              <button className="bg-red-500 font-medium text-white shadow-md transition hover:bg-red-600">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (overlay) */}
      {isMobileMenuOpen && (
        <div className="bg-background/75 absolute z-50 w-full rounded-xl bg-neutral-900 p-2 backdrop-blur sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-300 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
