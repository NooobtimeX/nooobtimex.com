import Image from "next/image";

const skills = [
  { imgSrc: "/icon/nextjs.png", name: "Next.js" },
  { imgSrc: "/icon/nuxtjs.png", name: "Nuxt.js" },
  { imgSrc: "/icon/react.png", name: "React" },
  { imgSrc: "/icon/vuejs.png", name: "Vue.js" },
  { imgSrc: "/icon/tailwindcss.png", name: "Tailwind CSS" },
  { imgSrc: "/icon/prisma.png", name: "Prisma" },
  { imgSrc: "/icon/drizzle.png", name: "Drizzle" },
  { imgSrc: "/icon/sqlite.png", name: "SQLite" },
  { imgSrc: "/icon/postgresql.png", name: "PostgreSQL" },
  { imgSrc: "/icon/mysql.png", name: "MySQL" },
  { imgSrc: "/icon/vercel.png", name: "Vercel" },
  { imgSrc: "/icon/firebase.png", name: "Firebase" },
  { imgSrc: "/icon/supabase.png", name: "Supabase" },
  { imgSrc: "/icon/javascript.png", name: "JavaScript" },
  { imgSrc: "/icon/typescript.png", name: "TypeScript" },
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
              <Image
                src={skill.imgSrc}
                alt={skill.name}
                className="md:h-20 md:w-20 group rounded-2xl dow-lg"
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
