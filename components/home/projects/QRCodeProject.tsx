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
                  src="/project/QRFOOD.png"
                  alt="QR FOOD"
                  className="w-full "
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  QR FOOD
                </div>
              </Link>
            </figure>
          </div>
        </div>

        {/* Skills Section */}
        <div className="order-1 m-auto space-y-4 md:order-2">
          <h3 className="text-center text-4xl font-bold text-primary m-auto">
            QR FOOD
          </h3>
          <div>
            <p className="text-center text-lg text-base-content">Skills</p>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="h-14 w-14 md:h-20 md:w-20 group rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
