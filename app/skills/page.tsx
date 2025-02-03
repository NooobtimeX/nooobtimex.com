"use client";

import Head from "next/head";
import {
  SiBootstrap,
  SiDaisyui,
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

const skills = {
  Frontend: [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Nuxt.js", Icon: SiNuxtdotjs },
    { name: "React", Icon: SiReact },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "DaisyUI", Icon: SiDaisyui },
  ],
  Backend: [
    { name: "Prisma", Icon: SiPrisma },
    { name: "Drizzle", Icon: SiDrizzle },
    { name: "SQLite", Icon: SiSqlite },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MySQL", Icon: SiMysql },
  ],
  Deployment: [
    { name: "Vercel", Icon: SiVercel },
    { name: "Firebase", Icon: SiFirebase },
    { name: "Supabase", Icon: SiSupabase },
  ],
  Programming: [
    { name: "Javascript", Icon: SiJavascript },
    { name: "Typescript", Icon: SiTypescript },
  ],
};

interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface SkillGroupProps {
  title: string;
  skillList: Skill[];
}

const SkillGroup = ({ title, skillList }: SkillGroupProps) => (
  <div className="p-6 my-6">
    <h2 className="text-center text-2xl font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skillList.map((skill, index) => (
        <div
          key={index}
          className="tooltip tooltip-primary flex items-center justify-center rounded-2xl"
          data-tip={skill.name}
        >
          <skill.Icon className="h-12 w-12 text-primary" />
        </div>
      ))}
    </div>
  </div>
);

export default function Skill() {
  return (
    <div className="bg-base-200 py-12">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/skills" />
      </Head>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-12">
          SKILLS
        </h1>
        <SkillGroup
          title="Programming Languages"
          skillList={skills.Programming}
        />
        <SkillGroup title="Frontend" skillList={skills.Frontend} />
        <SkillGroup title="Backend" skillList={skills.Backend} />
        <SkillGroup title="Deployment" skillList={skills.Deployment} />
      </div>
    </div>
  );
}
