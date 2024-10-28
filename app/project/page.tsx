import Image from "next/image";

export default function Project() {
  const items = [
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
      skills: ["Next JS", "Vercel", "Tailwind CSS"],
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
      skills: ["Next JS", "Vercel", "Tailwind CSS"],
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
  ];

  return (
    <div className="m-4 rounded-lg bg-gray-900 p-8 text-white" id="project">
      <h2 className="mb-10 text-center text-4xl font-bold text-indigo-400">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="w-full max-w-sm transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-1/3 xl:w-1/4"
          >
            <div className="relative">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-48 w-full rounded-t-xl object-cover"
                  width={300}
                  height={200}
                />
              </a>
            </div>
            <div className="p-2">
              <h3 className="mb-2 text-center text-2xl font-semibold text-indigo-300">
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
                    <Image
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
    </div>
  );
}
