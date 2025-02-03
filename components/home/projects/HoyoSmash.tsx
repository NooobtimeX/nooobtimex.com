"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function HoyoSmash() {
  const skills = [
    { name: "NEXT JS", Icon: SiNextdotjs },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Javascript", Icon: SiJavascript },
    { name: "Typescript", Icon: SiTypescript },
    { name: "FIREBASE", Icon: SiFirebase },
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
                <Image
                  src="/project/HoYoSmash.png"
                  alt="HoyoSmash"
                  className="w-full"
                  width={1600}
                  height={900}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="tooltip tooltip-primary"
                data-tip={skill.name}
              >
                <div className="flex items-center justify-center p-4 md:h-20 md:w-20">
                  <skill.Icon className="h-12 w-12 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
