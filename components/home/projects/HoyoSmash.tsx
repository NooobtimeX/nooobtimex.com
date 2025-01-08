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
    <div className="p-4">
      {/* HoyoSmash Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <div className="order-2 m-auto md:order-1">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="group relative">
              <Link
                href="https://hoyosmash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fhoyosmash.png?alt=media&token=b38f2ff5-c441-4e3b-866a-a4ab32b6b903"
                  alt="HoyoSmash"
                  className="w-full rounded-t-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  HoyoSmash
                </div>
              </Link>
            </figure>
          </div>
        </div>

        {/* Skills Section */}
        <div className="order-1 m-auto p-4 md:order-2">
          <h3 className="text-center text-3xl font-bold text-primary">
            HoyoSmash
          </h3>
          <p className="mt-4 text-center text-lg text-base-content">Skills</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group card bg-base-100 shadow-md rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="card-body items-center p-4">
                  <img
                    src={skill.imgSrc}
                    alt={skill.name}
                    className="h-14 w-14 md:h-20 md:w-20"
                  />
                  <div className="card-overlay absolute inset-0 flex items-center rounded-lg justify-center bg-black bg-opacity-70 text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-lg font-bold">{skill.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
