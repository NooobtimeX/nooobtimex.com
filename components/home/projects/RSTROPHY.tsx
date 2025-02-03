"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiWoo,
  SiWordpress,
} from "react-icons/si";

export default function Combomaker() {
  const skills = [
    { name: "WordPress", Icon: SiWordpress },
    { name: "WooCommerce", Icon: SiWoo },
    { name: "Google Ads", Icon: SiGoogleads },
    { name: "Google Tag Manager", Icon: SiGoogletagmanager },
    { name: "Google Analytics", Icon: SiGoogleanalytics },
  ];

  return (
    <div className="p-4">
      {/* RS TROPHY Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Skills Section */}
        <div className="space-y-6 m-auto">
          <h3 className="text-center text-3xl font-bold text-primary">
            RS TROPHY
          </h3>
          <div>
            <p className="text-center text-lg text-base-content">Skills</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
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

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="card shadow-xl">
            <figure className="group relative">
              <Link
                href="https://www.rs-trophy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/project/RSTROPHY.png"
                  alt="RS TROPHY"
                  className="w-full"
                  width={1600}
                  height={900}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-70 text-lg font-bold text-neutral-content opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  RS TROPHY
                </div>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
