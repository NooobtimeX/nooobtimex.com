const skills = [
  { imgSrc: "/icon/nextjs.png", name: "Next.js" },
  { imgSrc: "/icon/nuxtjs.png", name: "Nuxt.js" },
  { imgSrc: "/icon/react.png", name: "React" },
  { imgSrc: "/icon/vuejs.png", name: "Vue.js" },
  { imgSrc: "/icon/tailwindcss.png", name: "Tailwind CSS" },
  { imgSrc: "/icon/prisma.png", name: "Prisma" },
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
      <div className="flex flex-col items-center text-white" id="skill">
        <h2 className="mb-2 text-center text-4xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex h-16 w-16 transform flex-col items-center justify-center rounded-2xl text-neutral-200 md:h-20 md:w-20 xl:h-24 xl:w-24"
            >
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="h-10 w-10 md:h-14 md:w-14 xl:h-20 xl:w-20"
              />
              <label className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                {skill.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
