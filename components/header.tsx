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
    <nav className="bg-background/75 sticky top-0 z-40 mb-1 rounded-b-2xl bg-neutral-900 shadow-xl backdrop-blur">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Mobile Menu Button */}
          <div className="mr-2 flex items-center md:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset"
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

          {/* Centered Logo / Brand for Small Screens */}
          <div className="-ml-14 flex flex-1 justify-center md:m-0 md:justify-start">
            <Link href="/" className="flex items-center">
              <img
                src="/favicon.ico"
                alt="HoYoSmash"
                width={36}
                height={36}
                className="hidden rounded-full md:flex"
              />
              <span className="ml-3 text-lg font-bold text-red-600">
                PORTFOLIO
              </span>
            </Link>
          </div>

          {/* Center Section (hidden on small screens) */}
          <div className="hidden flex-1 items-center justify-center space-x-4 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-xs lg:text-sm xl:lg:text-base ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-200 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* End Section */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-neutral-200 hover:text-red-600"
            >
              <button className="bg-red-500 font-medium text-neutral-200 shadow-md transition hover:bg-red-600">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-background/75 absolute z-50 w-full rounded-2xl bg-neutral-900 p-2 backdrop-blur md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-200 hover:text-red-600"
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
