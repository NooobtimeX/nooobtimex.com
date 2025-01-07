import Head from "next/head";
import React from "react";
import {
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    skills: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNuxtdotjs, name: "Nuxt.js" },
      { icon: SiReact, name: "React" },
      { icon: SiVuedotjs, name: "Vue.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { icon: SiPrisma, name: "Prisma" },
      { icon: SiSqlite, name: "SQLite" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { icon: SiVercel, name: "Vercel" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    category: "Programming Language",
    skills: [
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiTypescript, name: "Typescript" },
    ],
  },
];

export default function Skill() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/skills" />
      </Head>
      <div>
        <div className="flex flex-col items-center text-white" id="skill">
          <h1 className="mb-2 text-center text-4xl font-bold">Skills</h1>
          {skills.map((category) => (
            <React.Fragment key={category.category}>
              <h2 className="mb-2 text-3xl font-bold text-neutral-200">
                {category.category} Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative flex h-14 w-14 transform flex-col items-center justify-center rounded-2xl  text-neutral-200 md:h-20 md:w-20 xl:h-24 xl:w-24"
                  >
                    <skill.icon size={40} className="text-neutral-200" />
                    <label className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                      {skill.name}
                    </label>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
