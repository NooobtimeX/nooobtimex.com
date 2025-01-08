import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-base-200 text-base-content">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold md:text-6xl">
            <span className="text-primary">WEB DEV Portfolio</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Passionate about turning ideas into seamless digital experiences. I
            specialize in modern web development with frameworks like{" "}
            <span className="text-primary">NEXT JS</span>.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/projects">
              <button className="btn btn-primary px-6 py-3 font-medium">
                VIEW PROJECTS
              </button>
            </Link>
            <Link href="/skills">
              <button className="btn btn-secondary px-6 py-3 font-medium">
                VIEW SKILLS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
