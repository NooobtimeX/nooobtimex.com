import Image from "next/image";

export default function Project() {
  const items = [
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
    <div className="m-4">
      <h2 className="mb-6 text-center text-3xl font-bold" id="project">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="w-full transform overflow-hidden rounded-xl shadow-lg shadow-gray-800 transition-transform hover:scale-105 md:w-1/2 xl:w-1/4"
          >
            <div className="relative max-h-48">
              <a href={item.href}>
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-full w-full rounded-xl object-cover"
                  width={300}
                  height={200}
                />
              </a>
            </div>
            <div className="p-2">
              <h3 className="text-center text-lg font-semibold text-white">
                {item.name}
              </h3>
              <h4 className="text-md mb-1 text-center font-semibold">
                Co-workers
              </h4>
              <div className="mb-1 flex items-center justify-center">
                {item.team.map((coWorker) => (
                  <span key={coWorker.name} className="mx-1 inline-block">
                    <a href={coWorker.link}>
                      <Image
                        src={coWorker.imgSrc}
                        alt={coWorker.name}
                        className="max-h-8 max-w-8 rounded-full border-2 border-green-500 shadow"
                        title={coWorker.name}
                        width={32}
                        height={32}
                      />
                    </a>
                  </span>
                ))}
              </div>
              <h4 className="text-md mb-1 text-center font-semibold">Skills</h4>
              <div className="text-center text-sm text-gray-600">
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
