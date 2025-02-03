"use client";

import {
  SiDrizzle,
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
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Nuxt.js", Icon: SiNuxtdotjs },
  { name: "React", Icon: SiReact },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Drizzle", Icon: SiDrizzle },
  { name: "SQLite", Icon: SiSqlite },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "Vercel", Icon: SiVercel },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Supabase", Icon: SiSupabase },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
];

export default function Skill() {
  return (
    <div>
      <div
        className="flex flex-col items-center text-base-content bg-base-200 py-12"
        id="skill"
      >
        <h2 className="mb-6 text-4xl font-bold text-primary">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="tooltip tooltip-primary"
              data-tip={skill.name}
            >
              <div className="flex items-center justify-center p-4 md:h-20 md:w-20">
                <skill.Icon className="h-12 w-12 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
