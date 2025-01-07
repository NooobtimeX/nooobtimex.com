"use client";

import Link from "next/link";
import {
  SiJavascript,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export default function QRCodeProject() {
  const skills = [
    { name: "Nuxt", icon: SiNuxtdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "Javascript", icon: SiJavascript },
    { name: "Typescript", icon: SiTypescript },
    { name: "Vercel", icon: SiVercel },
    { name: "Supabase", icon: SiSupabase },
  ];

  return (
    <div className="p-2">
      {/* QR FOOD */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="order-2 m-auto md:order-1">
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
              <label className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-200 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
                QR FOOD
              </label>
            </Link>
          </div>
        </div>

        <div className="order-1 m-auto space-y-2 p-2 md:order-2">
          <h3 className="text-center text-3xl font-bold">QR FOOD</h3>
          <div>
            <p className="text-center text-lg">Skills</p>
            <div className="flex flex-wrap justify-center gap-1 text-neutral-200lg">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex h-14 w-14 transform flex-col items-center justify-center rounded-2xl text-neutral-200 md:h-20 md:w-20 xl:h-24 xl:w-24"
                >
                  <skill.icon size={40} className="text-neutral-200" />
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
