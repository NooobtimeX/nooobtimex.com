"use client";

import { useState } from "react";

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
      imgSrc: "/project/Porfolio.png",
      name: "Porfolio",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRCODE.png",
      name: "QR FOOD",
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/combomaker.png",
      name: "combomaker.net",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/hoyosmash.png",
      name: "hoyosmash.com",
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/rstrophy.png",
      name: "rs-trophy.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc: "/project/rsmedal.png",
      name: "rs-medal.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc: "/project/rsaward.png",
      name: "rs-award.com",
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc: "/project/rsribbon.png",
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
    <div className="rounded-lg bg-gray-900 p-4 text-white" id="project">
      <h1 className="mb-2 text-center text-4xl font-bold text-indigo-400 md:mb-10">
        Projects
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={toggleFilter}
          className="-mt-8 mb-4 hidden aspect-square rounded-full bg-indigo-600 p-2 hover:bg-indigo-700 md:inline-block"
        >
          <img src="/icon/filter.png" alt="Filter" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
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
              <h3 className="text-center text-2xl font-semibold text-indigo-300">
                {item.name}
              </h3>
              <div className="text-center text-sm text-gray-400">
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleFilter}
        className="fixed bottom-4 right-4 aspect-square rounded-full bg-indigo-600 p-2 hover:bg-indigo-700 md:hidden"
      >
        <img src="/icon/filter.png" alt="Filter" />
      </button>

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-gray-900 p-6">
            <h3 className="mb-4 text-center text-2xl text-indigo-400">
              Filter Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-indigo-300">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <label
                      key={skill.id}
                      className="inline-flex items-center text-sm text-gray-400"
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
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                onClick={toggleFilter}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
