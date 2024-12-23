import React from "react";

const skills = [
  {
    category: "Frontend",
    skills: [
      { src: "/logo/nextjs.ico", name: "Next.js" },
      { src: "/logo/nuxtjs.png", name: "Nuxt.js" },
      { src: "/logo/react.ico", name: "React" },
      { src: "/logo/vuejs.svg", name: "Vue.js" },
      { src: "/logo/tailwindcss.png", name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { src: "/logo/prisma.png", name: "Prisma" },
      { src: "/logo/sqlite.png", name: "SQLite" },
      { src: "/logo/postgresql.ico", name: "PostgreSQL" },
      { src: "/logo/mysql.svg", name: "MySQL" },
      { src: "/logo/nodejs.png", name: "Node.js" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { src: "/logo/vercel.png", name: "Vercel" },
      { src: "/logo/firebase.png", name: "Firebase" },
      { src: "/logo/supabase.jpg", name: "supabase" },
    ],
  },
  {
    category: "Programming Language",
    skills: [
      { src: "/logo/javascript.png", name: "Javascript" },
      { src: "/logo/typescript.ico", name: "Typescript" },
    ],
  },
];

export default function Skill() {
  return (
    <div
      className="flex flex-col items-center bg-gray-900 p-4 text-white"
      id="skill"
    >
      <h1 className="mb-2 text-center text-4xl font-bold text-indigo-400 md:mb-10">
        Skills
      </h1>
      {skills.map((category) => (
        <React.Fragment key={category.category}>
          <h2 className="mb-2 text-3xl font-bold text-indigo-400">
            {category.category} Skills
          </h2>
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {category.skills.map((skill, index) => (
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
        </React.Fragment>
      ))}
    </div>
  );
}
