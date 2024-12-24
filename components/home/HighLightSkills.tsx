import Link from "next/link";
import React from "react";

const skills = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnextjs.ico?alt=media&token=1bc6718b-bc03-4fac-8e5d-f07ed159f209",
    name: "Next.js",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnuxtjs.png?alt=media&token=9bd21d09-a9df-4fc8-b42f-03c57f1eb6bc",
    name: "Nuxt.js",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftailwindcss.png?alt=media&token=9c897653-80bb-444f-b19f-9f938db2d303",
    name: "Tailwind CSS",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fpostgresql.ico?alt=media&token=08ce4880-761a-41ec-8bdf-af3b06342206",
    name: "PostgreSQL",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fprisma.png?alt=media&token=b583b4f2-b8c5-4a1a-b5b5-c5f9aaf0899f",
    name: "Prisma",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ffirebase.png?alt=media&token=e50b5c7b-10d4-4036-be9d-9fae6739bef8",
    name: "Firebase",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fjavascript.png?alt=media&token=c3cb89d0-81c7-48a4-9f78-6e90e99eac78",
    name: "Javascript",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftypescript.ico?alt=media&token=9bcf541d-5e0a-469c-b32e-29c773fff098",
    name: "Typescript",
  },
];

export default function Skill() {
  return (
    <div
      className="flex flex-col items-center bg-neutral-900 p-4 text-white"
      id="skill"
    >
      <h2 className="mb-4 text-center text-4xl font-bold text-red-600">
        Highlight Skills
      </h2>
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex h-28 w-28 transform flex-col items-center justify-center rounded-lg bg-neutral-800 p-2 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-red-600"
          >
            <img
              src={skill.src}
              alt={skill.name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="mt-2 text-sm font-semibold text-neutral-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Link href="/skills">
          <button className="rounded-xl border border-red-600 px-3 py-2 text-red-600 hover:bg-red-600 hover:text-white">
            More Skills
          </button>
        </Link>
      </div>
    </div>
  );
}
