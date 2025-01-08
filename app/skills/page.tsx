import Head from "next/head";
import { CgMonday } from "react-icons/cg";
import {
  SiBootstrap,
  SiClickup,
  SiCss3,
  SiDaisyui,
  SiDrizzle,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGitlab,
  SiGooglegemini,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNuxtdotjs,
  SiOpenai,
  SiPlesk,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

const skills = {
  Frontend: [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNuxtdotjs, name: "Nuxt.js" },
    { icon: SiReact, name: "React" },
    { icon: SiVuedotjs, name: "Vue.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiDaisyui, name: "DaisyUI" },
    { icon: SiCss3, name: "CSS3" },
  ],
  Backend: [
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiDrizzle, name: "Drizzle" },
    { icon: SiSqlite, name: "SQLite" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
  ],
  Deployment: [
    { icon: SiVercel, name: "Vercel" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiPlesk, name: "Plesk" },
  ],
  Programming: [
    { icon: SiJavascript, name: "Javascript" },
    { icon: SiTypescript, name: "Typescript" },
  ],
  Tools: [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "Github" },
    { icon: SiGitlab, name: "Gitlab" },
    { icon: SiClickup, name: "Clickup" },
    { icon: CgMonday, name: "Monday" },
    { icon: SiTrello, name: "Trello" },
    { icon: SiGooglegemini, name: "Gemini" },
    { icon: SiGithubcopilot, name: "Copilot" },
    { icon: SiOpenai, name: "Chat GPT" },
  ],
};

interface Skill {
  icon: React.ElementType;
  name: string;
}

interface SkillGroupProps {
  title: string;
  skillList: Skill[];
}

const SkillGroup = ({ title, skillList }: SkillGroupProps) => (
  <div className="skill-group">
    <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
    <div className="flex flex-wrap justify-center gap-2 mx-auto">
      {skillList.map((skill, index) => (
        <div
          key={index}
          className="group relative flex h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-2xl transform hover:scale-110 transition-transform duration-300"
        >
          <skill.icon size={40} className="text-neutral-200" />
          <label className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:opacity-100">
            {skill.name}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default function Skill() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/skills" />
      </Head>
      <h1>SKILLS</h1>
      <div className="max-w-7xl mx-auto gap-8">
        <SkillGroup
          title="Programming Languages"
          skillList={skills.Programming}
        />
        <SkillGroup title="Frontend" skillList={skills.Frontend} />
        <SkillGroup title="Backend" skillList={skills.Backend} />
        <SkillGroup title="Deployment" skillList={skills.Deployment} />
        <SkillGroup title="Tools" skillList={skills.Tools} />
      </div>
    </div>
  );
}
