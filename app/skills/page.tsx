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
  <div className="p-6 my-6">
    <h2 className="text-center text-2xl font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skillList.map((skill, index) => (
        <img
          key={index}
          src={skill.imgSrc}
          alt={skill.name}
          className="h-14 w-14 md:h-20 md:w-20 group rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
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
