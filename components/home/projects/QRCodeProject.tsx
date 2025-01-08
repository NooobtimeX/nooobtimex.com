"use client";

import Link from "next/link";

export default function QRCodeProject() {
  const skills = [
    { name: "Nuxt", imgSrc: "/icon/nuxtjs.png" },
    { name: "Tailwind CSS", imgSrc: "/icon/tailwindcss.png" },
    { name: "PostgreSQL", imgSrc: "/icon/postgresql.png" },
    { name: "Prisma", imgSrc: "/icon/prisma.png" },
    { name: "Javascript", imgSrc: "/icon/javascript.png" },
    { name: "Typescript", imgSrc: "/icon/typescript.png" },
    { name: "Vercel", imgSrc: "/icon/vercel.png" },
    { name: "Supabase", imgSrc: "/icon/supabase.png" },
  ];

  return (
    <div className="p-4 bg-base-200">
      {/* QR FOOD Section */}
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <div className="order-2 m-auto md:order-1">
          <div className="card shadow-xl">
            <figure className="group relative">
              <Link
                href="https://github.com/NooobtimeX/QR-Food"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FQRCODE.png?alt=media&token=916e4c43-724e-4e30-86c0-155ee8093da5"
                  alt="QR FOOD"
                  className="w-full rounded-t-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  QR FOOD
                </div>
              </Link>
            </figure>
          </div>
        </div>

        {/* Skills Section */}
        <div className="order-1 m-auto space-y-4 md:order-2">
          <h3 className="text-center text-4xl font-bold text-primary">
            QR FOOD
          </h3>
          <div>
            <p className="text-center text-lg text-base-content">Skills</p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </div>
  );
}
