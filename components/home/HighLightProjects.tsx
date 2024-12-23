"use client";

import Link from "next/link";

export default function Project() {
  const items = [
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRCODE.png",
      name: "QR FOOD",
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/combomaker.png",
      name: "combomaker.net",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/hoyosmash.png",
      name: "hoyosmash.com",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <div className="rounded-lg bg-gray-900 p-4 text-white" id="project">
      <h2 className="mb-2 text-center text-4xl font-bold text-indigo-400 md:mb-10">
        Highlight Project
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
          >
            <div className="relative">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-48 w-full rounded-t-xl object-cover"
                />
              </a>
            </div>
            <div className="p-2">
              <h3 className="text-center text-2xl font-semibold text-indigo-300">
                {item.name}
              </h3>
              <div className="text-center text-sm text-gray-400">
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Link href="/projects">
          <button className="rounded-xl border border-indigo-500 px-3 py-2 text-indigo-500 hover:bg-indigo-500 hover:text-white">
            more
          </button>
        </Link>
      </div>
    </div>
  );
}
