"use client";

import { useState } from "react";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCoWorkers, setSelectedCoWorkers] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const coWorkers = [
    { name: "NooobtimeX", id: "NooobtimeX" },
    { name: "Tateung", id: "Tateung" },
    { name: "RUAMSUK PLATING Team", id: "RUAMSUK PLATING Team" },
    // Add more co-workers as necessary
  ];

  const skills = [
    { name: "NEXT JS", id: "NEXT JS" },
    { name: "Firebase", id: "Firebase" },
    { name: "Tailwind CSS", id: "Tailwind CSS" },
    { name: "NUXT JS", id: "NUXT JS" },
    { name: "Vercel", id: "Vercel" },
    { name: "Supabase", id: "Supabase" },
    { name: "WordPress", id: "WordPress" },
    { name: "WooCommerce", id: "WooCommerce" },
    { name: "SEO", id: "SEO" },
    // Add more skills as necessary
  ];
  const items = [
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/Porfolio.png",
      name: "Porfolio",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
      ],
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRCODE.png",
      name: "QR FOOD",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "Tateung",
          link: "https://github.com/Tateung",
          imgSrc: "/people/Tateung.webp",
        },
      ],
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/combomaker.png",
      name: "combomaker.net",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
      ],
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/hoyosmash.png",
      name: "hoyosmash.com",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
      ],
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/rstrophy.png",
      name: "rs-trophy.com",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["WordPress", "WooCommerce", "SEO"],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc: "/project/rsmedal.png",
      name: "rs-medal.com",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["WordPress", "WooCommerce", "SEO"],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc: "/project/rstrophy.png",
      name: "rs-award.com",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["WordPress", "WooCommerce", "SEO"],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc: "/project/rsribbon.png",
      name: "rs-ribbon.com",
      team: [
        {
          name: "NooobtimeX",
          link: "https://github.com/NooobtimeX",
          imgSrc: "/people/NooobtimeX.webp",
        },
        {
          name: "RUAMSUK PLATING Team",
          link: "https://www.rs-trophy.com",
          imgSrc: "/people/rs trophy.webp",
        },
      ],
      skills: ["WordPress", "WooCommerce", "SEO"],
    },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCoWorkerChange = (id: string) => {
    setSelectedCoWorkers((prev) =>
      prev.includes(id)
        ? prev.filter((worker) => worker !== id)
        : [...prev, id],
    );
  };

  const handleSkillChange = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skill) => skill !== id) : [...prev, id],
    );
  };

  // Filter items based on selected co-workers and skills
  const filteredItems = items.filter((item) => {
    const coWorkersMatch =
      selectedCoWorkers.length === 0 ||
      item.team.some((coWorker) => selectedCoWorkers.includes(coWorker.name));

    const skillsMatch =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => item.skills.includes(skill));

    return coWorkersMatch && skillsMatch;
  });
  return (
    <div className="m-4 rounded-lg bg-gray-900 p-8 text-white" id="project">
      <h2 className="mb-10 text-center text-4xl font-bold text-indigo-400">
        Projects
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={toggleFilter}
          className="-mt-8 mb-4 hidden aspect-square rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-700 md:inline-block"
        >
          <img src="/icon/filter.png" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="w-full max-w-sm transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
          >
            <div className="relative">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-48 w-full rounded-t-xl object-cover"
                  width={300}
                  height={200}
                />
              </a>
            </div>
            <div className="p-2">
              <h3 className="text-center text-2xl font-semibold text-indigo-300">
                {item.name}
              </h3>
              <h4 className="text-md text-center font-semibold text-indigo-200">
                Co-workers
              </h4>
              <div className="flex items-center justify-center space-x-3">
                {item.team.map((coWorker) => (
                  <a
                    href={coWorker.link}
                    key={coWorker.name}
                    title={coWorker.name}
                    className="inline-block"
                  >
                    <img
                      src={coWorker.imgSrc}
                      alt={coWorker.name}
                      className="h-8 w-8 rounded-full border border-indigo-400"
                      width={40}
                      height={40}
                    />
                  </a>
                ))}
              </div>
              <h4 className="text-md text-center font-semibold text-indigo-200">
                Skills
              </h4>
              <div className="mt-1 text-center text-sm text-gray-400">
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleFilter}
        className="fixed bottom-4 right-4 aspect-square rounded-full bg-indigo-600 p-2 text-white shadow-lg hover:bg-indigo-700 md:hidden"
      >
        <img src="/icon/filter.png" />
      </button>

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-gray-900 p-6">
            <h3 className="mb-4 text-center text-2xl text-indigo-400">
              Filter Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-indigo-300">Co-workers</h4>
                <div className="flex flex-wrap gap-2">
                  {coWorkers.map((worker) => (
                    <label
                      key={worker.id}
                      className="inline-flex items-center text-sm text-gray-400"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedCoWorkers.includes(worker.id)}
                        onChange={() => handleCoWorkerChange(worker.id)}
                      />
                      {worker.name}
                    </label>
                  ))}
                </div>
              </div>
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
              <div className="mt-4 text-center">
                <button
                  onClick={toggleFilter}
                  className="rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
