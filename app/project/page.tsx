"use client";

import { useState } from "react";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCoWorkers, setSelectedCoWorkers] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const coWorkers = [
    {
      name: "NooobtimeX",
      id: "NooobtimeX",
      link: "https://github.com/NooobtimeX",
      imgSrc: "/people/NooobtimeX.webp",
    },
    {
      name: "Tateung",
      id: "Tateung",
      link: "https://github.com/Tateung",
      imgSrc: "/people/Tateung.webp",
    },
    {
      name: "RUAMSUK PLATING Team",
      id: "RUAMSUK PLATING Team",
      link: "https://www.rs-trophy.com",
      imgSrc: "/people/rs trophy.webp",
    },
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
  ];

  const items = [
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/Porfolio.png",
      name: "Porfolio",
      team: coWorkers.filter((cw) => ["NooobtimeX"].includes(cw.id)),
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRCODE.png",
      name: "QR FOOD",
      team: coWorkers.filter((cw) => ["NooobtimeX", "Tateung"].includes(cw.id)),
      skills: ["NUXT JS", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/combomaker.png",
      name: "combomaker.net",
      team: coWorkers.filter((cw) => ["NooobtimeX"].includes(cw.id)),
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/hoyosmash.png",
      name: "hoyosmash.com",
      team: coWorkers.filter((cw) => ["NooobtimeX"].includes(cw.id)),
      skills: ["NEXT JS", "Firebase", "Tailwind CSS"],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/rstrophy.png",
      name: "rs-trophy.com",
      team: coWorkers.filter((cw) =>
        ["NooobtimeX", "RUAMSUK PLATING Team"].includes(cw.id),
      ),
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc: "/project/rsmedal.png",
      name: "rs-medal.com",
      team: coWorkers.filter((cw) =>
        ["NooobtimeX", "RUAMSUK PLATING Team"].includes(cw.id),
      ),
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc: "/project/rsaward.png",
      name: "rs-award.com",
      team: coWorkers.filter((cw) =>
        ["NooobtimeX", "RUAMSUK PLATING Team"].includes(cw.id),
      ),
      skills: ["WordPress", "WooCommerce"],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc: "/project/rsribbon.png",
      name: "rs-ribbon.com",
      team: coWorkers.filter((cw) =>
        ["NooobtimeX", "RUAMSUK PLATING Team"].includes(cw.id),
      ),
      skills: ["WordPress", "WooCommerce"],
    },
  ];

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

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
    <div className="rounded-lg bg-gray-900 p-4 text-white" id="project">
      <h2 className="mb-4 text-center text-4xl font-bold text-indigo-400">
        Projects
      </h2>
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
            className="w-full max-w-sm transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
          >
            <div className="relative">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-48 w-full rounded-t-xl object-cover"
                />
              </a>
              <div className="absolute bottom-1 right-1 text-sm text-white">
                <div className="flex items-center justify-center space-x-1">
                  {item.team.map((coWorker) => (
                    <a
                      href={coWorker.link}
                      key={coWorker.id}
                      title={coWorker.name}
                      className="inline-block rounded bg-gray-900 bg-opacity-75 p-1"
                    >
                      <img
                        src={coWorker.imgSrc}
                        alt={coWorker.name}
                        title={coWorker.name}
                        className="h-8 w-8 rounded-full border border-indigo-400"
                      />
                    </a>
                  ))}
                </div>
              </div>
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
