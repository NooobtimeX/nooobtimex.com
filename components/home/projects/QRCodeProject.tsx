"use client";

import Link from "next/link";

export default function QRCodeProject() {
  const skills = [
    {
      name: "Nuxt",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnuxtjs.png?alt=media&token=9bd21d09-a9df-4fc8-b42f-03c57f1eb6bc",
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
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fjavascript.png?alt=media&token=c3cb89d0-81c7-48a4-9f78-6e90e99eac78",
      name: "Javascript",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftypescript.ico?alt=media&token=9bcf541d-5e0a-469c-b32e-29c773fff098",
      name: "Typescript",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fvercel.png?alt=media&token=55928e11-b18e-4af9-b5ba-400a43537829",
      name: "Vercel",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fsupabase.jpg?alt=media&token=b8b7f624-0995-41fd-85fa-efa114b166f8",
      name: "Supabase",
    },
  ];
  const contributtors = [
    {
      name: "NooobtimeX",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/people_profile%2FNooobtimeX.webp?alt=media&token=2449a999-5b38-4e2d-a032-f295934d94e8",
    },
    {
      name: "Tateung",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/people_profile%2FTateung.png?alt=media&token=97a020cf-c11f-4790-a435-a54e17f316c7",
    },
  ];
  return (
    <div className="p-2">
      {/* QR FOOD */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="m-auto">
          <div className="group relative">
            <Link
              href="https://github.com/NooobtimeX/QR-Food"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FQRCODE.png?alt=media&token=916e4c43-724e-4e30-86c0-155ee8093da5"
                alt="QR FOOD"
                className="mx-auto max-h-80"
              />
              <label className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-lg font-bold text-white opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                QR FOOD
              </label>
            </Link>
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-center text-3xl font-bold text-red-600">
            QR FOOD
          </h3>
          <div>
            <h4 className="text-center text-lg text-red-500">Skills</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex h-16 w-16 transform flex-col items-center justify-center rounded-lg bg-neutral-900 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600 md:h-20 md:w-20 xl:h-24 xl:w-24"
                >
                  <img
                    src={skill.src}
                    width={40}
                    height={40}
                    alt={skill.name}
                    className="rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-2">
            <h4 className="text-center text-lg text-red-500">Contributtors</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {contributtors.map((contributtor, index) => (
                <div
                  key={index}
                  className="flex transform flex-col items-center justify-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={contributtor.src}
                    width={40}
                    height={40}
                    alt={contributtor.name}
                    className="rounded-full border border-red-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
