"use client";

import Head from "next/head";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

export default function Project() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    { name: "NEXT JS", id: "NEXT JS", imgSrc: "/icon/nextjs.png" },
    { name: "FIREBASE", id: "FIREBASE", imgSrc: "/icon/firebase.png" },
    {
      name: "TAILWIND CSS",
      id: "TAILWIND CSS",
      imgSrc: "/icon/tailwindcss.png",
    },
    {
      name: "DAISY UI",
      id: "DAISY UI",
      imgSrc: "/icon/daisyui.png",
    },
    { name: "NUXT JS", id: "NUXT JS", imgSrc: "/icon/nuxtjs.png" },
    { name: "VERCEL", id: "VERCEL", imgSrc: "/icon/vercel.png" },
    { name: "SUPABASE", id: "SUPABASE", imgSrc: "/icon/supabase.png" },
    { name: "WORDPRESS", id: "WORDPRESS", imgSrc: "/icon/wordpress.png" },
    { name: "WOOCOMMERCE", id: "WOOCOMMERCE", imgSrc: "/icon/woocommerce.png" },
  ];

  const items = [
    {
      href: "https://nooobtimex.me/",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/project_banner%2FPorfolio.png?alt=media&token=031b0177-b71d-47f0-aabe-dcfa01677a15",
      name: "Porfolio",
      skills: ["NEXT JS", "FIREBASE", "TAILWIND CSS", "DAISY UI"],
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
    <div className="bg-base-200 py-8">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/projects" />
      </Head>
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-center text-4xl font-bold text-primary mb-8">
          PROJECTS
        </h1>
        {/* Filter Button */}
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 aspect-square rounded-full w-full max-h-10 max-w-52 bg-primary text-white p-4 shadow-lg hover:bg-primary-focus focus:ring-4 focus:ring-primary/50 z-50 flex items-center justify-center transition-all duration-200"
          onClick={toggleFilter}
          aria-label="Toggle Filter"
        >
          <IoFilterSharp size="1.5em" className="pointer-events-none" />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <figure>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full rounded-2xl object-cover"
                  />
                </a>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{item.name}</h2>
                <p className="text-sm text-neutral-content">
                  {item.skills.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Filter Modal */}
        {isFilterOpen && (
          <div className="modal modal-open">
            <div className="modal-box bg-base-100 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                FILTER
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => handleSkillChange(skill.id)}
                    className={`badge badge-lg cursor-pointer py-4 px-3 ${
                      selectedSkills.includes(skill.id)
                        ? "badge-primary"
                        : "badge-outline"
                    }`}
                  >
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      className="h-5 w-5 mr-2"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="modal-action">
                <button className="btn btn- w-full" onClick={toggleFilter}>
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
