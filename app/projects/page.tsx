"use client";

import { useState } from "react";
import Head from "next/head";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    { name: "NEXT JS", id: "NEXT JS" },
    { name: "Firebase", id: "Firebase" },
    { name: "Tailwind CSS", id: "Tailwind CSS" },
    { name: "NUXT JS", id: "NUXT JS" },
    { name: "Vercel", id: "Vercel" },
    { name: "Supabase", id: "Supabase" },
    { name: "WordPress", id: "WordPress" },
    { name: "WooCommerce", id: "WooCommerce" },
  ];

  const items = [
    {
      href: "https://nooobtimex.me/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FPorfolio.png?alt=media&token=031b0177-b71d-47f0-aabe-dcfa01677a15",
      name: "Porfolio",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FQRCODE.png?alt=media&token=916e4c43-724e-4e30-86c0-155ee8093da5",
      name: "QR FOOD",
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fcombomaker.png?alt=media&token=eb2c155a-5f69-4d92-9e2a-a84fa8f5af13",
      name: "combomaker.net",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Fhoyosmash.png?alt=media&token=b38f2ff5-c441-4e3b-866a-a4ab32b6b903",
      name: "hoyosmash.com",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frstrophy.png?alt=media&token=c84a6e24-f81f-4eb1-bd96-733b64f1a28f",
      name: "rs-trophy.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsmedal.png?alt=media&token=7b8e1c63-2948-432a-b6fa-0d650a992b07",
      name: "rs-medal.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsaward.png?alt=media&token=1c5aa005-14b1-4462-8d06-f7faa909dd45",
      name: "rs-award.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2Frsribbon.png?alt=media&token=5e654a8a-534e-4d12-8b84-12fe4f9a4b32",
      name: "rs-ribbon.com",
      skills: ["WordPress", "WooCommerce"],
    },
  ];

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  const handleSkillChange = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skill) => skill !== id) : [...prev, id],
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
      <div className="rounded-lg bg-neutral-900 p-4 text-white" id="project">
        <h1 className="mb-2 text-center text-4xl font-bold text-red-600 md:mb-10">
          Projects
        </h1>
        <div className="flex items-center justify-center">
          <button
            onClick={toggleFilter}
            className="-mt-8 mb-4 hidden aspect-square rounded-full bg-red-700 p-2 hover:bg-red-700 md:inline-block"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/icon%2Ffilter.png?alt=media&token=daac11a2-de56-46c7-aafe-5ca7260aa0a6"
              alt="Filter"
            />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-md transform overflow-hidden rounded-xl bg-neutral-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
            >
              <div className="relative">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-48 w-full rounded-t-xl object-cover"
                  />
                </a>
              </div>
              <div className="p-2">
                <h2 className="text-center text-2xl font-semibold text-red-500">
                  {item.name}
                </h2>
                <div className="text-center text-sm text-neutral-400">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800 bg-opacity-50">
            <div className="w-96 rounded-lg bg-neutral-900 p-6">
              <label className="mb-4 text-center text-2xl text-red-600">
                Filter Projects
              </label>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg text-red-500">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <label
                        key={skill.id}
                        className="inline-flex items-center text-sm text-neutral-400"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedSkills.includes(skill.id)}
                          onChange={() => handleSkillChange(skill.id)}
                        />
                        {skill.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  className="rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-700"
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
