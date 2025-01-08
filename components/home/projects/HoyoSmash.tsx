"use client";

import Link from "next/link";

export default function HoyoSmash() {
  const skills = [
    { name: "NEXT JS", imgSrc: "/icon/nextjs.png" },
    { name: "Tailwind CSS", imgSrc: "/icon/tailwindcss.png" },
    { name: "Javascript", imgSrc: "/icon/javascript.png" },
    { name: "Typescript", imgSrc: "/icon/typescript.png" },
    { name: "FIREBASE", imgSrc: "/icon/firebase.png" },
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
            <div className="flex flex-wrap justify-center gap-1 max-w-lg">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex h-14 w-14 transform flex-col items-center justify-center rounded-2xl text-neutral-200 md:h-20 md:w-20 xl:h-24 xl:w-24"
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
      </div>
    </div>
  );
}
