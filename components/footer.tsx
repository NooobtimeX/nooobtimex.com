const contacts = [
  { name: "nooobtimex@gmail.com", url: "mailto:nooobtimex@gmail.com" },
  {
    name: "https://www.facebook.com/xnooobtime",
    url: "https://www.facebook.com/xnooobtime",
  },
];

const contents = [
  { name: "SKILLS", url: "/skills" },
  { name: "PROJECTS", url: "/projects" },
  { name: "CONTACT", url: "/contact" },
  { name: "POSTS", url: "/posts" },
];

const projects = [
  { name: "QR FOOD", url: "https://github.com/NooobtimeX/QR-Food" },
  { name: "Combo Maker", url: "https://combomaker.net/" },
  { name: "HoyoSmash", url: "https://hoyosmash.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Mission */}
          <div>
            <div className="flex items-center space-x-2">
              {/* Logo Placeholder */}
              <img
                src="/favicon.ico"
                alt="HoYoSmash"
                width="36"
                height="36"
                className="rounded-full"
              />
              <span className="text-lg font-bold text-red-600">NooobtimeX</span>
            </div>
            <p className="mt-4 text-sm">
              Passionate about turning ideas into seamless digital experiences.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-neutral-200 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Facebook Icon */}
                </svg>
              </a>
              <a href="#" className="text-neutral-200 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Instagram Icon */}
                </svg>
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
              CONTENT
            </h3>
            <ul className="mt-4 space-y-2">
              {contents.map((content, index) => (
                <li key={index}>
                  <a
                    href={content.url}
                    className="text-neutral-200 hover:text-red-500"
                  >
                    {content.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-2">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.url}
                    className="text-neutral-200 hover:text-red-500"
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
              HIGHTLIGHT PROJECT
            </h3>
            <ul className="mt-4 space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.url}
                    className="text-neutral-200 hover:text-red-500"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8">
          <p className="text-center text-sm text-neutral-200">
            © 2025 NooobtimeX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
