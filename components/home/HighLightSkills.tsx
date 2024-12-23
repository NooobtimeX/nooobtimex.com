import Link from "next/link";
import React from "react";

const skills = [
  { src: "/logo/nextjs.ico", name: "Next.js" },
  { src: "/logo/nuxtjs.png", name: "Nuxt.js" },
  { src: "/logo/tailwindcss.png", name: "Tailwind CSS" },
  { src: "/logo/postgresql.ico", name: "PostgreSQL" },
  { src: "/logo/prisma.png", name: "Prisma" },
  { src: "/logo/firebase.png", name: "Firebase" },
  { src: "/logo/javascript.png", name: "Javascript" },
  { src: "/logo/typescript.ico", name: "Typescript" },
];

export default function Skill() {
  return (
    <div
      className="flex flex-col items-center bg-gray-900 p-4 text-white"
      id="skill"
    >
      <h1 className="mb-2 text-center text-4xl font-bold text-indigo-400 md:mb-10">
        Highlight Skills
      </h1>
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex h-28 w-28 transform flex-col items-center justify-center rounded-lg bg-gray-800 p-2 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-indigo-500"
          >
            <img
              src={skill.src}
              alt={skill.name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="mt-2 text-sm font-semibold text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Link href="/skills">
          <button className="rounded-xl border border-indigo-500 px-3 py-2 text-indigo-500 hover:bg-indigo-500 hover:text-white">
            more
          </button>
        </Link>
      </div>
    </div>
  );
}
