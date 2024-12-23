"use client";

import Link from "next/link";

export default function Project() {
  const items = [
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FQRCODE.png?alt=media&token=916e4c43-724e-4e30-86c0-155ee8093da5",
      name: "QR FOOD",
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fcombomaker.png?alt=media&token=eb2c155a-5f69-4d92-9e2a-a84fa8f5af13",
      name: "combomaker.net",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fhoyosmash.png?alt=media&token=b38f2ff5-c441-4e3b-866a-a4ab32b6b903",
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
