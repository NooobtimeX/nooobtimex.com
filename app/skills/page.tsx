import Head from "next/head";

const skills = {
  Frontend: [
    { imgSrc: "/icon/nextjs.png", name: "Next.js" },
    { imgSrc: "/icon/nuxtjs.png", name: "Nuxt.js" },
    { imgSrc: "/icon/react.png", name: "React" },
    { imgSrc: "/icon/vuejs.png", name: "Vue.js" },
    { imgSrc: "/icon/tailwindcss.png", name: "Tailwind CSS" },
    { imgSrc: "/icon/bootstrap.png", name: "Bootstrap" },
    { imgSrc: "/icon/daisyui.png", name: "DaisyUI" },
  ],
  Backend: [
    { imgSrc: "/icon/prisma.png", name: "Prisma" },
    { imgSrc: "/icon/drizzle.png", name: "Drizzle" },
    { imgSrc: "/icon/sqlite.png", name: "SQLite" },
    { imgSrc: "/icon/postgresql.png", name: "PostgreSQL" },
    { imgSrc: "/icon/mysql.png", name: "MySQL" },
  ],
  Deployment: [
    { imgSrc: "/icon/vercel.png", name: "Vercel" },
    { imgSrc: "/icon/firebase.png", name: "Firebase" },
    { imgSrc: "/icon/supabase.png", name: "Supabase" },
  ],
  Programming: [
    { imgSrc: "/icon/javascript.png", name: "Javascript" },
    { imgSrc: "/icon/typescript.png", name: "Typescript" },
  ],
};

interface Skill {
  imgSrc: string;
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
          <img
            src={skill.imgSrc}
            alt={skill.name}
            className="md:h-14 md:w-14 xl:h-20 xl:w-20"
          />
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
      </div>
    </div>
  );
}
