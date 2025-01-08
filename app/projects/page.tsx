"use client";

import Head from "next/head";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import {
  SiFirebase,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    { name: "NEXT JS", id: "NEXT JS", icon: SiNextdotjs },
    { name: "FIREBASE", id: "FIREBASE", icon: SiFirebase },
    { name: "TAILWIND CSS", id: "TAILWIND CSS", icon: SiTailwindcss },
    { name: "NUXT JS", id: "NUXT JS", icon: SiNuxtdotjs },
    { name: "VERCEL", id: "VERCEL", icon: SiVercel },
    { name: "SUPABASE", id: "SUPABASE", icon: SiSupabase },
    { name: "WORDPRESS", id: "WORDPRESS", icon: SiWordpress },
    { name: "WOOCOMMERCE", id: "WOOCOMMERCE", icon: SiWoocommerce },
  ];

  const items = [
    {
      href: "https://nooobtimex.me/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FPorfolio.png?alt=media&token=031b0177-b71d-47f0-aabe-dcfa01677a15",
      name: "Porfolio",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FQRCODE.png?alt=media&token=916e4c43-724e-4e30-86c0-155ee8093da5",
      name: "QR FOOD",
      skills: ["NUXT JS", "VERCEL", "SUPABASE", "TAILWIND CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fcombomaker.png?alt=media&token=eb2c155a-5f69-4d92-9e2a-a84fa8f5af13",
      name: "Combo Maker",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fhoyosmash.png?alt=media&token=b38f2ff5-c441-4e3b-866a-a4ab32b6b903",
      name: "HoyoSmash",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frstrophy.png?alt=media&token=c84a6e24-f81f-4eb1-bd96-733b64f1a28f",
      name: "rs-trophy.com",
      skills: ["WORDPRESS", "WOOCOMMERCE"],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsmedal.png?alt=media&token=7b8e1c63-2948-432a-b6fa-0d650a992b07",
      name: "rs-medal.com",
      skills: ["WORDPRESS", "WOOCOMMERCE"],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsaward.png?alt=media&token=1c5aa005-14b1-4462-8d06-f7faa909dd45",
      name: "rs-award.com",
      skills: ["WORDPRESS", "WOOCOMMERCE"],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsribbon.png?alt=media&token=5e654a8a-534e-4d12-8b84-12fe4f9a4b32",
      name: "rs-ribbon.com",
      skills: ["WORDPRESS", "WOOCOMMERCE"],
    },
  ];

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  const handleSkillChange = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skill) => skill !== id) : [...prev, id]
    );
  };

  const filteredItems = items.filter((item) => {
    const skillsMatch =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => item.skills.includes(skill));

    return skillsMatch;
  });

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/projects" />
      </Head>
      <div className="rounded-2xl bg-neutral-900 text-white" id="project">
        <h1 className="md:mb-10">PROJECTS</h1>
        <div className="flex items-center justify-center">
          <button
            onClick={toggleFilter}
            className="-mt-8 mb-4 hidden aspect-square p-2 md:inline-block"
          >
            <IoFilterSharp size={24} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
            >
              <div className="relative">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-48 w-full rounded-t-2xl object-cover"
                  />
                </a>
              </div>
              <div className="p-2">
                <h2 className="text-center text-2xl font-semibold">
                  {item.name}
                </h2>
                <div className="text-center text-sm text-neutral-200">
                  {item.skills.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={toggleFilter}
          className="fixed bottom-4 right-4 aspect-square rounded-full bg-red-700 p-2 hover:bg-red-700 md:hidden"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/icon%2Ffilter.png?alt=media&token=daac11a2-de56-46c7-aafe-5ca7260aa0a6"
            alt="Filter"
          />
        </button>

        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 bg-opacity-50">
            <div className="w-96 rounded-2xl bg-neutral-900 p-6">
              <p className="mb-4 text-center text-2xl text-red-600">FILTER</p>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <div
                        key={skill.id}
                        onClick={() => handleSkillChange(skill.id)}
                        className={`flex cursor-pointer items-center gap-2 rounded-2xl p-2 transition-colors duration-300 ${
                          selectedSkills.includes(skill.id)
                            ? "bg-red-600"
                            : "bg-transparent"
                        }`}
                      >
                        <skill.icon size={20} className="text-neutral-200" />
                        <span className="text-sm text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  className="bg-red-700 px-4 py-2 text-neutral-200 hover:bg-red-700"
                  onClick={toggleFilter}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
