"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation"; // For App Router
import Link from "next/link";

const navigation = [
  { href: "/", name: "About Me" },
  { href: "/skills", name: "Skills" },
  { href: "/projects", name: "Projects" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-40 rounded-b-xl bg-neutral-900 shadow-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex items-center">
              <img
                src="/favicon.ico"
                alt="HoYoSmash"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="ml-3 text-lg font-semibold text-red-600">
                Portfolio
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-300 hover:text-red-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-50 w-full rounded-xl bg-neutral-800 p-2 sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-neutral-300 hover:text-red-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
