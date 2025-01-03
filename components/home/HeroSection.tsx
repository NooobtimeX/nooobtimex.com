import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-6 text-white">
      <h1 className="text-center text-4xl font-bold md:text-6xl">
        <span className="text-red-600">WEB DEV Portfolio </span>
      </h1>
      <p className="mt-4 max-w-2xl text-center text-lg md:text-xl">
        Passionate about turning ideas into seamless digital experiences. I
        specialize in modern web development with frameworks like{" "}
        <span className="text-red-500">NEXT JS</span>.
      </p>
      <div className="mt-8 flex space-x-4">
        <Link href="/projects">
          <button className="bg-red-500 px-6 py-3 font-medium shadow-md transition hover:bg-red-600">
            VIEW PROJECTS
          </button>
        </Link>
        <Link href="/skills">
          <button className="bg-neutral-600 px-6 py-3 font-medium shadow-md transition hover:bg-neutral-700">
            VIEW SKILLS
          </button>
        </Link>
      </div>
    </div>
  );
}
