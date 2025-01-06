"use client";

import Link from "next/link";

export default function HoyoSmash() {
  const skills = [
    {
      name: "NEXT JS",
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Fnextjs.ico?alt=media&token=1bc6718b-bc03-4fac-8e5d-f07ed159f209",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ftailwindcss.png?alt=media&token=9c897653-80bb-444f-b19f-9f938db2d303",
      name: "Tailwind CSS",
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
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/skill_logo%2Ffirebase.png?alt=media&token=e50b5c7b-10d4-4036-be9d-9fae6739bef8",
      name: "FIREBASE",
    },
  ];
  return (
    <div className="p-2">
      {/* HoyoSmash */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="order-2 m-auto md:order-1">
          <div className="group relative">
            <Link
              href="https://hoyosmash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fhoyosmash.png?alt=media&token=b38f2ff5-c441-4e3b-866a-a4ab32b6b903"
                alt="HoyoSmash"
                className="mx-auto max-h-80"
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                HoyoSmash
              </label>
            </Link>
          </div>
        </div>

        <div className="order-1 m-auto p-2 md:order-2">
          <h3 className="text-center text-3xl font-bold">HoyoSmash</h3>
          <div>
            <p className="text-center text-lg">Skills</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-lg">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex h-14 w-14 transform flex-col items-center justify-center rounded-2xl  text-neutral-200 md:h-20 md:w-20 xl:h-24 xl:w-24"
                >
                  <img
                    src={skill.src}
                    width={40}
                    height={40}
                    alt={skill.name}
                    className="rounded-none"
                  />
                  <label className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                    {skill.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
