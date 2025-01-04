import React from "react";
import Head from "next/head";

const skills = [
  {
    category: "Frontend",
    skills: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnextjs.ico?alt=media&token=1bc6718b-bc03-4fac-8e5d-f07ed159f209",
        name: "Next.js",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnuxtjs.png?alt=media&token=9bd21d09-a9df-4fc8-b42f-03c57f1eb6bc",
        name: "Nuxt.js",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Freact.ico?alt=media&token=6c1c8b20-0e6c-4204-a04d-f6fde47e7240",
        name: "React",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fvuejs.svg?alt=media&token=ffe2ccd1-aa0b-4c4d-b32d-12cd15e9dae1",
        name: "Vue.js",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftailwindcss.png?alt=media&token=9c897653-80bb-444f-b19f-9f938db2d303",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fprisma.png?alt=media&token=b583b4f2-b8c5-4a1a-b5b5-c5f9aaf0899f",
        name: "Prisma",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fsqlite.png?alt=media&token=59fe8b13-e8ac-4152-a721-f9039418728f",
        name: "SQLite",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fpostgresql.ico?alt=media&token=08ce4880-761a-41ec-8bdf-af3b06342206",
        name: "PostgreSQL",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fmysql.svg?alt=media&token=44857ecb-bf98-468a-96db-1c2f5813d69a",
        name: "MySQL",
      },
    ],
  },
  {
    category: "Deployment",
    skills: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fvercel.png?alt=media&token=55928e11-b18e-4af9-b5ba-400a43537829",
        name: "Vercel",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ffirebase.png?alt=media&token=e50b5c7b-10d4-4036-be9d-9fae6739bef8",
        name: "Firebase",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fsupabase.jpg?alt=media&token=b8b7f624-0995-41fd-85fa-efa114b166f8",
        name: "supabase",
      },
    ],
  },
  {
    category: "Programming Language",
    skills: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fjavascript.png?alt=media&token=c3cb89d0-81c7-48a4-9f78-6e90e99eac78",
        name: "Javascript",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftypescript.ico?alt=media&token=9bcf541d-5e0a-469c-b32e-29c773fff098",
        name: "Typescript",
      },
    ],
  },
];

export default function Skill() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/skills" />
      </Head>
      <div
        className="flex flex-col items-center bg-neutral-900 text-white"
        id="skill"
      >
        <h1>SKILLS</h1>
        {skills.map((category) => (
          <React.Fragment key={category.category}>
            <h2 className="mb-2 text-3xl font-bold text-neutral-200">
              {category.category} Skills
            </h2>
            <div className="mb-6 flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex h-24 w-24 transform flex-col items-center justify-center rounded-lg bg-neutral-800 p-2 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-red-600"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="rounded-none"
                  />
                  <span className="mt-2 text-sm font-semibold text-neutral-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
