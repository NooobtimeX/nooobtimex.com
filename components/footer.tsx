const contents = [
  { name: "SKILLS", url: "/skills" },
  { name: "PROJECTS", url: "/projects" },
  { name: "CONTACT", url: "/contact" },
  { name: "POSTS", url: "/posts" },
];

const clientprojects = [
  { name: "RS TROPHY", url: "https://www.rs-trophy.com/" },
  { name: "RS MEDAL", url: "https://www.rs-medal.com/" },
  { name: "RS AWARD", url: "https://www.rs-award.com/" },
  { name: "RS RIBBON", url: "https://www.rs-ribbon.com/" },
];
const personalprojects = [
  { name: "QR FOOD", url: "https://github.com/NooobtimeX/QR-Food" },
  { name: "Combo Maker", url: "https://combomaker.net/" },
  { name: "HoyoSmash", url: "https://hoyosmash.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-base-200 py-12 text-base-content">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="/favicon.ico"
                alt="NooobtimeX"
                width="36"
                height="36"
                className="rounded-full"
              />
              <span className="text-lg font-bold text-primary">NooobtimeX</span>
            </div>
            <p className="mt-4 text-sm">
              Passionate about turning ideas into seamless digital experiences.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/xnooobtime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f h-5 w-5"></i>
              </a>
              <a href="#" className="text-base-content hover:text-primary">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram h-5 w-5"></i>
              </a>
            </div>
          </div>
          {/* Content Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              CONTENT
            </h3>
            <ul className="mt-4 space-y-2">
              {contents.map((content, index) => (
                <li key={index}>
                  <a
                    href={content.url}
                    className="text-base-content hover:text-primary"
                  >
                    {content.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              CLIENT WORK
            </h3>
            <ul className="mt-4 space-y-2">
              {clientprojects.map((clientproject, index) => (
                <li key={index}>
                  <a
                    href={clientproject.url}
                    className="text-base-content hover:text-primary"
                  >
                    {clientproject.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Highlight Projects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              PERSONAL WORK
            </h3>
            <ul className="mt-4 space-y-2">
              {personalprojects.map((personalproject, index) => (
                <li key={index}>
                  <a
                    href={personalproject.url}
                    className="text-base-content hover:text-primary"
                  >
                    {personalproject.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-base-300 pt-8">
          <p className="text-center text-sm">
            © 2025 NooobtimeX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
